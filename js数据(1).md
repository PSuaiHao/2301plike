Number

---

1.Number 转换空字符串 是0 转换字符串是 NaN

2.Number 转换true 是1  转换false 是0

3.Number 转换null 是0  转换 undefind 是NaN

4.转换 Date() 时间对象

```javascript
    // 转换 Date() 时间对象
    // let time = new Date()
    // console.log(time);
    // console.log(Number(time));  // 把时间对象转换为数字
```

5.parseInt 取整,两个参数

```javascript
    // // parseInt 取整,两个参数
    // console.log(parseInt(10.9));  //10
    // console.log(parseInt('10.9ddddddddd'));  //10
    // console.log(parseInt('0109ddd'));  //109
    // console.log(parseInt('1x.09ddd'));  //1
```

6.parseFloat  取整

```javascript
    // console.log(parseFloat('10.9ddddd'));  // 10.9
    // console.log(parseFloat('0109dddd'));   // 109
    // console.log(parseFloat('ddddd'));      // NaA
    // console.log(parseFloat('1x.09ddddd'));  // 1


    /**
     * 总结
     * 将字符串,转换为数字的方式
     * 1.Number  强制数据转换,只能转换数字类型的字符串,但凡一个不是,就会是NaN
     * 2.parseInt  取整数据类型转换,只转换整数,和小数点前的整数数据类型,但是首字母是字符串,将是NaN
     * 3.parseFloat  浮点数取整,转换小数,但是首字母是字符串,将NaN
     * 4.检测是否成功转换为数字类型,有一个isNaN
     * **/

```

### toString()   将其他数据类型转化为字符串

---

1.toString()   转换成字符串方法

2.String() 强制转化为字符串

### i++ ++i

---

++i 先自身加1,后参与运算

i++ 先参与运算,后计算

### Boolean

---

转换规则:除了‘0/NaN/空字符串/null/undefined’五个值但是false,其余值都是true

### !/!!

---

!/!!(! 表示取反, ！！表示取反在取反，所以!!跟Boolean() 是一个意思)



# 数据类型检测

| 不同类型的优缺点 | typeof                                                       | instanceof                             | constructor                                     | Object.prototype.toString.call   |
| ---------------- | ------------------------------------------------------------ | -------------------------------------- | ----------------------------------------------- | -------------------------------- |
| 优点             | 使用简单                                                     | 能检测出`引用类型`                     | **基本能检测所有的类型（除了null和undefined）** | **检测出所有的类型**             |
| 缺点             | **只能检测出除null外的基本数据类型和引用数据类型中的function** | **不能检测出基本类型**，且不能跨iframe | constructor易被修改，也不能跨iframe             | IE6下，undefined和null均为Object |



### 数组的方法

---

1.Array.isArray    判断是不是数组 Array.isArray 返回值是 true  false

```js
    // let array = '111'
    // console.log(Array.isArray(array));
```

2.push()  向数组末尾添加一个或多个元素,返回新数组的长度,**会改变原数组**

```js
  // let arr = [1, 2]
    // arr.push(1, 2, 3, 4, 5)   // 添加单个
    // arr.push(99999)
    // console.log(arr, 'push');
```

3.pop()  删除并返回数组最后一个元素,若该数组为空,则返回undeefined**,原数组改变**,返回的是被删除的元素

```js
   // let place = ['蔡徐坤', '鸡哥', '只因你太美']
    // let result = place.pop()  // ['只因你太美']
    // console.log(place, 'pop'); ['蔡徐坤','鸡哥']
    // console.log(result, 'place');['只因你太美']
```

4.unshift()  数组的开头添加一个或多个元素,并返回新的数组长度.**原数组改变**

```js
    // let arr = [1,2,3]
    // arr.unshift('网红狼 可可西里')  //['网红狼 可可西里',1,2,3]
    // arr.unshift('网红狼', ' 可可西里') //['网红狼', ' 可可西里',1,2,3]
```

5.shift() 删除并返回数组的第一个元素,若该数组为空,则返回undefined，**原数组改变**

```js
    // let arr = [1,2,3]
    // let result1 = arr.shift()   // [3]
    // console.log(result1);  [3]
    // console.log(arr, 'shift'); [1,2]
```

6.concat()  合并两个或多个数组,生成一个新的数组,**不会改变原数组**

```js
    // let arr = [1, 2, 3]
    // let place = [4,5,6]
    // let allresult = arr.concat(place)
    // console.log(allresult, 'concat');   // [1, 2, 3, 4, 5, 6] 
```

7.reverse()  反转[数组](https://so.csdn.net/so/search?q=数组&spm=1001.2101.3001.7020)，**会改变原始数组**

```js
    // let arr = [1,2,3]
    // arr.reverse()
    // console.log(arr);  // [3, 2, 1]
```

8.sort()   排序数组的元素会改变它们的顺序，**因此 `sort()` 方法会修改原数组。**

```js
    // let arr = [1, 2, 3]
    // arr.sort((a, b) => {
    //     return b - a
    // })
    // console.log(arr);  // 从大到小
    // arr.sort((a,b)=>{
    //     return a-b
    // })
    // console.log(arr);  // 从小到大
```

9.join()  将数组的每一项用置顶字符链接行程一个字符串。默认链接字符串为 ',' 逗号,join是有返回值,**不会改变原数组**,返回值是转换过的内容

```javascript
    // let arr = [1, 2, 3, 4]
    // let str = arr.join()
    // let str1 = arr.join('-')
    // console.log(str);  // 1,2,3,4
    // console.log(str1); // 1-2-3-4
```

10.toString() 此方法将数组转换为字符串,**不会改变原数组**,返回值是转换过的内容

```javascript
    // let arr = [1,2,3,4,5]
    // let str = arr.toString()
    // console.log(str);   // 1,2,3,4,5
```

11.slice()   两个参数 slice(start,end) 从start开始,end之前结束,不到end,**不改变原数组**,返回值是截取的数组值

```
    // let arr = [1, 2, 3, 4, 5]
    // let arr1 = arr.slice(0, 2)
    // console.log(arr1);  // [1, 2]
```

12.splice() 四个参数(start,number,item,item) 从start开始删除number位置,然后将后面参数，返回删除元素组成新数组，会改变原数组  **【改变原数组】**

```javascript
    // 包含 start
    // 改变原数组，返回新的数组
    // 从删除的位置向原数组添加数据

    // let place = ['西藏', '上海', '深圳', '证券', '外企']

    // let ccc = place.splice(1, 3, '可可西里1', '可可西里2', '可可西里3')

    //console.log(ccc);  //['上海', '深圳', '证券']
    //console.log(place);  //['西藏', '可可西里1', '可可西里2', '可可西里3', '外企']
```

13.indexof()    方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。**不改变原数组**

```javascript
    let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

    console.log(arr.indexOf(1));  // 0   // 没有填fromIndex所以默认从索引为0的位置开始往后查找
    console.log(arr.indexOf(1,1));  // 8 // 表示从索引为1的位置开始往后查找
```

14.includes()  方法用于判断数组中是否包含某个指定的元素，如果包含，则方法返回 true，否则返回 false。**不改变原数组**

15.map  循环方法 创建一个新数组,其结果是该数组中的每个元素都调用一个提供的函数后返回的结果

```javascript
    // let testArr = ['子项0','子项1','子项2']
    // let resuletArr = testArr.map((item,index)=>{
    //     return `处理.${item}`
    // })
    // console.log(testArr);  //['子项0', '子项1', '子项2']
    // console.log(resuletArr);  // ['处理.子项0', '处理.子项1', '处理.子项2']
```

16.forEach()  方法对数组的每个元素执行一次提供的函数。总是返回undefined；

```javascript
    // forEach方法中的function回调有三个参数：
    // 第一个参数是遍历的数组内容，
    // 第二个参数是对应的数组索引，
    // 第三个参数是数组本身

    // var arr = [1, 2, 3, 4];
    // var sum = 0;
    // arr.forEach(function (value, index, array) {

    //     array[index] == value; //结果为true

    //     sum += value;

    // });

    // console.log(sum); //结果为 10

```

17.filter()  过滤 用于对数组进行过滤。 它创建一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。filter()不会对空数组进行检测、**不会改变原始数组**

```javascript
    // let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // let res = nums.filter((num) => {
    //     return num > 5;
    // });

    // console.log(res);  // [6, 7, 8, 9, 10]
```

18.find()   方法用于查找[数组](https://so.csdn.net/so/search?q=数组&spm=1001.2101.3001.7020)中符合条件的第一个元素，如果没有符合条件的元素，则返回undefined

```javascript
// 求数组中第一个大于1的值
    // let arr1 = [1, 2, 3, 4, 5];
    // let num = arr1.find(item => item > 1);
    // console.log(num)  //输出的結果是2
```

19.findIndex()  findIndex()  返回符合条件的元素的索引位置,如果没有符合条件的元素返回-1

20.every() 判断数组中是否都满足条件,有一项不满足返回false

21.some() 只要有任何一项返回条件,就会返回true

22.reduce 用来计算求和 a是当前数组里面的值,b是返回的运算值,从左到右计算

```javascript
    // let reduceArr = [0, 1, 2, 3, 4]
    // let reduceResult = reduceArr.reduce((a, b) => {
    //     return a + b
    // })
    // console.log(reduceArr);  //10
```

23.split  将字符串分割成子字符串，并将结果存储在一个数组中。

---

**能影响原来数组的方法** 
        splice()       push()      pop()         shift()          unshift()      reverse()   sort()  reverse()   

**不会影响原来数组的方法**

​       concat()      slice()       forEach()    toSting()     join()        reduce()      map()    filter()   slice()    findIndex() 

**无返回值的：**

​      forEach()

**返回值为新数组的(js哪些数组方法会返回新内存空间--换一种问法)：**

​     splice()、concat()、slice()、sort()、reverse()、map()、filter()

