<template>
<div class="app">
<h2>counte的值是：{{counte}}</h2>
<counter-change 
   @addOneClic="addOneClic"
   @subOneClic='subOneClic'>
</counter-change>
</div>
</template>

<script>
import CounterChange from './01_数组方式/CounterChange.vue'
export default {
  components:{
     CounterChange
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
      }
  }
}
</script>

<style  scoped>

</style>
