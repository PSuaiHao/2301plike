<template>
    <div class="bot">
          <div class="left">
            <input type="checkbox" v-model="fqx" >
            <p>
                <span>已完成 {{ num }}</span> / <span>全部 {{ list.length }}</span>
            </p>
          </div>
          <button @click="clearlist">清除已完成任务</button>
    </div>
</template>

<script>
export default {
props:['list','num'],
 data() {
     return {};
 },
 methods: {
    clearlist(){
        this.$emit('clearlist')
    }
 },
 computed:{
    fqx:{
        get(){
                return this.list.every(item=>item.flag)
        },
        set(val){
            console.log(val);
            this.list.forEach((item) => item.flag=val)
        }
    }
 }
};
</script>

<style lang="scss" scoped>
.bot{
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    .left{
        display: flex;
        align-items: center;
        input{
            margin-right: 30px;
        }
    }
}
 button{
            padding: 0 30px;
            height: 35px;
            color: #fff;
            background-color: #ca594f;
            border: 0;
            outline: 0;
            border-radius: 5px;
        }
</style>