<template>
 <div class="main">
    <content></content>
    <goods-list></goods-list>
 </div>
</template>

<script>
import GoodsList from './GoodsList.vue'
import Content from './Content.vue'
export default {
    components:{
GoodsList,
Content
    },
  data () {
    return {
    }
  }
}
</script>

<style  scoped>

</style>
