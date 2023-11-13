<template>
    <div>
     <p class="p">首页</p>
     <ul>
        <li>
            <h1>{{ object.userCount }}</h1>
            <p> <i class="el-icon-user-solid"></i> 用户总数</p>
        </li>
        <li>
            <h1>{{ object.productCount }}</h1>
            <p> <i class="el-icon-s-fold"></i> 商品总数</p>
        </li>
        <li>
            <h1>{{ object.orderCount }}</h1>
            <p> <i class="el-icon-folder-checked"></i> 订单总数</p>
        </li>
     </ul>
    </div>
</template>

<script>
import { queryhomepage } from '@/api/http';
export default {
 data() {
     return {
        object:{}
     };
 },
 methods: {
    
       
     
 },
 created(){
    queryhomepage().then(res=>{
            console.log(res.data.data);
            this.object=res.data.data
        })
 }
};
</script>

<style lang="scss" scoped>
.p{
    font-size: 30px;
}
ul{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    li{
        width: 30%;
        background-color: #f0b45e;
        padding: 40px 0;
        color: #fff;
        text-align: center;
        h1{
            font-size: 34px;
            font-weight: normal;
            margin-bottom: 20px;
        }
        &:nth-child(2){
            background-color: #6bbe6b;
        }
        &:nth-child(3){
            background-color: #5db8d3;
        }
    }
}
</style>