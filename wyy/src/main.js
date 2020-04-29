// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// 1重置样式、
import "./assets/css/reset.css"
// 2.rem.js
import './assets/js/rem.js'
// 3.处理公共组件
import Components from "./common"
for (var i in Components) {
  Vue.component(i, Components[i]);
}
// 4.处理全局过滤器
import Filter from './filter'
for (var i in Filter) {
  Vue.filter(i, Filter[i])
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
