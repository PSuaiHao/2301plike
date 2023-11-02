<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item, index in banner">
        <img :src="item.picUrl" alt="">
      </van-swipe-item>
    </van-swipe>
    <h3>商品列表</h3>
    <ul>
      <li v-for="item, index in list" :key="item.id" @click="dj(item.id)">
        <div class="img">
          <img :src="item.pic" alt="">
          <span>{{ item.recommendStatusStr }}</span>
        </div>
        <p>{{ item.name }}</p>
        <div class="list-bot">
          <div class="left">￥{{ item.minPrice }} <s>￥{{ item.originalPrice }}</s></div>
          <div class="right">
            <van-button plain type="success" size="mini">购买</van-button>
          </div>
        </div>
      </li>
    </ul>
    <mytab></mytab>
  </div>
</template>

<script lang="ts" setup>
import { querybanner, querylist } from '@/API/http';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import mytab from '@/components/mytab.vue';
const router = useRouter()
const types = ref<any>('indexBanner')
const banner = ref<any>([])
const setbanner = () => {
  querybanner(types.value).then(res => {
    // console.log(res.data);
    banner.value = res.data
  })
}
setbanner()

const list = ref<any>([])
const params = reactive({
  pageSize: 10,
  page: 1
})
const setlist = () => {
  querylist(params).then(res => {
    console.log(res.data.result);
    list.value = res.data.result
  })
}
setlist()

const dj = (id: number) => {
  router.push({
    path: '/detail',
    query: {
      id: id
    }
  })
}
</script>
<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #eee;
  padding-bottom: 50px;
  li {
    width: 48%;
    border-radius: 5px;
    overflow: hidden;
    background-color: #f9f9f9;
    margin-bottom: 10px;
  }

  p {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .list-bot {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;

    .left {
      color: green;

      s {
        color: #999;
        font-size: 12px;
      }
    }
  }

  .img {
    width: 100%;
    height: 180px;
    position: relative;

    img {

      width: 100%;
      height: 100%;
    }

    span {
      position: absolute;
      top: 20px;
      left: 0;
      background-color: red;
      padding-right: 20px;
      padding-top: 3px;
      padding-bottom: 3px;
      border-bottom-right-radius: 40%;
      border-top-right-radius: 40%;
    }
  }

}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;

  img {
    width: 100%;
    height: 200px;
  }
}

h3 {
  text-align: center;
  margin: 15px;
}</style>
