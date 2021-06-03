import { sum } from './js/math';
import _ from 'lodash-es'
import './css/index.css'
import './css/foo.less'
import './js/createEl'
import { printCount } from './js/foo'
import App from './vue/App.vue'
import { createApp } from 'vue'
console.log(sum(1, 2, 3, 4, 5));
console.log(printCount(5));
console.log(_.join([1, 2, 3, 4], '-'));
createApp(App).mount('#app')