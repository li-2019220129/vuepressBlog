---
title: jsonp的实现
date: 2021-01-16 9:24:10
author: LzyErsa
categories: 
  - frontend
tags: 
  - JSONP
---

## JSONP的原生写法

![](/img/frontend/2021/jsonp/jsonp.png)

## JSONP的Ajax写法

### Jquery ajax:
![](/img/frontend/2021/jsonp/jsonp1.png)


```javascript
$.ajax({
    url: 'http://www.domain2.com:8080/login',//举的例子
    type: 'get',
    dataType: 'jsonp',  // 请求方式为jsonp
    jsonpCallback: "handleCallback",    // 自定义回调函数名
    data: {}
});
```

### vue.js:

```javascript
this.$http.jsonp('http://www.domain2.com:8080/login', {
    params: {},
    jsonp: 'handleCallback'
}).then((res) => {
    console.log(res); 
})
```

### 后端node.js代码示例:

```javascript
var querystring = require('querystring');
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    var params = qs.parse(req.url.split('?')[1]);
    var fn = params.callback;

    // jsonp返回设置
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(fn + '(' + JSON.stringify(params) + ')');

    res.end();
});

server.listen('8080');
console.log('Server is running at port 8080...');
```