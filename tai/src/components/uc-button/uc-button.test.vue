<template>
  <div id="app">
		
	<h1>测试按钮</h1>
	
	<UcButton/>
	<uc-button/>
	<uc-button text="登 录"/>
	<uc-button bg-color="#399"/>
	<uc-button>注 册</uc-button>	
	<uc-button @click="show">点 击</uc-button>	
	
  </div>
</template>

<script>
	import UcButton from './uc-button.vue'

export default {
  name: 'app',
  components: {
		UcButton 
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
