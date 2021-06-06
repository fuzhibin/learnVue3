<template>
<div class="app">
    <ul class="aaaa"><li>aa</li></ul>
    <goods-list></goods-list>
</div>
</template>

<script>
import GoodsList from './GoodsList.vue'
export default {
    components:{
     GoodsList   
    },
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
ul {
    background-color: pink;
}
.aaaa{
  font-size: 12px;
}
</style>
