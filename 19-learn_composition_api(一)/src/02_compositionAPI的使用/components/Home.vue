<template>
<div>
    <h2>我是Home组件</h2>
    <h2>{{message}}</h2>
    <slot>
      <h2>我是Home组件内默认插槽</h2>
    </slot>
    <button @click="btnClic">btnClic</button>
    <h1>counter:{{state.name}}</h1>
    <h1>info:{{}}</h1>
    <button @click="readClic">修改readonly</button>
</div>
</template>

<script>
import {reactive,ref,readonly} from 'vue'
export default {
  props:{
    address:{
      type:String,
      default:'中国'
    }
  },
  setup(props,{attrs,slots,emit}){    
    const info = {
      name:123
    }
    const state = readonly(info);
    const btnClic = ()=> {
     counter.value ++;
     console.log(counter.value);
    }
    const readClic = ()=>{
      info.name = 100;
      console.log(info.name);
    }
    
    return {
      message:'你好啊，Composition API',
      btnClic,
      state,
      readClic
    }
  }
}
</script>

<style  scoped>

</style>
