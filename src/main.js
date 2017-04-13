import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(Element);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
import index from './views/index.vue'
import list from './views/list.vue'
const routes = [
  { path: '/index', component: index },
  { path: '/list', component: list },
]


// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
      router: router,
      render: h => h(App)
}).$mount('#app')