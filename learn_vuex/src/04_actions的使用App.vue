<template>
  <div class="app">
    <h4>template 表示</h4>
    <h5>count:{{$store.state.count}}</h5>
    <h5>doubleAge:{{$store.getters.doubleAge}}</h5>
    <button @click="$store.dispatch('delayChangeCount',1)">+1</button>
    <button @click="$store.dispatch({
      type:'delayChangeCount',
      num:-1
    })">-1</button>
    <hr>
    <h4>App：option API</h4>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="delayChangeCount(1)">+1</button>
    <button @click="delayChangeCount({
      num:-1
    })">-1</button>
    <h4>Home:compositions API</h4>
    <home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import { mapActions } from "vuex";
export default {
  name: 'App',
  components: {
    Home
  },
  methods:{
    increment(){
      this.$store.dispatch('delayChangeCount',1)
    },
    decrement(){
      this.$store.dispatch({
        type:'delayChangeCount',
        num:-1
      })
    },
    ...mapActions(['delayChangeCount'])
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
