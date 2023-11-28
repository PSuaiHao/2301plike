<template>
  <div class="list">
      <myadd ></myadd>
      <mylist></mylist>
      <mybottom></mybottom>
  </div>
</template>

<script>
import myadd from '@/components/myadd.vue';
import mylist from '@/components/mylist.vue';
import mybottom from '@/components/mybottom.vue';
import { mapState} from 'vuex';
export default {
data() {
   return {
      checked:false
   };
},
methods: {
},
computed:{
  ...mapState(["list"]),
},
components:{myadd,mylist,mybottom},
};
</script>

<style lang="scss" scoped>
.list{
  padding: 20px;
  border: 1px solid #999;
  margin: auto;
  width: 60%;
}
</style>