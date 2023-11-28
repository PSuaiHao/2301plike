<template>
    <div class="bot">
          <div class="left">
            <input type="checkbox" v-model="allchecked" @change="checkedall">
            <p>
                <span>已完成 {{ flagtrue }}</span> / <span>全部 {{ listlength }}</span>
            </p>
          </div>
          <button @click="clearlist">清除已完成任务</button>
    </div>
</template>

<script>
import { mapMutations,mapGetters,mapState } from 'vuex';
export default {
 data() {
     return {};
 },
 methods: {
    ...mapMutations(['DELCHECKED','CHECKEDTRUE']),
    // 清空已完成
    clearlist(){
        this.DELCHECKED()
    },
    // 全选
    checkedall(e){
        this.CHECKEDTRUE(e.target.checked)
    }
 },

 computed:{
    ...mapGetters(['allcheck','flagtrue','listlength']),

    ...mapState({
        checked:state=>state.contents.checked,
        list:state=>state.contents.list
    }),
    allchecked:{
        get(){
            return this.allcheck
        },
        set(value){

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