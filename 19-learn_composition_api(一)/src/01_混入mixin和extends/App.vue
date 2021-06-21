<template>
  <div class="app">
    <h2>counter:{{counter}}</h2>
    <div>{{message}}</div>
    <h2>{{index}}</h2>
    <button @click="btnClic">click</button>
  </div>
</template>

<script>
import {testMixin} from './testMixin'
import {demoMixin} from './demomixin'
import About from './About.vue'
import TextExtends from './TextExtends.vue'

export default {
  name: 'App',

  // mixins:[testMixin],
  data(){
    return {
      message:'你好呀，comositionAPI'
    }
  },
  created(){
    console.log('我是App.vue 里面的create');
  },
  extends:[testMixin ,demoMixin],
  methods:{
    btnClic(){
      console.log('我是App.vue 里面的 btnClic');
    }
  }
}
</script>

<style>
</style>
