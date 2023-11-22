<template>
  <div>
        <button @click="saveData()">点我保存一个数据</button>
        <button @click="readData()">点我读取一个数据</button>
        <button @click="deleteData()">点我删除一个数据</button>
        <button @click="delAllData()">点我清空一个数据</button>
  </div>
</template>

<script>
export default {
 data() {
   return {
    p:{
      name:'张三',
      age:18
    }
   };
 },
 methods: {
  saveData(){
    localStorage.setItem('msg','hello!!!')
    localStorage.setItem('msg2','666')
    localStorage.setItem('person',JSON.stringify(this.p))

  },
  readData(){
    localStorage.getItem('msg')
    localStorage.getItem('msg2')
    const result=JSON.parse(localStorage.getItem('person')) 
    console.log(result);

  },
  deleteData(){
    localStorage.removeItem('msg2')
  },
  delAllData(){
    localStorage.clearTiem()
  }
 },
};
</script>

<style lang="scss" scoped>

</style>