/**
 * Traffy Fondue Bot Studio — Main Application Controller
 * Handles SPA Navigation, State Coordination, Modals, Forms & Theme
 */

(function () {
  'use strict';

  class BotStudioApp {
    constructor() {
      this.currentTab = 'dashboard';
      this.currentDbTable = 'state';
      this.bots = [];
      this.selectedBot = null;
      this.states = [];
      this.actionLists = {};
      this.flowGraph = null;

      document.addEventListener('DOMContentLoaded', () => this.init());
    }

    async init() {
      this.initTheme();
      this.initEventListeners();
      await this.loadInitialData();
      this.initViews();
      this.updateModeIndicator();
    }

    // --- Theme System ---
    initTheme() {
      const savedTheme = localStorage.getItem('traffy_studio_theme') || 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
      this.updateThemeButtonIcon(savedTheme);
    }

    toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('traffy_studio_theme', next);
      this.updateThemeButtonIcon(next);
      if (this.flowGraph) this.flowGraph.renderEdges();
    }

    updateThemeButtonIcon(theme) {
      const btn = document.getElementById('theme-toggle-btn');
      if (btn) btn.innerHTML = theme === 'dark' ? '<i data-lucide="sun" class="w-4 h-4"></i>' : '<i data-lucide="moon" class="w-4 h-4"></i>';
      if (window.lucide) lucide.createIcons();
    }

    // --- Data Loading ---
    async loadInitialData() {
      try {
        this.bots = await window.apiClient.getBots();
        const savedBotId = localStorage.getItem('traffy_selected_bot_id');
        const testBotId = 'U46c89687ac757da1e5fa74ae707fbfa4';
        const hasSwitched = sessionStorage.getItem('traffy_session_bot_switched');
        const prototypeBot = this.bots.find(b => b.bot_id === testBotId);

        if (!hasSwitched && prototypeBot) {
          this.selectedBot = prototypeBot;
          localStorage.setItem('traffy_selected_bot_id', testBotId);
        } else {
          this.selectedBot = this.bots.find(b => b.bot_id === savedBotId) || prototypeBot || this.bots[0] || null;
        }

        if (this.selectedBot) {
          await this.loadBotDetails(this.selectedBot.bot_id);
        }
      } catch (err) {
        console.error('Initialization error:', err);
        this.showToast('เชื่อมต่อ API ไม่สำเร็จ ใช้โหมด Sandbox ออฟไลน์', 'warning');
      }
    }

    async loadBotDetails(botId) {
      this.states = await window.apiClient.getStates(botId);
      this.actionLists = window.MOCK_DATA.actionLists;
      const countBadge = document.getElementById('sidebar-states-count-badge');
      if (countBadge) countBadge.textContent = this.states.length;
      this.updateBotSelectorUI();
      this.renderDashboard();
    }

    // --- Navigation & Tabs ---
    switchTab(tabId) {
      this.currentTab = tabId;
      document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.toggle('active', el.dataset.tab === tabId);
      });

      // Update Sub-nav Tab Buttons (Matching cases.html & flex-message.html)
      document.querySelectorAll('.studio-tab-btn').forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick') || '';
        const isMatch = onclickAttr.includes(`'${tabId}'`);
        if (isMatch) {
          btn.className = 'studio-tab-btn px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white shadow-2xs transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5';
        } else {
          btn.className = 'studio-tab-btn px-3.5 py-2 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5';
        }
      });

      document.querySelectorAll('.tab-pane').forEach(el => {
        el.classList.remove('active');
      });

      const targetPane = document.getElementById(`tab-${tabId}`);
      if (targetPane) targetPane.classList.add('active');

      const titleEl = document.getElementById('view-header-title');
      const descEl = document.getElementById('view-header-desc');

      switch (tabId) {
        case 'dashboard':
          if (titleEl) titleEl.textContent = 'จัดการ Line Bot (ภาพรวม)';
          if (descEl) descEl.textContent = 'ภาพรวมบอท Traffy Fondue และสถิติสถานะระบบ';
          this.renderDashboard();
          break;
        case 'database':
          if (titleEl) titleEl.textContent = 'ตารางฐานข้อมูล DB';
          if (descEl) descEl.textContent = 'แสดงและทดสอบชุดข้อมูลตัวอย่างของ State Machine และ Action List สำหรับจำลองบนเว็บ';
          this.renderDatabaseExplorer();
          break;
        case 'flow-graph':
          if (titleEl) titleEl.textContent = 'ผังบทสนทนา (Visual State Flow Graph)';
          if (descEl) descEl.textContent = 'แผนผังการไหลของบทสนทนาและโหนดสถานะ';
          if (this.flowGraph) {
            setTimeout(() => this.flowGraph.render(this.states, this.selectedBot), 50);
          }
          break;
        case 'action-pipeline':
          if (titleEl) titleEl.textContent = 'Action List Pipeline & Flex Preview';
          if (descEl) descEl.textContent = 'ลำดับคำสั่งที่ทำงานเมื่อตรงตามเงื่อนไข พร้อมตัวนับขนาด Payload 48KB';
          this.renderActionPipelineTab();
          break;
        case 'simulator':
          if (titleEl) titleEl.textContent = 'LINE Simulator (จำลองแชทเสมือนจริง)';
          if (descEl) descEl.textContent = 'จำลองแชท LINE เสมือนจริง พร้อมตรวจสอบตัวแปรใน Datastore Context';
          if (window.lineSimulator) {
            window.lineSimulator.init(this.selectedBot, this.states, this.actionLists);
          }
          break;
        case 'richmenu':
          if (titleEl) titleEl.textContent = 'จัดการ LINE Rich Menu';
          if (descEl) descEl.textContent = 'ตรวจสอบ JSON & รูปภาพจาก richmenuId, ฟลัดส่งหาผู้ใช้ตามรายชื่อ (รองรับ comma) และสลับ ID';
          if (window.richMenuManager) {
            window.richMenuManager.init(this.selectedBot);
            window.richMenuManager.renderTab();
          }
          break;
        case 'diagnostics':
          if (titleEl) titleEl.textContent = 'Diagnostics & API Migration Matrix';
          if (descEl) descEl.textContent = 'ติดตามการย้าย Kong -> Cloud Run / PostgREST และดู Error Logs';
          this.renderDiagnostics();
          break;
        case 'settings':
          if (titleEl) titleEl.textContent = 'Studio Settings & Dual Mode';
          if (descEl) descEl.textContent = 'ตั้งค่าการเชื่อมต่อ PostgREST, Token และส่งออกฐานข้อมูล';
          this.renderSettings();
          break;
      }
    }

    initViews() {
      // Flow Graph Init
      this.flowGraph = new window.StateFlowGraph('graph-canvas-wrapper', {
        onSelectNode: (state) => this.showStateInspector(state)
      });

      // Populate Bot Dropdown & Initial Tab
      this.updateBotSelectorUI();

      // Check URL query param for deep linking (?tab=richmenu, etc.)
      const urlParams = new URLSearchParams(window.location.search);
      const initialTab = urlParams.get('tab') || 'dashboard';
      this.switchTab(initialTab);
    }

    updateBotSelectorUI() {
      // Clean no-op since top header duplicate pills were removed
    }

    getActiveRichMenuForBot(botId) {
      const targetBot = this.bots.find(b => b.bot_id === botId) || this.selectedBot;
      if (!targetBot) return null;

      const allMenus = (window.richMenuManager && window.richMenuManager.richMenus && window.richMenuManager.richMenus.length > 0)
        ? window.richMenuManager.richMenus
        : (window.MOCK_DATA.richMenus || []);

      // 1. By default_rich_menu_id
      if (targetBot.default_rich_menu_id) {
        const found = allMenus.find(m => m.rich_menu_id === targetBot.default_rich_menu_id);
        if (found) {
          return {
            ...found,
            image_url: found.image_url || `./assets/richmenus/${found.rich_menu_id}.png`
          };
        }
      }

      // 2. By bot_id matching
      const botMenus = allMenus.filter(m => m.bot_id === targetBot.bot_id);
      const defaultMenu = botMenus.find(m => m.is_default || m.selected || m.is_active) || botMenus[0];
      if (defaultMenu) {
        return {
          ...defaultMenu,
          image_url: defaultMenu.image_url || `./assets/richmenus/${defaultMenu.rich_menu_id}.png`
        };
      }

      return null;
    }

    renderBotProfilesSelector() {
      const container = document.getElementById('dashboard-bot-profiles-selector');
      if (!container) return;

      const cardsHtml = this.bots.map(bot => {
        const isSelected = this.selectedBot?.bot_id === bot.bot_id;
        const isMain = bot.bot_id === 'Uf8841bc6a36cb709b87582a536150e8d';
        const cleanName = bot.bot_name.replace(/\s*\([^)]*\)/g, '').trim();
        const handle = bot.premium_id || bot.basic_id || `@org${bot.org_id}`;
        const activeMenu = this.getActiveRichMenuForBot(bot.bot_id);
        const menuThumb = activeMenu ? activeMenu.image_url : null;
        const rawOrg = bot.org_name || `หน่วยงาน ${cleanName}`;
        const cleanOrg = rawOrg.replace(/\s*\(Org\s*#\d+\)/gi, '').trim();

        return `
          <div class="relative rounded-2xl sm:rounded-3xl border transition-all p-4 sm:p-5 flex flex-col justify-between cursor-pointer ${
            isSelected
              ? 'bg-blue-50/50 border-blue-500 shadow-md ring-2 ring-blue-500/20'
              : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
          }" onclick="window.app.selectBot('${bot.bot_id}')">
            <div>
              <div class="flex items-start justify-between gap-3 mb-3">
                <div class="flex items-center gap-3 min-w-0">
                  <div class="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1.5 shrink-0 shadow-2xs">
                    <img src="${bot.picture_url || 'https://storage.googleapis.com/traffy_public_bucket/traffy_logo/Image_fondue_logo.png'}" alt="${cleanName}" class="w-full h-full object-contain rounded-lg" onerror="this.onerror=null; this.src='https://storage.googleapis.com/traffy_public_bucket/traffy_logo/Image_fondue_logo.png';">
                  </div>
                  <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-2 flex-wrap">
                      <h3 class="text-sm sm:text-base font-bold text-slate-900 truncate">${cleanName}</h3>
                      <span class="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-slate-100 text-slate-800 border border-slate-300">
                        ${handle}
                      </span>
                    </div>
                    <p class="text-xs text-slate-700 truncate mt-0.5 font-medium">${cleanOrg} (Org #${bot.org_id})</p>
                  </div>
                </div>
              </div>

              <!-- Active Rich Menu Mini Info -->
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-3 flex items-center justify-between gap-2">
                <div class="flex items-center gap-2 min-w-0">
                  <div class="min-w-0">
                    <div class="text-[11px] font-bold text-slate-700">Rich Menu ปัจจุบัน:</div>
                    <div class="text-xs font-semibold text-slate-900 truncate">${activeMenu ? activeMenu.name : 'ยังไม่ได้ตั้งค่า'}</div>
                  </div>
                </div>
                ${menuThumb ? `
                  <img src="${menuThumb}" alt="Rich Menu Thumb" class="w-14 h-8 object-cover rounded-lg border border-slate-200 shadow-2xs shrink-0" onerror="this.style.display='none'">
                ` : '<span class="text-[11px] text-slate-500 font-medium">ไม่มีภาพ</span>'}
              </div>
            </div>

            <!-- Footer: Status + Selection Button (44px target) -->
            <div class="pt-2 border-t border-slate-100 flex items-center justify-between">
              <div class="flex items-center gap-1.5 text-xs">
                <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span class="text-slate-800 font-semibold">พร้อมใช้งาน (Active)</span>
              </div>
              <button type="button" class="min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300'
              }">
                ${isSelected ? '<span class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5"></i><span>กำลังจัดการ</span></span>' : '<span>เลือกบอทนี้</span>'}
              </button>
            </div>
          </div>
        `;
      }).join('');

      const addBotCardHtml = `
        <div class="rounded-2xl sm:rounded-3xl border-2 border-dashed border-slate-300 hover:border-blue-500 bg-slate-50/50 hover:bg-blue-50/20 p-5 flex flex-col items-center justify-center text-center transition-all cursor-pointer min-h-[170px]" onclick="window.app.openAddBotModal()" role="button" tabindex="0" aria-label="เพิ่มบอทใหม่">
          <div class="w-12 h-12 rounded-2xl bg-white border border-slate-300 flex items-center justify-center text-blue-600 shadow-2xs mb-3 group-hover:scale-110 transition-transform">
            <i data-lucide="plus" class="w-6 h-6 stroke-[2.5]"></i>
          </div>
          <div class="font-bold text-slate-900 text-sm mb-1">+ เพิ่มบัญชี LINE Bot ใหม่</div>
          <div class="text-xs text-slate-600 font-medium max-w-xs">ลงทะเบียนบอทของหน่วยงานเพื่อผูก Rich Menu และผังคำตอบเฉพาะพื้นที่</div>
        </div>
      `;

      container.innerHTML = `
        <div class="mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 class="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span>เลือกโปรไฟล์บอทที่ต้องการควบคุม</span>
              <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-slate-200 text-slate-800">${this.bots.length} บัญชีในระบบ</span>
            </h3>
            <p class="text-xs text-slate-700 font-medium">คลิกเลือกบอทเพื่อดูการตั้งค่า Rich Menu และสถาปัตยกรรมตอบกลับ หรือกดเพิ่มบอทตัวใหม่</p>
          </div>
          <button type="button" onclick="window.app.openAddBotModal()" class="self-start sm:self-auto min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-2xs transition-all flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            <i data-lucide="plus" class="w-4 h-4"></i>
            <span>เพิ่มบอทใหม่</span>
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${cardsHtml}
          ${addBotCardHtml}
        </div>
      `;
      if (window.lucide) lucide.createIcons();
    }

    openAddBotModal() {
      const randomHex = Array.from({length: 32}, () => Math.floor(Math.random() * 16).toString(16)).join('');
      const botIdInput = document.getElementById('add-bot-id');
      if (botIdInput) botIdInput.value = `U${randomHex}`;

      const nicknameInput = document.getElementById('add-bot-nickname');
      if (nicknameInput) {
        nicknameInput.value = '';
        setTimeout(() => nicknameInput.focus(), 150);
      }

      const initStateInput = document.getElementById('add-bot-init-state');
      if (initStateInput) initStateInput.value = 'standby';

      const tokenInput = document.getElementById('add-bot-token');
      if (tokenInput) tokenInput.value = '';

      const orgIdInput = document.getElementById('add-bot-org-id');
      if (orgIdInput) orgIdInput.value = String(Math.floor(1000 + Math.random() * 9000));

      this.openModal('add-bot-modal');
      if (window.lucide) lucide.createIcons();
    }

    async saveNewBot() {
      const nicknameInput = document.getElementById('add-bot-nickname');
      const botIdInput = document.getElementById('add-bot-id');
      const initStateInput = document.getElementById('add-bot-init-state');
      const orgIdInput = document.getElementById('add-bot-org-id');
      const tokenInput = document.getElementById('add-bot-token');

      const nickname = nicknameInput ? nicknameInput.value.trim() : '';
      if (!nickname) {
        this.showToast('กรุณากรอกชื่อเรียกบอท (nickname)', 'warning');
        return;
      }

      const botId = botIdInput?.value || `U${Date.now().toString(16)}`;
      const initState = initStateInput?.value.trim() || 'standby';
      const orgId = orgIdInput?.value.trim() || '1501';
      const token = tokenInput?.value.trim() || `mock_token_${botId}_${Date.now()}`;

      // Exact PostgreSQL public.bot_config schema match
      const newBotConfig = {
        id: Date.now(),
        bot_id: botId,
        nickname: nickname,
        bot_name: nickname, // fallback for views
        org_id: orgId,
        org_name: `หน่วยงาน Org #${orgId}`,
        init_state: initState,
        channel_access_token: token,
        webhook_chat_params: { timeout: 30 },
        webhook_chat_pubsubtopic: 'projects/traffy-fondue/topics/line-inbound',
        basic_id: `@bot_${orgId}`,
        premium_id: '',
        default_rich_menu_id: '',
        is_primary: false,
        status: 'active',
        richmenus: {}
      };

      this.bots.push(newBotConfig);

      try {
        let customList = [];
        const local = localStorage.getItem('traffy_custom_bots');
        if (local) {
          customList = JSON.parse(local);
        }
        customList.push(newBotConfig);
        localStorage.setItem('traffy_custom_bots', JSON.stringify(customList));
      } catch (e) {
        console.error('Failed to save custom bot to localStorage', e);
      }

      this.closeModal('add-bot-modal');
      this.showToast(`ลงทะเบียนบอท "${nickname}" สำเร็จแล้ว!`, 'success');

      await this.selectBot(botId);
    }

    async selectBot(botId) {
      sessionStorage.setItem('traffy_session_bot_switched', 'true');
      this.selectedBot = this.bots.find(b => b.bot_id === botId);
      if (this.selectedBot) {
        localStorage.setItem('traffy_selected_bot_id', botId);
        await this.loadBotDetails(botId);
        this.updateBotSelectorUI();
        this.switchTab(this.currentTab);
      }
    }

    showDatastoreBotJsonModal() {
      const config = window.apiClient.getDatastoreBotConfig(this.selectedBot?.bot_id);
      this.showPayloadModal(`Datastore Studio Entity (${config?.bot_name || 'Bot'})`, JSON.stringify(config, null, 2));
    }

    // --- Dashboard Rendering ---
    renderDashboard() {
      // 1. Render Bot Profiles Selector Strip & Add Bot Card
      this.renderBotProfilesSelector();

      const statsGrid = document.getElementById('dashboard-stats-grid');
      const tableBody = document.getElementById('dashboard-bots-table-body');
      const datastoreCard = document.getElementById('dashboard-datastore-bot-card');
      const duplicateCount = this.flowGraph ? this.flowGraph.findDuplicateStates().size : 0;

      if (statsGrid) {
        statsGrid.innerHTML = `
          <div class="stat-card">
            <div class="stat-icon" style="background: #eff6ff; color: #1d4ed8;">
              <i data-lucide="bot" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="stat-value text-slate-900 font-extrabold text-2xl">${this.bots.length} บอท</div>
              <div class="stat-label text-slate-700 font-semibold text-xs mt-1">บอทที่ลงทะเบียนในระบบ</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background: #f0fdf4; color: #15803d;">
              <i data-lucide="git-fork" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="stat-value text-slate-900 font-extrabold text-2xl">${this.states.length || 135} ขั้นตอน</div>
              <div class="stat-label text-slate-700 font-semibold text-xs mt-1">เส้นทางคำตอบ (Dialogue States)</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background: ${duplicateCount > 0 ? '#fffbeb' : '#f0fdf4'}; color: ${duplicateCount > 0 ? '#b45309' : '#15803d'};">
              <i data-lucide="${duplicateCount > 0 ? 'alert-triangle' : 'check-circle-2'}" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="stat-value text-2xl font-extrabold" style="color: ${duplicateCount > 0 ? '#9a3412' : '#0f172a'};">
                ${duplicateCount > 0 ? `${duplicateCount} จุดต้องแก้` : 'สมบูรณ์ 100%'}
              </div>
              <div class="stat-label text-slate-700 font-semibold text-xs mt-1">ความถูกต้องของ Flow (No Conflict)</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background: #faf5ff; color: #7e22ce;">
              <i data-lucide="zap" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="stat-value text-slate-900 font-extrabold text-2xl">พร้อมใช้งาน</div>
              <div class="stat-label text-slate-700 font-semibold text-xs mt-1">LINE API & Datastore Synced</div>
            </div>
          </div>
        `;
      }

      // Render Active Bot Showcase with Live Rich Menu Preview (Split Layout)
      const datastoreConfig = window.apiClient ? window.apiClient.getDatastoreBotConfig(this.selectedBot?.bot_id) : null;
      if (datastoreCard && datastoreConfig) {
        const isMainBot = datastoreConfig.bot_id === 'Uf8841bc6a36cb709b87582a536150e8d';
        const richMenuCount = Object.keys(datastoreConfig.richmenus || {}).length;
        const rawOrgName = this.selectedBot?.org_name || (isMainBot ? 'Traffy Fondue - กรุงเทพมหานคร และ ทั่วประเทศ' : 'fondue prototype');
        const cleanOrgName = rawOrgName.replace(/\s*\(Org\s*#\d+\)/gi, '').trim();
        const cleanBotName = (datastoreConfig.bot_name || '').replace(/\s*\([^)]*\)/g, '').trim();
        const botHandle = this.selectedBot?.premium_id || this.selectedBot?.basic_id || (isMainBot ? '@traffyfondue' : '@583mbpbd');
        const activeMenu = this.getActiveRichMenuForBot(this.selectedBot?.bot_id);
        const tokenStr = datastoreConfig.channel_access_token || '';
        const maskedToken = tokenStr.length > 40
          ? `${tokenStr.slice(0, 28)}...${tokenStr.slice(-14)}`
          : tokenStr;

        datastoreCard.innerHTML = `
          <div class="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              <!-- Left Column: Bot Identity & Datastore Connection (7 cols) -->
              <div class="lg:col-span-7 space-y-4">
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-2 shrink-0 shadow-2xs">
                    <img src="${this.selectedBot?.picture_url || 'https://storage.googleapis.com/traffy_public_bucket/traffy_logo/Image_fondue_logo.png'}" alt="Bot Logo" class="w-full h-full object-contain rounded-xl" onerror="this.onerror=null; this.src='https://storage.googleapis.com/traffy_public_bucket/traffy_logo/Image_fondue_logo.png';">
                  </div>
                  <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-2 flex-wrap">
                      <h2 class="text-base sm:text-lg font-bold text-slate-900">${cleanBotName}</h2>
                      <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-100 text-slate-900 border border-slate-300">
                        ${botHandle}
                      </span>
                      <span class="px-3 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-950 border border-blue-300">
                        Rich Menu ในระบบ: ${richMenuCount} เมนู
                      </span>
                    </div>

                    <!-- Organization Name (Single Org #, no duplicates) -->
                    <div class="mt-2 text-xs flex flex-wrap items-baseline gap-1.5">
                      <span class="text-slate-700 font-semibold shrink-0">หน่วยงานที่ดูแล:</span>
                      <span class="font-bold text-slate-900 leading-relaxed break-words">${cleanOrgName} (Org #${datastoreConfig.org_id})</span>
                    </div>

                    <!-- Bot ID -->
                    <div class="mt-1.5 text-xs flex flex-wrap items-center gap-2">
                      <span class="text-slate-700 font-semibold shrink-0">Bot ID:</span>
                      <span class="font-mono text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 select-all font-semibold">${datastoreConfig.bot_id}</span>
                    </div>
                  </div>
                </div>

                <!-- Token Bar -->
                <div class="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div class="flex items-center gap-2 min-w-0 flex-1 truncate">
                    <span class="font-bold text-slate-700 shrink-0">Channel Token:</span>
                    <code class="font-mono text-slate-900 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 text-xs truncate max-w-xs sm:max-w-md select-all">
                      ${maskedToken}
                    </code>
                  </div>
                  <button type="button" class="min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-50 text-blue-950 border border-blue-300 hover:bg-blue-100 transition-all flex items-center gap-1.5 cursor-pointer shrink-0 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900" onclick="navigator.clipboard.writeText('${tokenStr}'); window.app.showToast('คัดลอก Token เรียบร้อยแล้ว', 'success');">
                    <i data-lucide="copy" class="w-3.5 h-3.5 text-blue-950"></i>
                    <span>คัดลอก Token</span>
                  </button>
                </div>

                <!-- Bot Actions Bar -->
                <div class="pt-3 border-t border-slate-100 flex items-center gap-2.5 flex-wrap">
                  <button type="button" class="min-h-[44px] bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900" onclick="window.app.switchTab('simulator')">
                    <i data-lucide="smartphone" class="w-4 h-4 text-purple-300"></i>
                    <span>เปิดทดสอบแชท (Simulator)</span>
                  </button>
                  <button type="button" class="min-h-[44px] bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900" onclick="window.app.switchTab('flow-graph')">
                    <i data-lucide="git-fork" class="w-4 h-4 text-emerald-600"></i>
                    <span>ดูผังคำตอบ</span>
                  </button>
                  <button type="button" class="min-h-[44px] bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900" onclick="window.app.showDatastoreBotJsonModal()">
                    <i data-lucide="code" class="w-4 h-4 text-slate-600"></i>
                    <span>ดู Raw JSON</span>
                  </button>
                </div>
              </div>

              <!-- Right Column: Live Active Rich Menu Preview (5 cols) -->
              <div class="lg:col-span-5 bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 class="text-xs sm:text-sm font-bold text-slate-900">ภาพ Rich Menu ที่เปิดใช้งานจริง</h3>
                      <p class="text-[11px] text-slate-700 font-medium">เมนูเริ่มต้นที่แสดงบน LINE ประชาชน</p>
                    </div>
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${activeMenu ? 'bg-emerald-100 text-emerald-950 border border-emerald-300' : 'bg-slate-100 text-slate-700 border border-slate-300'}">
                      ${activeMenu ? 'เผยแพร่อยู่บน LINE' : 'ยังไม่มีเมนู'}
                    </span>
                  </div>

                  <!-- Rich Menu Graphic Image -->
                  ${activeMenu ? `
                    <div class="relative rounded-xl overflow-hidden border border-slate-300 bg-slate-900 shadow-sm group">
                      <img src="${activeMenu.image_url}" alt="ภาพ Rich Menu ที่เปิดใช้งานจริง" class="w-full object-contain max-h-[190px] bg-slate-100 transition-transform group-hover:scale-[1.02] duration-200" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200';">
                      <div class="absolute bottom-0 inset-x-0 bg-slate-950/85 backdrop-blur-xs px-3 py-2 text-white flex items-center justify-between text-[11px]">
                        <div class="font-mono font-bold truncate max-w-[200px]">${activeMenu.name}</div>
                        <div class="text-slate-300 shrink-0 font-medium">${activeMenu.size_width || 2500} × ${activeMenu.size_height || 843} px</div>
                      </div>
                    </div>
                  ` : `
                    <div class="p-6 rounded-xl border border-dashed border-slate-300 bg-white text-center">
                      <div class="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center mx-auto mb-2">
                        <i data-lucide="image-off" class="w-5 h-5"></i>
                      </div>
                      <div class="text-xs font-bold text-slate-800">บอทตัวนี้ยังไม่ได้เปิดใช้งาน Rich Menu</div>
                      <p class="text-[11px] text-slate-600 mt-1 mb-3">สร้าง Rich Menu เพื่อให้ประชาชนกดเมนูลัดแจ้งปัญหาได้สะดวก</p>
                      <button type="button" onclick="window.app.switchTab('richmenu')" class="min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-2xs">
                        <i data-lucide="plus" class="w-4 h-4"></i>
                        <span>ออกแบบ Rich Menu ให้บอทตัวนี้</span>
                      </button>
                    </div>
                  `}
                </div>

                ${activeMenu ? `
                  <!-- Actions for this rich menu -->
                  <div class="mt-3.5 pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2 flex-wrap">
                    <div class="text-[11px] text-slate-700 font-medium truncate">
                      แท็บแชท: <strong class="text-slate-900">${activeMenu.chat_bar_text || 'เมนูหลัก'}</strong>
                    </div>
                    <div class="flex items-center gap-2">
                      <button type="button" class="min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-slate-900" onclick="window.app.switchTab('richmenu');">
                        <i data-lucide="pencil" class="w-3.5 h-3.5 text-blue-600"></i>
                        <span>แก้ไขเมนูนี้</span>
                      </button>
                      <button type="button" class="min-h-[44px] px-3.5 py-1.5 rounded-xl text-xs font-bold bg-purple-100 text-purple-950 border border-purple-300 hover:bg-purple-200 transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-purple-600" onclick="window.app.switchTab('simulator')">
                        <i data-lucide="smartphone" class="w-3.5 h-3.5 text-purple-700"></i>
                        <span>ทดลองกดบนมือถือ</span>
                      </button>
                    </div>
                  </div>
                ` : ''}
              </div>

            </div>
          </div>
        `;
        if (window.lucide) lucide.createIcons();
      }

      if (tableBody) {
        tableBody.innerHTML = this.bots.map(bot => {
          const isSelected = this.selectedBot?.bot_id === bot.bot_id;
          const isMain = bot.bot_id === 'Uf8841bc6a36cb709b87582a536150e8d';
          const cleanName = bot.bot_name.replace(/\s*\([^)]*\)/g, '').trim();

          return `
            <tr>
              <td>
                <div class="font-bold text-slate-900 flex items-center gap-2">
                  <img src="${bot.picture_url || 'https://storage.googleapis.com/traffy_public_bucket/traffy_logo/Image_fondue_logo.png'}" alt="Bot Logo" class="w-5 h-5 rounded-md object-contain border border-slate-200" onerror="this.onerror=null; this.src='https://storage.googleapis.com/traffy_public_bucket/traffy_logo/Image_fondue_logo.png';">
                  <span>${cleanName}</span>
                  <span class="text-xs font-mono font-semibold text-slate-600">(${isMain ? '@traffyfondue' : '@583mbpbd'})</span>
                </div>
                <div class="font-mono text-[11px] text-slate-700 mt-0.5 select-all">${bot.bot_id}</div>
              </td>
              <td>
                <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 text-slate-900 border border-slate-300 mr-2">Org #${bot.org_id}</span>
                <span class="font-medium text-slate-800">${bot.org_name}</span>
              </td>
              <td>
                <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-950 border border-emerald-300 inline-flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>${bot.status || 'active'}</span>
                </span>
              </td>
              <td>
                <span class="text-xs font-semibold ${isMain ? 'text-slate-900 bg-slate-100 border-slate-300' : 'text-slate-700 bg-slate-50 border-slate-200'} px-2.5 py-1 rounded-md border inline-block">
                  ${isMain ? 'Production' : 'Sandbox'}
                </span>
              </td>
              <td>
                <button class="min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${isSelected ? 'bg-slate-900 text-white shadow-2xs' : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2" onclick="window.app.selectBot('${bot.bot_id}')">
                  ${isSelected ? '<span class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5"></i><span>กำลังควบคุม</span></span>' : '<span>สลับมาบอทนี้</span>'}
                </button>
              </td>
            </tr>
          `;
        }).join('');
      }
    }

    // --- Database Tables Explorer (DB Viewer) ---
    switchDbTable(tableName) {
      this.currentDbTable = tableName;
      document.querySelectorAll('.db-table-btn').forEach(btn => {
        const isMatch = btn.dataset.table === tableName;
        btn.classList.toggle('btn-primary', isMatch);
        btn.classList.toggle('active', isMatch);
        btn.classList.toggle('btn-secondary', !isMatch);
      });
      const searchInput = document.getElementById('db-table-search-input');
      if (searchInput) searchInput.value = '';
      this.renderDatabaseExplorer(tableName);
    }

    renderDatabaseExplorer(tableName = this.currentDbTable) {
      const thead = document.getElementById('db-explorer-table-head');
      const tbody = document.getElementById('db-explorer-table-body');
      const descText = document.getElementById('db-table-desc-text');
      const countBadge = document.getElementById('db-table-count-badge');
      const modeBadge = document.getElementById('db-mode-badge');

      if (!thead || !tbody) return;

      if (modeBadge) {
        modeBadge.textContent = window.apiClient.isLive ? 'Live API (PostgREST)' : 'Mockup (table.sql)';
        modeBadge.className = window.apiClient.isLive ? 'badge badge-green' : 'badge badge-cyan';
      }

      if (tableName === 'state') {
        if (descText) descText.innerHTML = '<strong>public.state</strong>: กำหนด Finite State Machine สำหรับเปลี่ยน State และดึง Action เมื่อผู้ใช้ส่ง Event เข้ามา';
        if (countBadge) countBadge.textContent = `${this.states.length} แถว`;

        thead.innerHTML = `
          <tr>
            <th style="width:70px;">stateID</th>
            <th>State Name</th>
            <th>Event Trigger</th>
            <th>Action List ID</th>
            <th>Next State</th>
            <th>Org ID</th>
            <th>คำอธิบายคำถาม / Note</th>
            <th>สถานะ</th>
            <th style="width:110px;">การกระทำ</th>
          </tr>
        `;

        tbody.innerHTML = this.states.map(s => `
          <tr data-search="${(s.stateName + ' ' + s.eventType + ' ' + (s.eventMessageType || '') + ' ' + (s.postbackData || '') + ' ' + (s.questionName || '')).toLowerCase()}">
            <td><strong style="color:var(--text-muted);">#${s.stateID}</strong></td>
            <td><code style="font-weight:700; color:var(--traffy-cyan);">${s.stateName}</code></td>
            <td>
              <span class="badge badge-purple">${s.eventType}${s.eventMessageType ? `:${s.eventMessageType}` : ''}</span>
              ${s.postbackData ? `<code style="font-size:10.5px; margin-left:4px;">${s.postbackData}</code>` : ''}
            </td>
            <td>
              <button class="btn btn-secondary btn-sm" onclick="window.app.jumpToAction(${s.actionListID})" title="คลิกเพื่อเปิดดู Action List ใน Action Pipeline">
                #${s.actionListID}
              </button>
            </td>
            <td><code style="color:var(--traffy-green);">${s.nextStateName || '-'}</code></td>
            <td><span class="badge badge-cyan">Org #${s.orgID}</span></td>
            <td>
              <div style="font-size:12px; font-weight:600; color:var(--text-primary);">${s.questionName || '-'}</div>
              <div style="font-size:11px; color:var(--text-muted);">${s.note || ''}</div>
            </td>
            <td>
              ${s.is_active !== false 
                ? '<span class="badge badge-green">active</span>' 
                : '<span class="badge badge-danger">แถวซ้ำ (inactive)</span>'}
            </td>
            <td>
              <button class="btn btn-secondary btn-sm" onclick="window.app.showStateInspectorById(${s.stateID})" title="แก้ไข State นี้">
                แก้ไข
              </button>
            </td>
          </tr>
        `).join('');

      } else if (tableName === 'action-list') {
        const allActions = [];
        for (const [actionGrp, list] of Object.entries(this.actionLists)) {
          for (const item of list) {
            allActions.push({ ...item, actionGroup: actionGrp });
          }
        }
        allActions.sort((a, b) => (parseInt(a.action, 10) - parseInt(b.action, 10)) || (a.order - b.order));

        if (descText) descText.innerHTML = '<strong>public."action-list"</strong>: ชุดคำสั่ง (Action Pipeline) ที่บอทประมวลผลตามลำดับ order ทีละขั้นตอน';
        if (countBadge) countBadge.textContent = `${allActions.length} คำสั่ง`;

        thead.innerHTML = `
          <tr>
            <th style="width:75px;">actionID</th>
            <th>action (Group)</th>
            <th>order</th>
            <th>actionType</th>
            <th>payload</th>
            <th>quickReplyPayload</th>
            <th>flexPayload</th>
            <th>แจ้งเตือน</th>
            <th style="width:110px;">การกระทำ</th>
          </tr>
        `;

        tbody.innerHTML = allActions.map(a => {
          const payloadPreview = (a.payload || '-').length > 50 ? (a.payload.substring(0, 50) + '...') : (a.payload || '-');
          const hasQr = Boolean(a.quickReplyPayload);
          const hasFlex = Boolean(a.flexPayload);

          return `
            <tr data-search="${(a.actionID + ' ' + a.action + ' ' + a.actionType + ' ' + (a.payload || '')).toLowerCase()}">
              <td><strong style="color:var(--text-muted);">#${a.actionID}</strong></td>
              <td><span class="badge badge-purple">Group #${a.action}</span></td>
              <td><strong style="color:var(--traffy-green);">Step ${a.order}</strong></td>
              <td><span class="badge badge-cyan">${a.actionType}</span></td>
              <td>
                <span class="clickable-cell" onclick="window.app.showPayloadModal('Payload - Action #${a.actionID} (${a.actionType})', ${JSON.stringify(a.payload || '')})" title="คลิกเพื่อดูเนื้อหาเต็ม" style="cursor:pointer; text-decoration:underline;">
                  <code>${this.escapeHtml(payloadPreview)}</code> 
                </span>
              </td>
              <td>
                ${hasQr 
                  ? `<span class="badge badge-green" style="cursor:pointer;" onclick="window.app.showPayloadModal('Quick Reply - Action #${a.actionID}', ${JSON.stringify(a.quickReplyPayload)})">Quick Reply </span>` 
                  : '<span class="badge badge-gray" style="opacity:0.4;">-</span>'}
              </td>
              <td>
                ${hasFlex 
                  ? `<span class="badge badge-cyan" style="cursor:pointer;" onclick="window.app.showPayloadModal('Flex Payload - Action #${a.actionID}', ${JSON.stringify(a.flexPayload)})">Flex Message </span>` 
                  : '<span class="badge badge-gray" style="opacity:0.4;">-</span>'}
              </td>
              <td>${a.notification_disabled ? 'ปิด' : 'ปกติ'}</td>
              <td>
                <button class="btn btn-secondary btn-sm" onclick="window.app.editActionStep(${a.action}, ${a.actionID})">
                  แก้ไข
                </button>
              </td>
            </tr>
          `;
        }).join('');

      } else if (tableName === 'bot_config' || tableName === 'line_bots') {
        if (descText) descText.innerHTML = '<strong>public.bot_config</strong>: ทะเบียนคอนฟิก LINE Bot ในระบบ PostgreSQL สำหรับกำหนด State เริ่มต้น (init_state) และ Token';
        if (countBadge) countBadge.textContent = `${this.bots.length} บอท`;

        thead.innerHTML = `
          <tr>
            <th style="width:50px;">id</th>
            <th>nickname</th>
            <th>bot_id</th>
            <th>org_id</th>
            <th>init_state</th>
            <th>channel_access_token</th>
            <th>webhook_chat_pubsubtopic</th>
            <th style="width:110px;">การกระทำ</th>
          </tr>
        `;

        tbody.innerHTML = this.bots.map((bot, index) => {
          const isSelected = this.selectedBot?.bot_id === bot.bot_id;
          const tokenPreview = (bot.channel_access_token || '').slice(0, 16) + '...';
          const pubsub = bot.webhook_chat_pubsubtopic || 'projects/traffy-fondue/topics/line-inbound';
          const initState = bot.init_state || bot.entry_state || 'standby';
          const nickname = bot.nickname || bot.bot_name;

          return `
            <tr data-search="${(bot.bot_id + ' ' + nickname + ' ' + (bot.org_name || '') + ' ' + bot.org_id).toLowerCase()}">
              <td><strong>${bot.id || (index + 1)}</strong></td>
              <td><strong class="text-slate-900">${nickname}</strong></td>
              <td><code class="font-mono text-[11px] text-slate-700 select-all">${bot.bot_id}</code></td>
              <td><span class="badge badge-cyan">Org #${bot.org_id}</span></td>
              <td><code class="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">${initState}</code></td>
              <td><code class="font-mono text-[10px] text-slate-600 truncate max-w-[120px] inline-block select-all">${tokenPreview}</code></td>
              <td><span class="text-[11px] font-mono text-slate-600 truncate max-w-[150px] inline-block">${pubsub}</span></td>
              <td>
                <button class="btn btn-secondary btn-sm flex items-center gap-1.5" onclick="window.app.selectBot('${bot.bot_id}')">
                  ${isSelected ? '<span class="flex items-center gap-1"><i data-lucide="check" class="w-3.5 h-3.5"></i><span>กำลังเลือก</span></span>' : '<span>เลือกบอทนี้</span>'}
                </button>
              </td>
            </tr>
          `;
        }).join('');

      } else if (tableName === 'bot_error_logs') {
        const logs = window.MOCK_DATA.errorLogs || [];
        if (descText) descText.innerHTML = '<strong>public.bot_error_logs</strong>: บันทึกประวัติ Error และ Exception จาก Core Bot';
        if (countBadge) countBadge.textContent = `${logs.length} รายการ`;

        thead.innerHTML = `
          <tr>
            <th style="width:70px;">ID</th>
            <th>Bot ID</th>
            <th>State Name</th>
            <th>Error Type</th>
            <th>ข้อความแจ้งเตือน</th>
            <th>วันเวลา</th>
          </tr>
        `;

        tbody.innerHTML = logs.map(l => `
          <tr data-search="${(l.id + ' ' + l.state_name + ' ' + l.error_type + ' ' + l.message).toLowerCase()}">
            <td><strong>#${l.id}</strong></td>
            <td><code style="font-size:11px;">${l.bot_id}</code></td>
            <td><code>${l.state_name}</code></td>
            <td><span class="badge badge-danger">${l.error_type}</span></td>
            <td style="font-size:12px; color:var(--text-secondary);">${l.message}</td>
            <td style="font-size:11px; color:var(--text-muted);">${l.created_at}</td>
          </tr>
        `).join('');

      } else if (tableName === 'rich_menus') {
        const menus = window.richMenuManager ? window.richMenuManager.richMenus : (window.MOCK_DATA.richMenus || []);
        if (descText) descText.innerHTML = '<strong>public.rich_menus</strong>: ทะเบียนและการตั้งค่า LINE Rich Menu ของแต่ละบอท พร้อมพิกัด Areas (jsonb)';
        if (countBadge) countBadge.textContent = `${menus.length} รายการ`;

        thead.innerHTML = `
          <tr>
            <th style="width:60px;">ID</th>
            <th>Rich Menu ID</th>
            <th>ชื่อเมนู</th>
            <th>Chat Bar Text</th>
            <th>ขนาด (px)</th>
            <th>Mode</th>
            <th>Default</th>
            <th>สถานะ</th>
            <th style="width:110px;">การกระทำ</th>
          </tr>
        `;

        tbody.innerHTML = menus.map(m => `
          <tr data-search="${(m.id + ' ' + m.rich_menu_id + ' ' + m.name + ' ' + m.chat_bar_text + ' ' + m.mode).toLowerCase()}">
            <td><strong>#${m.id}</strong></td>
            <td><code style="font-size:11px; color:var(--traffy-cyan);">${m.rich_menu_id}</code></td>
            <td><strong>${m.name}</strong></td>
            <td>${m.chat_bar_text}</td>
            <td><span class="badge badge-purple">${m.size_width}x${m.size_height}</span></td>
            <td><span class="badge badge-cyan">${m.mode}</span></td>
            <td>${m.is_default ? '<span class="badge badge-green">Default</span>' : '<span style="color:var(--text-muted);">-</span>'}</td>
            <td>${m.is_active ? '<span class="badge badge-green">Active</span>' : '<span class="badge badge-gray">Inactive</span>'}</td>
            <td style="width:160px;">
              <div style="display:flex; gap:4px;">
                <button class="btn btn-primary btn-sm" onclick="window.app.switchTab('richmenu'); window.richMenuManager.inspectId('${m.rich_menu_id}');" title="ตรวจสอบ JSON Body & รูปภาพ">
                   ตรวจสอบ
                </button>
                <button class="btn btn-secondary btn-sm" onclick="window.app.switchTab('richmenu'); window.richMenuManager.prefillFlood('${m.rich_menu_id}');" title="นำ ID ไปฟลัดหา Users">
                  ส่งข้อความ
                </button>
              </div>
            </td>
          </tr>
        `).join('');

      } else if (tableName === 'rich_menu_flood_logs') {
        const logs = window.richMenuManager ? window.richMenuManager.floodLogs : (window.MOCK_DATA.richMenuFloodLogs || []);
        if (descText) descText.innerHTML = '<strong>public.rich_menu_flood_logs</strong>: ประวัติการเปลี่ยน ID และฟลัด Rich Menu ไปยังผู้ใช้งาน (Audit Trail)';
        if (countBadge) countBadge.textContent = `${logs.length} รายการ`;

        thead.innerHTML = `
          <tr>
            <th style="width:60px;">ID</th>
            <th>ประเภท Action</th>
            <th>Target Rich Menu ID</th>
            <th>Old Rich Menu ID</th>
            <th>จำนวนเป้าหมาย</th>
            <th>สำเร็จ</th>
            <th>สถานะ</th>
            <th>LINE Request ID</th>
            <th>วันเวลา</th>
          </tr>
        `;

        tbody.innerHTML = logs.map(l => `
          <tr data-search="${(l.id + ' ' + l.action_type + ' ' + l.rich_menu_id + ' ' + (l.old_rich_menu_id || '') + ' ' + (l.line_request_id || '')).toLowerCase()}">
            <td><strong>#${l.id}</strong></td>
            <td><span class="badge badge-purple">${l.action_type}</span></td>
            <td><code style="font-size:11px; color:var(--traffy-green);">${l.rich_menu_id}</code></td>
            <td><code style="font-size:11px; color:var(--text-muted);">${l.old_rich_menu_id || '-'}</code></td>
            <td><strong>${(l.target_user_count || 0).toLocaleString()}</strong></td>
            <td><strong style="color:var(--traffy-green);">${(l.success_user_count || 0).toLocaleString()}</strong></td>
            <td>
              ${l.status === 'succeeded' ? '<span class="badge badge-green">สำเร็จ</span>' : (l.status === 'failed' ? '<span class="badge badge-danger">ล้มเหลว</span>' : '<span class="badge badge-cyan">กำลังทำ</span>')}
            </td>
            <td><code style="font-size:10.5px; color:var(--text-muted);">${l.line_request_id || '-'}</code></td>
            <td style="font-size:11px; color:var(--text-muted);">${l.created_at || '-'}</td>
          </tr>
        `).join('');

      } else if (tableName === 'datastore_bot') {
        const botConfig = window.apiClient ? window.apiClient.getDatastoreBotConfig(this.selectedBot?.bot_id) : window.MOCK_DATA.datastoreBotConfig;
        if (descText) descText.innerHTML = '<strong>Datastore Studio Bot Config</strong>: ข้อมูลบอทและ Rich Menu ที่ดึงมาจาก Google Cloud Datastore Studio (Hardcoded Entity Preset)';
        if (countBadge) countBadge.textContent = '1 Datastore Entity';

        thead.innerHTML = `
          <tr>
            <th>Bot ID</th>
            <th>Bot Name</th>
            <th>Org ID</th>
            <th>Channel Access Token</th>
            <th>Rich Menus (Modes)</th>
            <th style="width:120px;">การทำงาน</th>
          </tr>
        `;

        tbody.innerHTML = `
          <tr data-search="${(botConfig.bot_id + ' ' + botConfig.bot_name + ' ' + botConfig.org_id).toLowerCase()}">
            <td><code style="font-family:monospace; color:var(--traffy-green);">${botConfig.bot_id}</code></td>
            <td><strong>${botConfig.bot_name}</strong></td>
            <td><span class="badge badge-cyan">Org #${botConfig.org_id}</span></td>
            <td>
              <div style="font-family:monospace; font-size:11px; max-width:220px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${botConfig.channel_access_token}">
                ${botConfig.channel_access_token.slice(0, 20)}...${botConfig.channel_access_token.slice(-12)}
              </div>
            </td>
            <td>
              <div style="display:flex; flex-direction:column; gap:4px; font-size:11px;">
                ${Object.entries(botConfig.richmenus || {}).map(([mode, m]) => `
                  <div>
                    <span class="badge ${mode === 'normal' ? 'badge-green' : mode === 'alert' ? 'badge-danger' : 'badge-purple'}">${mode}</span>
                    <code>${m.richmenu_id}</code> - ${m.description || m.name}
                  </div>
                `).join('')}
              </div>
            </td>
            <td>
              <button class="btn btn-secondary btn-sm" onclick="window.app.showPayloadModal('Datastore Studio Entity - ${botConfig.bot_id}', ${JSON.stringify(JSON.stringify(botConfig, null, 2))})">
                ดู Raw JSON
              </button>
            </td>
          </tr>
        `;
      }
    }

    filterDbTable() {
      const q = (document.getElementById('db-table-search-input')?.value || '').toLowerCase().trim();
      const rows = document.querySelectorAll('#db-explorer-table-body tr');
      rows.forEach(r => {
        const text = r.dataset.search || r.textContent.toLowerCase();
        r.style.display = (!q || text.includes(q)) ? '' : 'none';
      });
    }

    escapeHtml(text) {
      if (typeof text !== 'string') return text;
      return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    showPayloadModal(title, content) {
      const modal = document.getElementById('payload-inspector-modal');
      const titleEl = document.getElementById('payload-modal-title');
      const codeEl = document.getElementById('payload-modal-code');
      if (!modal || !codeEl) return;

      if (titleEl) titleEl.textContent = title || 'ข้อมูล Payload';

      let displayContent = content;
      if (typeof content === 'string') {
        try {
          const parsed = JSON.parse(content);
          displayContent = JSON.stringify(parsed, null, 2);
        } catch (e) {
          displayContent = content;
        }
      } else if (typeof content === 'object' && content !== null) {
        displayContent = JSON.stringify(content, null, 2);
      }

      if (!displayContent || (typeof displayContent === 'string' && displayContent.trim() === '')) {
        codeEl.textContent = '// (ไม่มีข้อมูล Payload หรือยังไม่ได้กำหนดค่า)';
      } else {
        codeEl.textContent = displayContent;
      }
      this.openModal('payload-inspector-modal');
    }

    copyPayloadToClipboard() {
      const code = document.getElementById('payload-modal-code')?.textContent || '';
      navigator.clipboard.writeText(code).then(() => {
        this.showToast('คัดลอกเนื้อหาลง Clipboard สำเร็จ!', 'success');
      }).catch(() => {
        this.showToast('ไม่สามารถคัดลอกได้', 'error');
      });
    }

    jumpToAction(actionId) {
      this.switchTab('action-pipeline');
      const select = document.getElementById('action-list-picker-select');
      if (select) {
        select.value = actionId;
        this.onActionListSelectChange(actionId);
      }
    }

    showStateInspectorById(stateId) {
      const state = this.states.find(s => s.stateID === stateId);
      if (!state) return;
      this.switchTab('flow-graph');
      this.showStateInspector(state);
    }

    resetMockDatabase() {
      if (!confirm('ต้องการรีเซ็ตข้อมูล Mockup ทั้งหมดกลับสู่ค่าเริ่มต้นตาม table.sql หรือไม่?')) return;
      
      // Clear localStorage
      for (const key of Object.keys(localStorage)) {
        if (key.startsWith('traffy_states_') || key.startsWith('traffy_action_list_') || key === 'traffy_custom_bots') {
          localStorage.removeItem(key);
        }
      }

      // Reload from MOCK_DATA
      this.bots = window.MOCK_DATA.bots;
      const matched = window.MOCK_DATA.states.filter(s => s.botID === this.selectedBot.bot_id);
      this.states = matched.length > 0 ? matched : window.MOCK_DATA.states.map(s => ({
        ...s,
        botID: this.selectedBot.bot_id,
        botName: this.selectedBot.bot_name
      }));
      this.actionLists = window.MOCK_DATA.actionLists;

      if (this.flowGraph) {
        this.flowGraph.render(this.states, this.selectedBot);
      }
      this.renderDashboard();
      this.renderDatabaseExplorer();
      this.showToast('รีเซ็ตข้อมูล Mockup กลับสู่ชุดเริ่มต้นจาก table.sql เรียบร้อยแล้ว! ', 'success');
    }

    // --- Action Pipeline View ---
    renderActionPipelineTab() {
      const select = document.getElementById('action-list-picker-select');
      if (select) {
        const uniqueActions = [...new Set(this.states.map(s => s.actionListID))];
        select.innerHTML = uniqueActions.map(id => {
          const matchState = this.states.find(s => s.actionListID === id);
          return `<option value="${id}">${id} — ${matchState?.questionName || matchState?.stateName || 'Action List'}</option>`;
        }).join('');

        const currentVal = parseInt(select.value, 10) || uniqueActions[0];
        if (currentVal && window.actionPipeline) {
          window.actionPipeline.renderPipeline(currentVal, this.actionLists[currentVal] || [], 'action-pipeline-container');
        }
      }
    }

    onActionListSelectChange(actionId) {
      if (window.actionPipeline) {
        const id = parseInt(actionId, 10);
        window.actionPipeline.renderPipeline(id, this.actionLists[id] || [], 'action-pipeline-container');
      }
    }

    // --- Diagnostics & Migration Matrix ---
    renderDiagnostics() {
      const matrixBody = document.getElementById('migration-matrix-table-body');
      const logsBody = document.getElementById('diagnostics-error-logs-body');

      if (matrixBody) {
        matrixBody.innerHTML = window.MOCK_DATA.migrationMatrix.map(m => {
          let badgeClass = 'badge-green';
          let statusText = 'ย้ายแล้ว / ย้ายได้ทันที';
          if (m.status === 'planned') {
            badgeClass = 'badge-warning';
            statusText = 'วางแผนย้าย';
          } else if (m.status === 'blocked') {
            badgeClass = 'badge-danger';
            statusText = 'คงไว้ที่เดิม';
          }

          return `
            <tr>
              <td><code style="color:var(--text-secondary);">${m.sourceEndpoint}</code></td>
              <td><code style="color:var(--traffy-cyan);">${m.targetEndpoint}</code></td>
              <td>${m.description}</td>
              <td><span class="badge ${badgeClass}">${statusText}</span></td>
              <td style="font-size:11.5px; color:var(--text-muted);">${m.notes}</td>
            </tr>
          `;
        }).join('');
      }

      if (logsBody) {
        logsBody.innerHTML = window.MOCK_DATA.errorLogs.map(l => `
          <tr>
            <td>#${l.id}</td>
            <td><span class="badge badge-danger">${l.error_type}</span></td>
            <td><code>${l.state_name}</code></td>
            <td style="font-size:12px; color:var(--text-secondary);">${l.message}</td>
            <td style="font-size:11px; color:var(--text-muted);">${l.created_at}</td>
          </tr>
        `).join('');
      }
    }

    // --- Settings View ---
    renderSettings() {
      const toggle = document.getElementById('settings-live-mode-toggle');
      const urlInput = document.getElementById('settings-postgrest-url');
      const tokenInput = document.getElementById('settings-jwt-token');

      if (toggle) toggle.checked = window.apiClient.isLive;
      if (urlInput) urlInput.value = window.apiClient.config.baseUrl;
      if (tokenInput) tokenInput.value = window.apiClient.config.jwtToken || '';
    }

    saveSettings() {
      const toggle = document.getElementById('settings-live-mode-toggle');
      const urlInput = document.getElementById('settings-postgrest-url');
      const tokenInput = document.getElementById('settings-jwt-token');

      window.apiClient.saveConfig({
        isLiveMode: toggle?.checked || false,
        baseUrl: urlInput?.value.trim() || 'https://api.traffy.in.th/postgrest',
        jwtToken: tokenInput?.value.trim() || ''
      });

      this.updateModeIndicator();
      this.showToast('บันทึกการตั้งค่าเรียบร้อยแล้ว', 'success');
    }

    updateModeIndicator() {
      const modePill = document.getElementById('app-mode-pill');
      const modeDot = document.getElementById('app-mode-dot');
      const modeText = document.getElementById('app-mode-text');
      const isLive = window.apiClient.isLive;

      if (modeDot) {
        modeDot.className = `mode-dot ${isLive ? 'live' : ''}`;
      }
      if (modeText) {
        modeText.textContent = isLive ? 'LIVE API' : 'SANDBOX MOCK';
      }
    }

    // --- 1-Click Datastore Cache Rebuild ---
    async triggerCacheRebuild() {
      if (!this.selectedBot) return;
      this.showToast('กำลังส่งคำสั่ง Rebuild Datastore Cache...', 'info');

      try {
        const result = await window.apiClient.rebuildDatastoreCache(this.selectedBot.bot_id);
        this.showToast(result.message || 'Rebuild Datastore Cache สำเร็จ!', 'success');
      } catch (e) {
        this.showToast('เกิดข้อผิดพลาดในการ Rebuild Cache: ' + e.message, 'error');
      }
    }

    // --- Export / Backup ---
    exportDatabaseJSON() {
      const dump = {
        exportedAt: new Date().toISOString(),
        bot: this.selectedBot,
        states: this.states,
        actionLists: this.actionLists
      };

      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dump, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `bot_backup_${this.selectedBot?.bot_id || 'dump'}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      this.showToast('Export ข้อมูล JSON สำเร็จ', 'success');
    }

    // --- Modals & Popups ---
    showStateInspector(state) {
      const drawer = document.getElementById('state-inspector-drawer');
      if (!drawer) return;

      document.getElementById('inspector-state-id').textContent = `#${state.stateID}`;
      document.getElementById('inspector-form-isactive').checked = state.is_active !== false;
      document.getElementById('inspector-form-statename').value = state.stateName;
      document.getElementById('inspector-form-eventtype').value = state.eventType;
      document.getElementById('inspector-form-messagetype').value = state.eventMessageType || '';
      document.getElementById('inspector-form-postback').value = state.postbackData || '';
      document.getElementById('inspector-form-nextstatename').value = state.nextStateName || '';
      document.getElementById('inspector-form-postback-selected').value = state.postBackDataSelectedValue || '';
      document.getElementById('inspector-form-actionid').value = state.actionListID;
      document.getElementById('inspector-form-question').value = state.questionName || '';
      document.getElementById('inspector-form-note').value = state.note || '';

      // Populate datalist with all states in this bot
      const datalist = document.getElementById('all-states-datalist');
      if (datalist) {
        const uniqueNames = [...new Set(this.states.map(s => s.stateName))];
        datalist.innerHTML = uniqueNames.map(name => `<option value="${name}">`).join('') + '<option value="end">';
      }

      // Display timestamps
      const tsEl = document.getElementById('inspector-timestamps');
      if (tsEl) {
        const created = state.created_at || '2026-01-10 10:00:00';
        const updated = state.updated_at || state.created_at || '2026-09-30 18:00:00';
        tsEl.innerHTML = `Created: <code>${created}</code> | Updated: <code>${updated}</code>`;
      }

      this.validateStateFormLive();
      drawer.classList.remove('collapsed');
    }

    validateStateFormLive() {
      const stateId = parseInt(document.getElementById('inspector-state-id')?.textContent.replace('#', '') || '0', 10);
      const stateName = document.getElementById('inspector-form-statename')?.value.trim();
      const eventType = document.getElementById('inspector-form-eventtype')?.value;
      const msgType = document.getElementById('inspector-form-messagetype')?.value.trim() || '';
      const postback = document.getElementById('inspector-form-postback')?.value.trim() || '';

      const warnEl = document.getElementById('inspector-duplicate-warning');
      const saveBtn = document.getElementById('inspector-save-btn');
      if (!warnEl) return;

      const collision = this.states.find(s => 
        s.stateID !== stateId &&
        s.stateName === stateName &&
        s.eventType === eventType &&
        (s.eventMessageType || '') === msgType &&
        (s.postbackData || '') === postback
      );

      if (collision) {
        warnEl.style.display = 'block';
        warnEl.innerHTML = ` <strong>พบเงื่อนไขซ้ำซ้อน:</strong> ชนกับ State <strong>#${collision.stateID}</strong> ('${collision.stateName}') ในคู่ (eventType=${eventType}, msgType=${msgType || 'null'}, postback=${postback || 'null'}). กรุณาเปลี่ยนชื่อหรือเงื่อนไขเพื่อไม่ให้เกิดบั๊ค Action สลับกัน!`;
        if (saveBtn) saveBtn.classList.add('btn-danger');
      } else {
        warnEl.style.display = 'none';
        if (saveBtn) saveBtn.classList.remove('btn-danger');
      }
    }

    closeStateInspector() {
      const drawer = document.getElementById('state-inspector-drawer');
      if (drawer) drawer.classList.add('collapsed');
    }

    async saveInspectedState() {
      const stateId = parseInt(document.getElementById('inspector-state-id').textContent.replace('#', ''), 10);
      const state = this.states.find(s => s.stateID === stateId);
      if (!state) return;

      state.is_active = document.getElementById('inspector-form-isactive').checked;
      state.stateName = document.getElementById('inspector-form-statename').value.trim();
      state.eventType = document.getElementById('inspector-form-eventtype').value;
      state.eventMessageType = document.getElementById('inspector-form-messagetype').value.trim() || null;
      state.postbackData = document.getElementById('inspector-form-postback').value.trim() || null;
      state.nextStateName = document.getElementById('inspector-form-nextstatename').value.trim() || null;
      state.postBackDataSelectedValue = document.getElementById('inspector-form-postback-selected').value.trim() || null;
      state.actionListID = parseInt(document.getElementById('inspector-form-actionid').value, 10);
      state.questionName = document.getElementById('inspector-form-question').value.trim();
      state.note = document.getElementById('inspector-form-note').value.trim();
      state.updated_at = new Date().toISOString().replace('T', ' ').substring(0, 19);

      await window.apiClient.saveState(state);
      this.closeStateInspector();
      if (this.flowGraph) this.flowGraph.render(this.states, this.selectedBot);
      this.showToast('บันทึก State สำเร็จ!', 'success');
    }

    // --- Action Editor Modal Methods ---
    showNewActionModal(actionGroup) {
      const modal = document.getElementById('action-editor-modal');
      if (!modal) return;

      document.getElementById('action-modal-title').textContent = 'เพิ่ม Action Step ใหม่';
      document.getElementById('action-modal-badge-action-id').textContent = `Group #${actionGroup}`;
      document.getElementById('action-form-actionid').value = '';
      document.getElementById('action-form-actiongroup').value = actionGroup;

      const actions = this.actionLists[actionGroup] || [];
      document.getElementById('action-form-order').value = actions.length + 1;
      document.getElementById('action-form-type').value = 'replyBackToUser';
      document.getElementById('action-form-notification-disabled').checked = false;
      document.getElementById('action-form-payload').value = '';
      document.getElementById('action-form-flexpayload').value = '';
      document.getElementById('action-form-quickreply').value = '';

      this.onActionTypeChange('replyBackToUser');
      this.onFlexPayloadInput();
      modal.classList.add('active');
    }

    editAction(actionId) {
      let foundAction = null;
      for (const group in this.actionLists) {
        const item = (this.actionLists[group] || []).find(a => a.actionID === actionId);
        if (item) { foundAction = item; break; }
      }
      if (!foundAction) return;

      const modal = document.getElementById('action-editor-modal');
      if (!modal) return;

      document.getElementById('action-modal-title').textContent = `แก้ไข Action Step #${foundAction.actionID}`;
      document.getElementById('action-modal-badge-action-id').textContent = `Group #${foundAction.action}`;
      document.getElementById('action-form-actionid').value = foundAction.actionID;
      document.getElementById('action-form-actiongroup').value = foundAction.action;
      document.getElementById('action-form-order').value = foundAction.order || 1;
      document.getElementById('action-form-type').value = foundAction.actionType || 'replyBackToUser';
      document.getElementById('action-form-notification-disabled').checked = Boolean(foundAction.notification_disabled);
      document.getElementById('action-form-payload').value = foundAction.payload || '';

      const flexStr = typeof foundAction.flexPayload === 'object' ? JSON.stringify(foundAction.flexPayload, null, 2) : (foundAction.flexPayload || '');
      const qrStr = typeof foundAction.quickReplyPayload === 'object' ? JSON.stringify(foundAction.quickReplyPayload, null, 2) : (foundAction.quickReplyPayload || '');

      document.getElementById('action-form-flexpayload').value = flexStr;
      document.getElementById('action-form-quickreply').value = qrStr;

      this.onActionTypeChange(foundAction.actionType);
      this.onFlexPayloadInput();
      modal.classList.add('active');
    }

    onActionTypeChange(type) {
      const flexGroup = document.getElementById('action-form-flex-group');
      const payloadLabel = document.getElementById('action-form-payload-label');

      if (type === 'flexPayload' || type === 'carousel-chunked') {
        if (flexGroup) flexGroup.style.display = 'block';
        if (payloadLabel) payloadLabel.textContent = 'คำอธิบาย Flex (Alt Text)';
      } else if (type === 'api-call') {
        if (flexGroup) flexGroup.style.display = 'none';
        if (payloadLabel) payloadLabel.textContent = 'API Endpoint URL (เช่น https://api.traffy.in.th/...)';
      } else {
        if (flexGroup) flexGroup.style.display = 'none';
        if (payloadLabel) payloadLabel.textContent = 'ข้อความตอบกลับ (Text Payload)';
      }
    }

    onFlexPayloadInput() {
      const val = document.getElementById('action-form-flexpayload')?.value || '';
      const bytes = window.actionPipeline ? window.actionPipeline.calculateByteLength(val) : val.length;
      const byteBadge = document.getElementById('action-form-flex-bytes');
      if (byteBadge) {
        byteBadge.textContent = `${bytes.toLocaleString()} / 48,000 bytes`;
        byteBadge.className = `badge ${bytes > 48000 ? 'badge-danger' : 'badge-green'}`;
      }
    }

    formatActionJsonField(fieldId) {
      const field = document.getElementById(fieldId);
      if (!field || !field.value.trim()) return;
      try {
        const parsed = JSON.parse(field.value);
        field.value = JSON.stringify(parsed, null, 2);
        this.onFlexPayloadInput();
        this.showToast('จัดรูปแบบ JSON สำเร็จ', 'success');
      } catch (e) {
        alert('Invalid JSON: ' + e.message);
      }
    }

    async saveActionFromModal() {
      const actionIdVal = document.getElementById('action-form-actionid').value;
      const actionGroup = parseInt(document.getElementById('action-form-actiongroup').value, 10);
      const actionType = document.getElementById('action-form-type').value;
      const order = parseInt(document.getElementById('action-form-order').value, 10) || 1;
      const notificationDisabled = document.getElementById('action-form-notification-disabled').checked;
      const payload = document.getElementById('action-form-payload').value;
      const flexPayloadRaw = document.getElementById('action-form-flexpayload').value.trim();
      const quickReplyRaw = document.getElementById('action-form-quickreply').value.trim();

      // Validate JSON if provided
      let flexPayload = null;
      if (flexPayloadRaw) {
        try {
          JSON.parse(flexPayloadRaw);
          flexPayload = flexPayloadRaw;
        } catch (e) {
          alert('Flex Message Payload เป็น JSON ไม่ถูกต้อง: ' + e.message);
          return;
        }
      }

      let quickReplyPayload = null;
      if (quickReplyRaw) {
        try {
          JSON.parse(quickReplyRaw);
          quickReplyPayload = quickReplyRaw;
        } catch (e) {
          alert('Quick Reply Payload เป็น JSON ไม่ถูกต้อง: ' + e.message);
          return;
        }
      }

      const actionData = {
        actionID: actionIdVal ? parseInt(actionIdVal, 10) : undefined,
        action: actionGroup,
        order: order,
        actionType: actionType,
        payload: payload,
        flexPayload: flexPayload,
        quickReplyPayload: quickReplyPayload,
        notification_disabled: notificationDisabled,
        updated_at: new Date().toISOString().replace('T', ' ').substring(0, 19)
      };

      await window.apiClient.saveAction(actionData);
      this.closeModal('action-editor-modal');

      // Refresh Action List view
      const updatedList = await window.apiClient.getActionList(actionGroup);
      this.actionLists[actionGroup] = updatedList;
      if (window.actionPipeline) {
        window.actionPipeline.renderPipeline(actionGroup, updatedList, 'action-pipeline-container');
      }
      this.showToast('บันทึก Action สำเร็จ!', 'success');
    }

    showLocationPickerModal() {
      const modal = document.getElementById('location-picker-modal');
      if (modal) modal.classList.add('active');
    }

    openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
        if (window.lucide) lucide.createIcons();
      }
    }

    openGuideModal(section) {
      this.openModal('guide-modal');
      if (section) {
        const el = document.getElementById(`guide-sec-${section}`);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        }
      }
    }

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove('active');
    }

    sendSelectedLocation(name, address, lat, lng) {
      if (window.lineSimulator) {
        window.lineSimulator.handleUserLocation(name, address, lat, lng);
      }
      this.closeModal('location-picker-modal');
    }

    // --- Toast Alert Helper ---
    showToast(message, type = 'success') {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = `flex items-center gap-2.5 px-4 py-2.5 rounded-xl shadow-lg text-xs font-bold transition-all duration-300 pointer-events-auto border ${
        type === 'success' ? 'bg-slate-900 text-white border-slate-700' :
        type === 'error' ? 'bg-rose-900 text-white border-rose-700' :
        type === 'warning' ? 'bg-amber-900 text-white border-amber-700' :
        'bg-slate-900 text-white border-slate-700'
      }`;
      const iconName = type === 'success' ? 'check' : (type === 'error' ? 'x' : (type === 'warning' ? 'alert-triangle' : 'info'));
      toast.innerHTML = `<span class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
        type === 'success' ? 'bg-emerald-500/20 text-emerald-400' :
        type === 'error' ? 'bg-rose-500/20 text-rose-400' :
        'bg-blue-500/20 text-blue-400'
      }"><i data-lucide="${iconName}" class="w-3.5 h-3.5"></i></span><span>${message}</span>`;
      container.appendChild(toast);
      if (window.lucide) lucide.createIcons();

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(8px)';
        setTimeout(() => toast.remove(), 250);
      }, 3000);
    }

    // --- Global Event Listeners ---
    initEventListeners() {
      // Sidebar Navigation clicks
      document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          this.switchTab(item.dataset.tab);
        });
      });

      // Send Chat Message on Enter
      const chatInput = document.getElementById('simulator-text-input');
      if (chatInput) {
        chatInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            const text = chatInput.value;
            chatInput.value = '';
            if (window.lineSimulator) window.lineSimulator.handleUserText(text);
          }
        });
      }

      const sendBtn = document.getElementById('simulator-send-btn');
      if (sendBtn) {
        sendBtn.addEventListener('click', () => {
          if (chatInput && window.lineSimulator) {
            const text = chatInput.value;
            chatInput.value = '';
            window.lineSimulator.handleUserText(text);
          }
        });
      }
    }
  }

  window.app = new BotStudioApp();
})();
