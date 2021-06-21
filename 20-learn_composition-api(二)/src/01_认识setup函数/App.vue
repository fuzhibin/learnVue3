<template>
<div class="app">
    <h2>copy:{{copy}}</h2>
    <!-- <h2>state2:{{state2}}</h2> -->
    <button @click="changeCounter">changeCounter</button>
</div>
</template>

<script>
import {reactive, ref, readonly} from 'vue'
export default {
  setup(){
      const info = {
          name:'fzb',
          counter:ref(21),
      }
  
    const copy = readonly(info);
    const changeCounter = _ => {
        console.log(copy.counter.value); // undedined
        console.log(copy.counter); // 21
    }

    // **普通对象**
    //   const state1 = readonly(info);
    //   // **reactive返回的对象**
    //   const state2 = readonly(reactive(info))
    //   // **ref的对象**
    //   const state3 = readonly(ref(info))
      return {
        copy,
        changeCounter
      }
  }
}
</script>

<style  scoped>

</style>
