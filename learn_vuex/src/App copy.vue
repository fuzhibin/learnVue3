<template>
  <div class="app">
    <h4>template 表示</h4>
    <h5>doubleAge:{{$store.getters.doubleAge}}</h5>
    <h5>moduleA aCount:{{$store.state.a.aCount}}</h5>
    <h5>moduleA getACount :{{getModuleACounte}}</h5>
    <button @click="$store.commit('changeACount')">+1</button>
    <button @click="$store.dispatch('delayChangeACount')">+1</button>
    <hr>
    <h4>App：option API</h4>
    <button></button>
    <hr>
    <h4>Home:compositions API</h4>
    <home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    Home
  },
  computed:{
    getModuleACounte(){
      return this.$store.getters["a/getACount"]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
