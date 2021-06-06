<template>
<div class="app">
    <Header></Header>
    <Main></Main> 
    <Footer></Footer>   
</div>
</template>

<script>
import Main from "./Main.vue";
import Header from './Header.vue';
import Footer from './Footer.vue'
export default {
  data () {
    return {
    }
  },
  components:{Main,Header,Footer}
}
</script>

<style  scoped>

</style>
