<template>
  <div id="app">
		
	<h1>uc-toolbar 测试</h1>

<uc-toolbar></uc-toolbar>

  </div>
</template>

<script>
	import UcToolbar from '../components/uc-toolbar/uc-toolbar.vue'

export default {
  name: 'app',
	data(){
	  return {
	    list:[]
	  }
	},
  components: {
		UcToolbar
  },
	methods:{
		show(){
			console.log(132)
		}
	},
	mounted(){
		
	}
}
</script>

<style>

</style>
