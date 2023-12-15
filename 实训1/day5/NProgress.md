# 一、NProgress

## 一、 [NProgress](https://links.jianshu.com/go?to=http%3A%2F%2Fricostacruz.com%2Fnprogress%2F)是页面跳转是出现在浏览器顶部的进度条

 官网：[http://ricostacruz.com/nprogress/](https://links.jianshu.com/go?to=http%3A%2F%2Fricostacruz.com%2Fnprogress%2F)
 github：[https://github.com/rstacruz/nprogress](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Frstacruz%2Fnprogress)

## 二、效果

![img](https://upload-images.jianshu.io/upload_images/14206649-e7f3c2bd565446eb.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)

## 三、 安装

```csharp
npm install --save nprogress 
// 或者
yarn add nprogress

//用法
NProgress.start();
NProgress.done();
```

## 四、 使用

入口文件,main.js引入 nprogress

```jsx
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import NProgress from 'nprogress' // 引入nprogress插件
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入
```

写在axios的请求拦截器和响应拦截器里，每次只要触发axios请求就加载进度条

```jsx
// axios请求拦截器
axios.interceptors.request.use(
  config => {
    NProgress.start() // 设置加载进度条(开始..)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// axios响应拦截器
axios.interceptors.response.use(
  function(response) {
    NProgress.done() // 设置加载进度条(结束..)
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)
```

或者写在router.beforeEach和router.afterEach，这种写法只能切换路由时才有效果。
 写在axios的请求拦截器和响应拦截器里比较好，因为切换路由一般都会触发页面的created()事件发起axios请求



```jsx
//导入
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})
```

以上两种方法也可以同时一起写上！

------

**最好在index.html也写上，单页面首次打开速度慢，这样写打开登陆页时也才会显示！**



```xml
<script>
  NProgress.start()
  // 给页面设置请求加载进度条效果
  window.onload = function() {
    NProgress.done()
  }
</script>
```

------

**可以更改设置样式：**

```cpp
    #nprogress .bar {
      background: red !important; //自定义颜色
    }
```

**配置NProgress:**

1. showSpinner：进度环显示隐藏

```css
NProgress.configure({showSpinner: false});
```

1. ease：调整动画设置，ease可传递CSS3缓冲动画字符串（如ease、linear、ease-in、ease-out、ease-in-out、cubic-bezier）。speed为动画速度（单位ms）。

```css
NProgress.configure({ease:'ease',speed:500});
```

1. minimum：设置最低百分比

```css
NProgress.configure({minimum:0.3});
```

1. 百分比：通过设置progress的百分比，调用 .set(n)来控制进度，其中n的取值范围为0-1。

```css
NProgress.set(0.4);
```

