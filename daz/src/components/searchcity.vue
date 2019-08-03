<template>
     <div class='search'>
        <div class='header'>
            <router-link to='/china' class="iconfont icon-xiaoyu back"></router-link>
            <input type="text" placeholder="输入城市名或拼音查询" v-model='cityInput'>  
        </div>
        
        <div class='posi' v-if='bool'>
           <img src="../assets/img/search.png" alt="">
           <span>请输入城市名、首字母或拼音</span>
        </div> 

        <ul class='inpListNmae'>
            <li v-for='c in cityInpArr' @click="chooseCity(c.name)">
                {{c.name}}
            </li>
        </ul>      
    </div>  
</template>

<script>

import axios from "axios"
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    data(){
        return {
            cityInput:'',
            cityInpArr:[],//输入后返回的值
            bool:true,
            obj:{},

        }
    },
    computed:{
        // ...mapState(['cityInpArr'])
    },
    methods:{
        ...mapMutations(['chooseCity'])
    },
    watch:{
        cityInput(){
             axios.post('/isoapi/module',
            {pageEnName: "citylist",
            moduleInfoList: [
                {moduleName: "search",
                query: {keyword: this.cityInput}
                }]
            })
            .then(res=>{
                console.log(res)
                this.cityInpArr=res.data.data.moduleInfoList[0].moduleData.data.records
            })
            if(this.cityInput){
                this.bool=false
            }else{
                this.bool=true
            }                         
        }
    },
    mounted(){   
        
        

         

    },

}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
a{
    text-decoration: none;
}

.search .header{
    height:1.2rem /* 45/37.5 */;
    width:100%;
    position:relative;
    background:#fff;
    border-bottom: 1px solid #f2f2f2;
    display:flex;
    align-items: center;
}
.search .header .back{
    display:block;
    line-height:1.2rem /* 45/37.5 */;
    color:#f63;
    font-size:.8rem /* 30/37.5 */;
    width:.8rem /* 30/37.5 */
}
.search .header input{
    width:8.746667rem /* 328/37.5 */;
    height:.8rem /* 30/37.5 */;
    border-radius:.8rem /* 30/37.5 */;
    border:none;
    outline:none;
    background:#f2f2f2;
    padding-left: .32rem /* 12/37.5 */
}
.posi{
    margin-top:.266667rem /* 10/37.5 */;
}
.posi img{
    margin-left:.266667rem /* 10/37.5 */;
    height:2.24rem /* 84/37.5 */;
    vertical-align: top;

}
.posi span{
    vertical-align: top;
    color:#7d7b7b;
    font-size:14px;
    
}
.inpListNmae{
    padding:.266667rem /* 10/37.5 */ .266667rem /* 10/37.5 */ 0;
}
.inpListNmae li{
    line-height:.906667rem /* 34/37.5 */;
    border-bottom:1px solid #e1e1e1
}
</style>
