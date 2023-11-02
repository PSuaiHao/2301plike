<template>
  <div class="about">
    <div class="about">
      <div class="left">
        <van-sidebar v-model="active">
          <van-sidebar-item v-for="item,index in leftlist" :title="item.name" />
        </van-sidebar>
      </div>
      <div class="right">
          <ul v-if="id!==''">
            <li v-for="item,index in rightlist" :key="item.id" @click="qh(item.id)">
              <div class="li" v-if="item.categoryId==leftlist[active].id">
                 <img :src="item.pic" alt="">
                 <h5>{{ item.name }}</h5>
                 <h3>{{ item.originalPrice }}</h3>
              </div>
                 
            </li>
          </ul>
      </div>
    </div>
    <mytab></mytab>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { queryleft,queryright } from '@/API/http';
import mytab from '@/components/mytab.vue';
import { useRouter } from 'vue-router';
const router=useRouter()
  const leftlist=ref<any>([])
  const active = ref(0);
  const rightlist=ref<any>([])
  const id=ref('')
const goodsdara=reactive({
  page:1,
  pageSize:10
})

const qh=(id:number)=>{
   router.push({
    path:'/detail',
    query:{
      id:id
    }
   })
}
queryleft().then(res => {
  leftlist.value=res.data
  id.value=leftlist.value[active.value].id
})
queryright(goodsdara).then(res=>{
     rightlist.value=res.data.result

})


</script>
<style lang="scss" scoped>
.about{
  width: 100%;
  display: flex;
  .left{
    width: 20vw;
  }
  .right{
    width: 80vw;
   ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li{
      width:48%;
      img{
        width: 100%;
        height: 120px;
      }
    }
   }
  }
}
</style>
