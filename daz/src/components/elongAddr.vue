<template>
<div class='elongAddr'>
    <div class='header'>
            <router-link to='/zhoubianyou' class="iconfont icon-xiaoyu back"></router-link>
            <input type="text" placeholder="输入城市名、行政区或景区" v-model='elongInp'> 
            <span class='iconfont icon-fangdajing-copy'></span>                     
    </div>
    <div class='hotcity' v-show='bool'>
        <p>热门城市</p>
        <ul>
            <li v-for='h in hotcity' :key='h.cityId' @click='elongChooseCity(h.cityName)'>
                {{h.cityName}}
            </li>
        </ul>
    </div>
    <div class='elonginputCity'>
        <ul>
            <li v-for='e in elongInputArr' :key='e.cityId' @click='elongChooseCity(e.composedName)'>
                {{e.composedName}}
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import {mapState,mapActions,mapMutations} from 'vuex'

export default {
     methods:{
        ...mapMutations(['elongChooseCity']),
        ...mapActions(['elongInputGetcity']),
    },
    data(){
        return {
            hotcity:[],
            elongInp:'',
            bool:true,
        }
    },
    computed:{
        ...mapState(['elongChoosed','elongInputArr'])
    },
    mounted(){
        axios.get('home/api/gethomehotcitys?_rt=1564817345499')
        .then(res=>{
            this.hotcity=eval(res.data.hotCitys)
        })
    },
     watch:{
            elongInp(){
            this.elongInputGetcity(this.elongInp)
             if(this.elongInp){
                 this.bool=false;
             }else{
                 this.bool=true;
             }      
            }
    },
}
</script>




<style scoped>
*{
    margin:0;
    padding:0;
}
ul{
    list-style:none;
}
a{
    text-decoration: none;
}
.elongAddr .header{
    height:1.2rem /* 45/37.5 */;
    width:100%;
    position:relative;
    background:#FCFCFC;
    position:relative;
}
.elongAddr .header .back{
    display:block;
    line-height:1.2rem /* 45/37.5 */;
    color:#858585;;
    font-size:.8rem /* 30/37.5 */;
    float:left;
    margin:0 .133333rem /* 5/37.5 */;
}
.elongAddr .header input{
    width:7.466667rem /* 280/37.5 */;
    outline:none;
    border: 1px solid #ddd;
    border-radius: 3px;
    float:left;
    line-height:.906667rem /* 34/37.5 */;
    margin-top:.133333rem /* 5/37.5 */;
    padding-left:1.066667rem /* 40/37.5 */;
}
.elongAddr .header span{
    position:absolute;
    left:1.466667rem /* 55/37.5 */;
    top:.4rem /* 15/37.5 */;
}
.hotcity{
    background:#F2F2F2;
    padding:.32rem /* 12/37.5 */ .32rem /* 12/37.5 */;
}
.hotcity ul{
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom:.32rem /* 12/37.5 */;
    border-bottom: 1px solid #ddd;

}
.hotcity ul li{
    height:1.066667rem /* 40/37.5 */;
    line-height:1.066667rem /* 40/37.5 */;
    width:2.666667rem /* 100/37.5 */;
    text-align: center;
    background:#fff;
    margin-top:.32rem /* 12/37.5 */;
}
.elonginputCity ul{
    padding:.32rem /* 12/37.5 */;
}
.elonginputCity ul li{
    line-height:1.093333rem /* 41/37.5 */;
    font-size:.346667rem /* 13/37.5 */;
    color:#555;
    border-bottom:1px solid #ddd;
}
</style>
