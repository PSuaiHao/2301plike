<template>
    <div>
        <h1>商品详情</h1>
        <el-form label-width="80px">
            <el-form-item label="商品名称">
                <el-input :value="detaildata.name"></el-input>
            </el-form-item>
            <el-form-item label="商品描述">
                <el-input :value="detaildata.subtitle"></el-input>
            </el-form-item>
            <el-form-item label="当前状态">
                <el-input :value="detaildata.status == 0 ? '已下架' : '在售'"></el-input>
            </el-form-item>
            <el-form-item label="所属分类" >
                <el-select  placeholder="请选择一级分类" >
                    <el-option label="请选择一级分类" ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品价格">
            <el-input v-model="detaildata.price">
                <template slot="append">件</template>
            </el-input>
            </el-form-item>
            <el-form-item label="商品库存">
            <el-input v-model="detaildata.stock">
                <template slot="append">元</template>
            </el-input>
            </el-form-item>
            <el-form-item label="商品图片">
            <img :src="detaildata.imageHost" alt="">
            </el-form-item>
            <el-form-item label="商品详情">
            
            </el-form-item>
           
        </el-form>
       
    </div>
</template>

<script>
import { querydetail } from '@/api/http';
export default {
    data() {
        return {
            productId: this.$route.query.id,
            detaildata: {}
        };
    },
    methods: {},
    created() {
        querydetail(this.productId).then(res => {
            console.log(res);
            this.detaildata = res.data.data
        })
    }
};
</script>

<style lang="scss" scoped>
h1 {
    font-weight: normal;
    font-size: 26px;
}
img{
    width: 100px;
    height: 100px;
}
.el-form{
    width: 40%;
}
</style>