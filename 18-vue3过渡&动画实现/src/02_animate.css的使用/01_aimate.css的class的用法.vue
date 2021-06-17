<template>
  <div class="app">
    <div><button @click="btnClic">Toggle</button></div>
    <transition enter-active-class="animate__animated animate__backInDown"
                leave-active-class="animate__animated animate__backOutDown">
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

span {
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
}
body {
  text-align: center;
}
</style>
