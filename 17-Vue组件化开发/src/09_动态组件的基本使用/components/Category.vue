<template>
<div class="category">
  <h2>category</h2>
  <slot><h5>我是category里面的默认插槽</h5></slot>
  <h2>name；{{name}}</h2>
</div>
</template>

<script>
export default {
  name:'category',
   props:{
    name:{
      type:String
    }
  },
  data () {
    return {
    }
  },
  activated(){
    console.log('activated');
  },
  deactivated(){
    console.log('deactivated');
  },
  unmounted(){
    console.log('我是category，我不挂载了。。。。');
  },
}
</script>

<style  scoped>

</style>
