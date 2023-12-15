<template>
	
	<h1>当前位置：{{ point }}</h1>
	<sunzi3 :mar="mar"></sunzi3>
</template>
<script setup lang="ts">
    import {provide,reactive} from 'vue'
	import sunzi3 from '../components/sunzi3.vue'
	// 用hook封装
	import usePoint from '../hook/usePoint.js'	
    const point=usePoint()

	

	function greeter(person:string){
		return 'Hello'+person
	}
	let user='Jane'
	document.body.innerHTML=greeter(user)

	const getArray =<T , N>(value:N,times:number=5):T[]=>{
		return new Array(times).fill(value)
	}
	interface Lofin{
		name:string,
		age:number
	}

	let resu=getArray<Lofin,string>('1')


	interface LOGe {
		name:string,
		age:number
	}
	


	let mar=reactive({
		name:'张三',
		age:10
	})

	let car=reactive({
     name:'长安',
     price:'40万'
    })
    provide('car',car)
	    
	let a:number=1
	let arr=[]
	let ar1= new Array()
	let result:number[]=[1,2,3]
	let result1:Array<number>=[1,2,3]


		enum Status{
			Uploading,
			Success =200,
			Falied
		}
		console.log(Status.Uploading); //0
		console.log(Status['Success']); //200
		console.log(Status.Falied);  //201
		console.log(Status[200]);//Success
		
		// 接口
		const getFullName=({
			firstName,
			lastName,
		}:{
			firstName:string;
			lastName:string
		})=>{
			return `${firstName} ${lastName}`
		}


		// 绕靠多余检查
		interface RoleDic{
			[id:number]:string
		}
		const role1:RoleDic={
			0:'sss',
			1:'aaaa'
		}

		//const role2:RoleDic={
		//	s:'oo',//error 不能将类型分配给RoleDic
		//	a:'bfhs'
		//}

		const role3:RoleDic=['gvc','fghjk']


		// 接口继承
		interface Vega{
			color:string
		}

		interface Toma extends Vega{
			radius:number
		}

		interface Carr extends Vega{
			length:number
		}

		// 报错
		// const tomato:Toma={
		// 	radius:1.0
		// }
		const varr:Carr={
			color:'green',
			length:10
		}

		// 类型别名
		interface Add{
			(x:number,b:number):number
		}
		type Adds={
			(x:number,b:number):number
		}
		let add:Add=(arg1,arg2)=>arg1+arg2
		let resul=add(1,2)

		
		type param=number | string
		let oo:param
		 oo=1
		 oo='1'
		//  元祖类型  一直长度  定义不同类型
		 type arrtype=[string,string,number,boolean]
		// 枚举		
	// const point=reactive({
	//   x:0,
	//   y:0
	// })
	// const savePoint=(event)=>{
	//   console.log(event);
	//   point.x=event.pageX
	//   point.y=event.pageY

	// }
	// // 挂载后
	// onMounted(()=>{
	//   window.addEventListener('click',savePoint)
	// })
	// // 销毁后
	// onBeforeUnmount(()=>{
	//   window.addEventListener('click',savePoint)
	// })
</script>
