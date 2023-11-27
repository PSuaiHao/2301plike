<template>
  <div>
    <TodoHeaderist @addList="handlerAddList"></TodoHeaderist>
    <TodoContentList :addValue="addValue" @getTodoList="getTodoList" :footerTodoList="footerTodoList"></TodoContentList>
    <TodoFooter :todoList="todoList" @getFooterTodoList="getFooterTodoList"></TodoFooter>
  </div>
</template>

<script>
import TodoHeaderist from '@/components/TodoHeaderist.vue';
import TodoContentList from '@/components/TodoContentList.vue';
import TodoFooter from '@/components/TodoFooter.vue';
export default {
 data() {
   return {
    addValue:'',
    todoList:[],
    footerTodoList: []
   };
 },
 components:{TodoHeaderist,TodoContentList,TodoFooter},
 methods: {
  handlerAddList(addvalue) {
				this.addValue = addvalue
			},
      getTodoList(todoList) {
				console.log(todoList,'todoList');
				this.todoList = [...todoList]
			 },
			 getFooterTodoList(newTodoList) {
				this.footerTodoList = [...newTodoList]
				console.log(newTodoList);
			 },
       deleteItem({ id }) {
				const index = this.todolist.findIndex((item) => item.id == id);
				this.todolist.splice(index, 1);
			},
 },
};
</script>

<style lang="scss" scoped>

</style>