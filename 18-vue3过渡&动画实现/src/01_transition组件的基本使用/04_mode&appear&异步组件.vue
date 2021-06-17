<template>
  <div class="app">
    <div><button @click="btnClic">Toggle</button></div>
    <transition name="fzb" type="transition" duration="1000" mode="out-in" appear="true">
      <component :is="isShow?'home':'about'"> </component>
    </transition>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue"
const Home = defineAsyncComponent(()=>import('../components/Home.vue'));
const About = defineAsyncComponent(()=>import('../components/About.vue'));

export default {
  name: 'App',
  components:{ Home, About},
  data(){
    return {
      isShow:true
    }
  },
  methods:{
    btnClic(){
      this.isShow = !this.isShow;
    }
  }
}
</script>

<style>
.fzb-enter-from,
.fzb-leave-to {
  opacity:0;
}

.fzb-enter-to,
.fzb-leave-from {
  opacity:1;
}
.fzb-enter-active,
.fzb-leave-active{
  transition: opacity 2s ease;
}
.fzb-enter-active{
  animation: bounce 1s ease-in;
}
.fzb-leave-active {
  animation: bounce 1s ease-in reverse;
}

@keyframes bounce {
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.5);
  }
  100%{
    transform: scale(1);
  }
}
span {
  display: inline-block;
  
  font-size: 20px;
  font-weight: 600;
}
body {
  text-align: center;
}
</style>
