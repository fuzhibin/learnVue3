<template>
<div>
  <h2>profile</h2>
  <h2>count:{{count}}</h2>
  <button @click="count+=2">+2</button>
</div>
</template>

<script>
export default {
  name:'profile',
  data () {
    return {
      count:0
    }
  }
}
</script>

<style  scoped>

</style>
