<template>
<div class="navbar">
   <div class="item" v-for='(item,index) in title' :key="item" @click="itemClic(index)">
       <span :class="{current:index === currentIndex}">{{item}}</span>
    </div>
</div>
</template>

<script>
export default {
    emits:{
        sortItem:(value)=>{
            console.log(value);
           console.log(this);
            return true
        }
    },
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
  data () {
    return {
        currentIndex:0
    }
  },
  methods:{
      itemClic(index){
          this.currentIndex=index;
          this.$emit('sortItem',index)
      }
  }
}
</script>

<style  scoped>
.navbar {
    height: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    user-select: none;

}
.navbar .item {
    flex: 1;
}
.item span {
    padding: 3px 5px;
}
.current {
    color: red;
    border-bottom: 3px solid red;
}
</style>
