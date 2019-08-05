import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false


import axios from 'axios'
import VueAxios from 'vue-axios' 
Vue.use(VueAxios, axios)

// 引入全局的swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


// 引入全局的store
import store from './store'






// 引入全局路由

import router from './router';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 引入全局饿了吗ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 引入地图

import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});


new Vue({
  store,router,

  render: h => h(App),
}).$mount('#app')
