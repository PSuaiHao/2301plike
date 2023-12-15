<template>
  <div class="home">
    <input type="text" v-model="fullname">
    <span>{{ person.firstname }}</span>
    <span>{{ person.lastname }}</span><br>
    <input type="text" v-model="person.age"><br/>
    <input type="text" v-model="person.name"><br/>
    <input type="text" v-model="person.work"><br/>
    <h2>{{ person.xinzi }}</h2>
    <h1>{{ diress }}</h1>
    <button @click="changeage">修改年龄</button>
    <button @click="changexz">修改薪资</button>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,computed,watch} from 'vue'
  const diress=ref('海南')
  const person=reactive({
     age:18,
     name:'王麻子',
     work:'全栈开发人员',
     xinzi:16,
     firstname:'王',
     lastname:'麻子'
  })

 
 const changeage=()=>{
	person.age++
 }

 const changexz=()=>{
	person.xinzi++
 }


   class Aniamal{
    name:string
    constructor(name){
      this.name=name
    }
    Getname():string{
      return this.name
    }
   }
   class Dog extends Aniamal{
    constructor(name){
      super(name)
    }
   }
   let d=new Dog('ha')
   console.log(d.name);
   


  // 简写计算属性

//   const fullname=computed(()=>{
// 	  return  person.firstname+ '-' +person.lastname
//  })

//  完整计算属性
let fullname=computed({
	get(){
		return  person.firstname+ '-' +person.lastname
	},
	set(value){
		console.log(value);
		const nameArr=value.split('-')
		person.firstname=nameArr[0]
		person.lastname=nameArr[1]
	}
 })

//  监听
 watch(()=>person.xinzi,(newvalue,oldvalue)=>{
	console.log(newvalue,'newvalue');
	console.log(oldvalue,'oldvalue');
 })
 watch([()=>person.age,()=>person.xinzi],(newvalue,oldvalue)=>{
	console.log('person.age',newvalue,oldvalue);
	if(newvalue){
		person.work='前端开发人员'
	}
 })

  // vue3中proxy代理
// const p = new (person,{
//   get(target,propName){
//        console.log(target,'target');
//        console.log(propName,'propName');
//        console.log('读取');
//        returnReflect.get(target,propName,value)      
//   },
//   set(target,propName,value){
//        console.log(target,'target');
//        console.log(propName,'propName');
//        console.log(value,'value');
//        console.log('修改');
//        returnReflect.get(target,propName,value)      
//   },
//   deleteProperty(target,propName){
//        console.log(target,'target');
//        console.log(propName,'propName');
//        console.log('删除');     
//   }
// })
</script>
<style></style>
