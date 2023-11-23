<template>
  <div>
         <h1>插槽</h1>
         <slot name="title"></slot>
         <slot></slot>
         <slot name="aaa" :text="text" ></slot>
         <slot name="bbb" :arr="arr"></slot>
  </div>
</template>

<script>
export default {
 data() {
   return {
    text:'作用域插槽',
    arr:['数组1','数组2','数组3','数组4','数组5']
   };
 },
 methods: {},
};
</script>

<style lang="scss" scoped>

</style>