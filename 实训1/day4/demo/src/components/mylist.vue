<template>
	<div class="content">
		<ul>
			<mylistitemVue></mylistitemVue>
		</ul>
	</div>
</template>
<script>
import mylistitemVue from './mylistitem.vue';
	export default {
		name: 'TodoContentLsit',
		components: {
			mylistitemVue,
		},
		data() {
			return {
				
				
			};
		},
		created() {
		},
		methods: {
			/***
			 * 判断添加子项是否重复,能否添加成功
			 */
		},
	};
</script>
<style scoped>

	.content {
		width: 100%;
		/* padding: 20px; */
		border: 1px solid #ccc;
		margin-top: 20px;
		border-radius: 5px;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
</style>