<template>
  <div id="app">
		
	<Header v-show = "$root.bNav"/>
	<router-view/>
	<Footer v-show = "$root.bFoot"/>
  <loading v-show="$root.bLoading"/>
  </div>
</template>

<script>

import Header from './header.vue'
import Footer from './footer.vue'
import loading from '../components/loading.vue'

export default {
  name: 'app',
	data(){
	  return {
			
	  }
	},
  components: {
		Footer,Header,loading
  },
	methods:{
		
	},
	watch:{
		$route:{
		  handler(newVal){
		    let path = newVal.path;
		    if(/home|follow|column/.test(path)){
		      this.$root.bNav=true;
		      this.$root.bFoot=true;
		    }
		    if(/user/.test(path)){
		      this.$root.bNav=false;
		      this.$root.bFoot=true;
		    }
		    if(/login|reg|detail/.test(path)){
		      this.$root.bNav=false;
		      this.$root.bFoot=false;
		    }
		  },
		  immediate:true
		}
	},
	mounted(){
		
	}
}
</script>

<style>

</style>
