<template>
<div class="app">
    <h2>{{counter.value}}</h2>
    <button @click="changeCounter">changeCounter</button>
</div>
</template>

<script>
import {reactive, ref} from 'vue'
export default {
  setup(){
      
      const counter = ref(0);
      const state = reactive({
        counter
      });

      const changeCounter =_=>{
         console.log(state.counter);  // 0
         console.log(state.counter.value);  // undefined
      }
      return {
        counter,
        changeCounter
      }
  }
}
</script>

<style  scoped>

</style>
