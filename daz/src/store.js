import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
import axios from "axios"

import router from  './router';
const store = new Vuex.Store({
    // ...
    state:{
        // index头部的数据保存地址
        indexheader:[],

        hotCity:[],//国内热门城市
        cityList:[],//国内城市列表
        intercityList:[],//国际热门城市

        choosed:'',//当前选中的城市
       

        Preferential:[],
        cnxh:[]

    },
    mutations:{
        // 给index的数据赋值
        addindexheader(state,res){
            state.indexheader=res
        },

        //获取国内城市列表并赋值
        getCity(state,res){            
            state.hotCity=res.hotcity.data.hotCity
            state.cityList=res.list.data.cityData
        },
        //点击热门城市和城市列表事件
        chooseCity(state,v){
            state.choosed=v
            router.push('index')
        },
        goTomore(state,i){

            router.push({path:'/morecity',query:{c:i}})

         },
        //获取国际城市列表并赋值
         getInterCity(state,res){
            state.intercityList=res.list.data.cityData
         },
        addindexPreferential(state,res){
            state.Preferential=res
        },
        addindexcnxh(state,res){
            state.cnxh=res

        },
        // 城市输入框获取值
        getDataInput(state,res){
            state.cityInpArr=res
        }
        
    },
    actions:{
        // 获取到首页的header数据
        getindexheader(store){
            axios.get("https://www.easy-mock.com/mock/5d4041a0d3d96f3926d5d9f2/example/#!method=get")
            .then(res=>{  
                // console.log(res.data.data.moduleInfoList[0].config) 
                store.commit("addindexheader",res.data.data.moduleInfoList[0].config)
            })    
            axios.get("https://www.easy-mock.com/mock/5d4041a0d3d96f3926d5d9f2/example/model")
            .then(res=>{
                store.commit("addindexPreferential",res.data.data.moduleInfoList[1].moduleData.data.preferenceValueHuiVos)
                store.commit("addindexcnxh",res.data.data.moduleInfoList[3].moduleData.data.guessYouVoList)
            })       
        },
        // 获取国内城市列表addr的数据
        getDatacity(store){
            axios.get('/citylist?_api=true&msource=seouser')
            .then(res=>{
                store.commit("getCity",res.data.appState)
            })
        },
        getDataIntercity(store){
            axios.get('/citylist?_api=true&msource=seouser&type=1')
            .then(res=>{
                store.commit("getInterCity",res.data.appState)
            })
        },

        // getDataInputcity(store,url){
        //     console.log(url)
            
        //     axios.post(url,e)
        //     .then(res=>{
        //         console.log('input:',res)

        //         store.commit("getDataInput",res)
        //     })
        // },
        
    },
    getters:{}
})
export default store 