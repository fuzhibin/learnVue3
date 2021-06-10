<template>
<div class="home">
  <h2>home</h2>
  <h2>count:{{count}}</h2>
  <button @click="count++">+1</button>
  <h2>name:{{name}}</h2>
</div>
</template>

<script>
export default {
  name:'home',
  props:{
    name:{
      type:String
    }
  },
  data () {
    return {
      count:0
    }
  }
}
</script>

<style  scoped>

</style>
