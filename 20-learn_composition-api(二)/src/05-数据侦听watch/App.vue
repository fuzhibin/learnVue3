<template>
<div class="app">
<h2>{{info}}</h2>
<button @click="changeInfo">changeInfo</button>
</div>
</template>

<script>
import {reactive,ref,watch,isRef,isReactive} from 'vue'
export default {
  setup(){
    //   const info = ref({name:'fzb',age:21});

    //   watch( () => info.age,(newValue,oldValue)=>{
    //       console.log('newValue:',newValue,'oldValue',oldValue);
    //   })

    //   watch( () => info,(newValue,oldValue)=>{
    //       console.log('newValue:',newValue,'oldValue',oldValue);
    //   })
    // const info =reactive({name:'fzb',age:21});
    // watch(info,(newValue,oldValue)=>{
    //     console.log('newValue:',newValue,'oldValue',oldValue);
    // })

    const info = ref({name:'fzb',age:21});
    const state = reactive({age:0})
    watch( [_ => ({...info.value}),state],(newValue,oldValue)=>{
        console.log('isRef:',isRef(newValue),'isReactive:',isReactive(newValue));
        console.log('newValue:',newValue,'oldValue',oldValue);
    })
    
    // const info = reactive({name:'fzb',age:21});
    // watch( _ => ({...info}),(newValue,oldValue)=>{
    //     console.log('isRef:',isRef(newValue),'isReactive:',isReactive(newValue));
    //     console.log('newValue:',newValue,'oldValue',oldValue);
    // })
    const changeInfo =  _ => info.value.age++;
      return {
          info,
          changeInfo
      }
  }
}
</script>

<style  scoped>

</style>
