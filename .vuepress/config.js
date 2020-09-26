module.exports = {
  "title": "sineava",
  "description": "Talk is cheap. Show me the code.",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "zh-CN"
    }
  },
  "theme": "reco",
  "themeConfig": {
    "subSidebar": "auto",
    "valineConfig": {
      "showComment": false,
      "appId": "bIaIoboPJMGaUxlTktaOb69H-gzGzoHsz",// your appId
      "appKey": '9vk2nQvT9GlKL35uTTt8ntCN', // your appKey
      "notify": false, 
      "verify": false, 
      "avatar": 'monsterid', 
      "meta": ['nick','mail'],
      "placeholder": '🎈' ,
      "recordIP": true
    },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "Project",
        "icon": "reco-three",
        "items": [
          {
            "text": "vue管理系统",
            "link": "http://www.sineava.top",
            "icon": "reco-blog"
          },
          {
            "text": "仿美团外卖",
            "link": "http://hoa.sineava.top",
            "icon": "reco-blog"
          }
        ]
      },
      { 
        "text": "Message",
        "link": "/message/",
        "icon": "reco-suggestion"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "GitHub",
        "link": "https://github.com/sineava",
        "icon": "reco-github"
      }],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "廖雪峰",
        "desc": "廖雪峰blog",
        "link": "https://www.liaoxuefeng.com/"
      },
      {
        "title": "阮一峰",
        "desc": "阮一峰的网络日志",
        "link": "http://www.ruanyifeng.com/blog/"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "sineava",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}