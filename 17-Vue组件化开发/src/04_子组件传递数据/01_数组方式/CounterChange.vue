<template>
<div>
    <button @click="addOne">+1</button>
    <button @click="subOne">-1</button>
</div>
</template>

<script>
export default {
  emits:['addOneClic','subOneClic'],
  data () {
    return {
    }
  },
  methods:{
      addOne(){
          this.$emit('addOneClic');
      },
      subOne(){
          this.$emit('subOneClic');
      }
  }
}
</script>

<style  scoped>

</style>
