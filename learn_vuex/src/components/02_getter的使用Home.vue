<template>
  <div class="home">
    <!-- <h5>hCount:{{hCount}}</h5> -->
    <!-- <h5>count：{{count}}</h5><h5>name:{{name}}</h5><h5>age:{{age}}</h5> -->
    <!-- <h5>hCount:{{hCount}}</h5><h5>hName:{{hName}}</h5><h5>aAge:{{hAge}}</h5> -->
    <!-- <h5>doubleAge：{{doubleAge}}</h5>
    <h5>doubleCount：{{doubleCount}}</h5> -->
    <h5>hDoubleAge：{{hDoubleAge}}</h5> 
     <h5>hDoubleCount：{{hDoubleCount}}</h5>
  </div>
</template>

<script>
import {useStore,mapState,mapGetters} from 'vuex'
import { useGetters } from "../hooks/index";
import { computed } from "vue";
export default {
name: "Home",
  setup(){
    // const store = useStore();
    // const gettersFns = mapGetters({
    //   hDoubleAge:'doubleAge',
    //   hDoubleCount:'doubleCount'
    // });
    const obj = useGetters({
      hDoubleAge:'doubleAge',
      hDoubleCount:'doubleCount'
    })

    return{
      // hCount,
      // ...store.state
      ...obj
    }
  }
}
</script>

<style scoped>

</style>