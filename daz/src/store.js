import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
import axios from "axios"
const store = new Vuex.Store({
    // ...
    state:{
        // index头部的数据保存地址
        indexheader:[]
    },
    mutations:{
        // 给index的数据赋值
        addindexheader(state,res){
            state.indexheader=res
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
            
        }
    },
    getters:{}
})
export default store 