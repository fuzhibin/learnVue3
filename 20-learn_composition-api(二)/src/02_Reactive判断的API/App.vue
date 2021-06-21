<template>
    <div>
      <input type="text" v-model="message">
      <h2>{{message}}</h2>
    </div>
</template>

<script>
import debounceRef from './debounceRef'
export default {
  setup(){
    const message =debounceRef('Hello CompositionAPI!',1000)
      return { 
        message
      }
  }
}
</script>

<style  scoped>

</style>
