<template>
    <div>
        <h2>jie的页面</h2>
    </div>
</template>

<script>
export default {
 data() {
     return {
        time:null  //声明一个定时器变量
     };
 },
 methods: {
    querytime(){
        setInterval(()=>{
               
        },1000)
    }
 },
//  组件路由守卫没有this  需要在next回调函数中使用vm
 beforeRouteEnter(to,from,next){
    next(vm=>{
        console.log(vm);
        vm.time=setInterval(()=>{           
            Math.floor(Math.random()*10)
        },1000)
    })
 },
 beforeRouteLeave (to, from, next) {
    if(this.time){
        clearInterval(this.time)
    }
    next()
 }
};
</script>

<style lang="scss" scoped>

</style>