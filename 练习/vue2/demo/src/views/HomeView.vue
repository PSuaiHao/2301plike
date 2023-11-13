<template>
  <div class="home">
    <div class="box">
      <img src="../assets/edit.svg" alt="">
          <h3>~今天我需要做的事情~</h3>
          <div class="input">
            <input type="text" v-model="txt">
            <button @click="add">添加</button>
          </div>
          <ul class="ul1">
            <li v-for="item,index in newArray" :key="item.id">
              <div class="left">
              <input type="checkbox" v-model="item.flag" >
              <span v-if="!item.flag">{{ item.txt }}</span>
              <s v-else>{{ item.txt }}</s>
              </div>              
              <span @click="del(item.id)">x</span>
            </li>
          </ul>


          <ul class="ul">
            <li v-for="item,index in arr" :class="{cur:active==index}" @click="dj(index,item)">{{ item }}</li>
          </ul>
    </div>
         
  </div>
</template>

<script>
export default {
 data() {
   return {
    list:JSON.parse(localStorage.getItem('list'))||[],
    txt:'',
    arr:['事项','查看所有','待完成','已完成','清空所有'],
    active:0,
    newArray:[]
   };
 },
 methods: {
  dj(i,it){
    console.log(it);
    this.active=i
    if(it=='查看所有'){
      this.newArray=this.list
    }else if (it=='待完成') {
      this.newArray=this.list.filter(item=>!item.flag)
    }else if(it=='已完成'){
      this.newArray=this.list.filter(item=>item.flag)
    }else if(it=='清空所有'){
      this.newArray=[]
      this.list=[]
    }
  },
  add(){
      this.list.push({
        id:+new Date(),
        txt:this.txt,
        flag:false
      })
      this.txt=''
      console.log(this.list);
  },
  del(i){
    this.newArray=this.list.filter(item=>item.id!=i)
  }
 },
 watch:{
  list:{
    deep:true,
    handler(val){
      localStorage.setItem('list',JSON.stringify(val))
    }
  }
 },
 created(){
 this.newArray=this.list
}
};

</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100vh;
  background-color: #f5beaf;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  .box{
    background-color: #fff;
    border-radius: 8px;
    padding: 20px 40px;
    width: 40%;
    margin: 0 auto;
    height: 100%;
  }
  .ul1{
    width: 100%;
    margin: 20px auto;
    li{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #ea7a52;
      color: #fff;
      border-radius: 8px;
      padding: 5px 10px;
      margin-bottom: 10px;
      span,s{
        margin-left: 10px;
      }
    }
  }
  .ul{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li{
      padding: 5px;
      border-radius: 5px;
    }
    .cur{
      background-color: #ea7a52;
      color: #fff;
    }
  }
  
  h3{
    text-align: center;
    margin-top: 10px;
  }
  .input{
    margin-top: 15px;
    button{
      padding: 5px 15px;
      background-color: #fff;
      border: 1px solid #999;
      border-radius: 3px;
      outline: 0;
      margin-left: 10px;
      transform: rotate(10deg);
    }   
    button:hover{
        transform: scale(1.2);             
      }
    input{
    border: 0;
    outline: 0;
    border-bottom: 3px dashed #f5bcb1;
    width: 250px;
    margin-left: 13px;
  }
  }
}
img{
  width: 80px;
  height: 80px;
  margin-left: 150px;
}
</style>