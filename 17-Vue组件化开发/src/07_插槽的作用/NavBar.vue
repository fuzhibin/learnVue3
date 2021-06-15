<template>
<div class="navbar">
    <div class="left">      
        <slot name="left"></slot>
    </div>
    <div class="center">
        <slot name="center"  :list="list">
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
  data () {
    return {
        list:['a','b','c','d']
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
