<template>
<div class="app">
    <NavBar >
        <template v-slot:left>
           <button>left</button>
        </template>
        <template v-slot:center="centerSlot">
            <span>{{centerSlot.list}}</span>
        </template>
        <template v-slot:right>
            <button>right</button>
        </template>
    </NavBar>

</div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
    components:{
        NavBar
    },
  data () {
    return {
       }
  }
}
</script>

<style  scoped>
</style>
