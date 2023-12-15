<template>
    <div>
        <h1>vue3中 3.0版本</h1>
        <p>用provide和inject祖孙组件获取的值为:{{ car }}</p>
       
        <p>通过父传子 {{ mar.name }}-{{ mar.age }}</p>
    </div>
</template>

<script setup>
import {inject ,defineProps} from 'vue'
defineProps(['mar'])
const car=inject('car')
</script>

<style lang="scss" scoped>

</style>