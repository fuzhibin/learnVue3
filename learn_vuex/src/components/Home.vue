<template>
  <div class="home"><h2>{{$store.state.a.aCount}}</h2>
  <button @click="increment">+1</button>
  </div>
</template>

<script>
import { useStore,mapMutations } from "vuex";
export default {
name: "Home",
  setup(){
    const store = useStore();
    const increment = ()=> {
      store.dispatch('a/delayChangeACount',1)
    }
    return{
      increment
    }
  }
}
</script>

<style scoped>

</style>