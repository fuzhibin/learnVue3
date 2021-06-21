<template>
<div class="home">
<h2>{{name}}</h2>
<h2>{{counter}}</h2>
<button @click="changeCounter">HomChangeCounter</button>
</div>
</template>

<script>
import { inject,isRef } from "vue";
export default {
  setup(){
    const name =   inject('name');
    const counter = inject('counter');
    console.log(isRef(counter));
    const changeCounter = _ => {
        counter.value++;
    };
      return {
            name,
            counter,
            changeCounter
      }
  }
}
</script>

<style  scoped>

</style>
