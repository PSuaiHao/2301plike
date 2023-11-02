var arr=['张三','李四','王五','赵六','麻七','貂蝉','杨玉环','王昭君','西施','嫦娥','杨戬','后羿','诸葛亮','鲁班7号','孙悟空','林冲','鲁智深','武松','百秀莲','孙二娘','贾宝玉','林黛玉','薛宝钗','王熙凤','秦可卿']
var arr2=['张三','李四','王五','赵六','麻七','杨戬','后羿','诸葛亮','鲁班7号','孙悟空','林冲','鲁智深','武松','贾宝玉']
var arr4=['貂蝉','杨玉环','王昭君','西施','嫦娥','百秀莲','孙二娘','林黛玉','薛宝钗','王熙凤','秦可卿']
var arr3=[]
let dan=document.querySelector('.dan')
let aa=document.querySelector('#aa')
let shuan=document.querySelector('#shuan')
let nan=document.querySelector('#nan')
let nv=document.querySelector('#nv')
function fn(newarr,n){
    arr3=[]
    for(var i=0;i<n;i++){
       let num=Math.floor(Math.random()*newarr.length)
       if(arr3.indexOf(num)==-1){
        arr3.push(newarr[num])
       }else{
        i--
       }
    }
    dan.innerHTML=arr3
}

aa.onclick=function(){
    fn(arr,1)
}

shuan.onclick=function(){
    fn(arr,2)
}

nan.onclick=function(){
    fn(arr2,1)
}

nv.onclick=function(){
    fn(arr4,1)
}





