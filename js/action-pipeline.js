/**
 * Traffy Fondue Bot Studio — Action Pipeline & Flex Message Guard
 * Manages action sequences, drag/reorder, payload formatting, and the 48KB LINE Ceiling
 */

class ActionPipelineManager {
  constructor() {
    this.currentActionList = [];
    this.currentActionId = null;
    this.LINE_FLEX_CEILING_BYTES = 48000; // guardFlexCarouselSize threshold
  }

  // Calculate UTF-8 byte size accurately for LINE API Limits
  calculateByteLength(val) {
    if (!val) return 0;
    const str = typeof val === 'object' ? JSON.stringify(val) : String(val);
    return new TextEncoder().encode(str).length;
  }

  renderPipeline(actionId, actions, containerId) {
    this.currentActionId = actionId;
    this.currentActionList = actions || [];
    const container = document.getElementById(containerId);
    if (!container) return;

    if (this.currentActionList.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px; color: var(--text-muted);">
          <div style="font-size: 36px; margin-bottom: 8px;"></div>
          <p>ยังไม่มี Action ใน Action List ID: <strong>${actionId}</strong></p>
          <button class="btn btn-outline-green btn-sm" style="margin-top: 12px;" onclick="window.app.showNewActionModal(${actionId})">+ เพิ่ม Action แรก</button>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-size: 13px; color: var(--text-muted);">
          ลำดับขั้นตอนใน Action List: <strong style="color: var(--traffy-green);">${actionId}</strong> (${this.currentActionList.length} ขั้นตอน)
        </span>
        <button class="btn btn-primary btn-sm" onclick="window.app.showNewActionModal(${actionId})">+ เพิ่มขั้นตอน</button>
      </div>
      <div class="action-steps-list" style="display: flex; flex-direction: column; gap: 12px;"></div>
    `;

    const listEl = container.querySelector('.action-steps-list');

    this.currentActionList.forEach((act, idx) => {
      const stepCard = document.createElement('div');
      stepCard.className = 'card action-step-card';
      stepCard.style.padding = '16px';
      stepCard.style.borderLeft = `4px solid ${this.getActionTypeColor(act.actionType)}`;

      const byteCount = this.calculateByteLength(act.flexPayload || act.payload || '');
      const isOverCeiling = byteCount > this.LINE_FLEX_CEILING_BYTES;

      stepCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="badge" style="background: var(--bg-surface-elevated); font-family: monospace;">#${idx + 1}</span>
            <span class="badge ${this.getActionTypeBadgeClass(act.actionType)}">${act.actionType}</span>
            ${isOverCeiling ? '<span class="badge badge-danger"> เกินเพดาน LINE 48KB</span>' : ''}
          </div>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-secondary btn-sm" title="ย้ายขึ้น" onclick="window.actionPipeline.moveStep(${idx}, -1)" ${idx === 0 ? 'disabled' : ''}>▲</button>
            <button class="btn btn-secondary btn-sm" title="ย้ายลง" onclick="window.actionPipeline.moveStep(${idx}, 1)" ${idx === this.currentActionList.length - 1 ? 'disabled' : ''}>▼</button>
            <button class="btn btn-secondary btn-sm" onclick="window.app.editAction(${act.actionID})">✏️ แก้ไข</button>
            <button class="btn btn-danger btn-sm" onclick="window.actionPipeline.deleteStep(${act.actionID})">🗑️</button>
          </div>
        </div>

        <div style="margin-top: 8px;">
          ${this.renderActionPreview(act)}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; font-size: 11px; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 8px;">
          <span>Notification: <strong>${act.notification_disabled ? '🔕 ปิดแจ้งเตือน' : ' เปิดเสียงปกติ'}</strong></span>
          <span>Payload Size: <strong style="${isOverCeiling ? 'color: var(--danger);' : ''}">${byteCount.toLocaleString()} bytes</strong> / 48,000 bytes</span>
        </div>
      `;

      listEl.appendChild(stepCard);
    });
  }

  getActionTypeColor(type) {
    switch (type) {
      case 'replyBackToUser':
      case 'text': return '#10b981';
      case 'flexPayload': return '#06b6d4';
      case 'carousel-chunked': return '#8b5cf6';
      case 'api-call':
      case 'calling': return '#f59e0b';
      case 'clearRedis': return '#6366f1';
      case 'switch':
      case 'switch-v2': return '#ec4899';
      default: return '#64748b';
    }
  }

  getActionTypeBadgeClass(type) {
    switch (type) {
      case 'replyBackToUser':
      case 'text': return 'badge-green';
      case 'flexPayload': return 'badge-cyan';
      case 'carousel-chunked': return 'badge-purple';
      case 'api-call':
      case 'calling': return 'badge-warning';
      case 'clearRedis': return 'badge-purple';
      default: return 'badge';
    }
  }

  renderActionPreview(act) {
    if (act.actionType === 'replyBackToUser' || act.actionType === 'text') {
      let textContent = act.payload || '';
      let quickReplyBadge = '';
      if (act.quickReplyPayload) {
        quickReplyBadge = `<div style="margin-top: 6px;"><span class="badge badge-cyan" style="font-size:10.5px;">🔘 มี Quick Reply Buttons</span></div>`;
      }
      return `
        <div style="background: rgba(0,0,0,0.2); padding: 10px 14px; border-radius: var(--radius-sm); font-size: 12.5px; white-space: pre-wrap; color: var(--text-primary);">
          ${this.escapeHtml(textContent)}
          ${quickReplyBadge}
        </div>
      `;
    }

    if (act.actionType === 'api-call' || act.actionType === 'calling') {
      let displayUrl = act.payload || '';
      let funcTitle = '🌐 Calling';
      try {
        const parsed = JSON.parse(act.payload);
        if (parsed.function_name) {
          funcTitle = `⚡ Function: ${parsed.function_name}`;
          displayUrl = parsed.api_url ? `API: ${parsed.api_url}` : `Dest: ${parsed.destination_type || 'internal'}`;
        }
      } catch (e) {}

      return `
        <div style="background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: var(--radius-sm); font-size: 12px; color: #38bdf8;">
          <div style="font-weight:700; margin-bottom:4px;">${this.escapeHtml(funcTitle)}</div>
          <div style="font-family:monospace; font-size:11px; color:var(--text-secondary);">${this.escapeHtml(displayUrl)}</div>
        </div>
      `;
    }

    if (act.actionType === 'clearRedis') {
      return `
        <div style="background: rgba(99, 102, 241, 0.1); padding: 8px 12px; border-radius: var(--radius-sm); font-size: 12px; color: #a5b4fc; font-family: monospace;">
          🧹 clearRedis Keys: ${this.escapeHtml(act.payload || '')}
        </div>
      `;
    }

    if (act.actionType === 'flexPayload' || act.actionType === 'carousel-chunked') {
      let previewText = act.payload || 'Flex Message';
      const flexPayloadStr = typeof act.flexPayload === 'object' ? JSON.stringify(act.flexPayload) : (act.flexPayload || '{}');
      return `
        <div style="display: flex; gap: 10px; align-items: center;">
          <div style="flex: 1; background: rgba(0,0,0,0.2); padding: 8px 12px; border-radius: var(--radius-sm); font-size: 12px; color: var(--text-secondary);">
             ${this.escapeHtml(previewText)}
          </div>
          <button class="btn btn-outline-green btn-sm" onclick="window.actionPipeline.showFlexPreviewModal('${encodeURIComponent(flexPayloadStr)}')">
             ส่องตัวอย่าง Flex
          </button>
        </div>
      `;
    }

    return `<div style="font-size: 12px; color: var(--text-muted);">${this.escapeHtml(act.payload || '')}</div>`;
  }

  escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[m]);
  }

  async moveStep(index, direction) {
    const newIdx = index + direction;
    if (newIdx < 0 || newIdx >= this.currentActionList.length) return;

    const temp = this.currentActionList[index];
    this.currentActionList[index] = this.currentActionList[newIdx];
    this.currentActionList[newIdx] = temp;

    // Update order numbers
    this.currentActionList.forEach((act, i) => act.order = i + 1);

    if (window.apiClient) {
      await window.apiClient.saveAction(this.currentActionList[index]);
      await window.apiClient.saveAction(this.currentActionList[newIdx]);
    }

    this.renderPipeline(this.currentActionId, this.currentActionList, 'action-pipeline-container');
    window.app.showToast('อัปเดตลำดับ Action สำเร็จ', 'success');
  }

  async deleteStep(actionId) {
    if (!confirm(`ยืนยันการลบ Action #${actionId}?`)) return;
    this.currentActionList = this.currentActionList.filter(a => a.actionID !== actionId);
    
    if (window.apiClient) {
      await window.apiClient.deleteAction(actionId);
    }
    this.renderPipeline(this.currentActionId, this.currentActionList, 'action-pipeline-container');
    window.app.showToast('ลบ Action เรียบร้อย', 'info');
  }

  showFlexPreviewModal(encodedJson) {
    const jsonStr = decodeURIComponent(encodedJson);
    let parsed;
    try {
      parsed = JSON.parse(jsonStr);
    } catch (e) {
      alert('Invalid JSON in flexPayload: ' + e.message);
      return;
    }

    const modal = document.getElementById('flex-preview-modal');
    const container = document.getElementById('flex-modal-rendered-card');
    const jsonCode = document.getElementById('flex-modal-json-code');
    const byteBadge = document.getElementById('flex-modal-byte-count');

    const bytes = this.calculateByteLength(jsonStr);
    byteBadge.textContent = `${bytes.toLocaleString()} bytes / 48,000 bytes`;
    byteBadge.className = `badge ${bytes > this.LINE_FLEX_CEILING_BYTES ? 'badge-danger' : 'badge-green'}`;

    if (jsonCode) jsonCode.textContent = JSON.stringify(parsed, null, 2);

    // Simple Flex renderer
    if (container) {
      container.innerHTML = this.renderFlexHTML(parsed);
    }

    modal.classList.add('active');
  }

  renderFlexHTML(flexObj) {
    if (!flexObj) return '<p>ไม่มีข้อมูล</p>';
    if (flexObj.type === 'carousel') {
      const bubbles = flexObj.contents || [];
      return `
        <div class="flex-carousel-scroll">
          ${bubbles.map(b => this.renderSingleBubble(b)).join('')}
        </div>
      `;
    }
    return this.renderSingleBubble(flexObj);
  }

  renderSingleBubble(bubble) {
    const headerTitle = bubble.header?.contents?.[0]?.text || 'Flex Header';
    const bodyItems = bubble.body?.contents || [];
    const footerButtons = bubble.footer?.contents || [];

    return `
      <div class="flex-bubble-card" style="margin: 0 auto;">
        <div class="flex-hero-banner" style="background: ${bubble.header?.backgroundColor || '#10b981'};">
          ${this.escapeHtml(headerTitle)}
        </div>
        <div class="flex-body-content">
          ${bodyItems.map(item => {
            if (item.type === 'text') {
              return `<div style="font-size: ${item.size === 'sm' ? '12px' : '13px'}; color: ${item.color || '#334155'}; font-weight: ${item.weight === 'bold' ? '700' : '400'};">${this.escapeHtml(item.text || '')}</div>`;
            }
            if (item.type === 'separator') return '<hr style="border: none; border-top: 1px solid #e2e8f0; margin: 4px 0;">';
            if (item.type === 'button') {
              return `<button class="btn btn-secondary btn-sm" style="width:100%;">${this.escapeHtml(item.action?.label || 'Action')}</button>`;
            }
            return '';
          }).join('')}
        </div>
        ${footerButtons.length > 0 ? `
          <div style="border-top: 1px solid #e2e8f0;">
            ${footerButtons.map(btn => `
              <div class="flex-btn-action highlight">
                ${this.escapeHtml(btn.action?.label || 'Submit')}
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }
}

window.actionPipeline = new ActionPipelineManager();
