<template>
  <div align="center">
    <HelloWorld>
      <!-- 插槽：
        在子组件挖坑，在父组件把坑埋起来
        匿名插槽：
        具名插槽：
        作用域插槽：子组件向父组件传值，父组件使用子组件的数据，进行随意展示，怎么传值，怎么获取
        常用的地方是：弹框的按钮

       -->
      <!-- 具名插槽 -->
    <p slot="title"> dxfghjklwsdsfv</p>
      <!-- 匿名插槽 -->
    <p>bshcdascsadd</p>

    <!-- 匿名插槽 -->
    <div slot-scope="text" slot="aaa" >
      {{ text.text }}     
    </div>
    <!-- 作用域插槽渲染数组 -->
    <div slot-scope="arr" slot="bbb" >
      <ul>
        <li v-for="item,index in arr.arr">{{ item }}</li>
      </ul>
    </div>

    </HelloWorld>

    <akali></akali>


    <!-- 路由：是一组key-value组成的数据 多个路由组成路由表
      获取值是：$route

      最高接受者：$route
      1.路由传参有两种方式：query,params
      2.还有一种是动态传参  /about/:id  id是参数名
      3.props:props有三种写法
      1.写死对象     props:{a:xxxx}
      2.props:true  只接受params传参
      3.函数形式：   props: function(){
        return {
          title:route.query.title
        }
      }
      组件中生命props进行取值
      4.replace,forward前进，back后退，go()可前进可后退
      5.query和params的相同点和不同点
      6.命名路由 带name属性
      7.嵌套路由，children()

     -->
    <!-- 第一种是声明式路由 -->
    <!-- <router-link to="/shops">媳妇</router-link><br> -->
    <!-- 第二种是拼接式传参 -->
    <!-- <router-link :to="`/shops?skill='烟雾弹'&title='正好' `">媳妇</router-link><br> -->
    <!-- <router-link :to="{
      name:'shops',
      params:{
        skill:'烟雾弹',
        title:'正好'
      }
    }">媳妇</router-link> -->

    <!-- <router-link :to="{
      path:'/shopssss',
      query:{
        skill:'烟雾弹',
        title:'正好'
      }
    }">媳妇</router-link> -->

    <router-link to="/akali">儿子</router-link>
    <hr/>
    <router-view></router-view>
    


    
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
 data() {
   return {};
 },
 methods: {},
 components:{HelloWorld}
};
</script>

<style lang="scss" scoped>

</style>
