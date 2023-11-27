<template>
	<div class="footer">
		<div>
			<input type="checkbox"  v-model="allChecked"/>
			<span>已完成{{ finishing }}/全部{{ todoList.length }}</span>
		</div>
		<button @click="clearFinishng">清除已完成任务</button>
	</div>
</template>
<script>
import querydate from '@/mixins/mixin';
	export default {
		name: 'TodoFooter',
		props:['todoList'],
		mixins:[querydate],
		data(){
			return {
			}
		},
		computed: {
			finishing() {
				const result = this.todoList.filter(
					(item) => item.checked == true,
				).length;
				console.log(result, 'result');
				this.num=result
				return result;				
			},
			

			allChecked: {
				get() {
					return this.todoList.every(item=>item.checked)
				},
				set(value) {
					this.todoList.forEach(item=>item.checked=value)
				},
			},
		},
		methods: {
			/***
			 * 清空已完成任务
			 */
			clearFinishng() {
				let results = this.todoList.filter((item) => item.checked == false)
				console.log(results,'results')
				this.$emit('getFooterTodoList', results)
			},
		},
		mounted() {
			console.log(this.$attrs, 'this.$attrs');
		},
	};
</script>
<style scoped>
	.footer {
		display: flex;
		padding: 0 10px;
		justify-content: space-between;
		margin-top: 20px;
	}
	.footer > div > span {
		margin-left: 20px;
	}
</style>