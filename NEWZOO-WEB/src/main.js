// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/router';
import Router from 'vue-router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import {post,get,patch,put} from './util/api/http'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

//注册插件
Vue.use(Router);
Vue.use(ElementUI);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>',
  axios
});
