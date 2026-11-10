/**
 * Traffy Fondue Internal Website — Rich Menu Manager Suite
 * Redesigned: 4-Step Guided Wizard + Advanced Catalog & Developer JSON Inspector
 */

class RichMenuManager {
  constructor() {
    this.richMenus = [];
    this.floodLogs = [];
    this.currentBot = null;
    this.activeView = 'wizard'; // 'wizard' | 'catalog' | 'inspect'
    this.currentStep = 1; // 1 | 2 | 3 | 4
    this.selectedMenu = null;

    // Wizard Creation / Edit Draft State
    this.builder = {
      name: 'richmenu-custom-' + new Date().toISOString().slice(0, 10),
      chatBarText: 'เมนูแจ้งปัญหา',
      sizePreset: 'compact', // 'compact' (2500x843) | 'full' (2500x1686)
      width: 2500,
      height: 843,
      presetGrid: '3cols', // '3cols' | '6grid' | '4grid' | '2cols'
      imageFile: null,
      imageDataUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200',
      areas: [
        {
          bounds: { x: 0, y: 0, width: 833, height: 843 },
          action: { type: 'postback', label: 'แจ้งเรื่องกองขยะ', data: 'floodwaste-new-report', displayText: 'แจ้งเรื่องกองขยะน้ำท่วม' }
        },
        {
          bounds: { x: 833, y: 0, width: 834, height: 843 },
          action: { type: 'message', label: 'ติดตามสถานะ', text: 'ติดตามสถานะเรื่องแจ้ง' }
        },
        {
          bounds: { x: 1667, y: 0, width: 833, height: 843 },
          action: { type: 'uri', label: 'แดชบอร์ดเมือง', uri: 'https://city.traffy.in.th' }
        }
      ]
    };

    // Publish options (Step 4)
    this.publishOptions = {
      targetMode: 'default', // 'default' | 'switch' | 'flood'
      oldRichMenuId: '',
      floodUserIds: '',
      isSimulating: false
    };

    // Inspector
    this.inspector = {
      searchId: '',
      currentMenu: null,
      rawJson: null
    };
  }

  init(bot) {
    this.currentBot = bot || window.MOCK_DATA.bots[0];
    this.loadData();
    this.selectedMenu = this.richMenus[0] || null;
    if (this.selectedMenu) {
      this.publishOptions.oldRichMenuId = this.selectedMenu.rich_menu_id;
    }
  }

  getMenuImage(m) {
    if (!m) return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600';
    const id = m.rich_menu_id || m.richmenu_id;
    if (id) {
      return `./assets/richmenus/${id}.png`;
    }
    return m.image_url || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600';
  }

  loadData() {
    // Sync freshly from window.MOCK_DATA to ensure real downloaded images are loaded
    const mockMap = new Map((window.MOCK_DATA.richMenus || []).map(m => [m.rich_menu_id, m]));
    const savedMenus = localStorage.getItem('traffy_rich_menus');
    if (savedMenus) {
      try {
        const parsed = JSON.parse(savedMenus);
        // update image_url from mockMap or real asset path
        parsed.forEach(p => {
          const m = mockMap.get(p.rich_menu_id);
          p.image_url = this.getMenuImage(p);
        });
        (window.MOCK_DATA.richMenus || []).forEach(m => {
          if (!parsed.some(x => x.rich_menu_id === m.rich_menu_id)) {
            parsed.push(m);
          }
        });
        this.richMenus = parsed;
      } catch (e) {
        this.richMenus = window.MOCK_DATA.richMenus || [];
      }
    } else {
      this.richMenus = window.MOCK_DATA.richMenus || [];
    }

    const savedLogs = localStorage.getItem('traffy_rich_menu_flood_logs');
    if (savedLogs) {
      try {
        this.floodLogs = JSON.parse(savedLogs);
      } catch (e) {
        this.floodLogs = window.MOCK_DATA.richMenuFloodLogs || [];
      }
    } else {
      this.floodLogs = window.MOCK_DATA.richMenuFloodLogs || [];
    }
  }

  saveData() {
    localStorage.setItem('traffy_rich_menus', JSON.stringify(this.richMenus));
    localStorage.setItem('traffy_rich_menu_flood_logs', JSON.stringify(this.floodLogs));
  }

  // ==========================================
  // MASTER RENDER
  // ==========================================
  renderTab() {
    const container = document.getElementById('tab-richmenu');
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-4">

        <!-- Rich Menu Contextual Quick Guide Banner -->
        <div class="bg-blue-50/90 border border-blue-200 rounded-2xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div class="flex items-start sm:items-center gap-2.5 min-w-0">
            <div class="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <i data-lucide="layout-grid" class="w-4 h-4"></i>
            </div>
            <div class="min-w-0">
              <div class="font-bold text-slate-900 text-xs sm:text-sm">วิธีจัดการ LINE Rich Menu (เมนูกดบนมือถือ)</div>
              <p class="text-slate-700 font-medium mt-0.5 leading-relaxed">
                1. เลือกเทมเพลตช่องปุ่ม • 2. กำหนดรูปภาพและสีปุ่ม • 3. ตั้งคำสั่งกดปุ่ม (เช่น เปิดลิงก์แจ้งเรื่อง หรือพิมพ์คำสั่งอัตโนมัติ) • 4. กดบันทึก & ตั้งเป็นเมนูเริ่มต้น
              </p>
            </div>
          </div>
          <button type="button" class="min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white text-blue-950 border border-blue-300 hover:bg-blue-50 transition-all shrink-0 cursor-pointer shadow-2xs" onclick="window.app.openGuideModal('richmenu')">
            <span>อ่านวิธีตั้งค่า Rich Menu →</span>
          </button>
        </div>

        <!-- Top Navigation View Selector (Wizard vs Catalog vs Inspector) -->
        <section class="bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full">
            <div class="min-w-0">
              <h1 class="text-xs sm:text-sm font-bold text-slate-900 leading-tight block truncate">จัดการ LINE Rich Menu</h1>
              <span class="text-xs text-slate-700 font-medium">ระบบออกแบบ ตรวจสอบ และเผยแพร่เมนูสำหรับ LINE Official Account</span>
            </div>

            <!-- View Switcher -->
            <div class="inline-flex items-center gap-1 sm:gap-1.5 p-1 bg-slate-50/90 rounded-xl border border-slate-200/70 overflow-x-auto no-scrollbar shrink-0">
              <button type="button" class="cat-pill py-2 px-3 sm:px-3.5 rounded-lg text-xs font-semibold ${this.activeView === 'wizard' ? 'bg-slate-900 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900 hover:bg-white'} transition-all whitespace-nowrap cursor-pointer" onclick="window.richMenuManager.switchView('wizard')">
                ขั้นตอนการตั้งค่า (Wizard)
              </button>
              <button type="button" class="cat-pill py-2 px-3 sm:px-3.5 rounded-lg text-xs font-semibold ${this.activeView === 'catalog' ? 'bg-slate-900 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900 hover:bg-white'} transition-all whitespace-nowrap cursor-pointer" onclick="window.richMenuManager.switchView('catalog')">
                คลังเมนูทั้งหมด (${this.richMenus.length})
              </button>
              <button type="button" class="cat-pill py-2 px-3 sm:px-3.5 rounded-lg text-xs font-semibold ${this.activeView === 'inspect' ? 'bg-slate-900 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900 hover:bg-white'} transition-all whitespace-nowrap cursor-pointer" onclick="window.richMenuManager.switchView('inspect')">
                ตรวจสอบรหัส ID ขั้นสูง
              </button>
            </div>
          </div>
        </section>

        <!-- Active View Content -->
        ${this.renderActiveView()}

      </div>
    `;

    if (this.activeView === 'wizard' && (this.currentStep === 2 || this.currentStep === 3)) {
      setTimeout(() => this.drawCanvasPreview(), 40);
    } else if (this.activeView === 'inspect') {
      setTimeout(() => this.drawInspectCanvas(), 40);
    }
  }

  switchView(view) {
    this.activeView = view;
    this.renderTab();
  }

  renderActiveView() {
    if (this.activeView === 'wizard') {
      return this.renderWizardView();
    } else if (this.activeView === 'catalog') {
      return this.renderCatalogView();
    } else if (this.activeView === 'inspect') {
      return this.renderInspectView();
    }
    return '';
  }

  // ==========================================
  // VIEW 1: STEP-BY-STEP GUIDED WIZARD
  // ==========================================
  renderWizardView() {
    return `
      <!-- Stepper Progress Bar -->
      <div class="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-3.5 sm:p-5">
        <div class="flex items-center justify-between max-w-3xl mx-auto relative px-2 sm:px-6">
          <!-- Connecting background line -->
          <div class="absolute left-8 right-8 top-3.5 h-0.5 bg-slate-200 -z-0"></div>
          <!-- Active progress fill line -->
          <div class="absolute left-8 top-3.5 h-0.5 bg-slate-900 transition-all duration-300 -z-0"
               style="width: ${((this.currentStep - 1) / 3) * 100}%;"></div>

          <!-- Step 1 -->
          <div class="flex-1 flex flex-col items-center gap-1.5 relative z-10 cursor-pointer group" onclick="window.richMenuManager.goToStep(1)">
            <div class="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${this.currentStep >= 1 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400 border border-slate-200'} shadow-xs transition-all ring-4 ring-white">
              1
            </div>
            <span class="text-[10px] sm:text-xs font-semibold ${this.currentStep === 1 ? 'text-slate-900' : 'text-slate-500'} text-center select-none truncate">1. เลือกบัญชีบอท</span>
          </div>

          <!-- Step 2 -->
          <div class="flex-1 flex flex-col items-center gap-1.5 relative z-10 cursor-pointer group" onclick="window.richMenuManager.goToStep(2)">
            <div class="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${this.currentStep >= 2 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400 border border-slate-200'} shadow-xs transition-all ring-4 ring-white">
              2
            </div>
            <span class="text-[10px] sm:text-xs font-semibold ${this.currentStep === 2 ? 'text-slate-900' : 'text-slate-500'} text-center select-none truncate">2. รูปแบบ & รูปภาพ</span>
          </div>

          <!-- Step 3 -->
          <div class="flex-1 flex flex-col items-center gap-1.5 relative z-10 cursor-pointer group" onclick="window.richMenuManager.goToStep(3)">
            <div class="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${this.currentStep >= 3 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400 border border-slate-200'} shadow-xs transition-all ring-4 ring-white">
              3
            </div>
            <span class="text-[10px] sm:text-xs font-semibold ${this.currentStep === 3 ? 'text-slate-900' : 'text-slate-500'} text-center select-none truncate">3. ตั้งค่าปุ่มกด</span>
          </div>

          <!-- Step 4 -->
          <div class="flex-1 flex flex-col items-center gap-1.5 relative z-10 cursor-pointer group" onclick="window.richMenuManager.goToStep(4)">
            <div class="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${this.currentStep >= 4 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400 border border-slate-200'} shadow-xs transition-all ring-4 ring-white">
              4
            </div>
            <span class="text-[10px] sm:text-xs font-semibold ${this.currentStep === 4 ? 'text-slate-900' : 'text-slate-500'} text-center select-none truncate">4. เผยแพร่/สลับเมนู</span>
          </div>
        </div>
      </div>

      <!-- Step Card Content -->
      <div class="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
        ${this.renderStepContent()}

        <!-- Step Footer Navigation Buttons -->
        <div class="px-5 py-4 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between">
          <div>
            ${this.currentStep > 1 ? `
              <button type="button" class="btn btn-secondary" onclick="window.richMenuManager.goToStep(${this.currentStep - 1})">
                ย้อนกลับ
              </button>
            ` : `
              <button type="button" class="btn btn-secondary font-mono text-[11px]" onclick="window.app.showPayloadModal('Datastore Bot Entity', ${JSON.stringify(JSON.stringify(window.apiClient.getDatastoreBotConfig(this.currentBot?.bot_id), null, 2))})">
                ดู Datastore JSON
              </button>
            `}
          </div>

          <div class="flex items-center gap-2">
            ${this.currentStep < 4 ? `
              <button type="button" class="btn btn-primary" onclick="window.richMenuManager.goToStep(${this.currentStep + 1})">
                ขั้นตอนถัดไป
              </button>
            ` : `
              <button type="button" class="btn btn-primary bg-emerald-600 hover:bg-emerald-700 text-white" onclick="window.richMenuManager.executePublish()">
                ยืนยันและเผยแพร่เมนู
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }

  goToStep(step) {
    this.currentStep = step;
    this.renderTab();
  }

  renderStepContent() {
    switch (this.currentStep) {
      case 1:
        return this.renderStep1();
      case 2:
        return this.renderStep2();
      case 3:
        return this.renderStep3();
      case 4:
        return this.renderStep4();
      default:
        return this.renderStep1();
    }
  }

  // --- STEP 1: เลือกบัญชีบอท & ดูเมนูปัจจุบัน ---
  renderStep1() {
    const bots = window.MOCK_DATA.bots || [];
    const allBotMenus = this.richMenus.filter(m => m.bot_id === this.currentBot?.bot_id);
    // Sort to place default rich menu first, then take the first 6 menus for clean display
    const activeMenus = allBotMenus.slice().sort((a, b) => (b.is_default ? 1 : 0) - (a.is_default ? 1 : 0)).slice(0, 6);

    return `
      <div class="p-5 sm:p-6 space-y-5">
        <div class="border-b border-slate-100 pb-3">
          <h2 class="text-sm sm:text-base font-bold text-slate-900">ขั้นตอนที่ 1: เลือกบัญชีบอทที่ต้องการจัดการ</h2>
          <p class="text-xs text-slate-500 mt-0.5">เลือกบอทของระบบเพื่อตรวจสอบเมนูที่กำลังแสดงผลอยู่ปัจจุบัน หรือเตรียมสร้างเมนูใหม่</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Select Bot -->
          <div class="space-y-1.5">
            <label class="block text-xs font-bold text-slate-700">บัญชีบอท LINE (Bot Account)</label>
            <select class="form-select font-semibold" onchange="window.richMenuManager.selectBot(this.value)">
              ${bots.map(b => `
                <option value="${b.bot_id}" ${b.bot_id === this.currentBot?.bot_id ? 'selected' : ''}>
                  ${b.bot_name} (Org #${b.org_id})
                </option>
              `).join('')}
            </select>
          </div>

          <!-- Bot Details Summary -->
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-3">
            <img src="${this.currentBot?.picture_url || 'https://profile.line-scdn.net/0h2FwEETBBbWlKPH5-dEQSPnZ5YwQ9EmshMlskWmY6OwpnCC89JlslC2g7ZFljWCw7cg5yC21uYFtm'}" class="w-10 h-10 rounded-full border border-slate-200 shrink-0 object-cover">
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-slate-900 truncate">${this.currentBot?.bot_name}</span>
                <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${this.currentBot?.is_primary ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-600'} shrink-0">
                  ${this.currentBot?.is_primary ? 'บอทหลัก (Production)' : 'บอทสำรอง (Test/Dev)'}
                </span>
              </div>
              <div class="text-[11px] text-slate-500 font-mono truncate mt-0.5">Basic ID: ${this.currentBot?.basic_id || '-'} | Menu ปัจจุบัน: <code class="text-slate-800 font-bold">${this.currentBot?.default_rich_menu_id}</code></div>
              <div class="text-[11px] text-slate-500 mt-0.5">มี Rich Menu ในระบบทั้งหมด: <strong class="text-slate-800 font-semibold">${allBotMenus.length} เมนู</strong></div>
            </div>
          </div>
        </div>

        <!-- Current Active Menu Preview -->
        <div>
          <div class="text-xs font-bold text-slate-800 mb-2">เมนูที่กำลังใช้งานอยู่ ณ ปัจจุบันของบอทนี้:</div>
          ${activeMenus.length > 0 ? `
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${activeMenus.map(m => `
                <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 hover:border-slate-400 transition-all cursor-pointer p-3" onclick="window.richMenuManager.loadMenuToBuilder('${m.rich_menu_id}')">
                  <div class="aspect-3/1 bg-slate-200 rounded-lg overflow-hidden relative mb-2">
                    <img src="${this.getMenuImage(m)}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600';" class="w-full h-full object-cover">
                    <span class="absolute top-1.5 right-1.5 px-2 py-0.5 rounded text-[10px] font-bold ${m.is_default ? 'bg-emerald-600 text-white' : 'bg-slate-900/80 text-white'}">
                      ${m.is_default ? 'DEFAULT (กำลังแสดงผล)' : 'INACTIVE'}
                    </span>
                  </div>
                  <div class="font-bold text-xs text-slate-900 truncate">${m.name}</div>
                  <div class="text-[10.5px] text-slate-500 font-mono truncate mt-0.5">${m.rich_menu_id}</div>
                  <div class="mt-2 flex items-center justify-between text-[11px]">
                    <span class="text-slate-500">${m.areas?.length || 0} จุดกด</span>
                    <span class="text-blue-600 font-semibold hover:underline">เลือกใช้เมนูนี้ →</span>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="p-6 text-center text-slate-400 border border-dashed border-slate-200 rounded-xl">
              ยังไม่มีเมนูในระบบสำหรับบอทนี้ สามารถกด "ขั้นตอนถัดไป" เพื่อสร้างเมนูแรกได้ทันที
            </div>
          `}
        </div>
      </div>
    `;
  }

  // --- STEP 2: รูปแบบเมนู & อัปโหลดรูปภาพ ---
  renderStep2() {
    return `
      <div class="p-5 sm:p-6 space-y-5">
        <div class="border-b border-slate-100 pb-3">
          <h2 class="text-sm sm:text-base font-bold text-slate-900">ขั้นตอนที่ 2: เลือกรูปแบบและอัปโหลดรูปภาพเมนู</h2>
          <p class="text-xs text-slate-500 mt-0.5">เลือกเทมเพลตจำนวนปุ่มที่ต้องการ และอัปโหลดภาพขนาดมาตรฐานของ LINE (2500 × 843 หรือ 2500 × 1686 พิกเซล)</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <!-- Left: Settings & Presets -->
          <div class="lg:col-span-6 space-y-4">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="space-y-1">
                <label class="block text-xs font-bold text-slate-700">ชื่อเมนู (Menu Name)</label>
                <input type="text" class="form-input" id="wizard-name" value="${this.builder.name}" oninput="window.richMenuManager.builder.name = this.value">
              </div>
              <div class="space-y-1">
                <label class="block text-xs font-bold text-slate-700">ข้อความบนแถบแชท (Chat Bar Text)</label>
                <input type="text" class="form-input" id="wizard-chatbar" value="${this.builder.chatBarText}" oninput="window.richMenuManager.builder.chatBarText = this.value">
              </div>
            </div>

            <!-- Size Presets -->
            <div class="space-y-1.5">
              <label class="block text-xs font-bold text-slate-700">ขนาดหน้าจอเมนู</label>
              <div class="grid grid-cols-2 gap-2">
                <button type="button" class="p-2.5 rounded-xl border text-left cursor-pointer transition-all ${this.builder.height === 843 ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-300'}" onclick="window.richMenuManager.handleSizeChange('compact')">
                  <div class="font-bold text-xs text-slate-900">ครึ่งจอ (Compact)</div>
                  <div class="text-[11px] text-slate-500 font-mono">2500 × 843 px (แนะนำ)</div>
                </button>
                <button type="button" class="p-2.5 rounded-xl border text-left cursor-pointer transition-all ${this.builder.height === 1686 ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-300'}" onclick="window.richMenuManager.handleSizeChange('full')">
                  <div class="font-bold text-xs text-slate-900">เต็มจอ (Full)</div>
                  <div class="text-[11px] text-slate-500 font-mono">2500 × 1686 px</div>
                </button>
              </div>
            </div>

            <!-- Button Grid Presets -->
            <div class="space-y-1.5">
              <label class="block text-xs font-bold text-slate-700">เลือกเทมเพลตการแบ่งปุ่ม</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button type="button" class="p-2 rounded-lg border text-center cursor-pointer transition-all ${this.builder.presetGrid === '3cols' ? 'border-slate-900 bg-slate-900 text-white font-bold' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}" onclick="window.richMenuManager.applyPreset('3cols')">
                  3 ปุ่ม (1 แถว)
                </button>
                <button type="button" class="p-2 rounded-lg border text-center cursor-pointer transition-all ${this.builder.presetGrid === '6grid' ? 'border-slate-900 bg-slate-900 text-white font-bold' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}" onclick="window.richMenuManager.applyPreset('6grid')">
                  6 ปุ่ม (2×3)
                </button>
                <button type="button" class="p-2 rounded-lg border text-center cursor-pointer transition-all ${this.builder.presetGrid === '4grid' ? 'border-slate-900 bg-slate-900 text-white font-bold' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}" onclick="window.richMenuManager.applyPreset('4grid')">
                  4 ปุ่ม (2×2)
                </button>
                <button type="button" class="p-2 rounded-lg border text-center cursor-pointer transition-all ${this.builder.presetGrid === '2cols' ? 'border-slate-900 bg-slate-900 text-white font-bold' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}" onclick="window.richMenuManager.applyPreset('2cols')">
                  2 ปุ่มใหญ่
                </button>
              </div>
            </div>

            <!-- File Upload Dropzone -->
            <div class="space-y-1.5">
              <label class="block text-xs font-bold text-slate-700">รูปภาพเมนู (PNG หรือ JPEG ขนาดไม่เกิน 1MB)</label>
              <input type="file" id="rm-file-input" accept="image/png, image/jpeg" class="hidden" onchange="window.richMenuManager.handleImageUpload(event)">
              <div class="border-2 border-dashed border-slate-200 hover:border-slate-400 bg-slate-50/60 rounded-xl p-4 text-center cursor-pointer transition-all" onclick="document.getElementById('rm-file-input').click()">
                <div class="text-xs font-bold text-slate-800">คลิกเพื่ออัปโหลดรูปภาพ หรือลากไฟล์มาวาง</div>
                <div class="text-[11px] text-slate-400 mt-0.5">ขนาดแนะนำ: ${this.builder.width} × ${this.builder.height} px</div>
              </div>
            </div>

          </div>

          <!-- Right: Live Canvas Preview -->
          <div class="lg:col-span-6 flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4">
            <div class="text-xs font-bold text-slate-700 mb-2 w-full flex justify-between">
              <span>ตัวอย่างรูปภาพและเส้นแบ่งปุ่ม</span>
              <span class="text-slate-400 font-mono text-[11px]">${this.builder.areas.length} ปุ่ม</span>
            </div>
            <div class="w-full bg-slate-900/10 rounded-lg overflow-hidden border border-slate-200 p-1 flex items-center justify-center">
              <canvas id="rm-canvas" class="max-w-full h-auto rounded block shadow-sm"></canvas>
            </div>
            <div class="w-full mt-2 bg-slate-900 text-white text-xs px-3 py-1.5 rounded flex justify-between items-center">
              <span class="text-slate-400 text-[10px]">แถบแชท</span>
              <span class="font-bold">${this.builder.chatBarText}</span>
              <span class="text-slate-400 text-[10px]">▲</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --- STEP 3: ตั้งค่าการทำงานของปุ่มกด ---
  renderStep3() {
    return `
      <div class="p-5 sm:p-6 space-y-5">
        <div class="border-b border-slate-100 pb-3 flex justify-between items-center">
          <div>
            <h2 class="text-sm sm:text-base font-bold text-slate-900">ขั้นตอนที่ 3: กำหนดหน้าที่ของแต่ละปุ่ม</h2>
            <p class="text-xs text-slate-500 mt-0.5">ระบุว่าเมื่อผู้ใช้กดแต่ละปุ่ม จะให้ระบบส่งข้อความ เปิดเว็บไซต์ หรือเรียกฟังก์ชันใด</p>
          </div>
          <button type="button" class="btn btn-secondary btn-sm" onclick="window.richMenuManager.showDeveloperJson()">
            ดูโครงสร้าง JSON
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <!-- Button Areas List -->
          <div class="lg:col-span-7 space-y-3">
            <div class="text-xs font-bold text-slate-800">รายการปุ่มกดทั้งหมด (${this.builder.areas.length} ปุ่ม):</div>
            
            <div class="space-y-3" id="rm-areas-config-list">
              ${this.builder.areas.map((area, idx) => `
                <div class="border border-slate-200 rounded-xl p-3.5 bg-slate-50/50 space-y-2.5">
                  <div class="flex items-center justify-between border-b border-slate-200/60 pb-2">
                    <span class="font-bold text-xs text-slate-800">ปุ่มที่ #${idx + 1}</span>
                    <span class="text-[11px] font-mono text-slate-400">ขนาด: ${area.bounds.width}×${area.bounds.height} px</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <!-- Action Type -->
                    <div>
                      <label class="block text-[11px] font-semibold text-slate-600 mb-1">การทำงานเมื่อกด</label>
                      <select class="form-select text-xs" onchange="window.richMenuManager.updateAreaActionType(${idx}, this.value)">
                        <option value="message" ${area.action.type === 'message' ? 'selected' : ''}>ส่งข้อความ (Message)</option>
                        <option value="uri" ${area.action.type === 'uri' ? 'selected' : ''}>เปิดลิงก์เว็บ (Open Link)</option>
                        <option value="postback" ${area.action.type === 'postback' ? 'selected' : ''}>คำสั่งระบบ (Postback Action)</option>
                      </select>
                    </div>

                    <!-- Label -->
                    <div>
                      <label class="block text-[11px] font-semibold text-slate-600 mb-1">ชื่อปุ่ม (Label)</label>
                      <input type="text" class="form-input text-xs" value="${area.action.label || ''}" placeholder="เช่น แจ้งเรื่อง, เว็บไซต์" oninput="window.richMenuManager.updateAreaField(${idx}, 'label', this.value)">
                    </div>

                    <!-- Value -->
                    <div>
                      <label class="block text-[11px] font-semibold text-slate-600 mb-1">
                        ${area.action.type === 'uri' ? 'ที่อยู่เว็บไซต์ (URL)' : (area.action.type === 'message' ? 'ข้อความที่จะส่ง' : 'รหัสคำสั่ง (Data)')}
                      </label>
                      <input type="text" class="form-input text-xs" value="${area.action.uri || area.action.text || area.action.data || ''}" placeholder="${area.action.type === 'uri' ? 'https://...' : 'ข้อความหรือคำสั่ง...'}" oninput="window.richMenuManager.updateAreaField(${idx}, 'value', this.value)">
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Mini Canvas Reference -->
          <div class="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center">
            <div class="text-xs font-bold text-slate-700 mb-2 w-full text-left">ตำแหน่งปุ่มที่กำหนด</div>
            <div class="w-full bg-slate-900/10 rounded-lg overflow-hidden border border-slate-200 p-1 flex items-center justify-center">
              <canvas id="rm-canvas" class="max-w-full h-auto rounded block shadow-sm"></canvas>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --- STEP 4: เผยแพร่ & สลับเมนู ---
  renderStep4() {
    return `
      <div class="p-5 sm:p-6 space-y-5">
        <div class="border-b border-slate-100 pb-3">
          <h2 class="text-sm sm:text-base font-bold text-slate-900">ขั้นตอนที่ 4: ยืนยันและเลือกรูปแบบการเผยแพร่</h2>
          <p class="text-xs text-slate-500 mt-0.5">เลือกกลุ่มเป้าหมายหรือสถานะที่ต้องการให้ Rich Menu นี้เริ่มทำงานบน LINE</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <!-- Option A: Default -->
          <div class="border rounded-2xl p-4 cursor-pointer transition-all ${this.publishOptions.targetMode === 'default' ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900' : 'border-slate-200 hover:border-slate-300'}" onclick="window.richMenuManager.setPublishMode('default')">
            <div class="font-bold text-xs sm:text-sm text-slate-900 mb-1">ตั้งเป็นเมนูหลัก (Default)</div>
            <p class="text-[11px] text-slate-500 leading-relaxed">ผู้ใช้ทุกคนที่เปิดห้องแชทของบอทจะเห็นเมนูนี้เป็นค่าเริ่มต้นทันที</p>
          </div>

          <!-- Option B: Switch Old Menu -->
          <div class="border rounded-2xl p-4 cursor-pointer transition-all ${this.publishOptions.targetMode === 'switch' ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900' : 'border-slate-200 hover:border-slate-300'}" onclick="window.richMenuManager.setPublishMode('switch')">
            <div class="font-bold text-xs sm:text-sm text-slate-900 mb-1">สลับแทนเมนูเดิม (Batch Switch)</div>
            <p class="text-[11px] text-slate-500 leading-relaxed">ย้ายผู้ใช้ทั้งหมดที่ผูกกับเมนูเก่า ให้เปลี่ยนมาใช้เมนูใหม่นี้</p>
          </div>

          <!-- Option C: Flood Specific Users -->
          <div class="border rounded-2xl p-4 cursor-pointer transition-all ${this.publishOptions.targetMode === 'flood' ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900' : 'border-slate-200 hover:border-slate-300'}" onclick="window.richMenuManager.setPublishMode('flood')">
            <div class="font-bold text-xs sm:text-sm text-slate-900 mb-1">ส่งให้เฉพาะกลุ่ม (User IDs)</div>
            <p class="text-[11px] text-slate-500 leading-relaxed">ส่งเมนูนี้ให้เฉพาะรายชื่อ LINE User IDs ที่ระบุเท่านั้น</p>
          </div>
        </div>

        <!-- Mode Specific Form Details -->
        ${this.publishOptions.targetMode === 'switch' ? `
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <label class="block text-xs font-bold text-slate-700">เลือกเมนูเดิมที่ต้องการสลับแทนที่:</label>
            <select class="form-select text-xs font-semibold" onchange="window.richMenuManager.publishOptions.oldRichMenuId = this.value">
              ${this.richMenus.map(m => `
                <option value="${m.rich_menu_id}" ${m.rich_menu_id === this.publishOptions.oldRichMenuId ? 'selected' : ''}>
                  ${m.name} (${m.rich_menu_id})
                </option>
              `).join('')}
            </select>
          </div>
        ` : ''}

        ${this.publishOptions.targetMode === 'flood' ? `
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <div class="flex justify-between items-center">
              <label class="block text-xs font-bold text-slate-700">วางรายชื่อ LINE User IDs (บรรทัดละ 1 คน):</label>
              <button type="button" class="text-blue-600 text-xs font-semibold hover:underline" onclick="window.richMenuManager.insertSampleUsers()">ใส่ตัวอย่าง 5 คน</button>
            </div>
            <textarea class="form-textarea font-mono text-xs" rows="4" id="wizard-flood-users" placeholder="U1234567890abcdef...&#10;U9876543210fedcba..." oninput="window.richMenuManager.publishOptions.floodUserIds = this.value">${this.publishOptions.floodUserIds}</textarea>
          </div>
        ` : ''}

        <!-- Summary Summary Box -->
        <div class="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-2">
          <div class="font-bold text-xs text-slate-800">สรุปรายละเอียดการเผยแพร่:</div>
          <div class="text-xs text-slate-600 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>บอท: <strong class="text-slate-900">${this.currentBot?.bot_name}</strong></div>
            <div>ชื่อเมนู: <strong class="text-slate-900">${this.builder.name}</strong></div>
            <div>ขนาด: <strong class="text-slate-900">${this.builder.width} × ${this.builder.height} px</strong></div>
            <div>จำนวนปุ่ม: <strong class="text-slate-900">${this.builder.areas.length} ปุ่ม</strong></div>
          </div>
        </div>

        <div id="wizard-publish-status"></div>
      </div>
    `;
  }

  setPublishMode(mode) {
    this.publishOptions.targetMode = mode;
    this.renderTab();
  }

  insertSampleUsers() {
    this.publishOptions.floodUserIds = `U91a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6
U82b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7
U73c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8
U64d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9
U55e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0`;
    const textarea = document.getElementById('wizard-flood-users');
    if (textarea) textarea.value = this.publishOptions.floodUserIds;
  }

  executePublish() {
    const statusBox = document.getElementById('wizard-publish-status');
    const newId = 'richmenu-' + Math.random().toString(16).slice(2, 10) + Math.random().toString(16).slice(2, 10);
    
    // Create new menu object
    const newMenu = {
      id: Date.now(),
      bot_id: this.currentBot?.bot_id,
      rich_menu_id: newId,
      name: this.builder.name,
      chat_bar_text: this.builder.chatBarText,
      size_width: this.builder.width,
      size_height: this.builder.height,
      selected: true,
      mode: 'normal',
      is_default: this.publishOptions.targetMode === 'default',
      is_active: true,
      image_url: this.builder.imageDataUrl,
      areas: JSON.parse(JSON.stringify(this.builder.areas)),
      created_at: new Date().toISOString().replace('T', ' ').slice(0, 19)
    };

    this.richMenus.unshift(newMenu);

    // If flood or switch, add log
    this.floodLogs.unshift({
      id: Date.now(),
      bot_id: this.currentBot?.bot_id,
      rich_menu_id: newId,
      action_type: this.publishOptions.targetMode === 'switch' ? 'batch_switch' : (this.publishOptions.targetMode === 'flood' ? 'bulk_flood' : 'set_default'),
      old_rich_menu_id: this.publishOptions.targetMode === 'switch' ? this.publishOptions.oldRichMenuId : null,
      target_user_count: this.publishOptions.targetMode === 'flood' ? (this.publishOptions.floodUserIds.split('\n').filter(Boolean).length || 5) : 1000,
      success_user_count: this.publishOptions.targetMode === 'flood' ? (this.publishOptions.floodUserIds.split('\n').filter(Boolean).length || 5) : 1000,
      failed_user_count: 0,
      status: 'succeeded',
      line_request_id: 'req-' + Math.random().toString(36).substring(7),
      executed_by: 'Chayanid (Admin)',
      created_at: new Date().toISOString().replace('T', ' ').slice(0, 19)
    });

    this.saveData();

    if (window.app?.showToast) {
      window.app.showToast('เผยแพร่ Rich Menu เรียบร้อยแล้ว!');
    }

    if (statusBox) {
      statusBox.innerHTML = `
        <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between">
          <span>ดำเนินการสำเร็จ! สร้าง Rich Menu ID: <code class="font-mono">${newId}</code> เรียบร้อยแล้ว</span>
          <button type="button" class="btn btn-secondary btn-sm" onclick="window.richMenuManager.switchView('catalog')">ดูในคลังเมนู →</button>
        </div>
      `;
    }
  }

  // ==========================================
  // VIEW 2: คลังเมนูทั้งหมด (Catalog)
  // ==========================================
  renderCatalogView() {
    return `
      <div class="space-y-4">
        <!-- Catalog Table -->
        <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-bold text-sm text-slate-900">รายการ Rich Menu ทั้งหมด (${this.richMenus.length})</h3>
              <p class="text-xs text-slate-500">แค็ตตาล็อกเมนูที่สร้างไว้ทั้งหมด พร้อมสถานะและปุ่มการทำงาน</p>
            </div>
            <button type="button" class="btn btn-primary btn-sm" onclick="window.richMenuManager.switchView('wizard'); window.richMenuManager.goToStep(2);">
              + สร้างเมนูใหม่
            </button>
          </div>

          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>ตัวอย่างรูป</th>
                  <th>ชื่อเมนู & รหัส ID</th>
                  <th>บอทที่ผูก</th>
                  <th>ขนาด</th>
                  <th>จำนวนปุ่ม</th>
                  <th>สร้างเมื่อ</th>
                  <th style="text-align:right;">การทำงาน</th>
                </tr>
              </thead>
              <tbody>
                ${this.richMenus.map(m => `
                  <tr>
                    <td style="width: 80px;">
                      <div class="w-16 h-8 bg-slate-100 rounded overflow-hidden border border-slate-200">
                        <img src="${this.getMenuImage(m)}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200';" class="w-full h-full object-cover">
                      </div>
                    </td>
                    <td>
                      <div class="font-bold text-slate-900">${m.name}</div>
                      <div class="text-[11px] font-mono text-slate-400">${m.rich_menu_id}</div>
                    </td>
                    <td>
                      <span class="text-xs text-slate-700">${window.MOCK_DATA.bots.find(b => b.bot_id === m.bot_id)?.bot_name || m.bot_id}</span>
                    </td>
                    <td class="font-mono text-xs">${m.size_width}×${m.size_height}</td>
                    <td class="text-xs font-semibold">${m.areas?.length || 0} ปุ่ม</td>
                    <td class="text-slate-500 text-xs">${m.created_at || '-'}</td>
                    <td style="text-align:right;">
                      <button class="btn btn-secondary btn-sm" onclick="window.richMenuManager.loadMenuToBuilder('${m.rich_menu_id}')">แก้ไข / สลับ</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Flood & Switch History -->
        <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
          <h3 class="font-bold text-sm text-slate-900">ประวัติการสลับและเผยแพร่เมนู (Audit Trail)</h3>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>เวลาดำเนินการ</th>
                  <th>ประเภท</th>
                  <th>Rich Menu ID</th>
                  <th>จำนวนผู้ใช้เป้าหมาย</th>
                  <th>สถานะ</th>
                  <th>ผู้ดำเนินการ</th>
                </tr>
              </thead>
              <tbody>
                ${this.floodLogs.map(log => `
                  <tr>
                    <td class="text-slate-500 font-mono text-xs">${log.created_at}</td>
                    <td><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-800">${log.action_type}</span></td>
                    <td class="font-mono text-xs">${log.rich_menu_id}</td>
                    <td class="text-xs">${(log.success_user_count || 0).toLocaleString()} คน</td>
                    <td><span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">สำเร็จ</span></td>
                    <td class="text-slate-600 text-xs">${log.executed_by || 'Admin'}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // VIEW 3: ตรวจสอบรหัส ID ขั้นสูง (Inspect)
  // ==========================================
  renderInspectView() {
    const searchId = this.inspector.searchId;
    const menu = this.inspector.currentMenu || this.selectedMenu || this.richMenus[0];
    const cleanJson = menu ? this.getCleanLineJson(menu) : {};

    return `
      <div class="space-y-4">
        <!-- Search Bar -->
        <div class="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
          <div class="text-xs font-bold text-slate-800">ค้นหารายละเอียด Rich Menu ด้วย richmenuId:</div>
          <div class="flex flex-col sm:flex-row gap-2">
            <input type="text" class="form-input flex-1 font-mono text-xs" id="rm-inspect-input" value="${searchId || ''}" placeholder="เช่น richmenu-7c83be080ac2dc28e7dde5c75ab079e8">
            <button type="button" class="btn btn-primary" onclick="window.richMenuManager.executeInspect()">ค้นหาข้อมูล</button>
          </div>
        </div>

        <!-- Detail Grid -->
        ${menu ? `
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div class="lg:col-span-7 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
              <div class="flex justify-between items-center border-b border-slate-100 pb-2">
                <span class="font-bold text-xs text-slate-800">รูปภาพ & พิกัดปุ่มกด (${menu.name})</span>
                <span class="text-xs text-slate-400 font-mono">${menu.size_width}×${menu.size_height} px</span>
              </div>
              <div class="bg-slate-50 rounded-xl p-2 border border-slate-200 flex justify-center">
                <canvas id="rm-inspect-canvas" class="max-w-full h-auto rounded block shadow-sm"></canvas>
              </div>
            </div>

            <div class="lg:col-span-5 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-3">
              <div class="flex justify-between items-center border-b border-slate-100 pb-2">
                <span class="font-bold text-xs text-slate-800">LINE API JSON Body</span>
                <button type="button" class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText(document.getElementById('rm-inspect-json-code').textContent); window.app.showToast('คัดลอก JSON แล้ว');">คัดลอก JSON</button>
              </div>
              <pre id="rm-inspect-json-code" class="bg-slate-900 text-slate-100 p-3.5 rounded-xl border border-slate-800 text-xs font-mono max-h-[360px] overflow-y-auto whitespace-pre-wrap break-all leading-relaxed">${this.escapeHtml(JSON.stringify(cleanJson, null, 2))}</pre>
              <button type="button" class="btn btn-secondary w-full text-center" onclick="window.richMenuManager.loadMenuToBuilder('${menu.rich_menu_id}')">
                นำเมนูนี้ไปแก้ไขในตัวช่วยสร้าง (Wizard) →
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ==========================================
  // HELPER METHODS & INTERACTIONS
  // ==========================================
  selectBot(botId) {
    this.currentBot = (window.MOCK_DATA.bots || []).find(b => b.bot_id === botId) || this.currentBot;
    this.renderTab();
  }

  loadMenuToBuilder(menuId) {
    const found = this.richMenus.find(m => m.rich_menu_id === menuId);
    if (!found) return;

    this.selectedMenu = found;
    this.builder.name = found.name;
    this.builder.chatBarText = found.chat_bar_text;
    this.builder.width = found.size_width;
    this.builder.height = found.size_height;
    this.builder.imageDataUrl = found.image_url;
    this.builder.areas = JSON.parse(JSON.stringify(found.areas || []));
    this.publishOptions.oldRichMenuId = found.rich_menu_id;

    this.activeView = 'wizard';
    this.currentStep = 2;
    this.renderTab();
  }

  handleSizeChange(preset) {
    this.builder.sizePreset = preset;
    this.builder.width = 2500;
    this.builder.height = preset === 'full' ? 1686 : 843;
    this.applyPreset(this.builder.presetGrid);
  }

  applyPreset(preset) {
    this.builder.presetGrid = preset;
    const w = this.builder.width;
    const h = this.builder.height;

    if (preset === '3cols') {
      const colW = Math.floor(w / 3);
      this.builder.areas = [
        { bounds: { x: 0, y: 0, width: colW, height: h }, action: { type: 'postback', label: 'แจ้งเรื่องกองขยะ', data: 'floodwaste-new-report', displayText: 'แจ้งเรื่องกองขยะน้ำท่วม' } },
        { bounds: { x: colW, y: 0, width: colW, height: h }, action: { type: 'message', label: 'ติดตามสถานะ', text: 'ติดตามสถานะเรื่องแจ้ง' } },
        { bounds: { x: colW * 2, y: 0, width: w - (colW * 2), height: h }, action: { type: 'uri', label: 'แดชบอร์ดเมือง', uri: 'https://city.traffy.in.th' } }
      ];
    } else if (preset === '6grid') {
      const colW = Math.floor(w / 3);
      const rowH = Math.floor(h / 2);
      this.builder.areas = [
        { bounds: { x: 0, y: 0, width: colW, height: rowH }, action: { type: 'message', label: 'ปุ่ม 1', text: 'ปุ่ม 1' } },
        { bounds: { x: colW, y: 0, width: colW, height: rowH }, action: { type: 'message', label: 'ปุ่ม 2', text: 'ปุ่ม 2' } },
        { bounds: { x: colW * 2, y: 0, width: w - (colW * 2), height: rowH }, action: { type: 'message', label: 'ปุ่ม 3', text: 'ปุ่ม 3' } },
        { bounds: { x: 0, y: rowH, width: colW, height: h - rowH }, action: { type: 'message', label: 'ปุ่ม 4', text: 'ปุ่ม 4' } },
        { bounds: { x: colW, y: rowH, width: colW, height: h - rowH }, action: { type: 'message', label: 'ปุ่ม 5', text: 'ปุ่ม 5' } },
        { bounds: { x: colW * 2, y: rowH, width: w - (colW * 2), height: h - rowH }, action: { type: 'message', label: 'ปุ่ม 6', text: 'ปุ่ม 6' } }
      ];
    } else if (preset === '4grid') {
      const colW = Math.floor(w / 2);
      const rowH = Math.floor(h / 2);
      this.builder.areas = [
        { bounds: { x: 0, y: 0, width: colW, height: rowH }, action: { type: 'message', label: 'ปุ่ม 1', text: 'ปุ่ม 1' } },
        { bounds: { x: colW, y: 0, width: w - colW, height: rowH }, action: { type: 'message', label: 'ปุ่ม 2', text: 'ปุ่ม 2' } },
        { bounds: { x: 0, y: rowH, width: colW, height: h - rowH }, action: { type: 'message', label: 'ปุ่ม 3', text: 'ปุ่ม 3' } },
        { bounds: { x: colW, y: rowH, width: w - colW, height: h - rowH }, action: { type: 'message', label: 'ปุ่ม 4', text: 'ปุ่ม 4' } }
      ];
    } else if (preset === '2cols') {
      const colW = Math.floor(w / 2);
      this.builder.areas = [
        { bounds: { x: 0, y: 0, width: colW, height: h }, action: { type: 'message', label: 'ปุ่มซ้าย', text: 'ปุ่มซ้าย' } },
        { bounds: { x: colW, y: 0, width: w - colW, height: h }, action: { type: 'message', label: 'ปุ่มขวา', text: 'ปุ่มขวา' } }
      ];
    }
    this.renderTab();
  }

  handleImageUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 1048576) {
      alert('ขนาดไฟล์เกิน 1MB ตามข้อกำหนดของ LINE กรุณาลดขนาดไฟล์');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      this.builder.imageDataUrl = event.target.result;
      this.renderTab();
    };
    reader.readAsDataURL(file);
  }

  updateAreaActionType(index, type) {
    if (!this.builder.areas[index]) return;
    this.builder.areas[index].action.type = type;
    this.renderTab();
  }

  updateAreaField(index, field, value) {
    if (!this.builder.areas[index]) return;
    const a = this.builder.areas[index].action;
    if (field === 'label') {
      a.label = value;
    } else if (field === 'value') {
      if (a.type === 'uri') a.uri = value;
      else if (a.type === 'message') a.text = value;
      else if (a.type === 'postback') a.data = value;
    }
  }

  drawCanvasPreview() {
    const canvas = document.getElementById('rm-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = this.builder.height === 1686 ? 810 : 405;

    const scaleX = canvas.width / this.builder.width;
    const scaleY = canvas.height / this.builder.height;

    const drawGrid = () => {
      this.builder.areas.forEach((area, i) => {
        const x = area.bounds.x * scaleX;
        const y = area.bounds.y * scaleY;
        const w = area.bounds.width * scaleX;
        const h = area.bounds.height * scaleY;

        ctx.strokeStyle = '#0284c7';
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 1, y + 1, w - 2, h - 2);

        ctx.fillStyle = 'rgba(2, 132, 199, 0.12)';
        ctx.fillRect(x + 1, y + 1, w - 2, h - 2);

        // Label Badge
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.roundRect(x + 8, y + 8, 90, 24, 4);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`ปุ่ม #${i + 1}`, x + 16, y + 24);
      });
    };

    if (this.builder.imageDataUrl) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        drawGrid();
      };
      img.onerror = () => {
        ctx.fillStyle = '#f1f5f9';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGrid();
      };
      img.src = this.builder.imageDataUrl;
    } else {
      ctx.fillStyle = '#f1f5f9';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawGrid();
    }
  }

  drawInspectCanvas() {
    const canvas = document.getElementById('rm-inspect-canvas');
    if (!canvas) return;

    const menu = this.inspector.currentMenu || this.selectedMenu || this.richMenus[0];
    if (!menu) return;

    const ctx = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = menu.size_height === 1686 ? 810 : 405;

    const scaleX = canvas.width / menu.size_width;
    const scaleY = canvas.height / menu.size_height;

    const drawGrid = () => {
      (menu.areas || []).forEach((area, i) => {
        const x = area.bounds.x * scaleX;
        const y = area.bounds.y * scaleY;
        const w = area.bounds.width * scaleX;
        const h = area.bounds.height * scaleY;

        ctx.strokeStyle = '#0284c7';
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 1, y + 1, w - 2, h - 2);

        ctx.fillStyle = 'rgba(2, 132, 199, 0.15)';
        ctx.fillRect(x + 1, y + 1, w - 2, h - 2);

        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.roundRect(x + 8, y + 8, 85, 22, 4);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(`ปุ่ม #${i + 1}`, x + 14, y + 23);
      });
    };

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      drawGrid();
    };
    img.onerror = () => {
      ctx.fillStyle = '#f1f5f9';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawGrid();
    };
    img.src = menu.image_url || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200';
  }

  executeInspect() {
    const input = document.getElementById('rm-inspect-input')?.value?.trim();
    if (!input) return;

    this.inspector.searchId = input;
    const found = this.richMenus.find(m => m.rich_menu_id === input);
    if (found) {
      this.inspector.currentMenu = found;
      this.renderTab();
    } else {
      if (window.app?.showToast) {
        window.app.showToast('ไม่พบ Rich Menu รหัสนี้ในระบบ');
      }
    }
  }

  showDeveloperJson() {
    const cleanJson = {
      size: { width: this.builder.width, height: this.builder.height },
      selected: false,
      name: this.builder.name,
      chatBarText: this.builder.chatBarText,
      areas: this.builder.areas
    };
    if (window.app?.showPayloadModal) {
      window.app.showPayloadModal(`LINE API JSON Payload - ${this.builder.name}`, cleanJson);
    }
  }

  getCleanLineJson(menu) {
    return {
      size: { width: menu.size_width, height: menu.size_height },
      selected: menu.selected || false,
      name: menu.name,
      chatBarText: menu.chat_bar_text,
      areas: menu.areas || []
    };
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}

window.richMenuManager = new RichMenuManager();
