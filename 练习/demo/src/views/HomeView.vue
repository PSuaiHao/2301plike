<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">

        <el-menu default-active="$route.path" class="el-menu-vertical-demo" background-color="#000" text-color="#fff"
          active-text-color="#ffd04b" router>
          <h2 class="b">HAPPY</h2>
          <h2>MMALL</h2>
          <el-menu-item index="hpage">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="product">商品管理</el-menu-item>
              <el-menu-item index="category">品类管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="order">订单管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="user">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>

      </el-aside>
      <el-container>
        <el-header>

          <i class="el-icon-s-custom"></i>
          <p>欢迎，</p>

          <div class="name">
            {{ userInfo.username }}
          </div>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem('userInfo')) || {}
    };
  },
  methods: {
    handleCommand() {
      localStorage.removeItem('userInfo')
      this.$router.push('/login')
    }
  },
};
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #000;
  color: #fff;
  height: 100vh;
  padding-top: 40px;

  h2 {
    padding-left: 20px;
    font-size: 30px;
  }

  .b {
    color: #2dafcb;
  }
}

.el-header {
  position: relative;
  width: calc(100vw - 200px);
  height: 60px;
  box-shadow: 2px 2px 2px #ccc;
  display: flex;
  justify-content: end;
  align-items: center;

  .outlogin {
    display: none;
    position: absolute;
    width: 300px;
    background-color: antiquewhite;
    height: 60px;
    bottom: -65px;
    right: 2px;
    padding-left: 30px;
    line-height: 60px;

    i {
      font-size: 24px;
      margin-right: 10px;
    }
  }
}

.el-main {
  background-color: #eee;
  width: calc(100vw - 200px);
  height: calc(100vh - 60px);
}
</style>