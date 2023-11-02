<template>
    <div class="login">
        <div class="dl">
            <h3>账号密码登录</h3>
            <label>为了你的账号安全,请用手机号登录</label>
        </div>

        <div class="sjh">
            <van-cell-group inset>
                <van-field v-model="phone" label="中国 +86" placeholder="请输入手机号" />
                <van-field v-model="password" placeholder="请输入密码" type="password" right-icon="closed-eye" />
            </van-cell-group>
        </div>
        <van-button disabled type="success" block >登录</van-button>
        <div class="zc">
            <div class="left">
                <span @click="$router.push('/code')">验证码登录</span>
            </div>
            <div class="right">
                <span>忘记密码</span>
                <span class="mf" @click="$router.push('/register')">免费注册</span>
            </div>
        </div>

        <div class="yue">
            <van-checkbox v-model="checked" checked-color="green">复选框</van-checkbox>阅读并同意<span>《用户协议》</span>和<span>《隐私政策》</span> 
            
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const phone = ref('')
const password = ref('')
const checked=ref(true)
</script>

<style lang="scss" scoped>
.login {
    widows: 100%;
    height: 100%;
    padding-top: 50px;

    .dl {
        margin-left: 20px;
        margin-bottom: 20px;

        h3 {
            margin-bottom: 10px;
        }
    }
    .van-button{
        width: 80%;
        margin:30px auto;
    }
    .zc{
        width: 80%;
        display: flex;
        margin: auto;
        color: blue;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        .mf{
            margin-left: 20px;

        }
    }
    .yue{
        width: 100%;
        position: fixed;
        bottom: 30px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            color: blue;
        }
    }
}
</style>