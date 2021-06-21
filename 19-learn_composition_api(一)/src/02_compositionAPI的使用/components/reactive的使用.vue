<template>
<div>
    <h2>我是Home组件</h2>
    <h2>{{message}}</h2>
    <slot>
      <h2>我是Home组件内默认插槽</h2>
    </slot>
    <button @click="btnClic">btnClic</button>
    <h1>counter:{{state.counter}}</h1>
</div>
</template>

<script>
import {reactive} from 'vue'
export default {
  props:{
    address:{
      type:String,
      default:'中国'
    }
  },
  setup(props,{attrs,slots,emit}){
    console.log(slots);
    console.log(props.address);
    console.log(attrs.fzb);
    const state = reactive({
      counter:0
    })
    
    const btnClic = ()=> {
      state.counter++;
      console.log(state.counter);
    }
    
    return {
      message:'你好啊，Composition API',
      btnClic,
      state
    }
  }
}
</script>

<style  scoped>

</style>
