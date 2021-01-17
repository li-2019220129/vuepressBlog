---
title:  CSS和HTML常见面试题
date: 2021-01-17 18:41:24
author: LzyErsa
categories: 
  - frontend
tags: 
  - CSS
  - HTML
---
> 说明：本章内容博主整理自慕课课程《快速搞定前端技术一面 匹配大厂面试要求》 <https://coding.imooc.com/class/400.html>。
<!-- more -->
## 如何理解HTML的语义化
a. 为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构:为了裸奔时好看；

b. 用户体验：例如title、alt用于解释名词或解释图片信息的标签尽量填写有含义的词语、label标签的活用；

c. 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；

d. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以有意义的方式来渲染网页；

e. 便于团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

[转载自简书](https://www.jianshu.com/p/6bc1fc059b51)

## 块状元素和类联元素
(1)块状元素: display:block/table,常见的有div,p,h1,table,li,ul等

(2)类联元素: display:inline/inline-block,常见的有span,input,img,button等


## 块级元素的特点
（1）总是从新行开始

（2）高度，行高、外边距以及内边距都可以控制。

（3）宽度默认是容器的100%

（4）可以容纳内联元素和其他块元素。

## 类联元素的特点
（1）和相邻行内元素在一行上。

（2）高、宽无效，但水平方向的padding和margin可以设置，垂直方向的无效。

（3）默认宽度就是它本身内容的宽度。

（4）行内元素只能容纳文本或则其他行内元素。（a特殊）

##  内联块状元素(inline-block )元素特点
（1）和相邻行内元素（行内块）在一行上,但是之间会有空白缝隙。(可用font-size：0消除，不过不建议，用margin负值，
也可以用letter-spaceing,word-spacing.
)

（2）默认宽度就是它本身内容的宽度。

（3）高度，行高、外边距以及内边距都可以控制。

## css考点之布局
(1) 盒模型之宽度计算：

标准模型：width：content

IE 模型：width：content+padding+border

## margin纵向问题

1.出现在上下margin同时存在的时候，会取上下中值较大的作为叠加的值。
举例:
```html
<style>
p{
    font-size:16px;
    margin-top:10px;
    margin-bottom:15px;
    line-height:1;
}
</style>

<p>AAA</p>
<p></p>
<p></p>
<p></p>
<p>BBB</p>
```

## margin负值问题

1.margin-top和margin-left 负值，元素向上，向左移动.

2.margin-right 负值，右侧元素左移，自身不受影响.

3.margin-bottom 负值，下方元素上移，自身不受影响.

## BFC的理解和应用
1.BFC是：

Formatting context(格式化上下文) 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块

渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互

作用。资料来自简书(https://www.jianshu.com/p/369be33226b2)

BFC的布局规则如下：

  1. 内部的盒子会在垂直方向，一个个地放置；

  2. BFC是页面上的一个隔离的独立容器；

  3. 属于同一个BFC的 两个相邻Box的 上下margin会发生重叠 ；

  4. 计算BFC的高度时，浮动元素也参与计算

  5. 每个元素的左边，与包含的盒子的左边相接触，即使存在浮动也是如此；

  6. BFC的区域不会与float重叠；

那么如何触发 BFC呢？只要元素满足下面任一条件即可触发 BFC 特性：

  1.body 根元素；

  2.浮动元素：float 不为none的属性值；

  3.绝对定位元素：position (absolute、fixed)

  4.display为： inline-block、table-cells、flex

  5.overflow 除了visible以外的值 (hidden、auto、scroll)

利用BFC可以消除Margin Collapse：

  BFC导致了margin collapse，而现在又要用它来解决margin cllapse.但是始终要记住一点：

  只有当元素在同一个BFC中时，垂直方向上的margin才会clollpase.如果它们属于不同的BFC，

  则不会有margin collapse.因此我们可以再建立一个BFC去阻止margin collpase的发生。

实例：
```html
<!-- 未解决 -->
<style>
.p {  
  width:200px;  
  height:50px;  
  margin:100px 0;  
  background-color:red;  
}  
</style>

<body>
   <div class="p"></div>  
   <div class="p"></div>  
</body>

<!-- 已解决 -->
<style>
.wrap {  
  overflow:hidden; 
} 
.p {  
  width:200px;  
  height:50px;  
  margin:100px 0;  
  background-color:red; 
}
</style>
<div class="p"></div>  

<div class="wrap">  
  <div class="p"></div>  
</div> 


```
