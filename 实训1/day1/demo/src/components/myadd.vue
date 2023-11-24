<template>
    <div class="myadd">
         <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="txt"  @keyup.13="add">
    </div>
</template>

<script>
import {mapMutations, mapState } from 'vuex';
export default {
 data() {
     return {
        txt:''
     };
 },
 computed:{
    ...mapState(['list'])

 },
 methods: {
    ...mapMutations(['setadd']),
    add(){
        if(this.txt && this.txt!='null'){
            if(!this.list.find(item=>item.txt==this.txt)){
                this.setadd(this.txt)
            }else{
                alert('已经存在')
            }
            
        }else{
            alert('不能为空或不能为null')
        }        
        this.txt=''
    }
 },
};
</script>

<style lang="scss" scoped>
.myadd{
   input{
    width: 100%;
    outline: none;
    text-indent: 2em;
    height: 40px;
    margin-bottom: 30px;
} 
}

</style>