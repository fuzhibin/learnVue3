<template>
<div class="app">
    <button v-for="item in list" 
            :key="item" 
            :class="{current:item === currentItem}"
            @click="btnClic(item)"
            >{{item}}</button>

    <!-- 方法二 : 动态组件的基本使用 -->
    <!-- 注意： 切换后组件是不会被缓存的 -->
    <!--  include="home,category" :include="/home|category /" -->
    <keep-alive :include="['home','category']" > 
        <component :is="componentsList[list.indexOf(currentItem)]"
                    @btnClic="shopCartClic"
                    :name="info.name">
        <h2>HELLO VUE3</h2>
    </component>
    </keep-alive>
    <!-- 方法一 ： v-if v-else-f v-else 实现 -->
    <!-- <template v-if="currentItem === '首页'">
        <h2>首页</h2>
    </template>
    <template v-else-if="currentItem === '分类'">
        <h2>分类</h2>
    </template>
    <template  v-else-if="currentItem === '购物车'">
        <h2>购物车</h2>
    </template>
    <template v-else>
        <h2>我的</h2>
    </template> -->
</div>
</template>

<script>
import Home from './components/Home.vue'
import Category from './components/Category.vue'
import ShopCart from './components/ShopCart.vue'
import Profile from './components/Profile.vue'
export default {
    components:{
        Home,
        Category,
        ShopCart,
        Profile
    },
  data () {
    return {
        list:['首页','分类','购物车','我的'],
        currentItem:'首页',
        componentsList:['home','category','shop-cart','profile'],
        info:{
            name:'fuzhibin',
            age:18
        }
    }
  },
  methods:{
      btnClic(item){
          this.currentItem = item;
      },
      shopCartClic(){
          console.log('我接收到了shopCart的点击事件');
      }
  }
}
</script>

<style  scoped>
.current{
    border-color: skyblue;
    color: skyblue;
}
</style>
