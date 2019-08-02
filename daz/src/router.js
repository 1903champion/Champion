import VueRouter from 'vue-router';

import china from './components/china'
import inter from './components/inter'


import addr from './papgs/addr'
import morecity from './papgs/morecity'

import meishi from "./components/swiper/meishi"
import index from "./papgs/index.vue"
import maoyan from "./components/swiper/maoyan.vue"
import jiudian from "./components/swiper/jiudian.vue"
import xiuxian from "./components/swiper/xiuxian.vue"
import waimai from "./components/swiper/waimai.vue"
import huoguo from "./components/swiper/huoguo.vue"
import liren from "./components/swiper/liren.vue"
import gouwu from "./components/swiper/gouwu.vue"
import zhoubianyou from "./components/swiper/zhoubianyou.vue"
import ktv from "./components/swiper/ktv.vue"
import search from "./components/search"
import date from "./components/swiper/jiudian/date.vue"
import sousuo from "./components/swiper/jiudian/sousuo.vue"




const router=new VueRouter({
    routes:[
        {path:'/',redirect:{name:'index'} },
        {path:"/index",name:"index",component:index},
        {name:'china',path:'/china',component:china},
        {path:'/inter',component:inter},
        {path:'/addr',component:addr},
        {path:'/morecity:id',component:morecity},
        {path:"/meishi",component:meishi},
        {path:"/maoyan",component:maoyan},
        {path:"/jiudian",component:jiudian},
        {path:"/xiuxian",component:xiuxian},
        {path:"/waimai",component:waimai},
        {path:"/huoguo",component:huoguo},
        {path:"/liren",component:liren},
        {path:"/gouwu",component:gouwu},
        {path:"/zhoubianyou",component:zhoubianyou},
        {path:"/ktv",component:ktv},
        {path:"/search",component:search},
        {path:"/date",component:date},
        {path:"/sousuo",component:sousuo},


       
]
})
export default router;