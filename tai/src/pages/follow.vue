<template>
	<div class="follow pd-top">
		  <uc-cell
		   v-for="(item,index) of list"
		   :key="item._id"
		   :data="item" 
		   :index="index" 
		   collectionName="follow"
		   />
	</div>
</template>

<script >
	
	import UcCell from '../components/uc-cell/uc-cell.vue'
	
	export default{
		name:'follow',
		props:{},
		data(){
			return{
				list:[]
			}
		},
		components:{UcCell},
		mounted(){
			
			this.$axios({
				url:'/api/column',
				params:{_limit:25,page:1}
			}).then(
			res=>{
				this.list = res.data.data
			})
		},
		updated(){},
		methods:{}		
	}
</script>

<style scoped>
	.follow{padding: 0.5rem 0.34rem 0.8rem;}
</style>
