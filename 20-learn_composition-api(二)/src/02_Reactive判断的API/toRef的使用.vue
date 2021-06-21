<template>
    <div>
      <h1>{{age}}</h1>
      <h2>{{name}}</h2>
      <button @click="btnClic">点击</button>
    </div>
</template>

<script>
import {reactive,toRef,ref} from 'vue'
export default {
  setup(){
    const info = {
      name:'fzb',
      age:21
    }
    const state = reactive(info);
    let age = toRef(state,'age');
      const btnClic = _ => {
        age.value++;
      }
      return {
          btnClic,
          age
      }
  }
}
</script>

<style  scoped>

</style>
