<template>
<div class="shopcart">
  <h2>shopcart</h2>
  <h3><button @click="btnClic">我是shopcart里面的按钮</button></h3>
</div>
</template>

<script>
export default {
  name:'shopcart',
  emits:{
    btnClic:null
  },
  data () {
    return {
    }
  },
  methods:{
    btnClic(){
      this.$emit('btnClic')
    }
  }
}
</script>

<style  scoped>

</style>
