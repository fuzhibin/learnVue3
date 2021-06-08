<template>
<div class="content">
    <h2>我是content组件内的内容</h2>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <h2>{{length.value}}</h2>
</div>
</template>

<script>
export default {
    inject:['name','age','length'],
  data () {
    return {
    }
  }
}
</script>

<style  scoped>

</style>
