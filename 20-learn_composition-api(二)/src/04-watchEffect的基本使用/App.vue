<template>
    <div class="app">
        <h2 ref="message">Hello Vue3 ！</h2>
    </div>
</template>

<script>
import {ref,watchEffect} from 'vue'
export default {
  setup(){
      const message = ref(null);
      watchEffect(_=>{
          console.log(message.value);
      },{
         flush:'post' 
      })
      return {
          message
      }
  }
}
</script>

<style  scoped>

</style>
