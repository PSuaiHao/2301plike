## Vux知识点总结



## 一、vuex是什么

​	Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态。

## 二、市场上同类型的状态管理工具有

​     2.1 react

​		  (1) **Recoil**[1]

​     	 (2)**MobX**[2]

​    	  (3)**XState**[3]

​     	 (4)**Redux (with hooks)**[4]

​    	  (5)**Context**

   2.2 vue

​		(1) vuex

   2.3 vue3

​		(1)pinia

​	状态管理工具,因为语言发展的历史,react的问世早于vue,所以很多状态管理工具都是为react服务的,vuex是专门为Vue服务的 ,吸取了redux的单数据管理,去掉了redux的限制,更加适合vue,所以vue选择了,vuex,当然也能用其他的,但是会比vuex复杂很多.

## 三、核心及使用



1. state 存储数据   组件中使用 this.$store.state.**	

2. mutations 对象 里面是方法 可以直接操作state中的数据

   **注意：**commit只能传一个参数  如果需要传递多个数据用复杂数据类型 比如 数组 对象

   ​          同步数据

   在组件中  this.$store.commit("模块名/方法名",参数)

3. getters 是state中的数据做逻辑处理 类似于计算属性	

   在组件中  this.$store.getters.方法名

   在模块中同理: this.$store.getters.模块名.方法名

4. actions 也是可以操作数据，但是不能直接修改state操作数据  它调用mutations中的方法来操作的数据

   actions中的方法是异步的 mutations中的方法是同步的

   在组件中异步修改数据：

   在组件中通过dispatch调用actions中的方法，在actions中调用mutations中的方法，在mutations中可以直接操作state中的数据

   在组件中  this.$store.dispatch("模块名/方法名",参数)

   vuex中

   ```
   var actions={
     //context store对象
     syncAddObj(context,played){
       context.commit("addObj",played)
     }
   }
   ```

   组件

   ```js
   add(){
               //判空
               if(this.title==""){
                   return alert('不能为空')
               }
               //判断唯一性
               var index=this.$store.state.todo.findIndex(item=>{
                   return item.title==this.title
               })
               if(index!=-1){
                   return alert("已经存在")
               }
               //添加
               var obj={title:this.title,flag:false,isEdit:false}
               this.$store.dispatch("syncAddObj",obj).then(()=>{
                   console.log('我已经完事了')
                   //清空
                   this.title=""
               })
               
           }
   ```

   

5. modules  分模块存储

   将state分成模块存储

   在vuex中

   ```js
   import Vue from 'vue'
   import Vuex from 'vuex'
   
   Vue.use(Vuex)
   var user={
     state:{
       arr:[
         {username:"张小三",age:20}
       ]
     },
     mutations:{
       addObj(state,obj){
         state.arr.push(obj)
       }
     }
   }
   
   export default new Vuex.Store({
     state: {
     },
     mutations: {
     },
     actions: {
     },
     modules: {
       user
     }
   })
   ```

   **在组件中的使用**：

   - 组件的模块的数据   this.$store.state.user.**
   - 组件中模块方法   this.$store.commit('方法名',参数)
   - 组件中getters  this.$store.getters.**
   - 组件中actions  this.$store.dispatch('方法名',参数)

   ```
   <template>
     <div id="app">
       {{$store.state.user.arr}}
       <button @click="$store.dispatch('syncAddObj',{username:'xiaosi',age:20})">添加</button>
       <p>{{$store.getters.count}}</p>
     </div>
   </template>
   ```

## 四、5大核心

​	state 

​	mutations

​	actions

​	getters

​	modules

## 五、vuex的运行原理

​	在组件中通过dispatch调用actions中的方法，在actions方法中commit调用mutations中的方法，在mutations中的方法中可以直接操作state中的数据，只要state中的数据发生改变就会立刻响应到组件的视图上。（异步）

​     在组件中通过commit调用mutations中的方法，在mutations中的方法中可以直接操作state中的数据，只要state中的数据发生改变就会立刻响应到组件的视图上。（同步步）

![在这里插入图片描述](https://img-blog.csdnimg.cn/e966ac8d5ee94829be78fff616088bca.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5qOuIOWqmw==,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

## 五、vuex的基本写法

 1. 基础写法

    ```js
    import Vue from 'vue'
    import Vuex from 'vuex'
    
    Vue.use(Vuex)
    
    export default new Vuex.Store({
      state: {
    
      },
      getters: {
      },
      mutations: {
      },
      actions: {
      },
      modules: {
      }
    })
    
    ```

     .代码抽离写法,第一种,两者分开查询

    ```js
    
    
    //state
    const state = {
        
    }
    
    
    //设置actions
    const  actions = {
    
    }
    
    //设置mutations
    const mutations = {
    
    }
    
    export default {
        namespaced: true,
        state,
        actions,
        mutations
    }
    ```

    3. 写成模块抽离

    ```js
    const tabList = {
        state: {
    
        },
        actions: {
    
        },
        mutations:{
    
        }
    }
    
    export default tabList
    ```

    4. 在modules中调用action的写法

       
       
       
       
       ```js
       	  import { mapState, mapActions, mapGetters } from "vuex";
             // vuex actions
             ...mapActions([
                 'TenantConfigTable'  // -> this.TenantConfigTable()
             ]),
             ...mapActions([
               "moduleA/TenantConfigTable" // -> this['moduleA/TenantConfigTable']()
             ]),
               ...mapActions("moduleA", [
               "TenantConfigTable" // -> this.TenantConfigTable()
             ]),
             ...mapActions({
               newFn: "TenantConfigTable" // 将`this.newFn()`映射为`this.$store.dispatch('sampleFn')`
             }),
       
       ```
       
       5.总结
       
       ```
          // ...mapState({  //用mapState来获取collection.js里面的state的属性值
               //    unReadList:state => state.tabLists.unReadList,
               //    readList:state=>state.tabLists.readList,
               //    recycleBinList:state=>state.tabLists.recycleBinList
       
               //this.$store.state.tabLists
       
               // }),
                // 第三种
                // this.$store.getters.tabLists
                ...mapGetters(['tabLists'])
       
                //this.$store.dispatch('模块名/actions方法名', 具体值)
                //this.$store.commit('模块名/actions方法名', 具体值)
       ```
       
       
       
          

## 六、vuex中的数据刷新丢失怎么办（vuex的数据持久化）

1. 手动的将数据添加到本地存储中

2. 可以使用vuex数据的持久化

   - 下载插件

     npm install vuex-persistedstate --save

   - 导入插件  store

     import persistedState from 'vuex-persistedstate'

   - 挂载插件

     默认的使用localStorage
     plugins: [persistedState()]
     还可以配置成sessionStorage
     plugins: [persistedState({storage: window.sessionStorage})]

     ​	

## 七、vuex的映射函数

在组件中 将该组件用到的数据或者方法映射到组件中

1. 映射mutations中的方法

   - 在组件中导入 mapMutations

     import {mapMutations} from "vuex"

   - 在组件中注册

     在methods中注册方法

     methods:{

     ​	...mapMutations(['addMes','方法名'])

     }

   - 当成自己的方法就行

     this.addMes

2. 映射state中的数据

   - 在组件中导入 mapState

     import {mapMutations,mapState} from "vuex"

   - 在组件中注册

     在computed中注册

     computed:{

     ​	...mapState(['属性','message'])

     }

   - 当成自己的数据

     this.message

3. 映射getters中的数据

   - 在组件中导入 mapGetters

     import {mapMutations,mapState,mapGetters} from "vuex"

   - 在组件中注册

     也在computed中注册

   - 当成自己的数据

4. 映射actins的写法

   - 在组件中导入 **`mapActions`**

     import {mapMutations,mapState,mapGetters,**`mapActions`**} from "vuex"

   - 在methos中注册使用

     methods:{

     ​	...mapActions(['addMes','xxxxx'])

     }

   - 当成自己的方法,this.XXX来进行调用

## 八、 vuex的运用场景

​    Vuex是通过全局注入store对象，来实现组件间的状态共享。 

​     总之，假如你需要 数据 和 组件 分离，分别处理，那么使用 Vuex 是非常合适的。
​    相反，如果不需要分离处理，那么不使用 Vuex 也没关系。
比如某个数据只跟某组件打交道，是强耦合的。那么这个数据就应该存放在该组件的 data 属性中。

​    如果只是简单的父子组件间传递数据，使用vuex未免有点大材小用，其实只用使用组件间常用的通信方法即可。
在大型复杂的项目中（多级组件嵌套），需要实现一个组件更改某个数据，多个组件自动获取更改后的数据进行业务逻辑处理，这时候使用vuex比较合适。
​    涉及到非父子关系的组件，例如兄弟关系、祖孙关系，甚至更远的关系；
​    他们之间如果有数据交互，需要数据和组件的分离，那么应该使用Vuex来实现；
   如果页面复杂度比较低的话，也可以考虑使用 global-event-bus 来实现；
   如果只是父子关系的组件数据交互，那么应该考虑使用props进行单向传递；
   如果涉及到子组件向父组件的数据传递，那么应该考虑使用 $emit 和 $on；



## 九.映射函数和组件方法的对应关系

 mapState----> this.$store.state

mapActions----> this.$store.dispath

mapGetters-->this.$store.getters

mapMutations---> this.$store.commit

1. 分模块

   mapState('模块名/方法名', 值)

   mapState('模块名', ['方法名',值])

   购物车: 价格 * 数量

   使用购物车的页面中: 

   Computed: getters 引入价格,数量

   2.1 不分模块

   mapState('方法名', '值')

2. 使用地方

   mapState------>computed

   mapActions -----> methods

   mapGetters ---> computed

   mapMutations ---> methods

3. 如何进行分模块操作

   1. 新建modules文件夹,和index.js

   2. 在modules文件夹中新建一个js文件: 例如 user.js

      1. 第一种写法

      ```js
      
      
      // initial state
      const state = {
      }
      
      // actions
      const actions = {
      }
      
      // mutations
      const mutations = {
      }
      
      export default {
        namespaced: true, // 开启命名空间,防止多个模块之间命名冲突
        state,
        actions,
        mutations
      }
      
      ```

      2. 第二种写法

      ```js
      const user = {
      
      // initial state
          const state = {
          }
      
      // actions
          const actions = {
          }
      
      // mutations
          const mutations = {
          }
      }
      export default user
      ```

   3. gettes单独新建一个js文件,和index.js同级 新建一个getters.js

      ```js
      const getters = {
        // 模块名
        user: state => state.user
      }
      export default getters
      
      ```
   
   4. 在index.js文件中引入
   
      ```js
      import Vue from 'vue'
      import Vuex from 'vuex'
      import user from './modules/user'
      import getters from './getters'
      
      Vue.use(Vuex)
      
      export default new Vuex.Store({
        modules: {
          user,
        },
        getters
        // strict: process.env.NODE_ENV !== 'production'
      })
      
      
      ```
   
      
