<template>
  <div class="home">
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="delayChangeCount(1)">+1</button>
    <button @click="delayChangeCount({
      num:-1
    })">-1</button>
  </div>
</template>

<script>
import { useStore,mapActions } from "vuex";
export default {
name: "Home",
  setup(){
   const store = useStore();
   const increment = _=>{
     store.dispatch('delayChangeCount',1)
   }
   const decrement = _=>{
     store.dispatch({
       type:'delayChangeCount',
       num:-1
     })
   }
    return{
      ...mapActions(['delayChangeCount']),
     increment,
     decrement
    }
  }
}
</script>

<style scoped>

</style>