<template>
    <div>
      <h1>{{state.age}}</h1>
      <button @click="btnClic">点击</button>
    </div>
</template>

<script>
import {reactive,toRef,ref,unref} from 'vue'
export default {
  setup(){
    const info = {
      name:'fzb',
      age:21
    }
    const state = ref(info);
      const btnClic = _ => {
        console.log(unref(state));
      }
      return {
          btnClic,
          state
      }
  }
}
</script>

<style  scoped>

</style>
