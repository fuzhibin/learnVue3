<template>
  <div class="app">
    <h4>template 表示</h4>
    <h5>doubleAge:{{$store.getters.doubleAge}}</h5>
    <hr>
    <h4>App：option API</h4>
    <!-- <h5>aDoubleAge：{{aDoubleAge}}</h5> -->
    <!-- <h5>doubleAge：{{doubleAge}}</h5>
    <h5>doubleCount：{{doubleCount}}</h5> -->
    <!-- <h5>aDoubleAge：{{aDoubleAge}}</h5> 
     <h5>aDoubleCount：{{aDoubleCount}}</h5> -->

    <!-- <h5>count:{{count}}</h5><h5>name:{{name}}</h5><h5>age:{{age}}</h5> -->
    <!-- <h5>aCount:{{aCount}}</h5><h5>aName:{{aName}}</h5><h5>aAge:{{aAge}}</h5> -->

    <hr>
    <h4>Home:compositions API</h4>
    <home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import { useGetters } from "./hooks/index";
export default {
  name: 'App',
  components: {
    Home
  },
  computed:{
    aCount(){
      return this.$store.state.count
    },
    // aDoubleAge(){
    //   return this.$store.getters.doubleAge
    // },
    // ...mapGetters(['doubleAge','doubleCount'])
    // ...mapGetters({
    //   aDoubleAge:"doubleAge",
    //   aDoubleCount:'doubleCount'
    // })

   
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
