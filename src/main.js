// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
// import router from "./router";
import VueRouter from "vue-router";
import goods from "./components/goods/goods";
import ratings from "./components/ratings/ratings";
import seller from "./components/seller/seller"
// import "common/stylus/index.styl";
// 入口文件依赖vue和app.vue
// Vue.config.productionTip = false
// new Vue({
//   el: '#app', // 挂载点
//   router,
//   components: { App }, // 此处为简写，es5是app:app
//   template: '<App/>'
// })
 /* eslint-disable */
Vue.use(VueRouter);
// Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter();

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  'seller': {
    component: seller
  }
});

router.start(app, "#app");
// router.go('/goods');
