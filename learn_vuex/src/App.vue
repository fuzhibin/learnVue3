<template>
  <div class="app">
   <h2 ref="refTitle">{{message}}</h2>
   <button @click="addMessage">click</button>
  </div>
</template>

<script>
import {ref,nextTick} from "vue"
export default {
  name: 'App',
  setup(){
    const refTitle = ref(null);
    const message = ref("")
    const addMessage = ()=>{
      message.value+='Hello NextTick!';
      nextTick(()=>{
        console.log(refTitle.value.offsetHeight);
      })
      
    }
    return{
      message,
      refTitle,
      addMessage
    }
  }
}
</script>

<style>

h2{
  width: 30px;
}
</style>
