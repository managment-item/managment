// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入vuex
import store from './store/store'
//引入路由
import routers  from "./router/router";
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 引入公共样式
import './assets/css/reset.css'
// 引入mock模拟数据
require('./mock')
//引入ajax请求

import axios from "axios"
const instance =axios.create({
  baseURL:Vue.prototype.baseURL,
  timeout:100000,
  withCredentials:true
})
Vue.prototype.$http = instance

//引入elementui框架
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
// 引入eCharts图标
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 


Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
