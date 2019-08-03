<template>
    <div>
        <div class="header">
            <ul>
               <h1 @click="wzdw">位置区域 </h1> 
                <span class="iconfont icon-jiantou8"></span>
            </ul>
            <ul>
                 <h1>星级/价格</h1>
                <span class="iconfont icon-jiantou8"></span>  
            </ul>
            <ul>
                 <h1>智能排序</h1>
                <span class="iconfont icon-jiantou8"></span>
            </ul>
        </div>
        <div class="header-1" v-if="isshow" id="header-1">
            <div class="header-1-left ">
                <ul>
                    <li v-for="w,i in wzqy" :key="w.id" ref="cbl" @click="btn(i,$event)" 
                    :class="i==index? 'bg':''"
                    > {{w.name}} </li>
                </ul>
            </div>
            <div class="header-1-right" v-for="w,i in wzqy" :key="w.id" :class="i==index?'show':''">
                <ul>
                    <li v-for="s,i in w.subNavItems" :key="s.id" @click="btn1(i)">{{s.name}}
                        
                    </li>
                </ul>
               <ul class="qgz" v-for="q,i in w.subNavItems" :key="q.id" :class="i==index1?'qg':''">
                    <li v-for="y in q.subNavItems">{{y.name}}</li>
                </ul>    

            </div>

        </div>
        <div class="pz">
            <h2>星级</h2>           
                <ul class="xj">
                    <li v-for="s,i in cities" :key="i" @click="dxk(i)" :class="active==i?'active':''">{{s}}</li>
                </ul>
            <!-- <h3>价格</h3>
            <ul>
                <li v-for="s,i in price" :key="i" @click="dxk(i)">{{s}}</li>
                
            </ul> -->
        </div>


    </div>
</template>

<script>
import {mapState,mapActions} from "vuex"

document.οnclick=function(){
  document.getElementById("header-1").style.display="none";
}
 const cityOptions = ['经济型', '三星/舒适', '四星/豪华', '五星/豪华'];
 const price=["150以下","150-300","301-450","451-600","601-1000","1000以上"]
  export default {
    data() {
      return {
          index:'',
          index1:'',
          isshow:false,
        cities: cityOptions,
         price: price,
         active:""
          
       }
    },
    methods: {
      handleChange(value) {
        // console.log(value);
      },
      ...mapActions(["getwzqy"]),
      btn(i,el){
        // console.log(i)
            this.index=i;
      },
      btn1(i){
          console.log(i)
          this.index1=i;
      },
      wzdw(){
          this.isshow=!this.isshow
      },
      dxk(i){
          this.active=i
      }
      
    },
    computed: {
        ...mapState(["wzqy"]),
    
    },
    mounted() {     
        this.getwzqy()
   
    },
    
  };
</script>
<style scoped>
body{
    color: #333;
}
.active{
    border:1px solid #f63 !important;
    background: #fff1ed !important;
    color: #f63 !important
}
.header{
    display: flex;
    border-bottom: 1px solid #bcbcbc
}
.bg{
    background:#fff
}
.show{
    display:block !important;
}
.qg{
    display: block !important;
}
.header ul{
    justify-content: space-between;
    text-align: center;
    display: block;
    float: left;
    width: 33.33333333%;
    text-align: center;
    position: relative;
}
.header ul h1{
    font-size:.373333rem /* 14/37.5 */;
    display: inline-block;
    margin-right: .133333rem /* 5/37.5 */;
    line-height: 1.133333rem /* 80/37.5 */
}
.box{
    padding-left: .3rem;
    background: #F0F0F0;
    height:8.533333rem /* 320/37.5 */ ;
    width:2.133333rem /* 80/37.5 */
}
.box li{
    line-height: 1.066667rem /* 40/37.5 */;
    text-align: left;
    font-size: .373333rem /* 14/37.5 */
}
.header-1{
    width: 100%;
    height: 8.533333rem /* 320/37.5 */;
    position: relative;
    /* top: 96px; */
    left: 0;
    z-index: 0;
}
.header-1-left{
    width: 30%  ;
     background-color: #f0f0f0;
     position: absolute;
     left:0;
     height :100%;
}
.header-1-left li{
    padding-left: .266667rem /* 10/37.5 */;
    line-height: 1.066667rem /* 40/37.5 */;
    font-size: .32rem /* 12/37.5 */
}
.header-1-right{
    position: absolute;
    right: 0;
    width: 70%;
    height:100%;
    overflow-y:scroll;
    display: none;
    /* display:flex; */
}


.header-1-right ul li{
    line-height: 1.066667rem /* 40/37.5 */;
    text-indent: .533333rem /* 20/37.5 */;
    overflow: hidden;
    position: relative;
    overflow-y: scroll;
    

}
.header-1-right>ul:nth-of-type(1){
    float:left;
    height: 100%    ;
    overflow: hidden;
    width:140px;
text-overflow:ellipsis;
white-space: nowrap;

}
.header-1-right>ul:nth-of-type(2){
    float: left;
    margin-left: 40px;
    padding-right: 20px;
    line-height: 1.066667rem /* 40/37.5 */;
    text-indent: .533333rem /* 20/37.5 */;
    overflow-y: scroll;
    display: none;
    width:100px;
}

.qgz{
    position: absolute;
    left: 1.866667rem /* 70/37.5 */;
    top: 0;
    display: none;
    height: 100%;
    overflow-y:scroll ;
    text-align: left;
}
.xj{
    display: flex;
    justify-content: space-around;
   
    }
.xj li{
    width: 20%;
    border:1px solid #bcbcbc;
    border-radius: 4px;
    line-height:.8rem /* 30/37.5 */;
    text-align: center;
    color: #333;
    margin: 10px 0
}
.pz h2{
    font-size: .28rem;
    margin-top  :10px
}
</style>
