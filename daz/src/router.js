import VueRouter from 'vue-router';

import china from './components/china'
import inter from './components/inter'
import index from './papgs/index'
import addr from './papgs/addr'
import morecity from './papgs/morecity'





const router=new VueRouter({
    routes:[
        {path:'/',redirect:{name:'china'} },
        {name:'china',path:'/china',component:china},
        {path:'/inter',component:inter},
        {path:'/index',component:index},
        {path:'/addr',component:addr},
        {path:'/morecity:id',component:morecity},

       
]
})
export default router;