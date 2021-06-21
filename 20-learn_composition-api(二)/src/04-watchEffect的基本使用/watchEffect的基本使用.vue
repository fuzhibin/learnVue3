<template>
    <div class="app">
        <h2>{{info.name}}</h2>
        <h2>{{age}}</h2>
        <button @click="changeInfo">changeInfo</button>
        <button @click="changeAge">changeAge</button>
    </div>
</template>

<script>
import {reactive,ref,watchEffect} from 'vue'
export default {
  setup(){
      const info = reactive({name:'fzb'});
      let age = ref(21);
      watchEffect((onInvaildate)=>{
          console.log(info.name , age.value);
          onInvaildate(_=>{
              // 异步操作清除处理  
              console.log('onInvaildate');
          })
      });
      const changeInfo = _ => {
          info.name = 'gj'
      }
      const changeAge = _=>{
          age.value++
      }
      return {
          info,
          age,
          changeInfo,
          changeAge
      }
  }
}
</script>

<style  scoped>

</style>
