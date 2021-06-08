<template>
<div class="navbar">
<h4>{{name}}</h4>
<h4>{{height}}</h4>
<h4>{{age}}</h4>
<h4>{{address}}</h4>
</div>
</template>

<script>
export default {
    props:{
        name:String,
        height:[Number,String],
        age:{
            type:Number,
            default:21,
            validator(value){
                return value>10
            }
        },
        address:{
            type:Object,
            default(){
                return {
                    firstAdd:'湖南',
                    lastAdd:'长沙'
                }
            }
        }
    },
  data () {
    return {
    }
  }
}
</script>

<style  scoped>

</style>
