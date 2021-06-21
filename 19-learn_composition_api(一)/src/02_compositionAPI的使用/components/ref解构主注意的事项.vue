<template>
<div>
    <h2>我是Home组件</h2>
    <h2>{{message}}</h2>
    <slot>
      <h2>我是Home组件内默认插槽</h2>
    </slot>
    <button @click="btnClic">btnClic</button>
    <h1>counter:{{state.counter}}</h1>
    <h1>info:{{info.counter.value}}</h1>
</div>
</template>

<script>
import {reactive,ref} from 'vue'
export default {
  props:{
    address:{
      type:String,
      default:'中国'
    }
  },
  setup(props,{attrs,slots,emit}){
    const counter = ref(0)
    const state =  reactive({
      counter
    })
    console.log(state.counter);
    const info = {
      counter
    }
    const btnClic = ()=> {
      counter.value++;
      console.log(counter.value);
    }
    
    return {
      message:'你好啊，Composition API',
      btnClic,
      counter,
      state,
      info
    }
  }
}
</script>

<style  scoped>

</style>
