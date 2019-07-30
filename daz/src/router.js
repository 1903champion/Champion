
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Login from './components/Login.vue';



const  router = new VueRouter({
    routes:[
        {path:"/login",component:Login},
    ]
})

export default router;