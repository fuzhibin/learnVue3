<template>
<div class="navbar">
    <div class="left">      
        <slot name="left" :list='list'></slot>
    </div>
    <div class="center">
        <slot :name="name">
          <h3>我们是默认内容</h3>
        </slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
</div>
</template>

<script>
export default {
    props:{
        name:{
            type:String,
            default:'fzb'
        },
        list:{
            type:Array,
            default(){
                return ['a','b','c','d']
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
.navbar {
    height: 60px;
    display: flex;
}
.left,.right {
    width: 80px;
    height: 100%;
    
    background-color: skyblue;
}
.center {
    flex: 1;
    height: 100%;
    background-color: pink;
}
</style>
