<template>
<div class="testExtends">

</div>
</template>

<script>
export default {
  data () {
    return {
        arr:[1,2,3,4,5]
    }
  },
  created(){
    console.log('我是TestExtends.vue 里面的create');
  },
  methods:{
    btnClic(){
      console.log('我是TestExtends.vue 里面的 btnClic');
    }
  }
}
</script>

<style  scoped>

</style>
