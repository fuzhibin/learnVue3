<template>
<div class="app">
  <Main></Main> 
    <button @click="cancalMitt">取消事件监听</button>
</div>
</template>

<script>
import Main from './Main.vue'
import {mitt} from './utils/emitter'
export default {
  components:{
    Main
  },
  data () {
    return {
    }
  },
  created(){
    mitt.on('click',this.mittHander)
  },
  methods:{
     cancalMitt(){
          mitt.off('click',this.mittHander)
      },
      mittHander(...args){
          console.log(...args);
      }
  },
}
</script>

<style  scoped>

</style>
