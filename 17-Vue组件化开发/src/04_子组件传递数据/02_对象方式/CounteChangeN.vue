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
        addNumber:function(num){
          console.log(this);
          console.log(num);
          return true
        }
    },
  data () {
    return {
        size:0
    }
  },
  methods:{
      addN(){
          this.$emit('addNumber',this.size,1)
      }
  }
}
</script>

<style  scoped>

</style>
