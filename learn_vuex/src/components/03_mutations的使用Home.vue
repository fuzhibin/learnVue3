<template>
  <div class="home">
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="changeCount(-1)">-1</button>
    <button @click="changeCount({
      num:-1
    })">-1</button>
  </div>
</template>

<script>
import { useStore,mapMutations } from "vuex";
export default {
name: "Home",
  setup(){
    const store = useStore()
    const increment = ()=>{
      store.commit('changeCount',1);
    }
    const decrement = _=>{
      store.commit({
      type:'changeCount',
      num:-1
    })
    }
    return{
      increment,
      decrement,
      ...mapMutations(['changeCount'])
    }
  }
}
</script>

<style scoped>

</style>