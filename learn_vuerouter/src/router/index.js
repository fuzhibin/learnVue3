import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

// import Home from "../page/Home.vue";
// import About from "../page/About.vue";

const Home = () =>
    import ( /* webpackChunkName: 'home' */ '../page/Home.vue');
const About = () =>
    import ( /* webpackChunkName: 'about' */ '../page/About.vue');

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        redirect: '/home/message',
        children: [{
            path: 'message',
            component: () =>
                import ('../page/HomeMessage.vue')
        }, {
            path: 'goods',
            component: () =>
                import ('../page/HomeGoods.vue')
        }]
    },
    {
        path: '/about',
        component: About,
        meta: {
            address: '湖南',
            university: '湖南中医药大学'
        }
    }, {
        path: '/user/:name/id/:userid',
        component: () =>
            import ('../page/User.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () =>
            import ('../page/NotFound.vue')
    }
]
const router = createRouter({
    routes,
    history: createWebHistory()
})

// const addOneRoute = {
//     path: '/first',
//     component: () =>
//         import ('../page/AddOneRoute.vue')
// }
// router.addRoute('parentName', addOneRoute);

// const remove = router.addRoute({ path: '/category', name: 'category', component: Category });
// //调用addRoute后返回的值，是一个函数，直接调用，删除路由。
// remove();

//  router.removeRoute('category');

export default router