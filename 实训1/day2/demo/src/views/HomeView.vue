<template>
  <div>
    <el-container>
      <el-aside width="200px">

        <el-menu default-active="$route.path" class="el-menu-vertical-demo" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>工作台</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">人事工作台</el-menu-item>
              <el-menu-item index="1-2">财务工作台</el-menu-item>
              <el-menu-item index="1-2">行政工作台</el-menu-item>
              <el-menu-item index="/general">总经理工作台</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>

      </el-aside>
      <el-main>

        <router-view></router-view>

      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.el-aside,.el-main{
  height: 100vh;
  .el-menu-vertical-demo{
    height: 100%;
  }
}
.el-main{
  width: calc( 100vw - 200px);
  background-color: #eee;
}
</style>