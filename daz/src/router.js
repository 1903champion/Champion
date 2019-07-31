
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Login from './components/Login.vue';
import PhoneLogin from './components/PhoneLogin.vue';
import Region from './components/Region.vue';

const  router = new VueRouter({
    routes:[
        {path:"/",redirect:{ path: '/login' }},
        {path:"/login",component:Login},
        {path:"/phoneLogin",component:PhoneLogin},
        {path:"/region",component:Region},
    ]
})

export default router;