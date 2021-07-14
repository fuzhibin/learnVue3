<template>
<div>
    <h2>我是User界面</h2>
    <h2>{{$route.params}}</h2>
    <h2>{{$route.params.userid}}</h2>
    <h2>{{userId}}</h2>
</div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
    name:'aa',
  setup(){
      const route = useRoute();
      const userId = route.params.userid
      return {
          userId
      }
  }
}
</script>

<style  scoped>

</style>
