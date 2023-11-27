<template>
	<div>
		{{ list }}
		<li v-for="item,index in list" :key="item.id">
			<div>
				<input type="checkbox" v-model="item.flag" />
				<span>{{ item.txt }}</span>
			</div>
			<button @click="deleteItem(item.id)">删除</button>
		</li>
	</div>
</template>
<script>
    import querydate from '@/mixins/mixin';
	export default {
		name: 'TodoItem',
		mixins:[querydate],
		data() {
			return {
				
			};
		},
        methods:{
            	/***
			 * 删除子项
			 */
			
        },
		mounted(){
			
		}
	};
</script>
<style scoped>
li {
		border-bottom: 1px solid #ccc;
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		/* line-height: 50px; */
	}
	li > div {
		display: flex;
	}
	button {
		padding: 5px 10px;
		height: 36px;
		background-color: #ca594f;
		color: aliceblue;
		border: none;
		border-radius: 5px;
	}
	li > button {
		display: none;
	}
	li:hover {
		background-color: #ccc;
	}
	li:hover button {
		display: block;
	}
	li > div > span {
		margin-left: 20px;
	}
	li:last-child {
		border: none;
	}
</style>