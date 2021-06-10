<template>
<div class="home">
    <h2>我是Home里面的内容</h2>
    <content></content>
</div>
</template>

<script>
import Content from './Content.vue'
export default {
    components:{Content},
  data () {
    return {
        message:'我是Home——Message'
    }
  }
}
</script>

<style  scoped>

</style>
