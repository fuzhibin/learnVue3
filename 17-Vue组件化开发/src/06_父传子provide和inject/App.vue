<template>
<div class="app">
    <Main></Main>
    <h2>{{array}}</h2>
    <button @click="array.push(array.length+1)">+Num</button>
</div>
</template>

<script>
import Main from "./Main.vue"
import {computed} from "vue"
export default {
    provide(){
        return {
           name:'fuzhibin',
           age:18,
           length:computed(_=>this.array.length)

        }
    },
    components:{
        Main
    },
  data () {
    return {
        array:[1,2,3,4]
    }
  }
}
</script>

<style  scoped>

</style>
