<template>
    <div>
        <!-- <cityhead/> -->
        <div class='hotcity'>
           <h3>热门城市</h3>
            <ul>
                <li v-for='h in hotCity' :key='h.cityId' @click='chooseCity(h.cityName)'>
                    {{h.cityName}}
                </li>
            </ul>
        </div>
        <div class='morecity'>
           <h3>更多城市</h3>
            <ul>
                <li v-for='c,i in cityList' :key='i' @click='jump(i)' >           
                        {{c.firstChar}}                  
                </li>
            </ul>
        </div>
        <div class='listcity' v-for='t,i in cityList'  :key='i' >
            <h3>{{t.firstChar}}</h3>
            <ul>
                <li v-for='l in t.list' :key='l.cityId' @click='chooseCity(l.cityName)'>
                    {{l.cityName}}
                </li>
                <li @click='goTomore(i)'>更多</li>
            </ul>
        </div>
    </div>
</template>

<script>
import cityhead from './cityhead'
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
   components:{cityhead},

    computed:{
        ...mapState(['hotCity','cityList','cityHead'])
    },
    methods:{
        ...mapActions(['getDatacity']),
        ...mapMutations(['chooseCity','goTomore']),
        jump(i){
            let jump = document.querySelectorAll('.listcity')
            let total = jump[i].offsetTop
            document.documentElement.scrollTop=total
        },
        
       
    },mounted(){
        this.getDatacity()
        
    }
}
</script>


<style scoped>
h3{
    padding:0 0 0 .266667rem /* 10/37.5 */;
    line-height:.8rem /* 30/37.5 */;
    font-size:.373333rem /* 14/37.5 */;
    color:#323232;
    background:#F2F2F2;

}
.hotcity ul{
    background:#fff;
    list-style:none;
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.hotcity ul li{
    width:33.33%;
    line-height:1.28rem /* 48/37.5 */;
    border-bottom:1px solid #f2f2f2;
    border-left:1px solid #f2f2f2;
    box-sizing: border-box;
    text-align: center;
    color:#323232;
    font-size:16px;
}
.hotcity ul li:nth-last-of-type(1){
    border-bottom:0;
}
.hotcity ul li:nth-last-of-type(2){
    border-bottom:0;
}
.hotcity ul li:nth-last-of-type(3){
    border-bottom:0;
}
.morecity ul{
    background:#fff;
    list-style:none;
    overflow: hidden;
}
.morecity ul li{
    width:20%;
    line-height:1.28rem /* 48/37.5 */;
    border-bottom:1px solid #f2f2f2;
    border-right:1px solid #f2f2f2;
    box-sizing: border-box;
    text-align: center;
    color:#323232;
    font-size:16px;
    float:left;
    padding:0 2px;
}
.listcity ul{
    background:#fff;
    list-style:none;
    overflow: hidden;
}
.listcity ul li{
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
