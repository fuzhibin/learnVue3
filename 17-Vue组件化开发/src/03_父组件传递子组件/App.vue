<template>
<div class="app">
    <h3>**********01_父传子_数组用法**********</h3>
    <goods :name='goods.name'
           :price='goods.price'
           : ="goods.info">
    </goods>
    <h3>**********01_父传子_数组用法**********</h3>
    <h3>----------02_父传子_对象用法----------</h3>
    <nav-bar
       :name='navbar.name'
       :height='navbar.height'
       :age ='navbar.age'
       :address="navbar.address"
    ></nav-bar>
    <h3>----------02_父传子_对象用法----------</h3>
    <h3>++++++++++03_非prop的Attrs的传递++++++++++</h3>
    <show-message class="aaa" name='bbb'></show-message>
   
    <h3>++++++++++03_非prop的Attrs的传递++++++++++</h3>

     <h2>*********04_子组件内多个根元素************</h2>
     <multi-root-element class="1111" id="2222"></multi-root-element>
     <h2>*********04_子组件内多个根元素************</h2>
</div>
</template>

<script>
import Goods from './01_父传子_数组用法/Goods.vue'
import NavBar from './02_父传子_对象用法/NavBar.vue'
import ShowMessage from './03_非prop的Attrs的传递/ShowMessage.vue'
import MultiRootElement from './03_非prop的Attrs的传递/MultiRootElement.vue'
export default {
    components:{
        Goods,
        NavBar,
        ShowMessage,
        MultiRootElement
    },
  data () {
    return {
        goods:{
            name:'fuzhibin',
            price:20,
            info:{
                size:'2kg',
                outTime:false
            }
        },
        navbar:{
            name:'fuzhibin',
            height:188,
            age:20,
            address:{
                firstAdd:'湖南',
                lastAdd:'娄底'
            }
        }
    }
  }
}
</script>

<style  scoped>

</style>
