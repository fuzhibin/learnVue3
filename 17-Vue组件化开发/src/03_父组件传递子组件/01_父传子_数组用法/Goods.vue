<template>
<div class="goods">
    <h2>{{name}}</h2>
    <h2>{{price}}</h2>
    <h2>{{size}}</h2>
    <h2>{{outTime}}</h2>
</div>
</template>

<script>
export default {
    props:['name','price','size','outTime'],
  data () {
    return {
    }
  }
}
</script>

<style  scoped>

</style>
