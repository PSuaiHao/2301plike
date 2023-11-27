<template>
    <div>
           <mytop></mytop>
           <mylist></mylist>
           <mybottom></mybottom>
    </div>
</template>

<script>
import mytop from '@/components/mytop.vue';
import mylist from '@/components/mylist.vue';
import mybottom from '@/components/mybottom.vue'
export default {
    components:{mytop,mylist,mybottom},
 data() {
     return {};
 },
 methods: {},
};
</script>

<style lang="scss" scoped>

</style>