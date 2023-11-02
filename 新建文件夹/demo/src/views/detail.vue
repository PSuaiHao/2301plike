<template>
    <div class="detail">
        <van-nav-bar
  title="详情"
  left-text="返回"
  left-arrow
  @click-left="$router.go(-1)"
/>
        <img :src="detail.info.pic" alt="">
        <div class="middle">
            <h2>￥{{ detail.info.originalPrice }}.00</h2>
            <div class="price">
                价格 ￥<s>{{ detail.info.minPrice }}.00</s>
            </div>
            <h3>{{ detail.info.name }}</h3>
            <p>{{ detail.info.characteristic }}</p>
        </div>
        <div class="yunfei">
            <div class="left">
                <span>运费</span>
                <span>包邮</span>
            </div>
            <div class="right">
                <span>剩余：{{ detail.info.stores }}</span>
            </div>
        </div>
        <div class="ling">
            <van-cell title="领券" is-link />
        </div>
        <div class="bottom">
            <van-action-bar>
                <van-action-bar-icon icon="chat-o" text="首页" color="#ee0a24" />
                <van-action-bar-icon icon="chat-o" text="客服" />
                <van-action-bar-icon icon="cart-o" text="购物车" color="#ff5000" />
                <van-action-bar-button type="warning" text="加入购物车" color="#dff6f0" @click="add"/>
                <van-action-bar-button type="danger" text="立即购买" color="#50a486"/>
            </van-action-bar>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { querydetail,queryadd } from '@/API/http';
import { ref, reactive } from 'vue';
const route = useRoute()
const detail = reactive<any>({
    info: {},
   
})


const add=()=>{
// queryadd({goodsId:detail.info.id,number:1}).then(res=>{
// console.log(res);

// })
}
const setdetail = () => {

    querydetail(route.query.id).then(res => {
        console.log(res.data.basicInfo);
        detail.info = res.data.basicInfo
    })
}
setdetail()

</script>
<style scoped lang="scss">
.detail {
    width: 100vw;
    height: 100vh;
    background-color: #eee;

    .middle {
        width: 100%;
        padding: 10px;
        background-color: #fff;

        h2 {
            color: green;
        }

        .price {
            font-size: 14px;
            color: #999;
        }

        p {
            color: #999;
            font-size: 12px;
        }
    }

    .yunfei {
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        color: #999;
        background-color: #fff;

        span {
            margin-right: 10px;
        }
    }

    .ling {
        margin-top: 20px;
    }
}

img {
    width: 100%;
}</style>