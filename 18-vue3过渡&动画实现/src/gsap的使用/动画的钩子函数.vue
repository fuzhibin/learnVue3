<template>
  <div class="app">
    <div><button @click="btnClic">Toggle</button></div>
    <transition name="fzb" @before-enter="beforeEnter" 
                           @enter="enter" 
                           @after-enter="afterEnter" 
                           @enter-cancelled="enterCancelled" 
                           @before-leave="beforeLeave"
                           @leave="leave"
                           @after-leave="afterLeave"
                           @leave-cancelled="leaveCancelled"
                           :css="false" >
      <span  v-if="isShow">Animation.css</span>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      isShow:true
    }
  },
  methods:{
    beforeEnter(){
      console.log('beforeEnter');
    },
    enter(){
      console.log('enter');
    },
    afterEnter(){
      console.log('afterEnter');
    },
    enterCancelled(){
      console.log('enterCancelled');
    },
    beforeLeave(){
      console.log('beforeLeave');
    },
    leave(){
      console.log('leave');
    },
    afterLeave(){
      console.log('afterLeave');
    },
    leaveCancelled(){
      console.log('leaveCancelled');
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
