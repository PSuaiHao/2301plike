<template>
	<div class="footer">
		<div>
			<input type="checkbox"  v-model="allChecked"/>
			<span>已完成{{ finishing }}/全部{{ list.length }}</span>
		</div>
		<button @click="clearFinishng">清除已完成任务</button>
	</div>
</template>
<script>
import querydate from '@/mixins/mixin';
	export default {
		name: 'TodoFooter',
		mixins:[querydate],
		data(){
			return {
			}
		},
		computed: {
			
		},
		methods: {
			/***
			 * 清空已完成任务
			 */
			
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