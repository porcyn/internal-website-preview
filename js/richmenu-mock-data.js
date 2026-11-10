/**
 * Traffy Fondue Internal Console — Real Data for Production & Prototype Bots
 * Fetched live from LINE Messaging API with REAL image files
 */
window.MOCK_DATA = window.MOCK_DATA || {};

window.MOCK_DATA.bots = [
  {
    "id": 1,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "nickname": "TraffyFondue ฟองดูว์",
    "bot_name": "TraffyFondue ฟองดูว์",
    "org_id": "151",
    "org_name": "Traffy Fondue - กรุงเทพมหานคร และ ทั่วประเทศ",
    "init_state": "standby",
    "basic_id": "@105rlyvn",
    "premium_id": "@traffyfondue",
    "picture_url": "https://profile.line-scdn.net/0h2FwEETBBbWlKPH5-dEQSPnZ5YwQ9EmshMlskWmY6OwpnCC89JlslC2g7ZFljWCw7cg5yC21uYFtm",
    "channel_access_token": "V6++xRgstkEEepheGqpLUQWLA2XdQfhpynwlqF214lFj4I9Oehll89iKT3uVOAvOxJ+ZDEtbzzJiHAYAmPCdI9uTMNqqg2XFpf5bxmGS5k4I/BuoVRVmTJIQopw9MRZV3UTWfrmBlnEiM54tAHh7EwdB04t89/1O/w1cDnyilFU=",
    "webhook_chat_pubsubtopic": "projects/traffy-prod/topics/line-inbound",
    "webhook_chat_params": { "timeout": 30 },
    "default_rich_menu_id": "richmenu-ed968928b4e21570a6824d3ca93d6ffb",
    "is_primary": true,
    "status": "active"
  },
  {
    "id": 2,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "nickname": "fondue prototype",
    "bot_name": "fondue prototype",
    "org_id": "1302",
    "org_name": "fondue prototype (Org #1302)",
    "init_state": "standby",
    "basic_id": "@583mbpbd",
    "premium_id": "",
    "picture_url": "https://profile.line-scdn.net/0hRXgyLa-dDXdaABzwehRyIGZFAxotLgs_IjJFGSwEURJ_OE0mZWQXQ3kJUEd1MxkkbzJKFXwAVRNy",
    "channel_access_token": "VaR7XdpHpHHU/miW4D79trJrvfrv7FGVMkMUQJGUYRXDRasGhQN+Z4cf/9iywIDgo1Y+5SNF9VN1v2WFSuEHoOeeIJBsIQZslv4KXauV7lE9Ab/Nx602bTNCZvii5xt+y80g7ukcjAHFMWFtG6ZPYgdB04t89/1O/w1cDnyilFU=",
    "webhook_chat_pubsubtopic": "projects/traffy-dev/topics/line-inbound-sandbox",
    "webhook_chat_params": { "timeout": 30 },
    "default_rich_menu_id": "richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2",
    "is_primary": false,
    "status": "active"
  }
];

window.MOCK_DATA.richMenus = [
  {
    "id": 1,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-5ba96b42dd70acb8d0d9dd99360d0b81",
    "name": "richmenu-21-10-2026-n1",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-5ba96b42dd70acb8d0d9dd99360d0b81.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 2,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-3fff933d1b8ed5300eb2b36d84acf1ce",
    "name": "richmenu-mode-normal-real",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-3fff933d1b8ed5300eb2b36d84acf1ce.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 3,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-70ede8332d211637a95bccaad94db21e",
    "name": "richmenu-repair-fight-2026-10-1-n",
    "chat_bar_text": "เมนูหลัก 🏠",
    "size_width": 2500,
    "size_height": 1000,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-70ede8332d211637a95bccaad94db21e.png",
    "areas": [
      {
        "bounds": {
          "x": 17,
          "y": 33,
          "width": 2475,
          "height": 173
        },
        "action": {
          "label": "ซ่อม สร้าง สู้",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"repair-build-happy-new-report\"}}",
          "displayText": "ซ่อม สร้าง สู้"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 239,
          "width": 334,
          "height": 322
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 388,
          "y": 223,
          "width": 1035,
          "height": 173
        },
        "action": {
          "label": "แจ้งน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้งน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1440,
          "y": 219,
          "width": 1015,
          "height": 177
        },
        "action": {
          "label": "แจ้งกองขยะน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"floodwaste-new-report\"}}",
          "displayText": "แจ้งกองขยะน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 384,
          "y": 405,
          "width": 1035,
          "height": 168
        },
        "action": {
          "label": "แจ้งผู้ป่วยฉุกเฉิน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ep-new-report\"}}",
          "displayText": "ผู้ป่วยฉุกเฉิน"
        }
      },
      {
        "bounds": {
          "x": 1444,
          "y": 413,
          "width": 1006,
          "height": 156
        },
        "action": {
          "label": "ขอกระสอบทราย/อื่น ๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"sandbag-new-report\"}}",
          "displayText": "ขอกระสอบทราย/อื่น ๆ"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 590,
          "width": 462,
          "height": 433
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 529,
          "y": 594,
          "width": 457,
          "height": 425
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 586,
          "width": 462,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1510,
          "y": 590,
          "width": 470,
          "height": 433
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2008,
          "y": 590,
          "width": 459,
          "height": 429
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 4,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-97d7e3f1c93399459a2399b9998c79ee",
    "name": "MVP1-2",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-97d7e3f1c93399459a2399b9998c79ee.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 211
        },
        "action": {
          "type": "uri",
          "uri": "https://www.traffy.in.th/?page_id=1660"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"check-flood-report\"}}",
          "displayText": "ตรวจสอบน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 625,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"statistic\"}}",
          "displayText": "สถิติของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1250,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "ติดตาม"
        }
      },
      {
        "bounds": {
          "x": 1875,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 5,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-18ce7464746438844c4eb36c14eccff4",
    "name": "richmenu-12-08-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-18ce7464746438844c4eb36c14eccff4.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 6,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-4e171159b8a7aa9689e9df3e6b4ec128",
    "name": "richmenu-16-07-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-4e171159b8a7aa9689e9df3e6b4ec128.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งจุดเสี่ยงอัคคีภัย",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"fire-exit-new-report\"}}",
          "displayText": "แจ้งจุดเสี่ยงอัคคีภัย"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 7,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-03b9e6338808fbc07abe2ecec6cab595",
    "name": "MVP1-4",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "type": "uri",
          "uri": "https://www.traffy.in.th/?page_id=1660"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 219,
          "width": 491,
          "height": 624
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"check-flood-report\"}}",
          "displayText": "ตรวจสอบน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 495,
          "y": 219,
          "width": 512,
          "height": 624
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"survey-register\"}}",
          "displayText": "สำรวจ ขึ้นทะเบียน"
        }
      },
      {
        "bounds": {
          "x": 1011,
          "y": 219,
          "width": 511,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"statistic\"}}",
          "displayText": "สถิติของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1526,
          "y": 219,
          "width": 471,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "ติดตาม"
        }
      },
      {
        "bounds": {
          "x": 1997,
          "y": 215,
          "width": 499,
          "height": 628
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 8,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-beb001cb672e9d749bf68c2b5d1f98cd",
    "name": "richmenu-17-03-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-beb001cb672e9d749bf68c2b5d1f98cd.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "ขึ้นทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "ขึ้นทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 9,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-4c8c5de9f2b8ea81538cbbe2a9d46fd9",
    "name": "richmenu-10-03-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-4c8c5de9f2b8ea81538cbbe2a9d46fd9.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "ขึ้นทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "ขึ้นทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 10,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-b9a9a10186591ae8158839b4a76f7180",
    "name": "MVP1-3",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-b9a9a10186591ae8158839b4a76f7180.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "type": "uri",
          "uri": "https://www.traffy.in.th/?page_id=1660"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 219,
          "width": 491,
          "height": 624
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"check-flood-report\"}}",
          "text": "ตรวจสอบน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 495,
          "y": 219,
          "width": 512,
          "height": 624
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"survey-register\"}}",
          "text": "สำรวจ ขึ้นทะเบียน"
        }
      },
      {
        "bounds": {
          "x": 1011,
          "y": 219,
          "width": 511,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"statistic\"}}",
          "text": "สถิติของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1526,
          "y": 219,
          "width": 471,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "text": "ติดตาม"
        }
      },
      {
        "bounds": {
          "x": 1997,
          "y": 215,
          "width": 499,
          "height": 628
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "text": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 11,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-6a62db476a3aeea095f543387118b0a8",
    "name": "richmenu-08-02-2026-v1-normal",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "เบาะแสทุจริตเลือกตั้ง 69",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เข้าสู่เมนู เบาะแสทุจริตเลือกตั้ง 69",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ขึ้นทะเบียนสุนัขแมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "แจ้ง ขึ้นทะเบียนสุนัขแมว กทม.",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 12,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-6df41f5f655e38a4f30c9859023b8b9e",
    "name": "MVP1-5 PM2.5",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "type": "uri",
          "uri": "https://www.traffy.in.th/?page_id=1660"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 219,
          "width": 491,
          "height": 624
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"check-flood-report\"}}",
          "displayText": "ตรวจสอบ ฝุ่นPM2.5"
        }
      },
      {
        "bounds": {
          "x": 495,
          "y": 219,
          "width": 512,
          "height": 624
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"survey-register\"}}",
          "displayText": "สำรวจ ขึ้นทะเบียน"
        }
      },
      {
        "bounds": {
          "x": 1011,
          "y": 219,
          "width": 511,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"statistic\"}}",
          "displayText": "สถิติของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1526,
          "y": 219,
          "width": 471,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "ติดตาม"
        }
      },
      {
        "bounds": {
          "x": 1997,
          "y": 215,
          "width": 499,
          "height": 628
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 13,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-26c058597bcc43f4a37899ec860a3a9d",
    "name": "richmenu-29-09-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 1052,
          "height": 177
        },
        "action": {
          "label": "แจ้งน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้งน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1424,
          "y": 21,
          "width": 1038,
          "height": 177
        },
        "action": {
          "label": "แจ้งเก็บขยะน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"floodwaste-new-report\"}}",
          "displayText": "แจ้งเก็บขยะน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "แจ้งผู้ป่วยฉุกเฉิน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ep-new-report\"}}",
          "displayText": "ผู้ป่วยฉุกเฉิน"
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "ขอกระสอบทราย/อื่น ๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"sandbag-new-report\"}}",
          "displayText": "ขอกระสอบทราย/อื่น ๆ"
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 14,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-f0221927d3d2957c00a6227062edab10",
    "name": "richmenu-เชิญชวนเมืองใจดี-20-09-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "type": "uri",
          "uri": "https://lin.ee/yiS14WI"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 15,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-96af889636874cdccdae24f0cc5438bf",
    "name": "richmenu-24-11-2025-mode-normal",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 16,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-3f464bb67e255d651031e1d468aa9d0a",
    "name": "richmenu-ช่วยน้ำท่วม-29-08-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 17,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-7dda2d1d40cd18add18fa1111d039554",
    "name": "richmenu-24-03-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 18,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-8fdcb5e06600e1a4ab8ff0e5d12d526c",
    "name": "richmenu-15-07-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งปัญหาทางหนีไฟ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"fire-exit-new-report\"}}",
          "displayText": "แจ้งปัญหาทางหนีไฟ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 19,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-d2b06b2f6902f4f4f81c5682d989fb8e",
    "name": "MVP-สคบ-header-สคบ-สีฟ้าอ่อน-V4.",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 140
        },
        "action": {
          "type": "uri",
          "uri": "https://complaint.ocpb.go.th/"
        }
      },
      {
        "bounds": {
          "x": 45,
          "y": 194,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 657,
          "y": 188,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1270,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "เรื่องแจ้งของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1869,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 20,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-a6d33c7bde7101a212aafcfbcb99d5d2",
    "name": "richmenu-17-03-2026-a-1",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 21,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-61b25fb0c8318e3e12f2b8186f00fcf9",
    "name": "richmenu-24-01-2025-v2",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 22,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-6b82a4516f8739e2c3171250428aa292",
    "name": "richmenu-ช่วยน้ำท่วม-28-08-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 144
        },
        "action": {
          "type": "uri",
          "uri": "https://bangkok.traffy.in.th/"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 23,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-4c269f459aeacee0d105b423dd7e16a8",
    "name": "richmenu-17-03-2026-n-1",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 24,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-c13c3708aefee70bc2125f5a1df65601",
    "name": "richmenu-05-25-2025",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 25,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-7e9b64c9742da1968a2d8affb63ceb93",
    "name": "richmenu-23-03-2026-nn",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 368,
          "height": 386
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 29,
          "width": 2092,
          "height": 161
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 371,
          "y": 206,
          "width": 1019,
          "height": 174
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1419,
          "y": 210,
          "width": 1036,
          "height": 169
        },
        "action": {
          "label": "ใหข้อมูลประเมินภาครัฐ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-transparency\"}}",
          "displayText": "ใหข้อมูลประเมินภาครัฐ."
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 524,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1023,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 26,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-eb2402c664de0814431e57a9af5886fd",
    "name": "MVP-ข่าวสารดี",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "type": "uri",
          "uri": "https://www.traffy.in.th/?page_id=1660"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 219,
          "width": 491,
          "height": 624
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-KG21Xked"
        }
      },
      {
        "bounds": {
          "x": 495,
          "y": 219,
          "width": 512,
          "height": 624
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"survey-register\"}}",
          "displayText": "สำรวจ ขึ้นทะเบียน"
        }
      },
      {
        "bounds": {
          "x": 1011,
          "y": 219,
          "width": 511,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"statistic\"}}",
          "displayText": "สถิติของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1526,
          "y": 219,
          "width": 471,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "ติดตาม"
        }
      },
      {
        "bounds": {
          "x": 1997,
          "y": 215,
          "width": 499,
          "height": 628
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 27,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-c874ffee710d94b32a0ad81fbf51435e",
    "name": "richmenu-19-03-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 492,
          "height": 386
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 487,
          "y": 0,
          "width": 2013,
          "height": 203
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 487,
          "y": 199,
          "width": 2013,
          "height": 187
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 385,
          "width": 506,
          "height": 458
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 385,
          "width": 497,
          "height": 458
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 999,
          "y": 385,
          "width": 502,
          "height": 458
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1499,
          "y": 385,
          "width": 495,
          "height": 458
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 385,
          "width": 508,
          "height": 458
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 28,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-014ead9e456dae0b07400cdb36d2a440",
    "name": "richmenu-08-01-2025",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "type": "uri",
          "uri": "https://bangkok.traffy.in.th/"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 29,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-56f0ad6bb261ec45c6fb09d92d4404e1",
    "name": "richmenu-17-03-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "ขึ้นทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "ขึ้นทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 30,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-dbaca50011314b3f5dfb731fbc9f0266",
    "name": "MVP-header-BKK-Dvote-V2",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 140
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2004941801-aN8zL2qe"
        }
      },
      {
        "bounds": {
          "x": 45,
          "y": 194,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 657,
          "y": 188,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1270,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4"
        }
      },
      {
        "bounds": {
          "x": 1869,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 31,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-bcc68b96f17b5ee14ad9c414aaee195e",
    "name": "richmenu-06-03-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "เบาะแสทุจริตเลือกตั้ง 69",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เข้าสู่เมนู เบาะแสทุจริตเลือกตั้ง 69",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 32,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-7d6cf02fb97bd09aae4ae5ef0b3eb2cd",
    "name": "richmenu-23-03-2026-aa",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 368,
          "height": 386
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 29,
          "width": 2092,
          "height": 161
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 371,
          "y": 206,
          "width": 1019,
          "height": 174
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1419,
          "y": 210,
          "width": 1036,
          "height": 169
        },
        "action": {
          "label": "ใหข้อมูลประเมินภาครัฐ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-transparency\"}}",
          "displayText": "ใหข้อมูลประเมินภาครัฐ."
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 524,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1023,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 33,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-df5bb40a085bc85733d85617a84347b3",
    "name": "RichMenu-Report",
    "chat_bar_text": "Menu",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 8,
          "y": 8,
          "width": 2488,
          "height": 828
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"request-location-en\",\"eventType\":\"postback\",\"postbackData\":\"new-report-en\"}}",
          "displayText": "Report a new case"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 34,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-406f06b430b45036c5febf77e28772ad",
    "name": "richmenu-ช่วยน้ำท่วม-09-11-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 35,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-506bc39dd56fa3933a9b08ff12082550",
    "name": "richmenu-08-02-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "เบาะแสทุจริตเลือกตั้ง 69",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เข้าสู่เมนู เบาะแสทุจริตเลือกตั้ง 69",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ขึ้นทะเบียนสุนัขแมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "แจ้ง ขึ้นทะเบียนสุนัขแมว กทม.",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 36,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-92acd01656d451f832439ff411ffe540",
    "name": "richmenu-24-01-2025-v2",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 37,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-75f766029cb0e4eab826e05f11f57111",
    "name": "richmenu-18-05-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งปัญหาทางหนีไฟ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"fire-exit-new-report\"}}",
          "displayText": "แจ้งปัญหาทางหนีไฟ"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 38,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-a0ac1163501e79487324d915626c3502",
    "name": "MVP-สคบ.-header-สคบ.",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "type": "uri",
          "uri": "https://complaint.ocpb.go.th/"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 219,
          "width": 491,
          "height": 624
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-KG21Xked"
        }
      },
      {
        "bounds": {
          "x": 495,
          "y": 219,
          "width": 512,
          "height": 624
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"survey-register\"}}",
          "displayText": "สำรวจ ขึ้นทะเบียน"
        }
      },
      {
        "bounds": {
          "x": 1011,
          "y": 219,
          "width": 511,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"statistic\"}}",
          "displayText": "สถิติของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1526,
          "y": 219,
          "width": 471,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "ติดตาม"
        }
      },
      {
        "bounds": {
          "x": 1997,
          "y": 215,
          "width": 499,
          "height": 628
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 39,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-a4b59766f2eeaefb22ae17d1dad063b0",
    "name": "richmenu-08-02-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "เบาะแสทุจริตเลือกตั้ง 69",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เข้าสู่เมนู เบาะแสทุจริตเลือกตั้ง 69",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 40,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-e28b56399f5c74f4eb790de2875d75b8",
    "name": "RichMenu-Report",
    "chat_bar_text": "Menu",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 8,
          "y": 8,
          "width": 2488,
          "height": 828
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"request-location-en\",\"eventType\":\"postback\",\"postbackData\":\"new-report-en\"}}",
          "displayText": "Report a new case"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 41,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-f008cdd0864f5be71af119ac5eb0e716",
    "name": "richmenu-ช่วยน้ำท่วม-29-08-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 42,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-c70d15d2c87a2ee86d10e067bdead261",
    "name": "richmenu-mode-alert-real",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 43,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-173824f0605ce04cbe6ad2a6e5a93bed",
    "name": "richmenu-26-09-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้งน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "แจ้งผู้ป่วยฉุกเฉิน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ep-new-report\"}}",
          "displayText": "ผู้ป่วยฉุกเฉิน"
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "ขอกระสอบทราย/อื่น ๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"sandbag-new-report\"}}",
          "displayText": "ขอกระสอบทราย/อื่น ๆ"
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 44,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-246935b3a842ab4ab42f42e3373cdd2d",
    "name": "RichMenu-Report",
    "chat_bar_text": "Menu",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 8,
          "y": 8,
          "width": 2488,
          "height": 828
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"request-location-en\",\"eventType\":\"postback\",\"postbackData\":\"new-report-en\"}}",
          "displayText": "Report a new case"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 45,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-6fd8a84dc7adc219e39d41bd05029cab",
    "name": "richmenu-27-01-2026-v1-normal",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "เบาะแสทุจริตเลือกตั้ง 69",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เข้าสู่เมนู เบาะแสทุจริตเลือกตั้ง 69",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง ป้ายหาเสียงเกะกะ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-sign\"}}",
          "displayText": "แจ้ง ป้ายหาเสียงเกะกะ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 46,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-8e650a3e773e94e33f71e74cf98e63c3",
    "name": "MVP1-3",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 211
        },
        "action": {
          "type": "uri",
          "uri": "https://www.traffy.in.th/?page_id=1660"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report-flood\"}}",
          "displayText": "ฝนตก/น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 625,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"statistic\"}}",
          "displayText": "สถิติของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1250,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "ติดตาม"
        }
      },
      {
        "bounds": {
          "x": 1875,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 47,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-5c351f6ac08ce873b96c9d4627d248a5",
    "name": "richmenu-30-01-2025",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง รอยร้าว อาคาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-earthquake\"}}",
          "displayText": "แจ้ง รอยร้าว อาคาร"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 48,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-a438c3e74f5d6d5f19952197a4140766",
    "name": "richmenu-25-01-2025",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 49,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-40e9b01288f2fd91fd51d1c6b084cdbe",
    "name": "richmenu-21-10-2026-n1",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 50,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-5ec4855843fd735aaab0fa6bdb8dfd3a",
    "name": "richmenu-panda-09-10-2024-v2",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "ร้องเรียนธุรกิจผิดกฏหมาย",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-cookie\"}}",
          "displayText": "เข้าสู่เมนู ร้องเรียนธุรกิจผิดกฏหมาย",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 51,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-f092b4d72026ab4167ac228b493f8b03",
    "name": "richmenu-18-05-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งปัญหาโซลาร์เซลล์",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"solar-cells-flex-info\"}}",
          "displayText": "แจ้งปัญหาโซลาร์เซลล์"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 52,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-23d8df09356e3b0de73f08d8c1c301f5",
    "name": "richmenu-24-11-2025-mode-n-2",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 53,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-e4955f26dcb20b2f487b4f864f721396",
    "name": "richmenu-07-16-2025-v2",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 54,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-f5460356a62a25ad849c6e5712bf11f4",
    "name": "richmenu-12-08-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 55,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-45d4206dd8954096cea9bceb512ffeb9",
    "name": "richmenu-26-01-2025-v1-alert",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "เบาะแสทุจริตเลือกตั้ง 69",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เข้าสู่เมนู เบาะแสทุจริตเลือกตั้ง 69"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 56,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-43203ff0a933d79dd3aaa83a8df003c9",
    "name": "richmenu-19-03-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 492,
          "height": 386
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 487,
          "y": 0,
          "width": 2013,
          "height": 203
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 487,
          "y": 199,
          "width": 2013,
          "height": 187
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 385,
          "width": 506,
          "height": 458
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 385,
          "width": 497,
          "height": 458
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 999,
          "y": 385,
          "width": 502,
          "height": 458
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1499,
          "y": 385,
          "width": 495,
          "height": 458
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 385,
          "width": 508,
          "height": 458
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 57,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-c681afea3f607245fe69bfaa12480ec4",
    "name": "richmenu-24-03-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งปัญโซลาล์เซลล์",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"solar-cells-flex-info\"}}",
          "displayText": "แจ้งปัญหาโซลาล์เซลล์"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 58,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-dfbe2eb5ec94bf598c9df46b94debb94",
    "name": "richmenu-panda-07-10-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "ร้องเรียนธุรกิจผิดกฏหมาย",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"panda-req-des\"}}",
          "displayText": "เข้าสู่เมนู ร้องเรียนธุรกิจผิดกฏหมาย",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 59,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-ea2b0d9f0129dc37230c76ff6934e71d",
    "name": "richmenu-07-10-2025-mode-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง ป้ายหาเสียงเกะกะ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-sign\"}}",
          "displayText": "แจ้ง ป้ายหาเสียงเกะกะ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 60,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-82862a2717b32ab2397de9601d1e2899",
    "name": "richmenu-24-01-2025",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 61,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-7c4508b282996616453ba3c6de613abb",
    "name": "richmenu-24-03-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งปัญโซลาล์เซลล์",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"solar-cells-flex-info\"}}",
          "displayText": "แจ้งปัญหาโซลาล์เซลล์"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 62,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-3e06ce13253eb15f6faf384b6c57f38d",
    "name": "richmenu-pm25-bkk-a1",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ขอรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "แจ้ง PM 2.5",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"pm25-bkk-new-report\"}}",
          "displayText": "แจ้ง PM 2.5"
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 63,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-ea7254c1e2513f27549805dd67b52bcb",
    "name": "richmenu-18-05-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งปัญหาทางหนีไฟ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"fire-exit-new-report\"}}",
          "displayText": "แจ้งปัญหาทางหนีไฟ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 64,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-ec249f58c4f778978a9b0051f1eb2819",
    "name": "richmenu-24-08-2026-a1",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 65,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-6da8d49000e3e516fdde67b89349a943",
    "name": "richmenu-24-01-2025-v2",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 66,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-8b4cdde046eb55e0f03f3177680e0517",
    "name": "richmenu-คนตาบอด-updated-4-4-2026",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 1291,
          "height": 833
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1296,
          "y": 0,
          "width": 1195,
          "height": 833
        },
        "action": {
          "label": "แจ้งเรื่องใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"blind-person\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 67,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-91fdf53808a31523924c48495b67856e",
    "name": "richmenu-24-11-2025-mode-alert",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 68,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-be4d9a95d6c960b2d963367c4d0a43f9",
    "name": "richmenu-คนตาบอด-updated-4-4-2026-2",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 1291,
          "height": 833
        },
        "action": {
          "label": "ดูเรื่องแจ้งของฉัน",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1296,
          "y": 0,
          "width": 1195,
          "height": 833
        },
        "action": {
          "label": "แจ้งเรื่องใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"blind-person\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 69,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-cb42ec9290bef66e0f75cf066d5dff17",
    "name": "richmenu-27-01-2026-v2-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "เบาะแสทุจริตเลือกตั้ง 69",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เข้าสู่เมนู เบาะแสทุจริตเลือกตั้ง 69",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง ป้ายหาเสียงเกะกะ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-sign\"}}",
          "displayText": "แจ้ง ป้ายหาเสียงเกะกะ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 70,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-f90fbf00e17e67fe693c7c5dc8e6a1b9",
    "name": "richmenu-27-01-2025",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 71,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-13d36c5df4c3d841ef8041c40cb4f56a",
    "name": "MVP-สคบ-header-สคบ-สีฟ้าอ่อน-V2.",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "type": "uri",
          "uri": "https://complaint.ocpb.go.th/"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 219,
          "width": 491,
          "height": 624
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-KG21Xked"
        }
      },
      {
        "bounds": {
          "x": 495,
          "y": 219,
          "width": 512,
          "height": 624
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"survey-register\"}}",
          "displayText": "สำรวจ ขึ้นทะเบียน"
        }
      },
      {
        "bounds": {
          "x": 1011,
          "y": 219,
          "width": 511,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"statistic\"}}",
          "displayText": "สถิติของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1526,
          "y": 219,
          "width": 471,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "ติดตาม"
        }
      },
      {
        "bounds": {
          "x": 1997,
          "y": 215,
          "width": 499,
          "height": 628
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 72,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-d05f5fdfde08bc94da3005ed6b223e05",
    "name": "richmenu-27-01-2026-v1-alert",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "เบาะแสทุจริตเลือกตั้ง 69",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เข้าสู่เมนู เบาะแสทุจริตเลือกตั้ง 69",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ขึ้นทะเบียนสุนัขแมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "แจ้ง ขึ้นทะเบียนสุนัขแมว กทม.",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 73,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-801e7b85de61c3f44d0c343aee56d3ac",
    "name": "richmenu-panda-09-10-2024-v3",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "ร้องเรียนธุรกิจผิดกฏหมาย",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-cookie\"}}",
          "displayText": "เข้าสู่เมนู ร้องเรียนธุรกิจผิดกฏหมาย"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 74,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-ed968928b4e21570a6824d3ca93d6ffb",
    "name": "richmenu-pm25-bkk-n1",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": true,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ขอรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "แจ้ง PM 2.5",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"pm25-bkk-new-report\"}}",
          "displayText": "แจ้ง PM 2.5"
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 75,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-7d51b0d79a183d1f90344fe4c3953b67",
    "name": "richmenu-12-08-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 76,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-fb691b74ba676fe01791e523fc609801",
    "name": "richmenu-27-01-2026-v2-alert",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "เบาะแสทุจริตเลือกตั้ง 69",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เข้าสู่เมนู เบาะแสทุจริตเลือกตั้ง 69",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง ป้ายหาเสียงเกะกะ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-sign\"}}",
          "displayText": "แจ้ง ป้ายหาเสียงเกะกะ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 77,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-3fbabb70ed87e6f31646ce89532fb06b",
    "name": "richmenu-repair-fight-2026-10-2-a",
    "chat_bar_text": "เมนูหลัก 🏠",
    "size_width": 2500,
    "size_height": 1000,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 17,
          "y": 33,
          "width": 2475,
          "height": 173
        },
        "action": {
          "label": "ซ่อม สร้าง สู้",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"repair-build-happy-new-report\"}}",
          "displayText": "ซ่อม สร้าง สู้"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 239,
          "width": 334,
          "height": 322
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 388,
          "y": 223,
          "width": 1035,
          "height": 173
        },
        "action": {
          "label": "แจ้งน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้งน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1440,
          "y": 219,
          "width": 1015,
          "height": 177
        },
        "action": {
          "label": "แจ้งกองขยะน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"floodwaste-new-report\"}}",
          "displayText": "แจ้งกองขยะน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 384,
          "y": 405,
          "width": 1035,
          "height": 168
        },
        "action": {
          "label": "แจ้งผู้ป่วยฉุกเฉิน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ep-new-report\"}}",
          "displayText": "ผู้ป่วยฉุกเฉิน"
        }
      },
      {
        "bounds": {
          "x": 1444,
          "y": 413,
          "width": 1006,
          "height": 156
        },
        "action": {
          "label": "ขอกระสอบทราย/อื่น ๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"sandbag-new-report\"}}",
          "displayText": "ขอกระสอบทราย/อื่น ๆ"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 590,
          "width": 462,
          "height": 433
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 529,
          "y": 594,
          "width": 457,
          "height": 425
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 586,
          "width": 462,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1510,
          "y": 590,
          "width": 470,
          "height": 433
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2008,
          "y": 590,
          "width": 459,
          "height": 429
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 78,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-26df887e6a6c1cfbef3c808cb7e7325b",
    "name": "richmenu-18-05-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งปัญโซลาร์เซลล์",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"solar-cells-flex-info\"}}",
          "displayText": "แจ้งปัญหาโซลาล์เซลล์"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 79,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-72550ca92728f59800ad5dc7b7e122f4",
    "name": "richmenu-07-16-2025-v2",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้งเรื่องถึง สคบ.",
          "type": "message",
          "text": "[tpRqKAvt] แจ้งเรื่องถึง สคบ."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 80,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-3cdcddfd4e3547b0f78d35bec48f9719",
    "name": "MVP-ข่าวสารดี-header-ข่าวสารดี",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-KG21Xked"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 219,
          "width": 491,
          "height": 624
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-KG21Xked"
        }
      },
      {
        "bounds": {
          "x": 495,
          "y": 219,
          "width": 512,
          "height": 624
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"survey-register\"}}",
          "displayText": "สำรวจ ขึ้นทะเบียน"
        }
      },
      {
        "bounds": {
          "x": 1011,
          "y": 219,
          "width": 511,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"statistic\"}}",
          "displayText": "สถิติของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1526,
          "y": 219,
          "width": 471,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "ติดตาม"
        }
      },
      {
        "bounds": {
          "x": 1997,
          "y": 215,
          "width": 499,
          "height": 628
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 81,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-8acd14e9370fd7ff6ae0dc9453b10304",
    "name": "richmenu-19-03-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 492,
          "height": 386
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 487,
          "y": 0,
          "width": 2013,
          "height": 203
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 487,
          "y": 199,
          "width": 2013,
          "height": 187
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 385,
          "width": 506,
          "height": 458
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 385,
          "width": 497,
          "height": 458
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 999,
          "y": 385,
          "width": 502,
          "height": 458
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1499,
          "y": 385,
          "width": 495,
          "height": 458
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 385,
          "width": 508,
          "height": 458
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 82,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-884905d3340b04fed734f1a92da4a25c",
    "name": "richmenu-29-09-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 1052,
          "height": 177
        },
        "action": {
          "label": "แจ้งน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้งน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1424,
          "y": 21,
          "width": 1038,
          "height": 177
        },
        "action": {
          "label": "แจ้งเก็บขยะน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"floodwaste-new-report\"}}",
          "displayText": "แจ้งเก็บขยะน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "แจ้งผู้ป่วยฉุกเฉิน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ep-new-report\"}}",
          "displayText": "ผู้ป่วยฉุกเฉิน"
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "ขอกระสอบทราย/อื่น ๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"sandbag-new-report\"}}",
          "displayText": "ขอกระสอบทราย/อื่น ๆ"
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 83,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-33145443ff5581f5e173fa793ae5c091",
    "name": "richmenu-28-03-2025",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "ช่วยเหลือผู้บาดเจ็บ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-helping\"}}",
          "displayText": "เข้าสู่เมนู ขอความช่วยเหลือ ผู้บาดเจ็บติดค้าง"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง รอยร้าว อาคาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-earthquake\"}}",
          "displayText": "แจ้ง รอยร้าว อาคาร"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 84,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-587f36edf7af3779f880ab8833e9df40",
    "name": "richmenu-23-03-2026-aaa",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 368,
          "height": 386
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 29,
          "width": 2092,
          "height": 161
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 371,
          "y": 206,
          "width": 1019,
          "height": 174
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1419,
          "y": 210,
          "width": 1036,
          "height": 169
        },
        "action": {
          "label": "ให้ข้อมูลประเมินภาครัฐ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-transparency\"}}",
          "displayText": "ให้ข้อมูลประเมินภาครัฐ"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 524,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1023,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 85,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-eafea83c49205fc924de69ff869c6b78",
    "name": "MVP1-1",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 211
        },
        "action": {
          "type": "uri",
          "uri": "https://www.traffy.in.th/?page_id=1660"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"help\"}}",
          "displayText": "ใช้งานอย่างไร"
        }
      },
      {
        "bounds": {
          "x": 625,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"statistic\"}}",
          "displayText": "สถิติของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1250,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "ติดตาม"
        }
      },
      {
        "bounds": {
          "x": 1875,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 86,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-d2d4be29f526a56473bdab2b07756706",
    "name": "RichMenu-Report",
    "chat_bar_text": "Menu",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 8,
          "y": 8,
          "width": 2488,
          "height": 828
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"request-location-en\",\"eventType\":\"postback\",\"postbackData\":\"new-report-en\"}}",
          "displayText": "Report a new case"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 87,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-c7e20fa019a90692027d748614b8565f",
    "name": "MVP-ข่าวสารดี-header-ข่าวสารดี-(เฉพาะ กทม.)",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-KG21Xked"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 219,
          "width": 491,
          "height": 624
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-KG21Xked"
        }
      },
      {
        "bounds": {
          "x": 495,
          "y": 219,
          "width": 512,
          "height": 624
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"survey-register\"}}",
          "displayText": "สำรวจ ขึ้นทะเบียน"
        }
      },
      {
        "bounds": {
          "x": 1011,
          "y": 219,
          "width": 511,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"statistic\"}}",
          "displayText": "สถิติของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1526,
          "y": 219,
          "width": 471,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "ติดตาม"
        }
      },
      {
        "bounds": {
          "x": 1997,
          "y": 215,
          "width": 499,
          "height": 628
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 88,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-043174b1082b435763865623e17dcd20",
    "name": "richmenu-23-03-2026-nnn",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 368,
          "height": 386
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 29,
          "width": 2092,
          "height": 161
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 371,
          "y": 206,
          "width": 1019,
          "height": 174
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1419,
          "y": 210,
          "width": 1036,
          "height": 169
        },
        "action": {
          "label": "ให้ข้อมูลประเมินภาครัฐ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-transparency\"}}",
          "displayText": "ให้ข้อมูลประเมินภาครัฐ"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 524,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1023,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 89,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-04237931f4d3999280171bdb0a55829e",
    "name": "richmenu-16-07-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งจุดเสี่ยงอัคคีภัย",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"fire-exit-new-report\"}}",
          "displayText": "แจ้งจุดเสี่ยงอัคคีภัย"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 90,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-bef2532543a875e6a2ae9fc0fd9cfee2",
    "name": "MVP-header-bangkok-2.",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 140
        },
        "action": {
          "type": "uri",
          "uri": "https://bangkok.traffy.in.th/"
        }
      },
      {
        "bounds": {
          "x": 45,
          "y": 194,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 657,
          "y": 188,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1270,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "เรื่องแจ้งของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1869,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 91,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-005d33e5810e0e03f313535c28008326",
    "name": "richmenu-24-08-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 92,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-4687a3db31565a379b1ab83a743628dc",
    "name": "richmenu-11-08-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งจุดเสี่ยงอัคคีภัย",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"fire-exit-new-report\"}}",
          "displayText": "แจ้งจุดเสี่ยงอัคคีภัย"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 93,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-ad7efd04febaa7d3be705b3409f19b7c",
    "name": "richmenu-24-11-2025-mode-alert",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 94,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-8f5fc35f0820afe530cd3ad34b25b4e8",
    "name": "MVP-header-bangkok-3.",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 140
        },
        "action": {
          "type": "uri",
          "uri": "https://bangkok.traffy.in.th/"
        }
      },
      {
        "bounds": {
          "x": 45,
          "y": 194,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 657,
          "y": 188,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1270,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4"
        }
      },
      {
        "bounds": {
          "x": 1869,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 95,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-fcb3c4902a49f95ebf80a77d0bef2420",
    "name": "richmenu-panda-09-10-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "ร้องเรียนธุรกิจผิดกฏหมาย",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-cookie\"}}",
          "displayText": "เข้าสู่เมนู ร้องเรียนธุรกิจผิดกฏหมาย",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 96,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-3ccd4926752c3baf7aa492121a34a197",
    "name": "richmenu-11-08-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งจุดเสี่ยงอัคคีภัย",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"fire-exit-new-report\"}}",
          "displayText": "แจ้งจุดเสี่ยงอัคคีภัย"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 97,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-e52bf11e94df8b6316d44c96501b4004",
    "name": "richmenu-15-07-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งปัญหาทางหนีไฟ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"fire-exit-new-report\"}}",
          "displayText": "แจ้งปัญหาทางหนีไฟ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 98,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-37a762881b7b1332fcc46c486ce43d4d",
    "name": "richmenu-07-01-2025",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "type": "uri",
          "uri": "https://landing.traffy.in.th?key=gmyeYDBV"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 99,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-c588fa875607e2f009c0a35319daa88a",
    "name": "DevMenu",
    "chat_bar_text": "กดเพื่อเริ่มคุย",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 829,
          "height": 843
        },
        "action": {
          "type": "message",
          "text": "สวัสดีครับ"
        }
      },
      {
        "bounds": {
          "x": 833,
          "y": 0,
          "width": 855,
          "height": 843
        },
        "action": {
          "type": "message",
          "text": "แจ้งขยะนอกถังครับ"
        }
      },
      {
        "bounds": {
          "x": 1728,
          "y": 0,
          "width": 772,
          "height": 840
        },
        "action": {
          "type": "message",
          "text": "ยังไม่ได้ทำอะไร"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 100,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-0ba4710a39941f6c4814a54fa5982afe",
    "name": "richmenu-24-08-2026-n1",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 101,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-bc3ebb12bc50a48d3f3c46da28a48d6e",
    "name": "MVP-header-bangkok-V1.",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 140
        },
        "action": {
          "type": "uri",
          "uri": "https://bangkok.traffy.in.th/"
        }
      },
      {
        "bounds": {
          "x": 45,
          "y": 194,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 657,
          "y": 188,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1270,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "เรื่องแจ้งของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1869,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 102,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-923d079b6e3d3cad9434bc303a06b0d1",
    "name": "RichMenu-en",
    "chat_bar_text": "Menu",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 211
        },
        "action": {
          "type": "uri",
          "uri": "https://www.traffy.in.th/?page_id=1660"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"help\"}}",
          "displayText": "ใช้งานอย่างไร"
        }
      },
      {
        "bounds": {
          "x": 625,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"statistic\"}}",
          "displayText": "สถิติของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1250,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "ติดตาม"
        }
      },
      {
        "bounds": {
          "x": 1875,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"request-location-en\",\"eventType\":\"postback\",\"postbackData\":\"new-report-en\"}}",
          "displayText": "New report"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 103,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-6793079a9fa60f12ac406f73a567a182",
    "name": "richmenu-30-09-2026-n",
    "chat_bar_text": "เมนูหลัก 🏠",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 1052,
          "height": 177
        },
        "action": {
          "label": "แจ้งน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้งน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1424,
          "y": 21,
          "width": 1038,
          "height": 177
        },
        "action": {
          "label": "แจ้งกองขยะน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"floodwaste-new-report\"}}",
          "displayText": "แจ้งกองขยะน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "แจ้งผู้ป่วยฉุกเฉิน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ep-new-report\"}}",
          "displayText": "ผู้ป่วยฉุกเฉิน"
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "ขอกระสอบทราย/อื่น ๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"sandbag-new-report\"}}",
          "displayText": "ขอกระสอบทราย/อื่น ๆ"
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 104,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-73b12785743a2e093f167dd8f9fb034b",
    "name": "MVP1-3",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 211
        },
        "action": {
          "type": "uri",
          "uri": "https://www.traffy.in.th/?page_id=1660"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"check-flood-report\"}}",
          "displayText": "ตรวจสอบน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 625,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"statistic\"}}",
          "displayText": "สถิติของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1250,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "ติดตาม"
        }
      },
      {
        "bounds": {
          "x": 1875,
          "y": 210,
          "width": 625,
          "height": 633
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 105,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-66f65a7e5efbb196151549a9bfd7b962",
    "name": "RichMenu-en",
    "chat_bar_text": "Menu",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 8,
          "y": 8,
          "width": 2488,
          "height": 828
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"request-location-en\",\"eventType\":\"postback\",\"postbackData\":\"new-report-en\"}}",
          "displayText": "New report"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 106,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-9b80b05534cf4842ad0e1ec5b074dacb",
    "name": "richmenu-08-02-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "เบาะแสทุจริตเลือกตั้ง 69",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เข้าสู่เมนู เบาะแสทุจริตเลือกตั้ง 69",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ขึ้นทะเบียนสุนัขแมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "แจ้ง ขึ้นทะเบียนสุนัขแมว กทม.",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 107,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-22260564ae82f632407ac7b13e0273e9",
    "name": "richmenu-11-05-2025",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 108,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-a8960dd18e76b81cccb314a7118c9ead",
    "name": "richmenu-21-10-2026-a1",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 109,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-d3063eaa6f1d2d3b56aa3708c5fee23d",
    "name": "MVP-header-BKK-Dvote-V1",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 140
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2004941801-aN8zL2qe"
        }
      },
      {
        "bounds": {
          "x": 45,
          "y": 194,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 657,
          "y": 188,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1270,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4"
        }
      },
      {
        "bounds": {
          "x": 1869,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 110,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-dadd65f317c95bf9bdede85ea51ee732",
    "name": "richmenu-24-03-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 111,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-0d5bb5d374d59d63e6fd3ba10b6e3d21",
    "name": "richmenu-mode-alert-real",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 112,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-14a0a49f1698babca271c25552e6af4d",
    "name": "richmenu-07-10-2025-mode-n-2",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง ป้ายหาเสียงเกะกะ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-sign\"}}",
          "displayText": "แจ้ง ป้ายหาเสียงเกะกะ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 113,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-15bdbcb0a9084efe12635b11bb1c347f",
    "name": "RichMenu-Report",
    "chat_bar_text": "Menu",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 8,
          "y": 8,
          "width": 2488,
          "height": 828
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"request-location-en\",\"eventType\":\"postback\",\"postbackData\":\"new-report-en\"}}",
          "displayText": "Report a new case"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 114,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-23768ef6628293b88279525a3597ed97",
    "name": "richmenu-07-16-2025",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-cookie\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 115,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-f6dce3ebf46a2a88430c52e3ecc627b1",
    "name": "MVP-header-BKK-Dvote-V2",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 140
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2004941801-aN8zL2qe"
        }
      },
      {
        "bounds": {
          "x": 45,
          "y": 194,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 657,
          "y": 188,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1270,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4"
        }
      },
      {
        "bounds": {
          "x": 1869,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 116,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-9abb48c94437f1b1d597af22c80eb278",
    "name": "richmenu-pm25-bkk-test",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"pm25-bkk-new-report\"}}",
          "displayText": "แจ้ง PM 2.5"
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 117,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-da3e61fedf8d9fc47821c34a0c435755",
    "name": "richmenu-24-08-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 118,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-b47fe0b6908d0f92130b11955654a663",
    "name": "MVP1-4",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "type": "uri",
          "uri": "https://www.traffy.in.th/?page_id=1660"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 219,
          "width": 491,
          "height": 624
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"check-flood-report\"}}",
          "displayText": "ตรวจสอบน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 495,
          "y": 219,
          "width": 512,
          "height": 624
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"survey-register\"}}",
          "displayText": "สำรวจ ขึ้นทะเบียน"
        }
      },
      {
        "bounds": {
          "x": 1011,
          "y": 219,
          "width": 511,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"statistic\"}}",
          "displayText": "สถิติของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1526,
          "y": 219,
          "width": 471,
          "height": 623
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "ติดตาม"
        }
      },
      {
        "bounds": {
          "x": 1997,
          "y": 215,
          "width": 499,
          "height": 628
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 119,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-8af6b1f15823933d60052bb60bb25b1b",
    "name": "richmenu-เชิญชวนเมืองใจดี-20-09-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "type": "uri",
          "uri": "https://lin.ee/yiS14WI"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 120,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-ec769960b56fd7e3f0cdbbb299510033",
    "name": "richmenu-10-03-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "ขึ้นทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "ขึ้นทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 121,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-1e422b36089ecf92555c63487460c951",
    "name": "richmenu-เชิญชวนเมืองใจดี-20-09-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "type": "uri",
          "uri": "https://lin.ee/yiS14WI"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 122,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-78d15a759f51704f6742fd734146b242",
    "name": "richmenu-26-09-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้งน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "แจ้งผู้ป่วยฉุกเฉิน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ep-new-report\"}}",
          "displayText": "ผู้ป่วยฉุกเฉิน"
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "ขอกระสอบทราย/อื่น ๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"sandbag-new-report\"}}",
          "displayText": "ขอกระสอบทราย/อื่น ๆ"
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 123,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-dd6eaccb5314450eaf14731e90d081d6",
    "name": "richmenu-12-08-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งรับผ้าอ้อมผู้ใหญ่ กทม.",
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 124,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-33a297685067c900e183712a647c533b",
    "name": "richmenu-30-09-2026-a",
    "chat_bar_text": "เมนูหลัก 🏠",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 1052,
          "height": 177
        },
        "action": {
          "label": "แจ้งน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้งน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1424,
          "y": 21,
          "width": 1038,
          "height": 177
        },
        "action": {
          "label": "แจ้งกองขยะน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"floodwaste-new-report\"}}",
          "displayText": "แจ้งกองขยะน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "แจ้งผู้ป่วยฉุกเฉิน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ep-new-report\"}}",
          "displayText": "ผู้ป่วยฉุกเฉิน"
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "ขอกระสอบทราย/อื่น ๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"sandbag-new-report\"}}",
          "displayText": "ขอกระสอบทราย/อื่น ๆ"
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 125,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-ffeac6e1588872622468d54a70fd0f25",
    "name": "richmenu-26-01-2025-v1-normal",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "เบาะแสทุจริตเลือกตั้ง 69",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เข้าสู่เมนู เบาะแสทุจริตเลือกตั้ง 69"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 126,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-8f235a144f8e89c95df8565da0c5fee9",
    "name": "MVP-สคบ-header-สคบ-สีฟ้าอ่อน-V3.",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "type": "uri",
          "uri": "https://complaint.ocpb.go.th/"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 215,
          "width": 632,
          "height": 628
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "อื่นๆ"
        }
      },
      {
        "bounds": {
          "x": 629,
          "y": 215,
          "width": 632,
          "height": 627
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "รายการแจ้งของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1246,
          "y": 215,
          "width": 622,
          "height": 627
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "ดูเรื่องแจ้งจากคนอื่น"
        }
      },
      {
        "bounds": {
          "x": 1868,
          "y": 215,
          "width": 632,
          "height": 627
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 127,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-5099595c892287d788a5f58c3f9b617f",
    "name": "richmenu-18-05-2026-a",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งปัญโซลาร์เซลล์",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"solar-cells-flex-info\"}}",
          "displayText": "แจ้งปัญหาโซลาล์เซลล์"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 128,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-66c6b2d5ddc609fe37d3bfa548630d60",
    "name": "richmenu-18-05-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "แจ้งปัญหาโซลาร์เซลล์",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"solar-cells-flex-info\"}}",
          "displayText": "แจ้งปัญหาโซลาร์เซลล์"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 129,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-4843157cd74dea79a7457a5893dba16b",
    "name": "richmenu-panda-09-10-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "ร้องเรียนธุรกิจผิดกฏหมาย",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-cookie\"}}",
          "displayText": "เข้าสู่เมนู ร้องเรียนธุรกิจผิดกฏหมาย",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 130,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-bacf60546acbc021de5617b2e5d91511",
    "name": "richmenu-panda-15-10-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "ร้องเรียนธุรกิจผิดกฏหมาย",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-cookie\"}}",
          "displayText": "เข้าสู่เมนู ร้องเรียนธุรกิจผิดกฏหมาย"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 131,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-0d68eb2b1496528957e9dc9363f92d18",
    "name": "richmenu-30-01-2025",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 132,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-7ebc18a9348fedf9b6df4d3a029f1ca1",
    "name": "richmenu-06-03-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "เบาะแสทุจริตเลือกตั้ง 69",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เข้าสู่เมนู เบาะแสทุจริตเลือกตั้ง 69",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 133,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-0c0f6e3f731be14fae01a9bf7a6488c1",
    "name": "richmenu-27-01-2026-v1-alert",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "เบาะแสทุจริตเลือกตั้ง 69",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เข้าสู่เมนู เบาะแสทุจริตเลือกตั้ง 69",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง ป้ายหาเสียงเกะกะ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-sign\"}}",
          "displayText": "แจ้ง ป้ายหาเสียงเกะกะ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 134,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-3ee0049c217f926125e9b2a1cbefbd99",
    "name": "MVP-header-BKK-Dvote-V3",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 140
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2004941801-aN8zL2qe"
        }
      },
      {
        "bounds": {
          "x": 45,
          "y": 194,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 657,
          "y": 188,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1270,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4"
        }
      },
      {
        "bounds": {
          "x": 1869,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 135,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-73dc389bbdd3a567d4a8b062f1e3bbd7",
    "name": "richmenu-23-03-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ed968928b4e21570a6824d3ca93d6ffb.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 492,
          "height": 386
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 487,
          "y": 0,
          "width": 2013,
          "height": 203
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 487,
          "y": 199,
          "width": 2013,
          "height": 187
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 385,
          "width": 506,
          "height": 458
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 385,
          "width": 497,
          "height": 458
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 999,
          "y": 385,
          "width": 502,
          "height": 458
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1499,
          "y": 385,
          "width": 495,
          "height": 458
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 385,
          "width": 508,
          "height": 458
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Production"
  },
  {
    "id": 136,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-f1629f234507b02c0856b3d0fef06a09",
    "name": "richmenu-repair-fight-2026-n",
    "chat_bar_text": "เมนูหลัก 🏠",
    "size_width": 2500,
    "size_height": 1686,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 17,
          "y": 33,
          "width": 2475,
          "height": 173
        },
        "action": {
          "label": "ซ่อม สร้าง สู้",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"repair-build-happy-new-report\"}}",
          "displayText": "ซ่อม สร้าง สู้"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 239,
          "width": 334,
          "height": 322
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 388,
          "y": 223,
          "width": 1035,
          "height": 173
        },
        "action": {
          "label": "แจ้งน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้งน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1440,
          "y": 219,
          "width": 1015,
          "height": 177
        },
        "action": {
          "label": "แจ้งกองขยะน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"floodwaste-new-report\"}}",
          "displayText": "แจ้งกองขยะน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 384,
          "y": 405,
          "width": 1035,
          "height": 168
        },
        "action": {
          "label": "แจ้งผู้ป่วยฉุกเฉิน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ep-new-report\"}}",
          "displayText": "ผู้ป่วยฉุกเฉิน"
        }
      },
      {
        "bounds": {
          "x": 1444,
          "y": 413,
          "width": 1006,
          "height": 156
        },
        "action": {
          "label": "ขอกระสอบทราย/อื่น ๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"sandbag-new-report\"}}",
          "displayText": "ขอกระสอบทราย/อื่น ๆ"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 590,
          "width": 462,
          "height": 433
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 529,
          "y": 594,
          "width": 457,
          "height": 425
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 586,
          "width": 462,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1510,
          "y": 590,
          "width": 470,
          "height": 433
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2008,
          "y": 590,
          "width": 459,
          "height": 429
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 137,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-2f3c4eb6bc7c91bfb844f74eb134ba08",
    "name": "richmenu-04-30-2025-v2",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-2f3c4eb6bc7c91bfb844f74eb134ba08.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง รอยร้าว อาคาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-earthquake\"}}",
          "displayText": "แจ้ง รอยร้าว อาคาร"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 138,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-c4591bc30ca71566ef5a5afb5c607564",
    "name": "transparency-assessment-menu",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c4591bc30ca71566ef5a5afb5c607564.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 500,
          "height": 843
        },
        "action": {
          "label": "บริการอื่นๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 500,
          "y": 0,
          "width": 500,
          "height": 843
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-user\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1000,
          "y": 0,
          "width": 500,
          "height": 843
        },
        "action": {
          "label": "ประเมินความโปร่งใส",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-transparency\"}}",
          "displayText": "ให้ข้อมูลประเมินความโปร่งใส"
        }
      },
      {
        "bounds": {
          "x": 1500,
          "y": 0,
          "width": 500,
          "height": 843
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2000,
          "y": 0,
          "width": 500,
          "height": 843
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 139,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-4010a6d6b913f3b9ef33008c63b22509",
    "name": "richmenu-ind-24-01-2025",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-4010a6d6b913f3b9ef33008c63b22509.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "แจ้งอุต",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุต",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "แจ้งอุต",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุต",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 140,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-9ac34c9b9daca01db0128f0a5a743cb6",
    "name": "richmenu-16-07-2025-A",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-9ac34c9b9daca01db0128f0a5a743cb6.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "A",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-cookie\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 141,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-eef00124b92a39bee0fabcdb497f9a33",
    "name": "richmenu-16-07-2025-B",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-eef00124b92a39bee0fabcdb497f9a33.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "message",
          "text": "[tpRqKAvt] แจ้ง สคบ."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 142,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-ff790658afbd80ddf0ebf5edac7ffe8e",
    "name": "richmenu-repair-fight-2026-n",
    "chat_bar_text": "เมนูหลัก 🏠",
    "size_width": 2500,
    "size_height": 1686,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-ff790658afbd80ddf0ebf5edac7ffe8e.png",
    "areas": [
      {
        "bounds": {
          "x": 17,
          "y": 33,
          "width": 2475,
          "height": 173
        },
        "action": {
          "label": "ซ่อม สร้าง สู้",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"repair-build-happy-new-report\"}}",
          "displayText": "ซ่อม สร้าง สู้"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 239,
          "width": 334,
          "height": 322
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 388,
          "y": 223,
          "width": 1035,
          "height": 173
        },
        "action": {
          "label": "แจ้งน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้งน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1440,
          "y": 219,
          "width": 1015,
          "height": 177
        },
        "action": {
          "label": "แจ้งกองขยะน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"floodwaste-new-report\"}}",
          "displayText": "แจ้งกองขยะน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 384,
          "y": 405,
          "width": 1035,
          "height": 168
        },
        "action": {
          "label": "แจ้งผู้ป่วยฉุกเฉิน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ep-new-report\"}}",
          "displayText": "ผู้ป่วยฉุกเฉิน"
        }
      },
      {
        "bounds": {
          "x": 1444,
          "y": 413,
          "width": 1006,
          "height": 156
        },
        "action": {
          "label": "ขอกระสอบทราย/อื่น ๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"sandbag-new-report\"}}",
          "displayText": "ขอกระสอบทราย/อื่น ๆ"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 590,
          "width": 462,
          "height": 433
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 529,
          "y": 594,
          "width": 457,
          "height": 425
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 586,
          "width": 462,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1510,
          "y": 590,
          "width": 470,
          "height": 433
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2008,
          "y": 590,
          "width": 459,
          "height": 429
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 143,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-dfca5ebbc0f4154ec26908a068ba450f",
    "name": "richmenu-02-04-2025-ส่งมากกว่า 1 รูป",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-dfca5ebbc0f4154ec26908a068ba450f.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "ส่งรูปภาพเยอะ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dev-send-more-img\"}}",
          "displayText": "ส่งรูปภาพเยอะๆๆ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง รอยร้าว อาคาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-earthquake\"}}",
          "displayText": "แจ้ง รอยร้าว อาคาร"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 144,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-8fa9d2d54e804b0f4a306edf0c7714de",
    "name": "transparency-assessment-menu",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-8fa9d2d54e804b0f4a306edf0c7714de.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 500,
          "height": 843
        },
        "action": {
          "label": "บริการอื่นๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 500,
          "y": 0,
          "width": 500,
          "height": 843
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-user\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1000,
          "y": 0,
          "width": 500,
          "height": 843
        },
        "action": {
          "label": "ประเมินความโปร่งใส",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-transparency\"}}",
          "displayText": "ให้ข้อมูลประเมินความโปร่งใส"
        }
      },
      {
        "bounds": {
          "x": 1500,
          "y": 0,
          "width": 500,
          "height": 843
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2000,
          "y": 0,
          "width": 500,
          "height": 843
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 145,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-f82e93c41fd7817a9fb7b327915475fc",
    "name": "richmenu-19-03-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-f82e93c41fd7817a9fb7b327915475fc.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 492,
          "height": 386
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 487,
          "y": 0,
          "width": 2013,
          "height": 203
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 371,
          "y": 206,
          "width": 1019,
          "height": 174
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1419,
          "y": 210,
          "width": 1036,
          "height": 169
        },
        "action": {
          "label": "ใหข้อมูลประเมินภาครัฐ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-transparency\"}}",
          "displayText": "ใหข้อมูลประเมินภาครัฐ."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 385,
          "width": 506,
          "height": 458
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 385,
          "width": 497,
          "height": 458
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 999,
          "y": 385,
          "width": 502,
          "height": 458
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1499,
          "y": 385,
          "width": 495,
          "height": 458
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 385,
          "width": 508,
          "height": 458
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 146,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-67c6156122eb21e19552f49e64bdb81b",
    "name": "richmenu-16-07-2025-C",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "message",
          "text": "[tpRqKAvt] แจ้งเรื่องถึง สคบ."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 147,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-e0bc7033b02cde17f8545efb570e4f82",
    "name": "richmenu-05-25-2025",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 148,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-3dd90ee64006fa7c7e619427c74e63ba",
    "name": "richmenu-ind-24-01-2025-v3",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 149,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-aed7f571b2a7300f267bd0c55bc8321f",
    "name": "richmenu-test-flood",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้งน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "แจ้งผู้ป่วยฉุกเฉิน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ep-new-report\"}}",
          "displayText": "ผู้ป่วยฉุกเฉิน"
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "ขอกระสอบทราย/อื่น ๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"sandbag-new-report\"}}",
          "displayText": "ขอกระสอบทราย/อื่น ๆ"
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 150,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-2072dbbbe2a426b5d8a26063ff9b2fda",
    "name": "richmenu-panda-01-10-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "ร้องเรียนธุรกิจผิดกฏหมาย",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"panda-req-des\"}}",
          "displayText": "เข้าสู่เมนู ร้องเรียนธุรกิจผิดกฏหมาย"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 151,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-45e412c63e1aef03baecc2e319fac6cb",
    "name": "richmenu-23-04-2026",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "รวมแจ้งปัญหา",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-services\"}}",
          "displayText": "รวมแจ้งปัญหา"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 152,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-72e7221e63098223b4de3473969c7bde",
    "name": "richmenu-คนตาบอด-updated",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 1291,
          "height": 833
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1296,
          "y": 0,
          "width": 1195,
          "height": 833
        },
        "action": {
          "label": "คนตาบอด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"blind-person\"}}",
          "displayText": "คนตาบอด"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 153,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-5846d05f8b660b761a3a94b0842c18e1",
    "name": "richmenu-ind-24-01-2025-v4",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 154,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-cb15666bb84a6918d934f5d9e16f162c",
    "name": "richmenu-ind-24-01-2025-v2",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 155,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-17db4b21b149f009c05f525926cdcae6",
    "name": "Rich Menu B",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 843
        },
        "action": {
          "label": "B",
          "type": "message",
          "text": "B"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 156,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-8db34f4ff0bcb748eb0ca04e542250ca",
    "name": "richmenu-panda-27-09-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "ร้องเรียนธุรกิจผิดกฏหมาย",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"panda-req-des\"}}",
          "displayText": "เข้าสู่เมนู ร้องเรียนธุรกิจผิดกฏหมาย"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 157,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-19407f7f2af6fdb5fec64286ed023ac7",
    "name": "richmenu-30-01-2025",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง รอยร้าว อาคาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-earthquake\"}}",
          "displayText": "แจ้ง รอยร้าว อาคาร"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 158,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-258efe17aba3573698ef7f60497f9680",
    "name": "richmenu-ช่วยน้ำท่วม-25-08-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 144
        },
        "action": {
          "type": "uri",
          "uri": "https://bangkok.traffy.in.th/"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เลือกช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เลือกช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 159,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-18d42bb6e8448cb00a354d74cbd27dfe",
    "name": "richmenu-ind-03-06-2025",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "วิดิโอ/ไฟล์/เสียง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-dsi\"}}",
          "displayText": "ทดสอบ ส่ง วิดิโอ/ไฟล์/เสียง"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 160,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-320d315c03bf80a12b7acdc437c7e48d",
    "name": "richmenu-15-07-2025-A",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "B",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"go-to-rich-menu-a\"}}",
          "displayText": "B"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 161,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-3823f77568695adaa2d3531cc3bed444",
    "name": "richmenu-panda-26-09-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "Demo project panda",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"panda-req-des\"}}",
          "displayText": "Demo project panda"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 162,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-4c9f9a75fa0191ed169e5bc9e32d7f8c",
    "name": "richmenu-ind-24-01-2025",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "แจ้งอุต",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุต"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "แจ้งอุต",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุต"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 163,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-5b6fdec0b99a7b39cba23493c38ba93f",
    "name": "richmenu-mode-normal-real",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 164,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-2459e773134ae17c16cd0ea0d113a1fb",
    "name": "richmenu-04-30-2025-",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "ส่งรูปภาพเยอะ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dev-send-more-img\"}}",
          "displayText": "ส่งรูปภาพเยอะๆๆ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง รอยร้าว อาคาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-earthquake\"}}",
          "displayText": "แจ้ง รอยร้าว อาคาร"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 165,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-b686422042d9f0d2bd99e6fd767e78d1",
    "name": "richmenu-ind-21-01-2025",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "แจ้งอุต",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"industry-req-des\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุต",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 166,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-2617af9104cc78632ff6ad1faf11f165",
    "name": "richmenu-bilnd-person",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dev-go-to-richmenu-b\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "demand-supply",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"req-post-type\"}}",
          "displayText": "demand-supply"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "คนตาบอด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"blind-person\"}}",
          "displayText": "คนตาบอด",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "WE VOTE",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 167,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-f3bde6e933d50517cf8ea6848ac060ff",
    "name": "richmenu-19-03-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 492,
          "height": 386
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 487,
          "y": 0,
          "width": 2013,
          "height": 203
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 371,
          "y": 206,
          "width": 1019,
          "height": 174
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1419,
          "y": 210,
          "width": 1036,
          "height": 169
        },
        "action": {
          "label": "ใหข้อมูลประเมินภาครัฐ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-transparency\"}}",
          "displayText": "ใหข้อมูลประเมินภาครัฐ."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 385,
          "width": 506,
          "height": 458
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 385,
          "width": 497,
          "height": 458
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 999,
          "y": 385,
          "width": 502,
          "height": 458
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1499,
          "y": 385,
          "width": 495,
          "height": 458
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 385,
          "width": 508,
          "height": 458
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 168,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-8ab84698191956f86ba88a79baaefa0e",
    "name": "richmenu-19-03-2026-n",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 492,
          "height": 386
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 487,
          "y": 0,
          "width": 2013,
          "height": 203
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 371,
          "y": 206,
          "width": 1019,
          "height": 174
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1419,
          "y": 210,
          "width": 1036,
          "height": 169
        },
        "action": {
          "label": "ใหข้อมูลประเมินภาครัฐ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-transparency\"}}",
          "displayText": "ใหข้อมูลประเมินภาครัฐ."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 385,
          "width": 506,
          "height": 458
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 385,
          "width": 497,
          "height": 458
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 999,
          "y": 385,
          "width": 502,
          "height": 458
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1499,
          "y": 385,
          "width": 495,
          "height": 458
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 385,
          "width": 508,
          "height": 458
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 169,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-3496282641824cfa3001b4a6ee51ba89",
    "name": "richmenu-คนตาบอด-updated",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 1291,
          "height": 843
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1291,
          "y": 0,
          "width": 1209,
          "height": 843
        },
        "action": {
          "label": "คนตาบอด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"blind-person\"}}",
          "displayText": "คนตาบอด"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 170,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-0c91454f94e0f813f647cc4f4923c5a0",
    "name": "Rich Menu B 2",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 843
        },
        "action": {
          "label": "B",
          "type": "message",
          "text": "B"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 171,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-2fbddb6155f619d2d7a20f063222bc2b",
    "name": "richmenu-pm25-bkk-test",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-95uKB5EW"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"pm25-bkk-new-report\"}}",
          "displayText": "แจ้ง PM 2.5"
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 172,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-bb47a9c0da925eebcaa5de31851e3cfd",
    "name": "richmenu-คนตาบอด-updated",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 1291,
          "height": 833
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1296,
          "y": 0,
          "width": 1195,
          "height": 833
        },
        "action": {
          "label": "คนตาบอด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"blind-person\"}}",
          "displayText": "คนตาบอด"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 173,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-758421a2a4bb073d6bb19599af3910fe",
    "name": "richmenu-ind-24-01-2025-v4",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 174,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-11c207e2e95ef3d162e51b8568d73294",
    "name": "richmenu-ind-21-01-2025-v2",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "แจ้งอุต",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุต",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 175,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-6ec605ce9c9e7ef5209cde7f42ab4a9c",
    "name": "richmenu-repair-fight-test",
    "chat_bar_text": "เมนูหลัก 🏠",
    "size_width": 2500,
    "size_height": 1062,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 17,
          "y": 33,
          "width": 2475,
          "height": 173
        },
        "action": {
          "label": "ซ่อม สร้าง สู้",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"repair-build-happy-new-report\"}}",
          "displayText": "ซ่อม สร้าง สู้"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 239,
          "width": 334,
          "height": 322
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 388,
          "y": 223,
          "width": 1035,
          "height": 173
        },
        "action": {
          "label": "แจ้งน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้งน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1440,
          "y": 219,
          "width": 1015,
          "height": 177
        },
        "action": {
          "label": "แจ้งกองขยะน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"floodwaste-new-report\"}}",
          "displayText": "แจ้งกองขยะน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 384,
          "y": 405,
          "width": 1035,
          "height": 168
        },
        "action": {
          "label": "แจ้งผู้ป่วยฉุกเฉิน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ep-new-report\"}}",
          "displayText": "ผู้ป่วยฉุกเฉิน"
        }
      },
      {
        "bounds": {
          "x": 1444,
          "y": 413,
          "width": 1006,
          "height": 156
        },
        "action": {
          "label": "ขอกระสอบทราย/อื่น ๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"sandbag-new-report\"}}",
          "displayText": "ขอกระสอบทราย/อื่น ๆ"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 590,
          "width": 462,
          "height": 433
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 529,
          "y": 594,
          "width": 457,
          "height": 425
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 586,
          "width": 462,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1510,
          "y": 590,
          "width": 470,
          "height": 433
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2008,
          "y": 590,
          "width": 459,
          "height": 429
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 176,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-c9a2ed62d1b936a3df397d4fbfdd8747",
    "name": "richmenu-15-08-2025",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 177,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-d2387dc214381d3f6db136909d5fba51",
    "name": "richmenu-bilnd-person",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dev-go-to-richmenu-b\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "demand-supply",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"req-post-type\"}}",
          "displayText": "demand-supply"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dev-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "WE VOTE",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 178,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-d99778706feda1cb491bc1393cca5246",
    "name": "richmenu-ช่วยน้ำท่วม-28-08-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 144
        },
        "action": {
          "type": "uri",
          "uri": "https://bangkok.traffy.in.th/"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 179,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-34d9bb97086f87601b809b1e78f6784f",
    "name": "richmenu-16-07-2025-C",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "message",
          "text": "[tpRqKAvt] แจ้ง สคบ."
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 180,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-951d769e57abc9ca54169205e33118f5",
    "name": "richmenu-05-25-2025-v2",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 181,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-bcd8cd1b0e3ee56abf5a317aacd885e9",
    "name": "richmenu-ind-06-02-2025-v4",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "วิดิโอ/ไฟล์/เสียง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dev-send-infomation\"}}",
          "displayText": "ทดสอบ ส่ง วิดิโอ/ไฟล์/เสียง"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง PM 2.5 เผา ควันดำ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-pm25\"}}",
          "displayText": "แจ้ง PM 2.5 เผา ควันดำ",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 182,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-e17ab82e5c4eb187c9a84981164126e9",
    "name": "richmenu-ind-24-01-2025-v4",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 183,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-d50130df4d44f5fabb8f0c76b9189433",
    "name": "richmenu-flood-test",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 29,
          "y": 8,
          "width": 330,
          "height": 380
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 21,
          "width": 2096,
          "height": 177
        },
        "action": {
          "label": "แจ้งน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้งน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 367,
          "y": 215,
          "width": 994,
          "height": 160
        },
        "action": {
          "label": "แจ้งผู้ป่วยฉุกเฉิน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ep-new-report\"}}",
          "displayText": "ผู้ป่วยฉุกเฉิน"
        }
      },
      {
        "bounds": {
          "x": 1389,
          "y": 215,
          "width": 1070,
          "height": 160
        },
        "action": {
          "label": "ขอกระสอบทราย/อื่น ๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"sandbag-new-report\"}}",
          "displayText": "ขอกระสอบทราย/อื่น ๆ"
        }
      },
      {
        "bounds": {
          "x": 33,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 525,
          "y": 396,
          "width": 461,
          "height": 429
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 392,
          "width": 466,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1514,
          "y": 396,
          "width": 462,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2009,
          "y": 396,
          "width": 462,
          "height": 425
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 184,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-aabd9bce38414101e3040b4f5871e125",
    "name": "Rich Menu A",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 843
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dev-go-to-richmenu-b\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 185,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-370bf0ec47bcdf26c7335112ebc3fb85",
    "name": "กระดิ่งดำ",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 17,
          "y": 21,
          "width": 313,
          "height": 367
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 338,
          "y": 29,
          "width": 1762,
          "height": 165
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 342,
          "y": 211,
          "width": 904,
          "height": 164
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1260,
          "y": 209,
          "width": 842,
          "height": 164
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 2125,
          "y": 29,
          "width": 342,
          "height": 342
        },
        "action": {
          "label": "รวมแจ้งอื่นๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-services\"}}",
          "displayText": "รวมแจ้งอื่นๆ"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 530,
          "y": 394,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1022,
          "y": 394,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 1520,
          "y": 398,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2012,
          "y": 393,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 186,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-b2a0a59e8f2d9dfe3b2a7ba3eb8a1751",
    "name": "richmenu-05-25-2025",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near-location\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 187,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2",
    "name": "richmenu-repair-fight-2026-n",
    "chat_bar_text": "เมนูหลัก 🏠",
    "size_width": 2500,
    "size_height": 1000,
    "selected": true,
    "is_default": true,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 17,
          "y": 33,
          "width": 2475,
          "height": 173
        },
        "action": {
          "label": "ซ่อม สร้าง สู้",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"repair-build-happy-new-report\"}}",
          "displayText": "ซ่อม สร้าง สู้"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 239,
          "width": 334,
          "height": 322
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 388,
          "y": 223,
          "width": 1035,
          "height": 173
        },
        "action": {
          "label": "แจ้งน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้งน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1440,
          "y": 219,
          "width": 1015,
          "height": 177
        },
        "action": {
          "label": "แจ้งกองขยะน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"floodwaste-new-report\"}}",
          "displayText": "แจ้งกองขยะน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 384,
          "y": 405,
          "width": 1035,
          "height": 168
        },
        "action": {
          "label": "แจ้งผู้ป่วยฉุกเฉิน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ep-new-report\"}}",
          "displayText": "ผู้ป่วยฉุกเฉิน"
        }
      },
      {
        "bounds": {
          "x": 1444,
          "y": 413,
          "width": 1006,
          "height": 156
        },
        "action": {
          "label": "ขอกระสอบทราย/อื่น ๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"sandbag-new-report\"}}",
          "displayText": "ขอกระสอบทราย/อื่น ๆ"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 590,
          "width": 462,
          "height": 433
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 529,
          "y": 594,
          "width": 457,
          "height": 425
        },
        "action": {
          "label": "แจ้งแรงงาน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-workers-new-report\"}}",
          "displayText": "แจ้งแรงงาน"
        }
      },
      {
        "bounds": {
          "x": 1019,
          "y": 586,
          "width": 462,
          "height": 433
        },
        "action": {
          "label": "Traffy EDU",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"traffy-edu-new-report\"}}",
          "displayText": "Traffy EDU"
        }
      },
      {
        "bounds": {
          "x": 1510,
          "y": 590,
          "width": 470,
          "height": 433
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2008,
          "y": 590,
          "width": 459,
          "height": 429
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 188,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-2c20880a3a06c217e833b4be667fb25b",
    "name": "richmenu-คนตาบอด-updated",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 1291,
          "height": 833
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1296,
          "y": 0,
          "width": 1195,
          "height": 833
        },
        "action": {
          "label": "แจ้งเรื่องใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"blind-person\"}}",
          "displayText": "แจ้งเรื่องใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 189,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-eeaa4d68ad1b2b637918bfe9e3700d94",
    "name": "benz_dev_bkk_v1",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 140
        },
        "action": {
          "type": "uri",
          "uri": "https://bangkok.traffy.in.th/"
        }
      },
      {
        "bounds": {
          "x": 45,
          "y": 194,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 657,
          "y": 188,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1270,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up\"}}",
          "displayText": "เรื่องแจ้งของฉัน"
        }
      },
      {
        "bounds": {
          "x": 1869,
          "y": 190,
          "width": 574,
          "height": 577
        },
        "action": {
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 190,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-10be0b07bff9f72592546713e04587a9",
    "name": "richmenu-mode-normal",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 229,
          "y": 0,
          "width": 2271,
          "height": 233
        },
        "action": {
          "label": "แจ้ง สคบ.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"ocpb\"}}",
          "displayText": "เข้าสู่เมนู แจ้งเรื่องร้องทุกข์ผู้บริโภค"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 233,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dev-go-to-richmenu-b\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 191,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-681299a664137893cce6e4ab3e0946b6",
    "name": "richmenu-คนตาบอด",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 220,
          "height": 233
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dev-go-to-richmenu-b\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 216,
          "y": 0,
          "width": 2284,
          "height": 233
        },
        "action": {
          "label": "demand-supply",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"req-post-type\"}}",
          "displayText": "demand-supply"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "คนตาบอด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"blind-person\"}}",
          "displayText": "คนตาบอด"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"acr-new-report\"}}",
          "displayText": "WE VOTE",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 192,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-9cfff026b700d876c0b9b998d75783f8",
    "name": "richmenu-คนตาบอด-updated",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 1291,
          "height": 843
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1291,
          "y": 0,
          "width": 1209,
          "height": 843
        },
        "action": {
          "label": "คนตาบอด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"blind-person\"}}",
          "displayText": "คนตาบอด"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 193,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-176c2ca125254ab78ecdb8617f796b83",
    "name": "richmenu-05-25-2025-v3",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2500,
          "height": 233
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 229,
          "width": 507,
          "height": 614
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 504,
          "y": 229,
          "width": 501,
          "height": 614
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1001,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "แจ้ง น้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-flood\"}}",
          "displayText": "แจ้ง น้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1496,
          "y": 229,
          "width": 500,
          "height": 614
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 1992,
          "y": 229,
          "width": 508,
          "height": 614
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 194,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-4ec759df5e8f0ebe481c2a34edc08271",
    "name": "richmenu-panda-01-10-2024",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "ร้องเรียนธุรกิจผิดกฏหมาย",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"panda-req-des\"}}",
          "displayText": "เข้าสู่เมนู ร้องเรียนธุรกิจผิดกฏหมาย",
          "inputOption": "openKeyboard"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "เข้าสู่เมนู ช่วยน้ำท่วม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"flood-category\"}}",
          "displayText": "เข้าสู่เมนู ช่วยน้ำท่วม"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 195,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-bc11bf8d39fe07f03369a570de40c287",
    "name": "กระดิ่งดำ",
    "chat_bar_text": "เมนูหลัก 🏡",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 17,
          "y": 21,
          "width": 313,
          "height": 367
        },
        "action": {
          "label": "ดูข่าวสารดีล่าสุด",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"richmenu-mode-normal\"}}",
          "displayText": "ดูข่าวสารดีล่าสุด"
        }
      },
      {
        "bounds": {
          "x": 338,
          "y": 29,
          "width": 1762,
          "height": 165
        },
        "action": {
          "label": "ร้องเรียนปัญหาอุตสาหกรรม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "ร้องเรียนปัญหาอุตสาหกรรม"
        }
      },
      {
        "bounds": {
          "x": 342,
          "y": 211,
          "width": 904,
          "height": 164
        },
        "action": {
          "label": "จดทะเบียนสุนัข แมว กทม.",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"dog-cat-new-report\"}}",
          "displayText": "จดทะเบียนสุนัข แมว กทม."
        }
      },
      {
        "bounds": {
          "x": 1260,
          "y": 209,
          "width": 842,
          "height": 164
        },
        "action": {
          "label": "รถขยะเทรวม",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"mw-post\"}}",
          "displayText": "แจ้งรถขยะเทรวม กทม."
        }
      },
      {
        "bounds": {
          "x": 2125,
          "y": 29,
          "width": 342,
          "height": 342
        },
        "action": {
          "label": "รวมแจ้งอื่นๆ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-services\"}}",
          "displayText": "รวมแจ้งอื่นๆ"
        }
      },
      {
        "bounds": {
          "x": 29,
          "y": 396,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 530,
          "y": 394,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "ผู้ใช้ใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"follow-up-other-near\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other-near\"}}",
          "displayText": "ผู้ใช้ใหม่"
        }
      },
      {
        "bounds": {
          "x": 1022,
          "y": 394,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "แจ้งปัญหาน้ำมัน",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"oil-report\"}}",
          "displayText": "แจ้งปัญหาน้ำมัน"
        }
      },
      {
        "bounds": {
          "x": 1520,
          "y": 398,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "ดูเรื่องแจ้ง",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-post\"}}",
          "displayText": "ดูเรื่องแจ้ง"
        }
      },
      {
        "bounds": {
          "x": 2012,
          "y": 393,
          "width": 458,
          "height": 429
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่",
          "inputOption": "openKeyboard"
        }
      }
    ],
    "created_at": "LINE Prototype"
  },
  {
    "id": 196,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-00947e8dd99439d9e362202ddcaf08ff",
    "name": "richmenu-ind-24-01-2025-v2",
    "chat_bar_text": "ซ่อน/แสดงเมนู",
    "size_width": 2500,
    "size_height": 843,
    "selected": true,
    "is_default": false,
    "is_active": true,
    "image_url": "./assets/richmenus/richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2.png",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 2496,
          "height": 215
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 140,
          "width": 510,
          "height": 703
        },
        "action": {
          "label": "บริการอื่นๆและข่าวสาร",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"other-menu\"}}",
          "displayText": "บริการอื่นๆและข่าวสาร"
        }
      },
      {
        "bounds": {
          "x": 510,
          "y": 141,
          "width": 497,
          "height": 702
        },
        "action": {
          "label": "เรื่องแจ้งจากผู้อื่น",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"follow-up-other\"}}",
          "displayText": "เรื่องแจ้งจากผู้อื่น"
        }
      },
      {
        "bounds": {
          "x": 1006,
          "y": 139,
          "width": 495,
          "height": 704
        },
        "action": {
          "label": "แจ้งอุตฯ",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"project-industry\"}}",
          "displayText": "เข้าสู่เมนู แจ้งอุตฯ"
        }
      },
      {
        "bounds": {
          "x": 1495,
          "y": 141,
          "width": 496,
          "height": 702
        },
        "action": {
          "type": "uri",
          "uri": "https://liff.line.me/2000158432-PGmk65M4?bot_id=Uf8841bc6a36cb709b87582a536150e8d"
        }
      },
      {
        "bounds": {
          "x": 1988,
          "y": 140,
          "width": 512,
          "height": 703
        },
        "action": {
          "label": "เรื่องแจ้งใหม่",
          "type": "postback",
          "data": "{\"para\":\"go-to\",\"selected-value\":{\"stateName\":\"standby\",\"eventType\":\"postback\",\"postbackData\":\"new-report\"}}",
          "displayText": "เรื่องแจ้งใหม่"
        }
      }
    ],
    "created_at": "LINE Prototype"
  }
];

window.MOCK_DATA.richMenuFloodLogs = [
  {
    "id": 1,
    "bot_id": "Uf8841bc6a36cb709b87582a536150e8d",
    "rich_menu_id": "richmenu-ed968928b4e21570a6824d3ca93d6ffb",
    "action_type": "set_default",
    "old_rich_menu_id": "richmenu-26c058597bcc43f4a37899ec860a3a9d",
    "target_user_count": 3500000,
    "success_user_count": 3500000,
    "failed_user_count": 0,
    "status": "succeeded",
    "line_request_id": "line-req-prod-01",
    "executed_by": "Chayanid (Admin)",
    "created_at": "2026-10-21 14:00:00"
  },
  {
    "id": 2,
    "bot_id": "U46c89687ac757da1e5fa74ae707fbfa4",
    "rich_menu_id": "richmenu-c873fdcb3ed4f7f7ad5e2de735f7eab2",
    "action_type": "set_default",
    "old_rich_menu_id": "richmenu-10be0b07bff9f72592546713e04587a9",
    "target_user_count": 1250,
    "success_user_count": 1250,
    "failed_user_count": 0,
    "status": "succeeded",
    "line_request_id": "line-req-test-02",
    "executed_by": "Chayanid (Admin)",
    "created_at": "2026-10-15 10:30:00"
  }
];

window.MOCK_DATA.states = [
    {
      stateID: 5916,
      stateName: "standby",
      nextStateID: 1,
      nextStateName: "floodwaste-req-desc",
      botID: "Uf8841bc6a36cb709b87582a536150e8d",
      botName: "fondue2023",
      orgID: "151",
      orgName: "fondue2023",
      eventType: "postback",
      eventMessageType: null,
      postbackData: "floodwaste-new-report",
      actionListID: 5856,
      postBackDataSelectedValue: null,
      questionName: "กดปุ่มแจ้งกองขยะน้ำท่วม",
      note: "Flood waste",
      is_active: true,
      created_at: "2026-09-20 10:00:00",
      updated_at: "2026-10-01 05:30:00"
    },
    {
      stateID: 5917,
      stateName: "floodwaste-req-desc",
      nextStateID: 2,
      nextStateName: "floodwaste-req-img",
      botID: "Uf8841bc6a36cb709b87582a536150e8d",
      botName: "fondue2023",
      orgID: "151",
      orgName: "fondue2023",
      eventType: "message",
      eventMessageType: "text",
      postbackData: null,
      actionListID: 5792,
      postBackDataSelectedValue: null,
      questionName: "รับคำอธิบาย ➔ ขอภาพประกอบ",
      note: "Flood waste",
      is_active: true,
      created_at: "2026-09-20 10:00:00",
      updated_at: "2026-10-01 05:30:00"
    },
    {
      stateID: 5918,
      stateName: "floodwaste-req-img",
      nextStateID: 3,
      nextStateName: "floodwaste-req-location",
      botID: "Uf8841bc6a36cb709b87582a536150e8d",
      botName: "fondue2023",
      orgID: "151",
      orgName: "fondue2023",
      eventType: "message",
      eventMessageType: "image",
      postbackData: null,
      actionListID: 5793,
      postBackDataSelectedValue: null,
      questionName: "รับภาพถ่าย ➔ ขอแชร์พิกัดสถานที่",
      note: "Flood waste",
      is_active: true,
      created_at: "2026-09-20 10:00:00",
      updated_at: "2026-10-01 05:30:00"
    },
    {
      stateID: 5919,
      stateName: "floodwaste-req-location",
      nextStateID: 4,
      nextStateName: "floodwaste-standby",
      botID: "Uf8841bc6a36cb709b87582a536150e8d",
      botName: "fondue2023",
      orgID: "151",
      orgName: "fondue2023",
      eventType: "message",
      eventMessageType: "location",
      postbackData: null,
      actionListID: 5919,
      postBackDataSelectedValue: null,
      questionName: "รับพิกัด ➔ Reverse Geo & ส่ง Pub/Sub",
      note: "Flood waste",
      is_active: true,
      created_at: "2026-09-20 10:00:00",
      updated_at: "2026-10-01 05:30:00"
    },
    {
      stateID: 5920,
      stateName: "standby",
      nextStateID: 5,
      nextStateName: "blind-voice-standby",
      botID: "U46c89687ac757da1e5fa74ae707fbfa4",
      botName: "fondue prototype (Bot ทดสอบเบนซ์)",
      orgID: "1302",
      orgName: "fondue prototype (Org #1302)",
      eventType: "postback",
      eventMessageType: null,
      postbackData: "voice-record-report",
      actionListID: 5920,
      postBackDataSelectedValue: null,
      questionName: "กดปุ่มโหมดเสียงคนตาบอด",
      note: "Blind mode voice report",
      is_active: true,
      created_at: "2026-10-06 06:00:00",
      updated_at: "2026-10-06 06:00:00"
    }
  ];

window.MOCK_DATA.actionLists = {
    5792: [
      {
        actionID: 6724,
        order: 1,
        actionType: "text",
        payload: "*ส่งภาพประกอบ*\n\nเจ้าหน้าที่จะเข้าถึงปัญหาได้อย่างมีประสิทธิภาพมากขึ้น หากภาพประกอบสามารถเห็นจุดสังเกต เช่นป้ายซอยหรือป้ายรถเมล์\n\n**งดเว้นการให้ข้อมูลส่วนตัว ทั้งผู้แจ้งและบุคคลที่สาม**",
        action: 5792,
        quickReplyPayload: JSON.stringify({
          items: [
            { type: "action", action: { type: "camera", label: "📷 ถ่ายภาพ" } }
          ]
        }),
        flexPayload: null,
        notification_disabled: false
      }
    ],
    5793: [
      {
        actionID: 6723,
        order: 1,
        actionType: "text",
        payload: "กรุณากด ‘แชร์ตำแหน่ง’ ด้านล่าง\nเพื่อระบุตำแหน่งเรื่องแจ้ง แทนการพิมพ์ข้อมูล",
        action: 5793,
        quickReplyPayload: JSON.stringify({
          items: [
            { type: "action", action: { type: "location", label: "📍 แชร์ตำแหน่ง" } }
          ]
        }),
        flexPayload: null,
        notification_disabled: false
      }
    ],
    5856: [
      {
        actionID: 6872,
        order: 1,
        actionType: "clearRedis",
        payload: JSON.stringify(["actionList", "userInput", "replaceingVal", "function-output", "session_id"]),
        action: 5856,
        quickReplyPayload: null,
        flexPayload: null,
        notification_disabled: false
      },
      {
        actionID: 6873,
        order: 2,
        actionType: "text",
        payload: "*พิมพ์บอกเล่าปัญหา*\n\nอธิบายรายละเอียดของปัญหาที่พบ หรือเสนอทางแก้ไขได้เลยครับ",
        action: 5856,
        quickReplyPayload: null,
        flexPayload: null,
        notification_disabled: false
      }
    ],
    5919: [
      {
        actionID: 6875,
        order: 1,
        actionType: "text",
        payload: "กำลังส่งเรื่องไปหน่วยงาน กรุณารอรับแผ่นสรุป",
        action: 5919,
        quickReplyPayload: null,
        flexPayload: null,
        notification_disabled: false
      },
      {
        actionID: 6876,
        order: 2,
        actionType: "calling",
        payload: JSON.stringify({
          function_name: "get-province-reverse-geo",
          destination_type: "api",
          api_method: "GET",
          api_url: "https://kong.traffy.in.th/fondue-reverse-geo/",
          bearer_token: "fondue",
          parameter: {
            latlng: "userInput.floodwaste-req-location.latlong",
            user_id: "fondueUserProfile.user_id"
          },
          fix_parameter: {
            action: "find",
            limit: "1",
            "App-Version": "0.0.1",
            org_tags: "จังหวัด"
          }
        }),
        action: 5919,
        quickReplyPayload: null,
        flexPayload: null,
        notification_disabled: false
      },
      {
        actionID: 6877,
        order: 3,
        actionType: "calling",
        payload: JSON.stringify({
          function_name: "concatDescriptionV2",
          destination_type: "internal",
          parameter: {
            description: "userInput.floodwaste-req-desc"
          },
          fix_parameter: {
            0: "#กองขยะน้ำท่วม"
          }
        }),
        action: 5919,
        quickReplyPayload: null,
        flexPayload: null,
        notification_disabled: false
      },
      {
        actionID: 6878,
        order: 4,
        actionType: "calling",
        payload: JSON.stringify({
          function_name: "push_to_pubsub_via_google_pubsub",
          destination_type: "internal",
          parameter: {
            photo: "replaceingVal.{$report-img}",
            id: "lineUserProfile.userId",
            username: "lineUserProfile.displayName",
            description: "function-output.concatDescriptionV2",
            latitude: "userInput.floodwaste-req-location.latitude",
            longitude: "userInput.floodwaste-req-location.longitude",
            bot_id: "actionList.0.botID",
            bot_name: "actionList.0.botName",
            org_name: "function-output.get-province-reverse-geo.results.0.fonduegroup_name",
            org_id: "function-output.get-province-reverse-geo.results.0.fonduegroup_id"
          },
          fix_parameter: {
            topic: 5
          }
        }),
        action: 5919,
        quickReplyPayload: null,
        flexPayload: null,
        notification_disabled: false
      },
      {
        actionID: 6879,
        order: 5,
        actionType: "clearRedis",
        payload: JSON.stringify(["actionList", "userInput", "replaceingVal", "function-output", "go-to", "event"]),
        action: 5919,
        quickReplyPayload: null,
        flexPayload: null,
        notification_disabled: false
      }
    ],
    5920: [
      {
        actionID: 6880,
        order: 1,
        actionType: "text",
        payload: "🎙️ เข้าสู่โหมดบันทึกเสียงสำหรับคนตาบอด\n\nท่านสามารถกดส่งข้อความเสียง (Voice Note) หรือพิมพ์บอกเล่าปัญหาได้เลยครับ เจ้าหน้าที่จะถอดความและประสานงานให้ทันที 🙏",
        action: 5920,
        quickReplyPayload: null,
        flexPayload: null,
        notification_disabled: false
      }
    ]
  };

window.MOCK_DATA.migrationMatrix = [
    {
      sourceEndpoint: "fondue-api-php/responsible_org/",
      targetEndpoint: "https://api.traffy.in.th/org/responsible_org/",
      description: "ค้นหาหน่วยงานรับผิดชอบตามพิกัด",
      status: "ready", // ready (green), planned (yellow), blocked (red)
      notes: "Schema และ Parameter ตรงกัน 100% สลับ URL ใน action-list.payload ได้ทันที"
    },
    {
      sourceEndpoint: "v1/fondue-org/fondue-qrcode/",
      targetEndpoint: "https://api.traffy.in.th/postgrest/rpc/fondue_qrcode_list_v1",
      description: "ดึงข้อมูลหน่วยงานและ QR code จาก UUID",
      status: "ready",
      notes: "ย้ายแล้ว: ดึงผ่าน PostgREST RPC โดยใช้ Dynamic User Token"
    },
    {
      sourceEndpoint: "api-latest-reported-org/latest-reported-org/",
      targetEndpoint: "PostgREST (RPC / View)",
      description: "หาหน่วยงานที่ผู้ใช้เพิ่งแจ้งล่าสุด",
      status: "planned",
      notes: "ต้องสร้าง SQL View/Function ใน PostgREST ก่อนย้าย"
    },
    {
      sourceEndpoint: "leaderboard-fondue/*",
      targetEndpoint: "PostgREST (point_logs)",
      description: "คำนวณคะแนนและอันดับการแจ้ง",
      status: "planned",
      notes: "ย้าย Logic การคำนวณคะแนนมาอ่านจากตารางตรงๆ"
    },
    {
      sourceEndpoint: "fondue-reverse-geo/",
      targetEndpoint: "Kong (คงไว้ที่เดิม)",
      description: "Reverse Geocoding ขอบเขต GIS Polygon",
      status: "blocked",
      notes: "เป็น Service GIS Polygon เฉพาะทาง ยังต้องอยู่บน Kong"
    },
    {
      sourceEndpoint: "gemini-api/*",
      targetEndpoint: "Kong (คงไว้ที่เดิม)",
      description: "AI LLM Gateway วิเคราะห์ข้อความและรูปภาพ",
      status: "blocked",
      notes: "ระบบวิเคราะห์ข้อความและภาพ AI ต่อกับ Google Gemini API"
    }
  ];

window.MOCK_DATA.errorLogs = [
    {
      id: 981,
      bot_id: "Uf8841bc6a36cb709b87582a536150e8d",
      user_id: "U8891029410",
      state_name: "request-location",
      error_type: "DUPLICATE_STATE_CONFLICT",
      message: "Multiple active states found for (botID=Uf8841bc, stateName=request-location, event=location). State 4133 and 1807 collided.",
      created_at: "2026-09-30 20:14:22"
    },
    {
      id: 980,
      bot_id: "Uf8841bc6a36cb709b87582a536150e8d",
      user_id: "U1102947119",
      state_name: "hashtag-standby",
      error_type: "NO_ACTION_FOUND",
      message: "Action lookup failed for text='สวัสดีครับบบ' (no matching keyword or nextState). Fallback action applied.",
      created_at: "2026-09-30 18:02:11"
    },
    {
      id: 979,
      bot_id: "U6701bb17fa42138eb1da06a8f7c5e7b3",
      user_id: "U9928172635",
      state_name: "bacbac-entry",
      error_type: "PAYLOAD_TOO_LARGE",
      message: "Flex message carousel exceeded 48,000 bytes. Automatic safety guard trimmed last bubble.",
      created_at: "2026-09-30 14:45:00"
    }
  ];

window.apiClient = {
  getDatastoreBotConfig(botId) {
    const found = (window.MOCK_DATA.bots || []).find(b => b.bot_id === botId) || window.MOCK_DATA.bots[0];
    return {
      bot_id: found.bot_id,
      bot_name: found.bot_name,
      org_id: found.org_id,
      basic_id: found.basic_id,
      channel_access_token: found.channel_access_token,
      default_rich_menu_id: found.default_rich_menu_id
    };
  }
};

