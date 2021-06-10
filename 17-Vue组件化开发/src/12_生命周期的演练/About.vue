<template>
<div class="home">
  <h2>我是about</h2>
  <h2>{{count}}</h2>
  <button @click="count++">+1</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      count:0
    }
  },
  beforeCreate(){
      console.log('我是about beforeCreate');
  },
  created(){
      console.log('我是about created');
  },
  beforeMount(){
      console.log('我是about beforeMount');
  },
  mounted(){
      console.log('我是about mounted');
  },
  beforeUpdate(){
      console.log('我是about beforeUpdate');
  },
  updated(){
      console.log('我是about updated');
  },
  beforeUnmount(){
      console.log('我是about beforeUnmount');
  },
  unmounted(){
      console.log('我是about unmounted');
  },
  activated(){
     console.log('我是about activated'); 
  },
  deactivated(){
      console.log('我是about deactivated');
  }
}
</script>

<style  scoped>

</style>
