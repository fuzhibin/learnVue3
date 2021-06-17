<template>
  <div class="app">
    <div><button @click="btnClic">Toggle</button></div>
    <transition name="fzb">
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
