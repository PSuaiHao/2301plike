<template>
    <div>
        <father></father>
    </div>
</template>

<script>
import father from './father'
import {reactive,provide} from 'vue'
export default {
    components:{
        father
    },
 setup(){
    let car=reactive({
     name:'长安',
     price:'40万'
    })
    provide('car',car)
 }
};
</script>

<style lang="scss" scoped>

</style>