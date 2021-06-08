<template>
<div class="app">
    <nav-bar :name="name" :list="list">
        <template v-slot:left="leftList">
            <span >{{leftList.list}}--</span>
        </template>
        <template #[name]>
            <button>center</button>
        </template>
        <template v-slot:right>
            <button>right</button>
        </template>

    </nav-bar>
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
        name:'fzb',
        list:[1,2,3,4,5,6]
    }
  }
}
</script>

<style  scoped>

</style>
