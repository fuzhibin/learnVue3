<template>
<div class="app">
    <h2>App</h2>
   <suspence>
       <template #default>
           <home></home>
       </template>
       <template #fallback>
           <div>
               Loading。。。。。。
           </div>
       </template>
   </suspence>
</div>
</template>

<script>
import {defineAsyncComponent} from 'vue'
import LoadingComponents from './LoadingComponents.vue'
import ErrorComponent from './ErrorComponent.vue'
const Home = defineAsyncComponent({
    loader:()=>import('./Home.vue'),
    loadingComponent:LoadingComponents,
    errorComponent:ErrorComponent,
    delay:2000,
    timeout:2000,
    onError(err,retry,fail,attempts){
    }
})
export default {
    components:{
        Home
    },
  data () {
    return {
    }
  }
}
</script>

<style  scoped>

</style>
