<template>
<h2>
    {{myInfo}}
</h2>
</template>

<script>
import {reactive,computed} from 'vue'
export default {
    setup(){
        const info = reactive({
            name:'fzb',
            age:21
        })
        // 函数类型

        // const myInfo = computed(_=> info.name + ' '+ info.age);
        
        //对象类型
        const myInfo = computed({
            set(newValue){
               info.name = newValue
            },
            get(){
                return  info.name + ' '+ info.age
            }
        });
        setTimeout(_=>{
            myInfo.value = "gJ";
        },1000)
        return {
            myInfo
        }
    }
}
</script>

<style  scoped>

</style>
