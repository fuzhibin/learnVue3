import { createApp } from 'vue'
import App from './04_子组件传递数据/App.vue'

// import { sum } from './10_异步组件和代码分包/01_webpack中的import函数分包/math'

// console.log(sum(1, 2, 3, 4, 5, 6));



import ('./10_异步组件和代码分包/01_webpack中的import函数分包/math').then(res => {
    console.log(res.sum(1, 2, 3, 4, 5));
})

createApp(App).mount('#app')