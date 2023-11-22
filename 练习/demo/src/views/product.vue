<template>
    <div>
        <h2>商品管理
            <el-button type="primary" icon="el-icon-plus" size="medium">添加商品</el-button>
        </h2>

        <el-form :inline="true" :model="formInline" class="demo-form-inline">

            <el-form-item>
                <el-select v-model="formInline.region" placeholder="按商品id查询">
                    <el-option label="按商品id查询" value="shanghai"></el-option>
                    <el-option label="按商品名称查询" value="shanghai"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-input v-model="formInline.user" placeholder="关键词"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>


        <el-table :data="tableData" style="width: 100%" border>
            <el-table-column prop="id" label="id" width="180">
            </el-table-column>
            <el-table-column prop="name" label="信息" width="180">
            </el-table-column>
            <el-table-column prop="price" label="价格">
            </el-table-column>
            <el-table-column label="状态">
                <template slot-scope="scope">
                    {{ scope.row.status==1?'在售':'已下架' }}
                    <el-button type="warning" size="mini">{{scope.row.status==1?'下架':'上架'}}</el-button>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row.id)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
      @size-change="getlist()"
      @current-change="getlist()"
      :current-page.sync="formInline.pageNum"
      :page-size="100"
       layout="prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </div>
</template>

<script>
import { querylist } from '../api/http'
export default {
    data() {
        return {
            
            formInline: {
                pageNum: 1,
                productId: '',
                productName: ''
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
        handleClick(id){
        this.$router.push({
           path:'/detail',
           query:{
            id:id
           }
        })
        },
        // 
        getlist(){
            querylist({ pageNum: this.formInline.pageNum }).then(res => {
            console.log(res);
            this.tableData=res.data.data.list
            this.total=res.data.data.total
        })
        }
    },
    created() {
        this.getlist()
    }
};
</script>

<style lang="scss" scoped>
h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}
</style>