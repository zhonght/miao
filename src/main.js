import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
// import VueResource from 'vue-resource'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'

//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);
// Vue.use(VueResource);
// Vue.use(Element);


import _index from './views/index/index.vue';
import _list from './views/goods/list.vue';
import _cart from './views/goods/cart.vue';
import _goods from './views/goods/goods.vue';
import _user from './views/user/user.vue';
import _login from './views/user/login.vue';
import _404 from './views/404.vue';


const routes = [
    {path: '/', redirect: '/index'},
    {path: '/index', component: _index},
    {path: '/list', component: _list},
    {path: '/cart', component: _cart},
    {path: '/user', component: _user},
    {path: '/login', component: _login},
    {path: '/goods/:id', component: _goods},
    {path: '/404', component: _404},
    {path: '*', redirect: {path: '/404'}}
];

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routes,
    linkActiveClass: 'active'
});
//
// router.beforeEach((to, from, next) => {
//     //NProgress.start();
//     if (to.path == '/login') {
//         sessionStorage.removeItem('user');
//     }
//     let user = JSON.parse(sessionStorage.getItem('user'));
//     if (!user && to.path != '/login') {
//         next({ path: '/login' })
//     } else {
//         next()
//     }
// })


const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
