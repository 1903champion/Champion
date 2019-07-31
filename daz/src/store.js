import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
import axios from "axios"
const store = new Vuex.Store({
    // ...
    state:{
        // index头部的数据保存地址
        indexheader:[],
        Preferential:[],
        cnxh:[]
    },
    mutations:{
        // 给index的数据赋值
        addindexheader(state,res){
            state.indexheader=res
        },
        addindexPreferential(state,res){
            state.Preferential=res
        },
        addindexcnxh(state,res){
            state.cnxh=res
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
                console.log(res.data.data.moduleInfoList[3].moduleData.data.guessYouVoList)
                store.commit("addindexPreferential",res.data.data.moduleInfoList[1].moduleData.data.preferenceValueHuiVos)
                store.commit("addindexcnxh",res.data.data.moduleInfoList[3].moduleData.data.guessYouVoList)
            })
            
        }
    },
    getters:{}
})
export default store 