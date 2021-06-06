<template>
<div>
    <input type="text" v-model.number="size">
    <button @click="addN">+N</button>
</div>
</template>

<script>
export default {
    emits:{
        // 里面是取不到this的
        addNumber:(value)=>{
            return value>10
        }
    },
  data () {
    return {
        size:0
    }
  },
  methods:{
      addN(){
          this.$emit('addNumber',this.size)
      }
  }
}
</script>

<style  scoped>

</style>
