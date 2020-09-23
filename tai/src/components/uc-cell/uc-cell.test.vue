<template>
  <div id="app">
		
	<h1>单元格 测试</h1>

	<uc-cell :data="{_id:3,title:'xxx',des:'oo'}" :index="0" collectionName="detail"></uc-cell>
	<uc-cell :data="{_id:3,title:'xxx',des:'oo'}"></uc-cell>
	<uc-cell :data="{_id:3,title:'xxx',des:'oo'}" isAdd @add-item="show"></uc-cell>
  <uc-cell :data="{_id:3,title:'xxx',des:'oo'}" collectionName="detail" isAdd @add-item="show"></uc-cell>
  </div>
</template>

<script>
	import UcCell from '../components/uc-cell/uc-cell.vue'

export default {
  name: 'app',
	data(){
	  return {
	    list:[]
	  }
	},
  components: {
		UcCell
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
