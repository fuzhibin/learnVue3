<template>
  <div class="app">
    <h4>template 表示</h4>
    <h5>count:{{$store.state.count}}</h5>
    <hr>
    <h4>App：option API</h4>
    <h5>aCount：{{aCount}}</h5>
    <!-- <h5>count:{{count}}</h5><h5>name:{{name}}</h5><h5>age:{{age}}</h5> -->
    <!-- <h5>aCount:{{aCount}}</h5><h5>aName:{{aName}}</h5><h5>aAge:{{aAge}}</h5> -->

    <hr>
    <h4>Home:compositions API</h4>
    <home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import {mapState} from "vuex"
export default {
  name: 'App',
  components: {
    Home
  },
  computed:{
    aCount(){
      return this.$store.state.count
    },
    // ...mapState(['count','name','age'])
    // ...mapState({
    //   aName:'name',
    //   aCount:'count',
    //   aAge:'age'
    // })
    // ...mapState({
    //   aName:state=>state.name,
    //   aAge:state=>state.age,
    //   aCount:state=>state.count
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
