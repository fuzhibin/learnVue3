<template>
    <div>
      <button @click="btnClic">点击</button>
    </div>
</template>

<script>
import {reactive,ref,readonly,isProxy,isReactive} from 'vue'
export default {
  setup(){

      const info = {name: 'fzb',age:21};
      const state = reactive(info)
      const state1 = ref(info);
      const state2 = readonly(info)
      const btnClic = _ => {
          
          console.log(isProxy(state)); // true
          console.log(isProxy(state1));// false
          console.log(isProxy(state2)); // true

          console.log(isReactive(state)); // true
          console.log(isReactive(state1)); // false
          console.log(isReactive(state2)); // false
      }
      return {
          btnClic
      }
  }
}
</script>

<style  scoped>

</style>
