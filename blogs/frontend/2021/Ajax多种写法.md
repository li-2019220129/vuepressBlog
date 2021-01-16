---
title: Ajax的多种写法
date: 2021-01-14 14:50:35
author: LzyErsa
categories: 
  - frontend
tags: 
  - Ajax
---

## 原生写法

```javascript
const xhr=new XMLHttpRequest();
//设置响应体数据的类型
xhr.responseType='json';

xhr.open('请求方式','请求路径');

xhr.send();
//超时设置为2秒
xhr.timeout=2000

//超时回调
xhr.ontimeout=function(){

}
//网络异常回调
xhr.onerror=function(){
    alert('你的网络出现了问题')
}
//readystate是xhr对象中的属性，表示状态
// 0：初始化，XMLHttpRequest对象还没有完成初始化

// 　　1：载入，XMLHttpRequest对象开始发送请求

// 　　2：载入完成，XMLHttpRequest对象的请求发送完成

// 　　3：解析，XMLHttpRequest对象开始读取服务器的响应

// 　　4：完成，XMLHttpRequest对象读取服务器响应结束
xhr.onreadystatechange=function(){
   if(xhr.readyState==4){
       if(xhr.status>=200 && xhr.status<300){
          console.log(xhr.status) //状态码
          console.log(xhr.statusText)//状态字符串
          console.log(xhr.getAllResponseHeaders());//所用响应头
          console.log(xhr.response);//响应体
       }
   }
}
```

## jQuery中的写法

```javascript
   $ajax({
     //url
     url:'请求路径',
     //参数
     data:{a:1},
     //请求类型
     type:'GET'
     //响应体结果
     dataType:'json',
     //超时时间
     timeout:2000,
     //成功后的回调
     success:function(data){
           console.log(data);
     },
     //失败后的回调
     error:function(){

     }
   })
```

## axios的使用
```javascript


 axios.defaults.baseURL='http://127.0.0.1:8000';
 //get请求
 axios.get('/axios',{
   //url参数
   params:{
     id:100,
     vip:7
   },
   //请求头信息
   headers:{
     name:'atgu',
     age:20
   }
 }).then((value)=>{
    console.log(value)
 })//（这里用async和await更简单）



  //post请求
 axios.post('/axios',{
     username:'',
     password:''    //请求体
   },{
   //url参数
   params:{
     id:100,
     vip:7
   },
   //请求头信息
   headers:{
     name:'atgu',
     age:20
   }
 }).then((value)=>{
    console.log(value)
 })

axios({
  //请求方法
  method:'POST'
  //url
  url:'/axios',
  //url参数
   params:{
     id:100,
     vip:7
   },
   //请求头信息
   headers:{
     name:'atgu',
     age:20
   },
   data:{
     username:'',
     password:''    //请求体
   }
})
```