<template>
  <div>

    <!-- $nextTick：一步队列更新方法  异步调用回调方法  监听dom元素渲染完毕，-->

   <h2>艾欧尼亚：影流之主</h2>
   <div ref="shifu" class="ab">
      影流之主至理名言：{{ msg }}
   </div>
   <input type="text" v-fbind:value="num" v-model="num">

   <br>
   <son :prentice="prentice" :slogan="slogan" ref="chidle"></son>
   <br>
   <br>
   <br>

   <akaili></akaili>
   <br>
   <br><br>
   <button @click="handlegetage">父组件按钮</button>

  </div>
</template>

<script>
import son from '@/components/son.vue';
import akaili from '@/components/akaili.vue';
export default {
 data() {
   return {
    msg:'无知者在劫难逃',
    prentice:'凯影',
    slogan:'你够资格吗？也许不够',
    num:10
   };
 },
 components:{
    son,akaili
 },

 methods: {
  handlegetage(){

  this.$nextTick(() => {
    console.log( this.$refs.shifu); 
  })
   console.log(this.$refs.shifu);//获取dom元素
   console.log(this.$refs.chidle);//获取子组件中的实例
    this.$refs.chidle.handhh(this.slogan)//获取子组件中的方法
  },
 },
 created(){
  // 因此在实例创建之前是无法获取dom元素
  console.log(this.$refs.shifu); //undefined
  // 使用$nextTick异步队列更新方法是可以获取到dom元素
  this.$nextTick(()=>{
         console.log(this.$refs.shifu);
  })
  
 }
};
</script>

<style lang="scss" scoped>

</style>