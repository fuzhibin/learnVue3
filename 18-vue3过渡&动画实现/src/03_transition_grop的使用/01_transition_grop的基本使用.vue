<template>
  <div class="app">
    <input type="text" name="" id="" ref="input"><button @click="btnClic">确认</button>
    <transition-group tag="ul" name="fzb">
      <li v-for="(item,index) in movies" :key="item">{{item}} <button @click="delClic(index)">删除</button></li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      movies:['肖申克的救赎','王国','龙猫','生化危机','驯龙骑士']
    }
  },
  methods:{
    delClic(index){
      this.movies.splice(index,1);
    },
    getRoundNum(){
      return Math.floor(Math.random()*this.movies.length)
    },
    btnClic(){
      this.movies.splice(this.getRoundNum(),0,this.$refs.input.value)
    }
  }
}
</script>

<style>
.fzb-enter-from,
.fzb-leave-to {
  transform: translateX(500px) scale(0);
}
.fzb-enter-to,
.fzb-leave-from{
  transform:translateX(0) scale(1);
}
.fzb-enter-active,
.fzb-leave-active {
  transition: transform 1s ease;
}
.fzb-leave-active{
  position: absolute;
}
.fzb-move{
  transition: transform 1s ease;
}

li {
  width: 300px;
}


</style>
