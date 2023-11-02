<template>
    <div class="main">
        <div class="top">
            <div class="zhuce">
                <img src="../assets/logo.png" alt="">
                <span @click="$router.push('/login')">登录/注册</span>
            </div>
        </div>
        <div class="jifen">
            <div class="div">
                <span>--</span>
                <p>积分</p>
            </div>
            <div class="div">
                <span>--</span>
                <p>优惠券</p>
            </div>
            <div class="div">
                <span>--</span>
                <p>余额</p>
            </div>
        </div>
        <div class="dd">
            <van-cell title="我的订单" is-link value="查看全部订单" />
            <ul>
                <li>
                    <van-icon name="comment-o" />
                    <p>待付款</p>
                </li>
                <li>
                    <van-icon name="comment-o" />
                    <p>待发货</p>
                </li>
                <li>
                    <van-icon name="comment-o" />
                    <p>待收款</p>
                </li>
                <li>
                    <van-icon name="comment-o" />
                    <p>评价</p>
                </li>
                <li>
                    <van-icon name="comment-o" />
                    <p>退款/售后</p>
                </li>
            </ul>
            
        </div>
        <div class="dd">
            <van-cell title="常用功能"  />
            <ul >
                <li class="li">
                    <van-icon name="comment-o" />
                    <p>我的钱包</p>
                </li>
                <li class="li">
                    <van-icon name="comment-o" />
                    <p>积分兑换</p>
                </li>
                <li class="li">
                    <van-icon name="comment-o" />
                    <p>优惠券</p>
                </li>
                <li class="li">
                    <van-icon name="comment-o" />
                    <p>收货地址</p>
                </li>
                <li class="li">
                    <van-icon name="comment-o" />
                    <p>设置</p>
                </li>
                <li class="li">
                    <van-icon name="comment-o" />
                    <p>主题</p>
                </li>
                <li class="li">
                    <van-icon name="comment-o" />
                    <p>我的设备</p>
                </li>
              
            </ul>
            
        </div>
        <mytab></mytab>
    </div>
</template>
<script lang="ts" setup>
import mytab from '@/components/mytab.vue';
</script>
<style scoped lang="scss">
.main {
    background-color: #eee;
    width: 100vw;
    height: 100vh;
}

.top {
    width: 100vw;
    height: 200px;
    background-color: #50a586;
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 20px;

    .zhuce {
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            vertical-align: middle;
        }
    }
}

.jifen {
    margin: 15px auto;
    border-radius: 10px;
    padding: 15px 0;
    background-color: #fff;
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .div {
        text-align: center;
    }
}

.dd {
    width: 90%;
    margin: 0 auto 15px;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    ul{
        width: 100%;
        display: flex;
        align-items: center;
        padding:10px 0 ;
        flex-wrap: wrap;
        border-top: 1px solid #eee;
        li{
            width: 20%;
            text-align: center;
            margin-bottom: 5px;
        }
        .li{
            width: 25%;
            text-align: center;
            margin-bottom: 5px;
        }
    }
}
</style>