// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routers  from "./router/router";
import Store from "./store/store";
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import axios from "axios"
Vue.prototype.$ajax = axios

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Store,
  template: '<App/>',
  components: { App }
})
