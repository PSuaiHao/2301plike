<template>
  <div>
       <title>这是父组件</title>
       <button @click="querychildren">我要用 $parent 拿son里面的数据</button>
       <br>
       <button @click="getchildren">我要用 $children 拿son里面的数据</button>
       <son ref="children"></son>
       <son2></son2>
  </div>
</template>

<script>
import son from '@/components/son.vue';
import son2 from '@/components/son2.vue'
export default {
 data() {
   return {
    mag:'这是父组件的数据'
   };
 },
 methods: {
   // 用 $parent方法获取父组件的数据和方法
  queryparent(){
    console.log('这是用$parent获取到父组件的方法');
  },

  // 用ref $refs
  querychildren(){
    console.log(this.$refs.children.title);
    this.$refs.children.queryrefs()
  },


  // 用$children方法
  getchildren(){
          console.log(this.$children[0].title);
          this.$children[0].queryrefs()
  }
 },
 components:{son,son2}
};
</script>

<style lang="scss" scoped>

</style>