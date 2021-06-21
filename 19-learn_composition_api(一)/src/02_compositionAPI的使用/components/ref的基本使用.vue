<template>
<div>
    <h2>我是Home组件</h2>
    <h2>{{message}}</h2>
    <slot>
      <h2>我是Home组件内默认插槽</h2>
    </slot>
    <button @click="btnClic">btnClic</button>
    <h1>counter:{{counter}}</h1>
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
    console.log(slots);
    console.log(props.address);
    console.log(attrs.fzb);
    const counter = ref(0)
    
    const btnClic = ()=> {
      counter.value++;
      console.log(counter.value);
    }
    
    return {
      message:'你好啊，Composition API',
      btnClic,
      counter
    }
  }
}
</script>

<style  scoped>

</style>
