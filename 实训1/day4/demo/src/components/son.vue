<template>
    <div>
           <button @click="setprent">点一下</button>
           <br/>
           <button @click="send">兄弟通信</button>

    </div>
</template>

<script>
import { EventBus } from '@/Eventbus';
export default {
 data() {
     return {
          title:'子组件的数据',
          dat:'兄弟之间的传值'
     };
 },
 methods: {
    // 用  $parent 方法获取父组件的数据和方法
    setprent(){
        console.log(this.$parent.mag);    
        this.$parent.queryparent()   
       
    },
    // 兄弟之间的传值
    send(){
        EventBus.$emit('send',this.dat)
    },


    // 这是用 $refs 和 $children 获取子组件的方法
    queryrefs(){
        alert('这是子组件的方法')
    }
 },
};
</script>

<style lang="scss" scoped>

</style>