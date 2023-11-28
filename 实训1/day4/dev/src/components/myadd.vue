<template>
    <div class="myadd">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="$store.state.headers.txt" @keyup.13="add">
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
        };
    },
    computed: {

    },
    methods: {
        ...mapMutations(['SETADD']),
        add() {
            if(this.$store.state.headers.txt && this.$store.state.headers.txt != 'null'){
                         this.SETADD(this.$store.state.headers.txt)
            }else{
                alert('不能为空或不能为null')
            }      
            this.$store.state.headers.txt = ''
        }
    },
};
</script>

<style lang="scss" scoped>
.myadd {
    input {
        width: 100%;
        outline: none;
        text-indent: 2em;
        height: 40px;
        margin-bottom: 30px;
    }
}
</style>