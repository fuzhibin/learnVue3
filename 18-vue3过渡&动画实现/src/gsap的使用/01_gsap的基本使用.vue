<template>
  <div class="app">
    <div><button @click="btnClic">Toggle</button></div>
    <transition name="fzb" @enter="enter" 
                           @leave="leave">
      <span  v-if="isShow">Animation.css</span>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap"
export default {
  name: 'App',
  data(){
    return {
      isShow:true
    }
  },
  methods:{
    enter(el,done){
      gsap.from(el,{
        x: 500,
        scale: 0,
        onComplete:done
      })
    },
    leave(el,done){
      gsap.to(el,{
        x:500,
        scale:0,
        onComplete:done
      })
    },
    btnClic(){
      this.isShow = !this.isShow;
    }
  }
}
</script>

<style>


.fzb-enter-active {
  animation: backOutRight 1s ease reverse;
}

.fzb-leave-active {
  animation: backOutRight 1s ease;
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
