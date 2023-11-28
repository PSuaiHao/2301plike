# TodoList整体思路

创建一个vue2项目

#### 1.首先views里面创建TodoList父组件在style里面给这个盒子设置边框padding         



#### 2.在components组件里面创建3个子组件 分别是头部添加组件、渲染数组列表组件、底部统计组件  引入到父组件中 



#### 3.在store文件夹里面创建一个modules文件夹   文件夹里面创建三个分别对应头部添加组件、渲染数组列表组件、底部组件的模块化js文件，各个js文件里面声明一个对象   用export default 导出  引入到公共组件中的modules模块化中



#### 4.在头部添加子组件中建一个input框   在头部模块化js文件state对象里面定义txt,  在input上用v-model双向绑定用$store.state.headers.txt    给input框一个回车事件   在头部添加子组件中用辅助函数     在methods中定义 把$store.state.headers.txt 传过去  在contents渲染模块化js文件state里面定一个数组list   在mutations对象里面定义添加函数  函数中有两个参数  state  value   value是接收从组件中传过来的数据     判断input框不为空或不能写null和判重  最后用push方法添加list数组



#### 5.渲染    在渲染mylist子组件中也用辅助函数  在computed计算属性中注册渲染模块化中state数据  最后用forEach循环这个数组 渲染到页面上    



#### 6.删除单个   点击哪一项删除按钮添加del删除事件  获取这一项的id  在methods方法中把这个id通过辅助函数传给渲染模块化js组件   在mutations对象里面定义一个方法   通过filter过滤筛选数组让每一项的id不等于传过来的id   在赋值给state中的listl数组



#### 7.在底部  清空已完成   点击清空已完成添加一个事件   用辅助函数mapmutations    在渲染模块化js文件mutations对象中定义一个清空已完成方法  用filter过滤筛选掉fla为true 的  在赋值给state中的list数组



#### 8.底部的反选和全选用计算属性      在store里面建一个getters.js文件 声明一个对象并导出  在index.js中引入并注册  在getters.js中引入各个模块化文件中state的数据   用数组中every方法来判断数组中的每一项是否都符合标准  有一项不符合就返回false   否则为true 用变量承接返回的true 或者false  在底部组件 用辅助函数   computed计算中定义一个变量对象 用v-model绑定这个变量对象  里面有get和set函数     get有一个return返回值 返回在getters中的变量    



#### 9.已完成数量  在getters中用filter过滤    过滤每一项的flag值为true   filter是返回一个新数组  数组有长度直接在filter后面加.length就可以得出已完成的长度  在底部组件中用辅助函数 渲染到页面中就可以了



#### 10.全部      因为数组有length长度   在getters.js中直接list.length  在底部组件用辅助函数   渲染到页面就可以了  











### 以上是对TodoList的全部思路