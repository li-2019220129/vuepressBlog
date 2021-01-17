module.exports = {
  "title": "LzyErsa",
  "description": "Blog show time",
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
      "appId": "Icl5AjHFen7xIf5sGYAXOL6r-gzGzoHsz",// your appId
      "appKey": 'faS6eCmuEWaOK5COh3VGVnol', // your appKey
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
            "link": "",
            "icon": "reco-blog"
          },
          {
            "text": "音乐小程序",
            "link": "",
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
        "link": "https://github.com/li-2019220129",
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
        "title": '午后南杂',
        "desc": 'Enjoy when you can, and endure when you must.',
        "email": 'recoluan@qq.com',
        "link": 'https://www.recoluan.com'
      },
      {
        "title": "大漠",
        "desc": "w3cplus创始人",
        "link": "https://www.w3cplus.com/"
      }
    ],
    "logo": "/logo.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "LzyErsa",
    "authorAvatar": "/avatar.jpg",
    // "record": "xxxx",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}