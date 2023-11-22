<template>
    <div>
        <ul>
            <li v-for="item,index in list" :key="item.id">
                <div class="left">
                    <input type="checkbox" v-model="item.flag">
                    <span>{{item.txt}}</span>
                </div>
                <button @click="del(item.id)">清除</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
props: ['list'],
    data() {
        return {};
    },
    methods: {
       del(i){
        this.$emit('del',i)
       }
    },

};
</script>

<style lang="scss" scoped>
ul{
    width: 100%;
    li{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        height: 50px;
        border: 1px solid #999;
        span{
            margin-left: 10px;
        }
        button{
            display: none;
            width: 70px;
            height: 35px;
            color: #fff;
            background-color: #ca594f;
            border: 0;
            outline: 0;
            border-radius: 5px;
        }
        &:hover {
            background-color: #ccc;
            button{
                display: block;
            }
        }
    }

}
</style>