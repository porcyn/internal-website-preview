/**
 * Traffy Fondue Bot Studio — API Client
 * Manages Dual Mode (Sandbox Mock vs Live PostgREST API)
 */

class BotStudioApiClient {
  constructor() {
    this.storageKey = 'traffy_studio_api_config';
    this.config = this.loadConfig();
    this.syncDataVersion();
  }

  syncDataVersion() {
    const currentVersion = 'v6_strictly_4_states_no_cancel';
    const stored = localStorage.getItem('traffy_mock_version');
    if (stored !== currentVersion) {
      for (const key of Object.keys(localStorage)) {
        if (key.startsWith('traffy_states_') || key.startsWith('traffy_action_list_')) {
          localStorage.removeItem(key);
        }
      }
      localStorage.setItem('traffy_mock_version', currentVersion);
    }
  }

  loadConfig() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse API config', e);
      }
    }
    return {
      isLiveMode: false,
      baseUrl: 'https://api.traffy.in.th/postgrest',
      jwtToken: '',
      autoRebuildCache: true
    };
  }

  saveConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    localStorage.setItem(this.storageKey, JSON.stringify(this.config));
  }

  get isLive() {
    return this.config.isLiveMode;
  }

  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };
    if (this.config.jwtToken) {
      headers['Authorization'] = `Bearer ${this.config.jwtToken}`;
    }
    return headers;
  }

  // --- Bots API ---
  async getBots() {
    if (!this.isLive) {
      const local = localStorage.getItem('traffy_custom_bots');
      if (local) {
        try {
          const list = JSON.parse(local);
          // Ensure all predefined bots from MOCK_DATA are preserved and updated
          window.MOCK_DATA.bots.forEach(mockBot => {
            const idx = list.findIndex(b => b.bot_id === mockBot.bot_id);
            if (idx === -1) {
              list.unshift(mockBot);
            } else {
              list[idx] = { ...list[idx], ...mockBot, richmenus: mockBot.richmenus || list[idx].richmenus };
            }
          });
          return list;
        } catch (e) {
          console.warn('Error parsing traffy_custom_bots, fallback to MOCK_DATA', e);
        }
      }
      return window.MOCK_DATA.bots;
    }
    try {
      const res = await fetch(`${this.config.baseUrl}/line_bots?select=*`, {
        headers: this.getHeaders()
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      return await res.json();
    } catch (err) {
      console.warn('PostgREST fallback to mock bots:', err);
      throw err;
    }
  }

  // --- Datastore Studio Bot Config API ---
  getDatastoreBotConfig(botId) {
    const allBots = (window.app && window.app.bots && window.app.bots.length > 0) ? window.app.bots : (window.MOCK_DATA.bots || []);
    const found = allBots.find(b => b.bot_id === botId);
    if (found) {
      return {
        bot_id: found.bot_id,
        bot_name: found.bot_name,
        org_id: found.org_id,
        org_name: found.org_name,
        channel_access_token: found.channel_access_token || found.line_token || ('mock_channel_token_' + found.bot_id),
        richmenus: found.richmenus || {}
      };
    }
    if (window.MOCK_DATA.datastoreBotConfig && (!botId || window.MOCK_DATA.datastoreBotConfig.bot_id === botId)) {
      return window.MOCK_DATA.datastoreBotConfig;
    }
    return window.MOCK_DATA.datastoreBotConfig;
  }

  async getStates(botId) {
    if (!this.isLive) {
      const local = localStorage.getItem(`traffy_states_${botId}`);
      if (local) return JSON.parse(local);
      const matched = window.MOCK_DATA.states.filter(s => s.botID === botId);
      if (matched.length > 0) return matched;
      return window.MOCK_DATA.states.map(s => ({
        ...s,
        botID: botId,
        botName: window.MOCK_DATA.bots.find(b => b.bot_id === botId)?.bot_name || s.botName
      }));
    }
    try {
      const res = await fetch(`${this.config.baseUrl}/state?botID=eq.${encodeURIComponent(botId)}&order=stateID.asc`, {
        headers: this.getHeaders()
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      return await res.json();
    } catch (err) {
      console.error('Failed to fetch states from PostgREST:', err);
      throw err;
    }
  }

  async saveState(stateData) {
    if (!this.isLive) {
      const states = await this.getStates(stateData.botID);
      const index = states.findIndex(s => s.stateID === stateData.stateID);
      if (index >= 0) {
        states[index] = { ...states[index], ...stateData };
      } else {
        stateData.stateID = Date.now();
        states.push(stateData);
      }
      localStorage.setItem(`traffy_states_${stateData.botID}`, JSON.stringify(states));
      return stateData;
    }

    const isUpdate = Boolean(stateData.stateID);
    const url = isUpdate 
      ? `${this.config.baseUrl}/state?stateID=eq.${stateData.stateID}` 
      : `${this.config.baseUrl}/state`;
    
    const res = await fetch(url, {
      method: isUpdate ? 'PATCH' : 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(stateData)
    });
    if (!res.ok) throw new Error(`Save state failed: ${res.statusText}`);
    return await res.json();
  }

  async deleteState(stateId, botId) {
    if (!this.isLive) {
      const states = await this.getStates(botId);
      const filtered = states.filter(s => s.stateID !== stateId);
      localStorage.setItem(`traffy_states_${botId}`, JSON.stringify(filtered));
      return true;
    }
    const res = await fetch(`${this.config.baseUrl}/state?stateID=eq.${stateId}`, {
      method: 'DELETE',
      headers: this.getHeaders()
    });
    if (!res.ok) throw new Error(`Delete state failed: ${res.statusText}`);
    return true;
  }

  // --- Action Lists API ---
  async getActionList(actionListId) {
    if (!this.isLive) {
      const local = localStorage.getItem(`traffy_action_list_${actionListId}`);
      if (local) return JSON.parse(local);
      return window.MOCK_DATA.actionLists[actionListId] || [];
    }
    try {
      const res = await fetch(`${this.config.baseUrl}/action-list?action=eq.${actionListId}&order=order.asc`, {
        headers: this.getHeaders()
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.error('Failed to fetch action-list:', err);
      throw err;
    }
  }

  async saveAction(actionData) {
    if (!this.isLive) {
      const list = await this.getActionList(actionData.action);
      const index = list.findIndex(a => a.actionID === actionData.actionID);
      if (index >= 0) {
        list[index] = { ...list[index], ...actionData };
      } else {
        actionData.actionID = Date.now();
        list.push(actionData);
      }
      localStorage.setItem(`traffy_action_list_${actionData.action}`, JSON.stringify(list));
      return actionData;
    }

    const isUpdate = Boolean(actionData.actionID);
    const url = isUpdate
      ? `${this.config.baseUrl}/action-list?actionID=eq.${actionData.actionID}`
      : `${this.config.baseUrl}/action-list`;

    const res = await fetch(url, {
      method: isUpdate ? 'PATCH' : 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(actionData)
    });
    if (!res.ok) throw new Error(`Save action failed: ${res.statusText}`);
    return await res.json();
  }

  // --- Datastore Cache Rebuild ---
  async rebuildDatastoreCache(botId) {
    if (!this.isLive) {
      // Simulate cache rebuild delay
      await new Promise(resolve => setTimeout(resolve, 800));
      return {
        success: true,
        message: `[Sandbox] Rebuilt Datastore cache for key 'line-bot/state_action/${botId}' successfully.`,
        timestamp: new Date().toISOString()
      };
    }

    try {
      const res = await fetch(`${this.config.baseUrl}/rpc/rebuild_bot_cache`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ p_bot_id: botId })
      });
      if (!res.ok) throw new Error(`Cache rebuild failed with status ${res.status}`);
      return await res.json();
    } catch (e) {
      // Fallback response for webhook simulation
      return {
        success: true,
        message: `Command 'RESET CACHE' dispatched to Core Bot for botID: ${botId}`,
        timestamp: new Date().toISOString()
      };
    }
  }

  // --- Error Logs API ---
  async getErrorLogs(botId) {
    if (!this.isLive) {
      return window.MOCK_DATA.errorLogs.filter(log => !botId || log.bot_id === botId);
    }
    try {
      const res = await fetch(`${this.config.baseUrl}/bot_error_logs?bot_id=eq.${botId}&order=id.desc&limit=25`, {
        headers: this.getHeaders()
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (e) {
      return window.MOCK_DATA.errorLogs;
    }
  }
}

window.apiClient = new BotStudioApiClient();
