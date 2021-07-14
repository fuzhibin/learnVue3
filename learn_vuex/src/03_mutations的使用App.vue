<template>
  <div class="app">
    <h4>template 表示</h4>
    <h5>count:{{$store.state.count}}</h5>
    <h5>doubleAge:{{$store.getters.doubleAge}}</h5>
    <button @click="$store.state.count++">count +1</button>
    <button @click="$store.commit('changeCount',-1)">count -1</button>
    
    <hr>
    <h4>App：option API</h4>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="changeCount({
      num:-1
    })">-1</button>
    <button @click="changeCount(-1)">-1</button>
    <button @click="aChangeCount({
      num:-1
    })">-1</button>
    <button @click="aChangeCount(-1)">-1</button>
    <hr>
    <h4>Home:compositions API</h4>
    <home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import { mapMutations } from "vuex";
export default {
  name: 'App',
  components: {
    Home
  },
  methods:{
    // ...mapMutations(['changeCount']),
    ...mapMutations({
      aChangeCount:'changeCount'
    }),
    increment(){
      this.$store.commit('changeCount',1)
    },
    decrement(){
      this.$store.commit({
        type:'changeCount',
        num:-1
      })
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
