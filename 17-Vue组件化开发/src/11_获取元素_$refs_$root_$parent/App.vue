<template>
<div class="app">
    <div ref="div">我是div内容</div>
    <home ref="home"></home>
    <button @click="btnClic">获取内容</button>
</div>
</template>

<script>
import Home  from './Home.vue'
export default {
    components:{
        Home
    },
  data () {
    return {
    }
  },
  methods:{
      btnClic(){
          console.log(this.$refs.div);
          console.log(this.$refs.home.message);
          console.log(this.$refs.home.$el);
      }
  }
}
</script>

<style  scoped>

</style>
