<template>
    <div class="app">
        <home fzb="21" :address="'湖南娄底'">
            <h2>我是App.vue里面插入的插槽</h2>
        </home>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
const Home = defineAsyncComponent(()=>import('./components/ref解构主注意的事项.vue'))
export default {
  components:{
      Home
  }
}
</script>

<style  scoped>

</style>
