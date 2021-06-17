<template>
  <div class="app">
    <div><button @click="btnClic">Toggle</button></div>
    <transition name="fzb">
      <span v-show="isShow">HELLO VUE3！</span>
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

.fzb-enter-from,
.fzb-leave-to {
  opacity: 0;
}
.fzb-enter-to,
.fzb-leave-from {
  opacity: 1;
}

.fzb-enter-active,
.fzb-leave-active {
  transition: opacity 1s ease-in;
}
span {
  font-size: 20px;
  font-weight: 600;
}
</style>
