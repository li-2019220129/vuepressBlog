---
title: async-await
date: 2021-01-21 14:59:29
categories: 
  - backend
tags: 
  - async-await
---
# 经典题型：

```javascript
new Promise( function( resolve ) {
  console.log('promise1') 
  resolve();
} ).then( function() {
  console.log('promise2') 
} )
 setTimeout(function() { 
  console.log('setTimeout')
}, 0)

 async function async1() {
  console.log('async1 start')
  await async2()
  console.log('end'); 
}

async function async2() {
	setTimeout(function(){
       console.log('async2')
	},0)
}

console.log('script start')
async1(); 
console.log('script end') 

//打印结果
promise1
script start
async1 start
script end
promise2
end
setTimeout

```
## 关于await问题
  1.async-await本质上是promise的回调，把async-await看成promise就好理解上面的代码
  2.await会造成后面的代码阻塞
