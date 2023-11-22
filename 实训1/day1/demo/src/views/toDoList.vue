<template>
    <div class="list">
        <myadd @add="add"></myadd>
        <mylist :list="list" @del="del"></mylist>
        <mybottom :list="list" :num="num" @clearlist="clearlist"></mybottom>
    </div>
</template>

<script>
import myadd from '@/components/myadd.vue';
import mylist from '@/components/mylist.vue';
import mybottom from '@/components/mybottom.vue';
export default {
 data() {
     return {
        list: JSON.parse(localStorage.getItem('list'))||[],
        checked:false
     };
 },
 methods: {
    add(value){
      let foo=  this.list.find(item=>item.txt==value)
      if(foo){
        alert('已经存在了')
      }else{
      this.list.push({
            flag:false,
            txt:value,
            id:+new Date()
        })
      }
        
    },
    clearlist(){
        this.list=[]
    },
    del(i){
        this.list=this.list.filter(item=>item.id != i)
    }
 },
 computed:{
    num(){
      return  this.list.filter(item=>item.flag).length
    }
 },
 components:{myadd,mylist,mybottom},
 watch:{
    list:{
        deep:true,
        immediate:true,
        handler(val){
            localStorage.setItem('list',JSON.stringify(val))
        }
    }
 }
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