<template>
     <h1>vue2.0</h1>
    <p>用provide和inject祖孙组件获取的值为:{{ car }}</p>
</template>
<script >
import {inject,attrs,reactive} from 'vue'
export default {
    setup(props,context){
        const car=inject('car')
        console.log(inject('car'));
        return {
            car
        }
    }

}
    
</script>