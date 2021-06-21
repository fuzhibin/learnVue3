import { createApp } from 'vue'
// import App from './01_混入mixin和extends/App.vue'
import App from './02_compositionAPI的使用/App.vue';
import { gloablMixin } from './01_混入mixin和extends/gloablMixin'
import { demoGloablMixin } from './01_混入mixin和extends/demoGloablMixin'
// .mixin(gloablMixin).mixin(demoGloablMixin)
createApp(App).mount('#app')