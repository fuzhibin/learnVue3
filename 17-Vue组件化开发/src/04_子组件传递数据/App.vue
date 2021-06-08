<template>
<div class="app">
<h2>counte的值是：{{counte}}</h2>
<counter-change 
   @addOneClic="addOneClic"
   @subOneClic='subOneClic'/>
   <counte-change-n @addNumber='addNumber'></counte-change-n>
</div>
</template>

<script>
import CounterChange from './01_数组方式/CounterChange.vue'
import CounteChangeN from './02_对象方式/CounteChangeN.vue'
export default {
  components:{
     CounterChange ,
     CounteChangeN
  },
  data () {
    return {
        counte:0
    }
  },
  methods:{
      addOneClic(){
          this.counte++
      },
      subOneClic(){
          this.counte--
      },
      addNumber(num,num2){
          console.log(num2);
          this.counte+=num
      }
  }
}
</script>

<style  scoped>

</style>
