<template>
  <div class="home">
    <h5>hCount:{{hCount}}</h5>
    <!-- <h5>count：{{count}}</h5><h5>name:{{name}}</h5><h5>age:{{age}}</h5> -->
    <!-- <h5>hCount:{{hCount}}</h5><h5>hName:{{hName}}</h5><h5>aAge:{{hAge}}</h5> -->

  </div>
</template>

<script>
import {useStore,mapState} from 'vuex'
import { computed } from "vue";
export default {
name: "Home",
  setup(){
    const store = useStore();
    const hCount = store.state.count;
    // const stateFns = mapState(["count","name","age"]);
    // const stateFns = mapState({
    //   hCount:'count',
    //   hName:'name',
    //   hAge:'age'
    // });
    // const stateFns = mapState({
    //   hCount:state=>state.count,
    //   hName:state => state.name,
    //   hAge:state => state.age
    // });
    // const obj = {};
    // Object.keys(stateFns).forEach(stateFn => {
    //   const fn = stateFns[stateFn].bind({$store:store});
    //   obj[stateFn] = computed(fn)
    // })
    return{
      hCount,
      // ...store.state
      ...obj
    }
  }
}
</script>

<style scoped>

</style>