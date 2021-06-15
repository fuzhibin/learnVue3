<template>
<div class="home">
    <input type="text" :value="modelValue" @input="iptInpt">
    <!-- <input type="text" :value="title" @input="aaaaa"> -->
     <input type="text" v-model.number="getTitle">
</div>
</template>

<script>
export default {
    props:{
        modelValue:{
            type:String,
            default:'aaa'
        },
     title:Number
    },
    emits:['update:modelValue','update:title'],
  data () {
    return {
    }
  },
  computed:{
      getTitle:{
          set(value){
               this.$emit('update:title',value)
          },
          get(){
              return this.title
          }
      }
  },
  methods:{
      iptInpt(e){
          this.$emit('update:modelValue',e.target.value)
      }
  }
}
</script>

<style  scoped>

</style>
