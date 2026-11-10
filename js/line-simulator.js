/**
 * Traffy Fondue Bot Studio — Interactive LINE Chat Simulator Engine
 * Accurately simulates Core Bot State Machine, Action Dispatcher & Datastore Context
 */

class LineChatSimulator {
  constructor() {
    this.currentBot = null;
    this.states = [];
    this.actionLists = {};
    
    // Cloud Datastore Context Model (line-bot/customize-conversation/{botID}/{orgID}/{lineUserID})
    this.context = {
      currentState: "hashtag-standby",
      userInput: {},
      replaceingVal: {},
      fondueUserProfile: {
        userId: "U7712398410",
        displayName: "สมชาย รักเมือง",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYXBpX3VzZXIiLCJleHAiOjE3OTA4OTAwMDB9.mock_token",
        exp: 1790890000
      },
      traceHistory: []
    };

    this.chatBody = null;
    this.quickReplyBar = null;
    this.inputBox = null;
    this.currentRichMenuMode = 'normal';
  }

  init(bot, states, actionLists) {
    this.currentBot = bot;
    this.states = states;
    this.actionLists = actionLists;
    this.chatBody = document.getElementById('simulator-chat-body');
    this.quickReplyBar = document.getElementById('simulator-quick-reply-bar');
    this.inputBox = document.getElementById('simulator-text-input');

    // Update Simulator Phone Header with Bot Details
    const botNameEl = document.getElementById('sim-bot-display-name');
    const botOrgEl = document.getElementById('sim-bot-org-name');
    if (botNameEl) {
      botNameEl.textContent = this.currentBot?.bot_name || 'fondue prototype (Bot ทดสอบเบนซ์)';
    }
    if (botOrgEl) {
      botOrgEl.textContent = `Org #${this.currentBot?.org_id || 1302} ${this.currentBot?.org_name || ''}`;
    }

    this.renderRichMenuTray();
    this.resetSession();
  }

  resetSession() {
    this.context.currentState = this.currentBot?.entry_state || "standby";
    this.context.userInput = {};
    this.context.replaceingVal = {
      session_id: "sess_" + Math.random().toString(36).substr(2, 9),
      bot_id: this.currentBot?.bot_id || "",
      org_id: this.currentBot?.org_id || ""
    };
    this.context.traceHistory = [];

    if (this.chatBody) this.chatBody.innerHTML = '';
    if (this.quickReplyBar) this.quickReplyBar.innerHTML = '';

    // Auto-trigger initial entry state
    this.logTrace(` เข้าสู่บทสนทนาเริ่มต้นที่ State: '${this.context.currentState}'`);

    // If starting in standby or floodwaste-standby, present greeting and report button
    if (this.context.currentState === 'standby' || this.context.currentState === 'floodwaste-standby') {
      this.appendBotBubble("สวัสดีครับ ยินดีต้อนรับสู่ระบบ Traffy Fondue ท่านสามารถกดปุ่มแจ้งเรื่องกองขยะน้ำท่วม หรือพิมพ์ข้อความได้เลยครับ 🙏");
      this.renderQuickReplies([
        {
          action: {
            type: 'postback',
            label: ' แจ้งเรื่องกองขยะน้ำท่วม',
            displayText: ' แจ้งเรื่องกองขยะน้ำท่วม',
            data: 'floodwaste-new-report'
          }
        }
      ]);
    } else {
      this.executeCurrentStateActions();
    }
    this.updateInspectorUI();
  }

  // Find matching state row from current state + incoming event
  findMatchingState(eventType, eventMessageType, postbackData) {
    const candidateStates = this.states.filter(s => s.stateName === this.context.currentState && s.is_active !== false);

    // 1. Try exact match with postbackData
    if (eventType === 'postback' && postbackData) {
      const match = candidateStates.find(s => s.eventType === 'postback' && s.postbackData && postbackData.includes(s.postbackData));
      if (match) return match;
    }

    // 2. Try match on eventType + eventMessageType
    const match = candidateStates.find(s => s.eventType === eventType && (!eventMessageType || s.eventMessageType === eventMessageType));
    if (match) return match;

    // 3. Fallback to default eventType
    return candidateStates.find(s => s.eventType === eventType) || candidateStates[0] || null;
  }

  // Send text message from user
  handleUserText(text) {
    if (!text || !text.trim()) return;
    text = text.trim();

    this.appendUserMessage(text);
    this.context.userInput = { type: 'text', text: text };
    this.context.replaceingVal.last_user_text = text;

    this.dispatchBotResponse('message', 'text', null);
  }

  // Send mock Photo from user
  handleUserPhoto(photoUrl = 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=500') {
    this.appendUserPhoto(photoUrl);
    this.context.userInput = {
      type: 'image',
      photoUrl: photoUrl
    };
    this.context.replaceingVal['{$report-img}'] = photoUrl;
    this.logTrace(`📸 ผู้ใช้ส่งรูปภาพประกอบปัญหา`);
    this.dispatchBotResponse('message', 'image', null);
  }

  // Send mock GPS location from user
  handleUserLocation(name, address, lat, lng) {
    this.appendUserMessage(` ส่งตำแหน่งพิกัด: ${name}\n(${address})\nLat: ${lat}, Lng: ${lng}`);
    this.context.userInput = {
      type: 'location',
      title: name,
      address: address,
      latitude: lat,
      longitude: lng
    };
    this.context.replaceingVal.latitude = lat;
    this.context.replaceingVal.longitude = lng;
    this.context.replaceingVal.location_name = name;

    this.dispatchBotResponse('message', 'location', null);
  }

  // Handle postback click (from button or quick reply)
  handlePostback(data, displayText) {
    if (displayText) {
      this.appendUserMessage(displayText);
    }
    this.context.userInput = { type: 'postback', data: data };
    this.logTrace(`⚡ User triggered postback: '${data}'`);
    this.dispatchBotResponse('postback', null, data);
  }

  // Core state transition logic
  dispatchBotResponse(eventType, eventMessageType, postbackData) {
    const matchedState = this.findMatchingState(eventType, eventMessageType, postbackData);

    if (!matchedState) {
      this.logTrace(`❌ ไม่พบ Action สำหรับ State: '${this.context.currentState}' (NO_ACTION_FOUND)`);
      this.appendBotBubble("ขออภัยครับ ระบบไม่เข้าใจคำสั่งนี้ กรุณาลองใหม่อีกครั้ง หรือพิมพ์ 'เริ่มต้น' ครับ 🙏");
      this.updateInspectorUI();
      return;
    }

    this.logTrace(`🎯 ตรวจพบ State #${matchedState.stateID} ('${matchedState.stateName}') ➔ Action List ID: ${matchedState.actionListID}`);

    // Fetch and execute action list
    const actions = this.actionLists[matchedState.actionListID] || [];
    this.executeActions(actions);

    // Transition to next state
    if (matchedState.nextStateName && matchedState.nextStateName !== 'end') {
      const prevState = this.context.currentState;
      this.context.currentState = matchedState.nextStateName;
      this.logTrace(`🔀 เปลี่ยน State: '${prevState}' ➔ '${this.context.currentState}'`);
    }

    this.updateInspectorUI();
  }

  executeCurrentStateActions() {
    const currentStateObj = this.states.find(s => s.stateName === this.context.currentState);
    if (currentStateObj && currentStateObj.actionListID) {
      const actions = this.actionLists[currentStateObj.actionListID] || [];
      this.executeActions(actions);
    }
  }

  executeActions(actions) {
    if (!actions || actions.length === 0) return;

    actions.forEach(act => {
      // 1. Reply Text
      if (act.actionType === 'replyBackToUser' || act.actionType === 'text') {
        const text = this.interpolateString(act.payload || '');
        this.appendBotBubble(text);
      }

      // 2. API Call simulation
      if (act.actionType === 'api-call' || act.actionType === 'calling') {
        let funcTitle = act.payload || 'API Call';
        try {
          const parsed = JSON.parse(act.payload);
          if (parsed.function_name) {
            funcTitle = `calling: ${parsed.function_name}`;
          }
        } catch(e) {}
        this.logTrace(`⚡ ${funcTitle}`);
      }

      // 3. Clear Redis Context
      if (act.actionType === 'clearRedis') {
        this.logTrace(`🧹 clearRedis: ${act.payload}`);
      }

      // 3. Flex Message / Carousel
      if (act.actionType === 'flexPayload' || act.actionType === 'carousel-chunked') {
        let flexJson = typeof act.flexPayload === 'object' ? act.flexPayload : null;
        if (!flexJson && act.flexPayload) {
          try {
            flexJson = JSON.parse(act.flexPayload);
          } catch (e) {
            flexJson = null;
          }
        }
        if (flexJson) {
          this.appendFlexCard(flexJson);
        }
      }

      // 4. Quick Reply buttons
      if (act.quickReplyPayload) {
        let qrObj = typeof act.quickReplyPayload === 'object' ? act.quickReplyPayload : null;
        if (!qrObj) {
          try {
            qrObj = JSON.parse(act.quickReplyPayload);
          } catch (e) {
            console.error('Quick reply parse error', e);
          }
        }
        if (qrObj && qrObj.items) {
          this.renderQuickReplies(qrObj.items);
        }
      }
    });
  }

  interpolateString(template) {
    if (!template) return '';
    return template.replace(/\{\$(\w+)\}/g, (_, key) => {
      return this.context.replaceingVal[key] || `{$${key}}`;
    });
  }

  // --- UI Chat Helpers ---
  appendUserMessage(text) {
    if (!this.chatBody) return;
    const row = document.createElement('div');
    row.className = 'msg-row user';
    row.innerHTML = `
      <div class="msg-bubble">${this.escapeHtml(text)}</div>
      <span class="msg-time">${this.getCurrentTime()}</span>
    `;
    this.chatBody.appendChild(row);
    this.scrollToBottom();
  }

  appendUserPhoto(url) {
    if (!this.chatBody) return;
    const row = document.createElement('div');
    row.className = 'msg-row user';
    row.innerHTML = `
      <div class="msg-bubble" style="padding:4px; max-width:220px; background:transparent;">
        <img src="${url}" alt="รูปถ่ายปัญหา" style="width:100%; border-radius:10px; display:block; border: 2px solid var(--traffy-green);" />
      </div>
      <span class="msg-time">${this.getCurrentTime()}</span>
    `;
    this.chatBody.appendChild(row);
    this.scrollToBottom();
  }

  appendBotBubble(text) {
    if (!this.chatBody) return;
    const row = document.createElement('div');
    row.className = 'msg-row bot';
    row.innerHTML = `
      <div class="msg-avatar"></div>
      <div class="msg-bubble">${this.escapeHtml(text)}</div>
      <span class="msg-time">${this.getCurrentTime()}</span>
    `;
    this.chatBody.appendChild(row);
    this.scrollToBottom();
  }

  appendFlexCard(flexObj) {
    if (!this.chatBody) return;
    const row = document.createElement('div');
    row.className = 'msg-row bot';
    row.style.maxWidth = '95%';

    const cardContainer = document.createElement('div');
    cardContainer.innerHTML = window.actionPipeline.renderFlexHTML(flexObj);

    // Bind click events on buttons inside flex card
    cardContainer.querySelectorAll('.flex-btn-action, button').forEach(btn => {
      btn.addEventListener('click', () => {
        const label = btn.textContent.trim();
        this.handlePostback(`action=click&label=${encodeURIComponent(label)}`, label);
      });
    });

    row.innerHTML = `<div class="msg-avatar"></div>`;
    row.appendChild(cardContainer);
    this.chatBody.appendChild(row);
    this.scrollToBottom();
  }

  renderQuickReplies(items) {
    if (!this.quickReplyBar) return;
    this.quickReplyBar.innerHTML = '';
    items.forEach(item => {
      const act = item.action;
      if (!act) return;

      const pill = document.createElement('button');
      pill.className = 'quick-reply-pill';
      pill.textContent = act.label || act.text || 'ปุ่ม';

      pill.addEventListener('click', () => {
        if (act.type === 'location') {
          window.app.showLocationPickerModal();
        } else if (act.type === 'camera') {
          this.handleUserPhoto();
        } else if (act.type === 'message') {
          this.handleUserText(act.text || act.label);
        } else if (act.type === 'postback') {
          let postbackStr = act.data;
          try {
            const parsed = JSON.parse(act.data);
            if (parsed && parsed['selected-value'] && parsed['selected-value'].postbackData) {
              postbackStr = parsed['selected-value'].postbackData;
            }
          } catch (e) {}
          this.handlePostback(postbackStr, act.displayText || act.label);
        }
      });

      this.quickReplyBar.appendChild(pill);
    });
  }

  logTrace(message) {
    const time = new Date().toLocaleTimeString('th-TH');
    this.context.traceHistory.push({ time, message });
  }

  // --- Rich Menu Controller in Simulator ---
  switchRichMenuMode(mode) {
    this.currentRichMenuMode = mode;
    const modePills = document.querySelectorAll('#simulator-rm-mode-pills .rm-pill');
    modePills.forEach(p => p.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-rm-mode-${mode}`);
    if (activeBtn) activeBtn.classList.add('active');

    const titleEl = document.getElementById('simulator-rm-current-title');
    const titleMap = {
      normal: 'Rich Menu: เมนูหลัก (Normal)',
      alert: 'Rich Menu: เมนูโหมดกระดิ่ง (Alert )',
      blind: 'Rich Menu: เมนูคนตาบอด (Blind )'
    };
    if (titleEl) titleEl.textContent = titleMap[mode] || `Rich Menu: ${mode}`;

    const menuId = this.currentBot?.richmenus?.[mode]?.richmenu_id || 'default';
    this.logTrace(` สลับโหมด Rich Menu ➔ '${mode}' (${menuId})`);
    this.renderRichMenuTray();
    this.updateInspectorUI();
  }

  renderRichMenuTray() {
    const grid = document.getElementById('simulator-richmenu-grid');
    if (!grid) return;

    const mode = this.currentRichMenuMode || 'normal';

    if (mode === 'blind') {
      grid.style.gridTemplateColumns = '1fr 1fr';
      grid.innerHTML = `
        <button class="rm-grid-btn" onclick="window.lineSimulator.handlePostback('voice-record-report', ' บันทึกเสียงแจ้งปัญหา')">
          <span class="rm-grid-btn-icon"></span>
          <span class="rm-grid-btn-label">บันทึกเสียงแจ้งปัญหา</span>
          <span class="rm-grid-btn-sub">โหมดเสียงคนตาบอด</span>
        </button>
        <button class="rm-grid-btn" onclick="window.lineSimulator.handleUserText('ฟังสถานะเรื่องแจ้งล่าสุด')">
          <span class="rm-grid-btn-icon">🎧</span>
          <span class="rm-grid-btn-label">ฟังสถานะล่าสุด</span>
          <span class="rm-grid-btn-sub">อ่านออกเสียง</span>
        </button>
      `;
    } else if (mode === 'alert') {
      grid.style.gridTemplateColumns = '1fr 1fr 1fr';
      grid.innerHTML = `
        <button class="rm-grid-btn" onclick="window.lineSimulator.handlePostback('floodwaste-new-report', ' แจ้งเรื่องกองขยะน้ำท่วม')">
          <span class="rm-grid-btn-icon"></span>
          <span class="rm-grid-btn-label">แจ้งขยะน้ำท่วม</span>
          <span class="rm-grid-btn-sub">เปิดเคสใหม่</span>
        </button>
        <button class="rm-grid-btn" style="border-color:rgba(239,68,68,0.4);" onclick="window.lineSimulator.handleUserText('ดูการแจ้งเตือนล่าสุด')">
          <span class="rm-grid-btn-icon" style="color:#ef4444;"></span>
          <span class="rm-grid-btn-label" style="color:#f87171;">ดูการแจ้งเตือน</span>
          <span class="rm-grid-btn-sub">ข้อความใหม่</span>
        </button>
        <button class="rm-grid-btn" onclick="window.lineSimulator.handleOpenCityDashboard()">
          <span class="rm-grid-btn-icon">🌐</span>
          <span class="rm-grid-btn-label">แดชบอร์ดเมือง</span>
          <span class="rm-grid-btn-sub">City Portal</span>
        </button>
      `;
    } else {
      // normal mode
      grid.style.gridTemplateColumns = '1fr 1fr 1fr';
      grid.innerHTML = `
        <button class="rm-grid-btn" onclick="window.lineSimulator.handlePostback('floodwaste-new-report', ' แจ้งเรื่องกองขยะน้ำท่วม')">
          <span class="rm-grid-btn-icon"></span>
          <span class="rm-grid-btn-label">แจ้งขยะน้ำท่วม</span>
          <span class="rm-grid-btn-sub">รายงานปัญหา</span>
        </button>
        <button class="rm-grid-btn" onclick="window.lineSimulator.handleUserText('ติดตามสถานะเรื่องแจ้ง')">
          <span class="rm-grid-btn-icon"></span>
          <span class="rm-grid-btn-label">ติดตามสถานะ</span>
          <span class="rm-grid-btn-sub">ตรวจเช็คเรื่อง</span>
        </button>
        <button class="rm-grid-btn" onclick="window.lineSimulator.handleOpenCityDashboard()">
          <span class="rm-grid-btn-icon">🌐</span>
          <span class="rm-grid-btn-label">แดชบอร์ดเมือง</span>
          <span class="rm-grid-btn-sub">City Portal</span>
        </button>
      `;
    }
  }

  handleOpenCityDashboard() {
    this.logTrace(`🌐 กด Rich Menu: เปิดแดชบอร์ดเมือง (URI: https://city.traffy.in.th)`);
    if (window.app?.showToast) {
      window.app.showToast('🌐 จำลองการเปิดเว็บ: https://city.traffy.in.th', 'info');
    }
  }

  updateInspectorUI() {
    const jsonState = document.getElementById('inspector-datastore-json');
    const jsonBot = document.getElementById('inspector-datastore-bot-json');
    const traceList = document.getElementById('inspector-trace-list');
    const badgeState = document.getElementById('simulator-current-state-badge');

    if (badgeState) badgeState.textContent = this.context.currentState;

    if (jsonBot) {
      const datastoreEntity = window.apiClient ? window.apiClient.getDatastoreBotConfig(this.currentBot?.bot_id) : this.currentBot;
      jsonBot.textContent = JSON.stringify(datastoreEntity || {}, null, 2);
    }

    if (jsonState) {
      jsonState.textContent = JSON.stringify({
        currentState: this.context.currentState,
        activeRichMenuMode: this.currentRichMenuMode,
        userInput: this.context.userInput,
        replaceingVal: this.context.replaceingVal,
        fondueUserProfile: this.context.fondueUserProfile
      }, null, 2);
    }

    if (traceList) {
      traceList.innerHTML = this.context.traceHistory.slice(-8).reverse().map(t => `
        <div class="trace-step-item">
          <span class="trace-badge">${t.time}</span>
          <span>${t.message}</span>
        </div>
      `).join('');
    }
  }

  getCurrentTime() {
    return new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
  }

  scrollToBottom() {
    if (this.chatBody) {
      this.chatBody.scrollTop = this.chatBody.scrollHeight;
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[m]);
  }
}

window.lineSimulator = new LineChatSimulator();
