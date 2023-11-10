var arr = [
    {name: '张三',id: 1,sex: 0}, 
    {name: '李四',id: 2,sex: 0}, 
    {name: '王五',id: 3,sex: 0}, 
    {name: '赵六',id: 4,sex: 0},
    {name: '麻七',id: 5,sex: 0},
    {name: '杨戬',id: 6,sex: 0}, 
    {name: '后羿',id: 7,sex: 0}, 
    {name:'诸葛亮',id: 8,sex: 0},
    {name:'鲁班7号',id:9,sex: 0}, 
    {name: '孙悟空',id:10,sex: 0}, 
    {name: '林冲',id: 11,sex: 0},
    {name: '鲁智深',id: 12,sex: 0}, 
    {name: '武松',id: 13,sex: 0}, 
    {name: '贾宝玉',id: 14,sex: 0}, 
    {name: '貂蝉',id: 15,sex: 1}, 
    {name: '杨玉环',id: 16,sex: 1}, 
    {name: '王昭君',id: 17,sex: 1}, 
    {name: '西施',id: 18,sex: 1}, 
    {name: '嫦娥',id: 19,sex: 1}, 
    {name: '百秀莲',id: 20,sex: 1}, 
    {name: '孙二娘',id: 21,sex: 1}, 
    {name: '林黛玉',id: 22,sex: 1}, 
    {name: '薛宝钗',id: 23,sex: 1}, 
    {name: '王熙凤',id: 24,sex: 1}, 
    {name: '秦可卿',id: 25,sex: 1}, 
    {name: '李转',id: 26,sex: 1}, 
    {name: '裴丽珂',id: 27,sex: 1}, 
    {name: '聂粲粲',id: 28,sex: 1}, 
    {name: '王文慧',id: 29,sex: 1}, 
    {name: '裴瑞玲',id: 30,sex: 1},
]
// 男生数据
let arr2 = []
// 女生数据
let arr3 = []
// 拷贝的名字
let newArray = [...arr]
// 时间变量
var timer

// 时间标签
let time = document.querySelector('p')
// 单人点名
let one = document.getElementsByName('One')[0]
// 双人点名
let two = document.getElementsByName('Two')[0]
// 男生点名
let man = document.getElementsByName('Man')[0]
// 女生点名
let wuman = document.getElementsByName('Wuman')[0]
// 选中的名字标签
let dan = document.querySelector('.dan')
// 左侧渲染标签
let ul = document.querySelector('ul')


/**
 *时间格式
 * ****** */
function dateformat() {
    let dt = new Date()
    let y = dt.getFullYear();
    let m = (dt.getMonth() + 1 + '').padStart(2, '0');
    let d = (dt.getDate() + '').padStart(2, '0');
    let h = (dt.getHours() + '').padStart(2, '0');
    let f = (dt.getMinutes() + '').padStart(2, '0');
    let s = (dt.getSeconds() + '').padStart(2, '0')
    return "".concat(y, "-").concat(m, "-").concat(d, "-").concat(h, ":").concat(f, ":").concat(s)
}
tim()
function tim() {
    setInterval(() => {
        time.innerHTML = dateformat()
    }, 1000)
}

// 随机颜色
function randomys() {
    return Math.floor(Math.random() * 256)
}
function randomColor() {
    return `linear-gradient(to right top,rgb(${randomys()},${randomys()},${randomys()}),rgb(${randomys()},${randomys()},${randomys()}))`
}

/**
 * 左侧渲染列表数据
 * ******* */
xuan()
function xuan() {
    ul.innerHTML = ''
    arr.forEach(item => {
        let li = document.createElement('li')
        li.innerText = item.name
        ul.appendChild(li)
        li.style.backgroundImage = randomColor()
    })
}


// 男女生数据
arr.forEach(item => {
    if (item.sex == 0) {
        arr2.push(item)
    } else {
        arr3.push(item)
    }
})

// 封装随机名字
function randomName(array) {
    let num = array.length
    return Math.floor(Math.random() * num)
}

// 封装清空定时器
function endClearInterval(){
    if(timer){
        clearInterval(timer)
    }
}

// 开启定时器，并赋值
function startTnterval(){
   timer= setInterval(()=>{
    xuan()
    },100)
}

// 单人点名
function handlerOne() {
    // 点击前先清空定时器
    endClearInterval()
    if (one.innerText == '单人点名') {
        one.innerText = '停止点名'
        startTnterval()
    } else {
        endClearInterval()
        one.innerText = '单人点名'
        let index = randomName(newArray)
        dan.style.backgroundImage = randomColor()
        dan.innerText = newArray[index].name 
        newArray.splice(index,1)
    }
}

// 双人点名  
function handleTwo() {
    if (two.innerText == '双人点名') {
        two.innerText = '停止点名'
       startTnterval()
    } else {
        two.innerText = '双人点名'
        endClearInterval()
        let index = randomName(newArray)
        let i = randomName(newArray)
        if(index==i){
            index = randomName(newArray)
            i = randomName(newArray)
        }
        let oneid = newArray[index].id
        let twoid = newArray[i].id
        dan.style.backgroundImage = randomColor()
        dan.innerText = newArray[index].name + ',' + newArray[i].name
        let filterarr = newArray.filter(item => item.id != oneid).filter(item => item.id != twoid)
        newArray = filterarr
    }
}

// 男生点名
function handleMen() {
    if (man.innerText == '男生点名') {
        man.innerText = '停止点名'
        startTnterval()
    } else {
        endClearInterval()
        man.innerText = '男生点名'
        let index = randomName(arr2)
        dan.innerText = arr2[index].name
        dan.style.backgroundImage = randomColor()
       arr2=arr2.filter(item=>item.id!=arr2[index].id)
    }
}

// 女生点名
function handleWomen() {
    if (wuman.innerText == '女生点名') {
        wuman.innerText = '停止点名'
       startTnterval()
    } else {
        endClearInterval()
        wuman.innerText = '女生点名'
        let index = randomName(arr3)      
        dan.innerText = arr3[index].name
        dan.style.backgroundImage = randomColor()
       arr3=arr3.filter(item=>item.id!=arr3[index].id)
    }
}





