<template>
<div class="content">
<button @click="btnClic">我是content里的button</button>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
      btnClic(){
          console.log(this.$parent);
          console.log(this.$root);
      }
  }
}
</script>

<style  scoped>

</style>
