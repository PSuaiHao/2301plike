<template>
    <div class="btn">
        <button v-for="item,index in arr" @click="handlerClick(item.childrenid,index)" :class="{active:cur==index}">{{ item.childrenname }}</button>       
    </div>
    <div class="zu">
       <component :is="componentIs"></component>
    </div>
</template>

<script setup lang="ts">
import one from '../components/one'
import two from '../components/twozu'
import three from '@/components/threezu'
import four from '@/components/four'
import {reactive,ref} from 'vue'
const arr=[{
    childrenname:'动态组件一',
    childrenid:one
},{
    childrenname:'动态组件二',
    childrenid:two
},{
    childrenname:'动态组件三',
    childrenid:three
},{
    childrenname:'动态组件四',
    childrenid:four
}]

// 枚举
enum Color{
    red=1,
    blue=2,
    green=3
}
let c:Color=Color.green
console.log(c);

// void类型
function alear():void{
    console.log('我是谁');
}

function alear1():string{
    console.log('我是你爹');
    return '我是你爹'
}


// 交叉类型
interface use{
    name:string,
    age:number
}

interface per{
    sex:number
}
type allinfo=use & per
let persion:allinfo={name:'',age:1,sex:5}
// 

// 联合类型
let allType: number | string
allType=1
allType=''
//   allType=false 报错

const t:[string,number,boolean]=['zs',15,true]
const cur=ref(0)
const componentIs=ref(one)
let handlerClick=(item,index)=>{
cur.value=index
componentIs.value=item
}
</script>

<style lang="scss" scoped>
button{
    outline: 0;
    padding: 20px 40px;
    border: 1px solid #eee;
    background-color: #fff;
    margin-left: 15px;
    box-shadow: 0px 0px 10px #fff;
}
.active{
    box-shadow: 0px 5px 20px #ccc;
}
.zu{
    width: 40%;
    border: 4px solid pink;
    height: 400px;
    margin: 30px auto;
}
</style>