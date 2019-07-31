import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 引入全局的swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
// 引入全局的store
import store from './store'


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
