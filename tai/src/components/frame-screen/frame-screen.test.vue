<template>
  <div id="app">
		
	<h1>骨架屏 测试</h1>

	<!-- <FrameScreen></FrameScreen> -->
	<frame-screen  type = "list" v-if="list.length===0"></frame-screen>

	<div v-else>加载完内容</div>

  </div>
</template>

<script>
	import FrameScreen from '../components/frame-screen/frame-screen.vue'

export default {
  name: 'app',
	data(){
	  return {
	    list:[]
	  }
	},
  components: {
		FrameScreen
  },
	methods:{
		
	},
	mounted(){
		
	}
}
</script>

<style>

</style>
