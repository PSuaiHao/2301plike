<template>
    <div>

    </div>
</template>

<script>
import { EventBus } from '@/Eventbus';
export default {
 data() {
     return {};
 },
 methods: {

 },
 created(){
    EventBus.$on('send',(res)=>{
        console.log(res);
    })
 }
};
</script>

<style lang="scss" scoped>

</style>