import { createApp } from 'vue'
import App from './App.vue'
const info = 'aaaaa';
const arr = [1, 2, 3, 4, 5, 6];
arr.forEach(value => console.log(value));


createApp(App).mount('#app')