<template>
    <div class="myadd">
         <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="txt"  @keyup.13="add">
    </div>
</template>

<script>
export default {
 data() {
     return {
        txt:''
     };
 },
 methods: {
    add(){
        this.$emit('add',this.txt)
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