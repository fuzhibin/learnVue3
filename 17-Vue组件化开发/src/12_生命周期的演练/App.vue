<template>
<div class="app">
    <button v-for="item in list" :key="item" @click="currentItem=item" :class="{current:currentItem === item}">{{item}}</button>
    <keep-alive>
        <component :is="currentItem"></component>
    </keep-alive>
</div>
</template>

<script>
import { defineAsyncComponent } from "vue";
const Home = defineAsyncComponent(()=>import('./Home.vue'));
const About = defineAsyncComponent(()=>import('./About.vue'));
export default {
    components:{About,Home},
  data () {
    return {
        list:['home','about'],
        currentItem:'home'
    }
  }
}
</script>

<style  scoped>
.current{
    border-color: skyblue;
    color: skyblue;
}
</style>
