<template>
  <div class="home">
    <h2>我是HOME页面</h2>
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/goods">商品</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name:'home',
  setup(){
    onMounted(_=>{
      console.log('onMounted');
    })
    return {

    }
  }
}
</script>

<style>

</style>