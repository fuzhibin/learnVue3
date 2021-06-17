<template>
  <div class="app">
    <div><input type="text" @change="iptChange"></div>
    <transition name="fzb">
      <span>当前的数值是：{{showNum.toFixed(0)}}</span>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap"
export default {
  name: 'App',
  data(){
    return {
      nowNum:null,
      showNum:0
    }
  },
  watch:{
    nowNum(newV,oldV){
      gsap.to(this,{
        showNum:newV
      })
    }
  },
  methods:{
    iptChange(e){
      this.nowNum = parseInt(e.target.value)
      ;   
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
