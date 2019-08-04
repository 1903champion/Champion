import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
import axios from "axios"

import router from './router';
const store = new Vuex.Store({
    // ...
    state: {
        // index头部的数据保存地址
        indexheader: [],

        hotCity: [], //热门城市
        cityList: [], //城市列表
        choosed: '', //当前选中的城市
        cityHead: true,
        Preferential: [],
        cnxh: [],
        wzqy: [], //酒店位置区域的数据
        jdsj:[],  //酒店数据

    },
    mutations: {
        // 给index的数据赋值
        addindexheader(state, res) {
            state.indexheader = res
        },

        //获取城市列表并赋值
        getCity(state, res) {
            state.hotCity = res.hotcity.data.hotCity
            state.cityList = res.list.data.cityData
        },
        //点击热门城市和城市列表事件
        chooseCity(state, v) {
            state.choosed = v
            router.push('index')
        },
        goTomore(state, i) {
            state.cityHead = !state.cityHead
            router.push({
                path: '/morecity',
                query: {
                    id: i
                }
            })

        },
        addindexPreferential(state, res) {
            state.Preferential = res
        },
        addindexcnxh(state, res) {
            state.cnxh = res
        },
        addwzqu(state, res) {
            state.wzqy = res
        },
        addjdsj(state,res){
            state.jdsj=res
        }

    },
    actions: {
        // 获取到首页的header数据
        getindexheader(store) {
            // axios.post("/index/api/module")
            //     .then(res => {
            //         console.log(res)
            //         // console.log(res.data.data.moduleInfoList[0].config) 
            //         store.commit("addindexheader", res.data.data.moduleInfoList[0].config)
            //     })
            axios.post("/index/api/module")
                .then(res => {
                    // console.log(res)
                    console.log(res.data.data.moduleInfoList[3].moduleData.data.guessYouVoList)
                    store.commit("addindexPreferential", res.data.data.moduleInfoList[1].moduleData.data.preferenceValueHuiVos)
                    store.commit("addindexcnxh", res.data.data.moduleInfoList[3].moduleData.data.guessYouVoList)
                })
        },
        // 获取城市列表addr的数据
        getDatacity(store) {
            axios.get('https://www.easy-mock.com/mock/5d4041a0d3d96f3926d5d9f2/example/https:/www.easy-mock.com/project/5d4041a0d3d96f3926d5d9f2#!method=get')
                .then(res => {
                    store.commit("getCity", res.data.appState)
                })
        },
        // 获取位置区域的数据
        getwzqy(store) {
            axios.get("/otahotel/hotelm/locationInfo?cityid=9")
                .then(res => {
                    // console.log(res.data.data.locationList)
                    store.commit("addwzqu", res.data.data.locationList)
                })
        },
        // 获取酒店数据
        getjdsj(store){
            axios.get('/otahotel/hotelm/search?cityid=9&locatecityid=&mylng=&mylat=&lng=&lat=&hotelstarids=&pricerange=&sortid=&limitresult=20&limitpageno=0&searchtype=0&groupable=&filterids=&versionName=&utm_medium=touch')
            .then(res=>{
                console.log(res.data.data.shopList)
                store.commit("addjdsj",res.data.data.shopList)
            })
        }
    },
    getters: {}
})
export default store