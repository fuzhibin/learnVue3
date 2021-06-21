<template>
<div class="app">
<h2>{{counter}}</h2>
<button @click="changeCounter">changeCounter</button>
<hr/>
<home></home>
</div>
</template>

<script>
import Home from "./Home.vue";
import { ref,readonly, provide } from "vue";
export default {
    components:{
        Home
    },
    setup(){
        const name = ref('fzb');
        const counter = ref(0);
        provide('name',readonly(name));
        provide('counter',readonly(counter));
        const changeCounter = ()=>{
            counter.value++;
        }
        return {
          counter ,
          changeCounter 
        }
    }
}
</script>

<style>

</style>