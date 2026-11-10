/**
 * Traffy Fondue Bot Studio — Visual State Machine Graph
 * Interactive SVG/HTML Canvas, Bezier Transitions, Pan/Zoom & Duplicate Detector
 */

class StateFlowGraph {
  constructor(containerId, options = {}) {
    this.wrapper = document.getElementById(containerId);
    this.svg = document.getElementById('graph-svg');
    this.nodesContainer = document.getElementById('graph-nodes-container');
    this.onSelectNode = options.onSelectNode || (() => {});
    
    this.states = [];
    this.nodePositions = new Map(); // stateID -> { x, y }
    this.zoom = 1;
    this.panX = 60;
    this.panY = 60;
    this.isPanning = false;
    this.startPan = { x: 0, y: 0 };
    this.selectedNodeId = null;

    this.initEvents();
  }

  initEvents() {
    if (!this.wrapper) return;

    // Pan Canvas
    this.wrapper.addEventListener('mousedown', (e) => {
      if (e.target.closest('.state-node') || e.target.closest('.graph-toolbar')) return;
      this.isPanning = true;
      this.wrapper.classList.add('panning');
      this.startPan = { x: e.clientX - this.panX, y: e.clientY - this.panY };
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isPanning) return;
      this.panX = e.clientX - this.startPan.x;
      this.panY = e.clientY - this.startPan.y;
      this.updateTransform();
    });

    window.addEventListener('mouseup', () => {
      this.isPanning = false;
      this.wrapper.classList.remove('panning');
    });

    // Zoom on Wheel
    this.wrapper.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomFactor = 1.1;
      const oldZoom = this.zoom;
      if (e.deltaY < 0) {
        this.zoom = Math.min(this.zoom * zoomFactor, 2.5);
      } else {
        this.zoom = Math.max(this.zoom / zoomFactor, 0.4);
      }
      this.updateTransform();
    }, { passive: false });
  }

  updateTransform() {
    if (!this.nodesContainer) return;
    this.nodesContainer.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${this.zoom})`;
    this.renderEdges();
  }

  render(states, currentBot) {
    this.states = states || [];
    this.currentBot = currentBot;
    this.calculatePositions();
    this.renderNodes();
    this.renderEdges();
    this.updateStatsChip();
  }

  // Detect duplicate state rows (Incident prevention)
  findDuplicateStates() {
    const seen = new Map();
    const duplicates = new Set();

    this.states.forEach(state => {
      const key = `${state.botID}|${state.orgID}|${state.stateName}|${state.eventType}|${state.eventMessageType || ''}|${state.postbackData || ''}`;
      if (seen.has(key)) {
        duplicates.add(state.stateID);
        duplicates.add(seen.get(key));
      } else {
        seen.set(key, state.stateID);
      }
    });

    return duplicates;
  }

  calculatePositions() {
    // Intelligent auto-layout: arrange states in hierarchical topological columns
    const columns = new Map(); // colIndex -> [states]
    const stateMap = new Map(this.states.map(s => [s.stateName, s]));

    // Identify entry states or root
    const visited = new Set();
    let currentLevel = [];

    // Find nodes with no incoming transitions or named 'standby' / 'welcome'
    const targetStateNames = new Set(this.states.map(s => s.nextStateName).filter(Boolean));
    const entryCandidates = this.states.filter(s => 
      !targetStateNames.has(s.stateName) || 
      s.stateName.includes('standby') || 
      s.stateName.includes('welcome')
    );

    if (entryCandidates.length > 0) {
      currentLevel = entryCandidates;
    } else {
      currentLevel = [this.states[0]];
    }

    let col = 0;
    while (currentLevel.length > 0 && col < 15) {
      columns.set(col, []);
      const nextLevel = [];

      currentLevel.forEach(state => {
        if (!visited.has(state.stateID)) {
          visited.add(state.stateID);
          columns.get(col).push(state);

          if (state.nextStateName && stateMap.has(state.nextStateName)) {
            const next = stateMap.get(state.nextStateName);
            if (!visited.has(next.stateID)) {
              nextLevel.push(next);
            }
          }
        }
      });

      // Avoid infinite loop on cycles
      currentLevel = nextLevel;
      col++;
    }

    // Assign any remaining unplaced states
    this.states.forEach(s => {
      if (!visited.has(s.stateID)) {
        if (!columns.has(col)) columns.set(col, []);
        columns.get(col).push(s);
        visited.add(s.stateID);
      }
    });

    // Compute pixel coordinates
    const COL_WIDTH = 340;
    const ROW_HEIGHT = 160;

    columns.forEach((statesInCol, colIdx) => {
      statesInCol.forEach((state, rowIdx) => {
        this.nodePositions.set(state.stateID, {
          x: colIdx * COL_WIDTH + 80,
          y: rowIdx * ROW_HEIGHT + 80
        });
      });
    });
  }

  renderNodes() {
    if (!this.nodesContainer) return;
    this.nodesContainer.innerHTML = '';
    const duplicates = this.findDuplicateStates();

    this.states.forEach(state => {
      const pos = this.nodePositions.get(state.stateID) || { x: 80, y: 80 };
      const isDuplicate = duplicates.has(state.stateID);
      const isInactive = state.is_active === false;
      const isEntry = Boolean(
        (this.currentBot && this.currentBot.entry_state === state.stateName) ||
        state.stateName.includes('standby') ||
        state.stateName.includes('welcome')
      );

      const nodeEl = document.createElement('div');
      nodeEl.className = `state-node ${isDuplicate ? 'duplicate-warning' : ''} ${isEntry ? 'entry-node' : ''} ${isInactive ? 'inactive-node' : ''} ${this.selectedNodeId === state.stateID ? 'selected' : ''}`;
      nodeEl.style.left = `${pos.x}px`;
      nodeEl.style.top = `${pos.y}px`;
      nodeEl.dataset.stateId = state.stateID;

      const triggerText = state.eventType === 'message'
        ? `💬 ${state.eventMessageType || 'text'}`
        : `⚡ postback: ${state.postbackData || 'all'}`;

      nodeEl.innerHTML = `
        <div class="state-node-header">
          <span class="state-node-id">#${state.stateID}</span>
          ${isDuplicate ? '<span class="badge badge-warning"> แถวซ้ำ</span>' : ''}
          ${isInactive ? '<span class="badge" style="background:rgba(255,255,255,0.08); color:var(--text-muted);">Disabled</span>' : ''}
          ${isEntry && !isInactive ? '<span class="badge badge-cyan">Entry</span>' : ''}
        </div>
        <div class="state-node-name">${state.stateName}</div>
        <div class="state-node-trigger">${triggerText}</div>
        <div class="state-node-footer">
          <span>Action: <strong class="action-badge-pill">${state.actionListID}</strong></span>
          <span>Next ➔ <strong>${state.nextStateName || 'end'}</strong></span>
        </div>
      `;

      // Node Dragging
      let isDraggingNode = false;
      let startX, startY;

      nodeEl.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        this.selectedNodeId = state.stateID;
        this.nodesContainer.querySelectorAll('.state-node').forEach(n => n.classList.remove('selected'));
        nodeEl.classList.add('selected');
        this.onSelectNode(state);

        isDraggingNode = true;
        startX = e.clientX - pos.x * this.zoom;
        startY = e.clientY - pos.y * this.zoom;

        const onMouseMove = (moveEvent) => {
          if (!isDraggingNode) return;
          pos.x = (moveEvent.clientX - startX) / this.zoom;
          pos.y = (moveEvent.clientY - startY) / this.zoom;
          nodeEl.style.left = `${pos.x}px`;
          nodeEl.style.top = `${pos.y}px`;
          this.renderEdges();
        };

        const onMouseUp = () => {
          isDraggingNode = false;
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      });

      this.nodesContainer.appendChild(nodeEl);
    });
  }

  renderEdges() {
    if (!this.svg) return;
    this.svg.innerHTML = `
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
        </marker>
        <marker id="arrow-warn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
        </marker>
      </defs>
    `;

    const NODE_WIDTH = 240;
    const NODE_HEIGHT = 110;
    const duplicates = this.findDuplicateStates();

    this.states.forEach(state => {
      if (!state.nextStateName) return;

      const sourcePos = this.nodePositions.get(state.stateID);
      // Find target state(s)
      const targetStates = this.states.filter(s => s.stateName === state.nextStateName);

      targetStates.forEach(targetState => {
        const targetPos = this.nodePositions.get(targetState.stateID);
        if (!sourcePos || !targetPos) return;

        // Screen-space coordinates with pan and zoom
        const x1 = (sourcePos.x + NODE_WIDTH) * this.zoom + this.panX;
        const y1 = (sourcePos.y + NODE_HEIGHT / 2) * this.zoom + this.panY;
        const x2 = targetPos.x * this.zoom + this.panX;
        const y2 = (targetPos.y + NODE_HEIGHT / 2) * this.zoom + this.panY;

        // Bezier curve calculation
        const dx = Math.abs(x2 - x1) * 0.5;
        const pathData = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;

        const isDuplicate = duplicates.has(state.stateID);
        const isActive = this.selectedNodeId === state.stateID || this.selectedNodeId === targetState.stateID;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('class', `graph-edge ${isDuplicate ? 'duplicate-edge' : ''} ${isActive ? 'active' : ''}`);
        path.setAttribute('marker-end', isDuplicate ? 'url(#arrow-warn)' : 'url(#arrow)');

        this.svg.appendChild(path);
      });
    });
  }

  zoomIn() {
    this.zoom = Math.min(this.zoom * 1.25, 2.5);
    this.updateTransform();
  }

  zoomOut() {
    this.zoom = Math.max(this.zoom / 1.25, 0.4);
    this.updateTransform();
  }

  fitToScreen() {
    this.zoom = 0.85;
    this.panX = 60;
    this.panY = 60;
    this.updateTransform();
  }

  autoLayout() {
    this.calculatePositions();
    this.renderNodes();
    this.renderEdges();
  }

  updateStatsChip() {
    const chip = document.getElementById('graph-stats-chip');
    if (!chip) return;
    const duplicates = this.findDuplicateStates();
    chip.innerHTML = `
      <span> ${this.states.length} States</span>
      ${duplicates.size > 0 ? `<span class="badge badge-warning" style="margin-left:6px;"> ${duplicates.size} ซ้ำ</span>` : ''}
    `;
  }
}

window.StateFlowGraph = StateFlowGraph;
