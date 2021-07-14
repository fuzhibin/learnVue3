<template>
  <div class="app">

    <button @click="btnClic">首页</button>

    <router-link :to="{ path:'/about', query:{name:'fzb',age:18}}"  >关于</router-link>

    <router-link to="/user/fzb/id/0240"  v-slot="props" custom>
      <button @click="props.navigate">我的</button>
      <p>{{props.href}}</p>
      <span>{{props.route.params}}</span>
      <h2>{{props.isActive}}</h2>
    </router-link>

    <router-view v-slot="props">
      <!-- <transition name="fzb" mode="out-in"> -->
        <keep-alive>
          <component :is="props.Component" />
        </keep-alive>
      <!-- </transition> -->
    </router-view>


  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    btnClic(){
      console.log(this.$router.addRoute);
      this.$router.push({
        path:'/home',
        query:{
          name:'fzb',
          age:18
          }
      })
    }
  }
}
</script>

<style>
.fzb-enter-from,
.fzb-leave-to {
  opacity: 0;
}
.fzb-enter-active ,
.fzb-leave-active {
  transition: opacity 1s linear;
}
</style>
