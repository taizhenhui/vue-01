<template>
  <div id="app">
		
	<h1>输入框测试</h1>

	<UcInput/>
	<uc-input v-model="ipt"></uc-input>
	<uc-input v-model="ipt2" type="text" label="账 号"></uc-input>
	<uc-input v-model="ipt3" type="password" label="密 码"></uc-input>
	
  </div>
</template>

<script>
	import UcInput from '../components/uc-input/uc-input.vue'

export default {
  name: 'app',
	data(){
	  return {
	    ipt:'bmw',
	    ipt2:'123546789',
	    ipt3:'xiaotai',
	  }
	},
  components: {
		UcInput
  },
	methods:{
		show(){
			console.log(1)
		}
	}
}
</script>

<style>

</style>
