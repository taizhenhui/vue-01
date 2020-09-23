<template>
	<div class="home pd-top">
	  <banner
	    :data="banner"
	    collectionName="banner"
	  />
	  <div class="list">
	    <uc-cell
	      v-for="(item,index) of list"
	      :key="item._id"
	     :data="item" 
	     :index="index" 
	     collectionName="home"
	     />
	  </div>
	  
	</div>
</template>

<script>
	
	import banner from '../components/banner/banner.vue';
	import UcCell from '../components/uc-cell/uc-cell.vue';
	import Swipe from '../components/banner/js/swipe.js';
	import '../components/banner/js/jquery-1.7.2.js';
	
	import axios from '../plugins/axios.js';
	
	export default{
		name:'home',
		props:{},
		data(){
		  return {
		    banner:[ ],
		    list:[ ]
		  }
		},
		components:{UcCell,banner},
		mounted(){
			axios({
				url:'/api/home',
				params:{_limit:20,_page:1}
			}).then(
			res=>{
				this.list=res.data.data
			})
			
			axios({
				url:'/api/banner',
				params:{_limit:4,_page:1}
			}).then(
			res=>{
				this.banner=res.data.data
			})
		},
		updated(){},
		methods:{}		
	}
</script>

<style scoped>
	.home{}
	.list{
	  padding: 0 0.34rem;
	}
</style>
