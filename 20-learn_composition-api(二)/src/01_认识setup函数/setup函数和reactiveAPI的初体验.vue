<template>
<div class="app">
    <h2>{{state}}</h2>
    <button @click="changeAge">changeAge</button>
</div>
</template>

<script>
import {reactive} from 'vue'
export default {
  setup(){
      const info = {
          name:'fzb',
          age:21
      }
      const state = reactive(info);
      const changeAge =_=>{
         state.age++;
      }
      return {
        state,
        changeAge
      }
  }
}
</script>

<style  scoped>

</style>
