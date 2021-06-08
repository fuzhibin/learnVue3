<template>
<div class="content">
    <button @click="makeMitt">发出事件</button>
    
</div>
</template>

<script>

import {mitt} from './utils/emitter'
export default {
  data () {
    return {
    }
  },
  methods:{
      makeMitt(){
          mitt.emit('click','fuzhibin');
      },
     
  }
}
</script>

<style  scoped>

</style>
