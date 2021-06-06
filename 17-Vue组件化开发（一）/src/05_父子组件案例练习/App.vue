<template>
<div class="app">
    <nav-bar :title='title' @sortItem='sortItem'/>
    <div>{{title[index]}}部分</div>
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
        title:['手机','电脑','键盘','耳机'],
        index:0
    }
  },
  methods:{
      sortItem(index){
          this.index=index
      }
  }
}
</script>

<style  scoped>

</style>
