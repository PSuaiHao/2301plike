<template>
    <div>
        <h2>订单管理</h2>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">

            <el-form-item>
                <el-select v-model="formInline.region" placeholder="按商品id查询">
                    <el-option label="按商品id查询" value="shanghai"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-input v-model="formInline.user" placeholder="订单号"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table :data="tableData" style="width: 100%" border>
            <el-table-column prop="orderNo" label="订单号" width="180">
            </el-table-column>
            <el-table-column prop="receiverName" label="收件人" width="180">
            </el-table-column>
            <el-table-column prop="statusDesc" label="订单状态">
            </el-table-column>
            <el-table-column prop="payment" label="订单总价">
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row.id)" type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>

       

    <el-pagination
      @size-change="getorder()"
      @current-change="getorder()"
      :current-page.sync="formInline.pageNum"
      :page-size="100"
       layout="prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </div>
</template>

<script>
import { queryorder } from '../api/http'
export default {
    data() {
        return {
            
            formInline: {
                productId: '',
                productName: '',
                pageNum: 1,
            },
            tableData:[],
            total:0
        };
    },
    methods: {
        // 查询
        onSubmit() {

        },
        // 查看
        handleClick(){

        },
        getorder(){
            queryorder({pageNum:this.formInline.pageNum}).then(res => {
            console.log(res);
            this.tableData=res.data.data.list
            this.total=res.data.data.total
        })
        },
       
    },
    created() {
       this.getorder()
    }
};
</script>

<style lang="scss" scoped></style>