<template>
     <div>
       <div class='addr'>
        <div class='header'>
            <router-link to='/china' class="iconfont icon-xiaoyu back"></router-link>
            <div class='contry'>
                切换城市
            </div>           
        </div>
        <div class='inp'>
            <span class="iconfont icon-fangdajing-copy search"></span>
            <input type="text" placeholder="输入城市名或拼音查询">
        </div>
        <div class='posi'>
            无法获取您的定位
        </div>  
        <div class='more'>
            <h3>{{word}}</h3>
            <ul>
                <li v-for='m in more' :key='m.cityId' @click='chooseCity(m.cityName)'>
                    {{m.cityName}}
                </li>
               
            </ul>

        </div>


    </div>    
      
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
import axios from 'axios';


export default {
data(){
    return {
        more:[],
        word:'',
    }
},
  mounted(){
        this.word = this.$route.query.c;
      axios.get('citylist?_api=true&msource=seouser&type=0&c='+this.word)
            .then(res=>{
             this.more=res.data.appState.list.data.charCityData
     })
  }
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
.addr{
    background:#F2F2F2;
}
h3{
    padding:0 0 0 .266667rem /* 10/37.5 */;
    line-height:.8rem /* 30/37.5 */;
    font-size:.373333rem /* 14/37.5 */;
    color:#323232;
    background:#F2F2F2;

}
.addr .header{
    height:1.2rem /* 45/37.5 */;
    width:100%;
    position:relative;
    background:#fff;
}
.addr .header .back{
    display:block;
    line-height:1.2rem /* 45/37.5 */;
    color:#f63;
    position:absolute;
    top:0;
    left:.106667rem /* 4/37.5 */;
    font-size:.8rem /* 30/37.5 */;
}
.addr .header .contry{
    height:.8rem /* 30/37.5 */;
    width:5.333333rem /* 200/37.5 */;
    border-radius: .133333rem /* 5/37.5 */;
    text-align: center;
    position:absolute;
    left:50%;
    top:50%;
    margin-top:-.4rem /* 15/37.5 */;
    margin-left:-2.666667rem /* 100/37.5 */;
    font-size:.426667rem /* 16/37.5 */;
    line-height:.8rem /* 30/37.5 */;
}
.addr .inp{
    padding:.24rem /* 9/37.5 */.746667rem /* 28/37.5 */;
}
.addr .inp input{
    width:100%;
    height:.853333rem /* 32/37.5 */;
    border-radius:.48rem /* 18/37.5 */;
    background:#fff;
    line-height:.853333rem /* 32/37.5 */;
    color:#999;
    border:none;
    outline:none;
    text-align:center;
}
.addr .inp{
    position:relative;
}
.addr .inp .search{
    position:absolute;
    top:37%;
    left:28%;
    height:.32rem /* 12/37.5 */;
    width:.32rem /* 12/37.5 */;
}
.addr .posi{
    height:1.333333rem /* 50/37.5 */;
    width:100%;
    line-height:1.333333rem /* 50/37.5 */;
    background:#fff;
    text-align: center;
    font-size:.373333rem /* 14/37.5 */;
}
.more ul{
    background:#fff;
    list-style:none;
    overflow: hidden;
}
.more ul li{
    width:33.33%;
    line-height:1.28rem /* 48/37.5 */;
    border-bottom:1px solid #f2f2f2;
    border-left:1px solid #f2f2f2;
    box-sizing: border-box;
    text-align: center;
    color:#323232;
    font-size:.426667rem /* 16/37.5 */;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    float:left;

}
</style>
