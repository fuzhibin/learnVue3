<template>
<h2>我是home</h2>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  beforeCreate(){
      console.log('我是home beforeCreate');
  },
  created(){
      console.log('我是home created');
  },
  beforeMount(){
      console.log('我是home beforeMount');
  },
  mounted(){
      console.log('我是home mounted');
  },
  beforeUpdate(){
      console.log('我是home beforeUpdate');
  },
  updated(){
      console.log('我是home updated');
  },
  beforeUnmount(){
      console.log('我是home beforeUnmount');
  },
  unmounted(){
      console.log('我是home unmounted');
  },
  activated(){
     console.log('我是home activated'); 
  },
  deactivated(){
      console.log('我是home deactivated');
  }
}
</script>

<style  scoped>

</style>
