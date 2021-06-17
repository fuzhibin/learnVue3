<template>
  <div class="app">
    <input type="text" name="" id="" v-model="message">
    <transition-group tag="ul" name="fzb" :css="false" @before-enter="beforeEnter"
                      @enter="enter"
                      @leave="leave">
      <li v-for="(item,index) in showMovies" :key="item" :data-index="index">{{item}} </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'App',
  data(){
    return{
      movies:['fzb','zzw','gj','abc','cba','nba','anle','mavens'],
      message:''
    }
  },
  computed:{
    showMovies(){
      return this.movies.filter(item => item.indexOf(this.message) !== -1)
    }
  },
  methods:{
    beforeEnter(el) {
      console.log(el);
        el.style.opacity = 0;
        el.style.height = 0;
      },
    enter(el,done){
       gsap.to(el, {
          opacity: 1,
          height: "1.5em",
          delay: el.dataset.index * 0.5,
          onComplete: done
        })
    },
    leave(el,done){
      gsap.to(el, {
          opacity: 0,
          height: 0,
          delay: el.dataset.index * 0.5,
          onComplete: done
        })
    }
  }
}
</script>

<style>
/* .fzb-enter-from,
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
} */


</style>
