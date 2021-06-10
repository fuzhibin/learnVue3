<template>
<div class="app">
    <home v-model="name" v-model:title="age"></home>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
</div>
</template>

<script>
import Home from './Home.vue'
export default {
    components:{Home},
  data () {
    return {
        name:'fuzhibin',
        age:20
    }
  }
}
</script>

<style  scoped>

</style>
