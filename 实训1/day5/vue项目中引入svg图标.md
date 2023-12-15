# vue项目中引入svg图标

Svg,png,jpg,font-size

SVG: 矢量图

png,jpg: 图片

# 一、将svg图标引入到本地

## 一、下载svg-loader

```js
npm i svg-sprite-loader
```

## 二、配置vue-config.js文件

vue-config.js      没有就自己创一个 放在项目根目录哦

```js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack (config) {
    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
```

## 三、创建文件并下载svg

（1） 在src/icons目录下创建  

```js
src/icons
       /svg       # 保存图标
       /index.js  # 注册全局组件
```



![image-20230706180240747](/Users/nuonuo/Library/Application Support/typora-user-images/image-20230706180240747.png)

 (2) 下载svg

svg格式下载地址 ：

1.    https://www.iconfont.cn/   阿里巴巴
2.    https://icomoon.io/app/#/select   国外的一家网站 IcoMoon

以阿里巴巴网站为例 下载图标

1. 进入阿里巴巴网址

   ![image-20230706180604700](/Users/nuonuo/Library/Application Support/typora-user-images/image-20230706180604700.png)

2. 选择自己喜欢的图标,加到购物车

   ![image-20230706180626128](/Users/nuonuo/Library/Application Support/typora-user-images/image-20230706180626128.png)

3. 点击购物车,出现下图,并点击下载素材

   ![image-20230706180659450](/Users/nuonuo/Library/Application Support/typora-user-images/image-20230706180659450.png)

4. 点击下载素材,选择svg图标

   ![image-20230706180756424](/Users/nuonuo/Library/Application Support/typora-user-images/image-20230706180756424.png)

5. 下载至本地,解压,将svg图标放在文件夹下

   ![image-20230706180847122](/Users/nuonuo/Library/Application Support/typora-user-images/image-20230706180847122.png)

(3),最终svg文件夹的目录

![image-20230706180937634](/Users/nuonuo/Library/Application Support/typora-user-images/image-20230706180937634.png)

## 四、添加文件

1. 创建文件

   * 在src下的components下新建一个文件夹SvgIcon,在新建index.vue

   ```vue
   <template>
     <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" />
     <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
       <use :xlink:href="iconName" />
     </svg>
   </template>
   
   <script>
   // doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
   import { isExternal } from "@/utils/validate"
   
   export default {
     name: "SvgIcon",
     props: {
       iconClass: {
         type: String,
         required: true
       },
       className: {
         type: String,
         default: ""
       }
     },
     computed: {
       isExternal() {
         return isExternal(this.iconClass)
       },
       iconName() {
         return `#icon-${this.iconClass}`
       },
       svgClass() {
         if (this.className) {
           return "svg-icon " + this.className
         } else {
           return "svg-icon"
         }
       },
       styleExternalIcon() {
         return {
           mask: `url(${this.iconClass}) no-repeat 50% 50%`,
           "-webkit-mask": `url(${this.iconClass}) no-repeat 50% 50%`
         }
       }
     }
   }
   </script>
   
   <style scoped>
   .svg-icon {
     width: 1em;
     height: 1em;
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden;
   }
   
   .svg-external-icon {
     background-color: currentColor;
     mask-size: cover !important;
     display: inline-block;
   }
   </style>
   
   ```

2. 修改src/icons文件夹下的 index.js

```js
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

// 进行导入所有的svg格式  如果手动引入 需要依次引入 
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
```

3. src/utils/validate.js

   ```js
   export function isExternal(path) {
     return /^(https?:|mailto:|tel:)/.test(path)
   }
   ```

4. 在main.js中引入

```js
import '@/icons'
```

##  五、配置结束,可以直接使用了

icon-class的名字就是图标的名称

```vue
 <svg-icon icon-class="user"/>
```

## 六、 使用注意点：

如果按照步骤全部完成不生效进行重启项目 或刷新页面
可能svg的图片有些是白色的 会和页面默认白色背景冲突 可换背景色进行查看
使用格式`<svg-icon icon-class="文件名"/>` 。这里的文件名就是在src/icons/svg下的文件名
如果还有需要其他 从官网下载直接放到icons/svg目录就可以啦 



## 七、svg的优势

1. ​	矢量图,可以修改颜色,不会失真,体积小,可以忽略不计

------------------------------------------------------------------------------

# 二、引用线上图标

https://blog.csdn.net/qq_35430000/article/details/87103050



