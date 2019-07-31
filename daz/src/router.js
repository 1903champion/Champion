import VueRouter from 'vue-router';

import china from './components/china'
import inter from './components/inter'





const router=new VueRouter({
    routes:[
        {path:'/',redirect:{name:'china'} },
        {name:'china',path:'/china',component:china},
        {path:'/inter',component:inter},
       
]
})
export default router;