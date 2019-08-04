<template>
    <div>
        <div class="header">
            <ul>
               <h1 @click="wzdw">位置区域 </h1> 
                <span class="iconfont icon-jiantou8"></span>
            </ul>
            <ul>
                 <h1 @click="xjjg">星级/价格</h1>
                <span class="iconfont icon-jiantou8"></span>  
            </ul>
            <ul>
                 <h1 @click="znpx1">智能排序</h1>
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
        <div class="pz" v-show="ispz">
            <h2>星级</h2>           
                <ul class="xj">
                    <li v-for="s,i in cities" :key="i" @click="dxk(i)" :class="active==i?'active':'qc'">{{s}}</li>
                </ul>
            <h2>价格</h2>
            <ul class="price">
                <li v-for="s,i in price" :key="i" @click="dxk1(i)" :class="active1==i?'active':'qc'">{{s}}</li>
            </ul>
            <div class="pz-footer">
                <ul>
                    <li @click="cz">重置</li>
                    <li @click="wc">完成</li>
                </ul>
            </div>
        </div>


        <div class="zzpx" v-if="iszzpx">
            <h1>智能排序</h1>
            <ul>
                <li v-for="z,i in znpx" :key="i" @click="dxk2(i)" >{{z}}</li>
            </ul>
        </div>

    
        <div class="menu">
            <ul>
                <li v-for="m,i in menu" :key="i">{{m}}</li>
            </ul>
        </div>

        <div class="lists">
            <ul>
                <li v-for="j,i in jdsj" :key="i" @click="goxqy(j.shopId)">
                    <div class="lists-left">
                        <img :src="j.defaultPic" alt="">
                    </div>
                    <div class="lists-right">
                        <div class="lists-right1">
                            <h3>{{j.shopName}}({{j.branchName}})</h3> 
                            <span v-if="j.bookable?true:false" class="ding">订</span>
                            <span v-if='j.packable? true:false' class="tc">套餐</span>
                        </div>
                        <div class="lists-right2">
                             <!-- 动态的传递数值到子组件评分 -->
                        <pingfen :score="j.commentScore"></pingfen>
                          
                            <span>{{j.voteTotal}}条</span>
                            <i>|</i>
                            <span>{{j.hotelStar}}</span>
                        </div>
                        <div class="lists-right3">
                            <span>{{j.location}}</span>
                        </div>
                        <div class="lists-right4">
                            <span>￥</span>
                            <span>{{j.lowestPrice}} </span> 
                            <span>{{j.lowestPriceText}}</span>
                            <span>{{j.lastBookingText}}</span>
                        </div>
                       
                       
                    </div>
                </li>
            </ul>
        </div>



        
    </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import pingfen from "../jiudian/pingfen"
document.οnclick=function(){
  document.getElementById("header-1").style.display="none";
}
 const cityOptions = ['经济型', '三星/舒适', '四星/豪华', '五星/豪华'];
 const price=["150以下","150-300","301-450","451-600","601-1000","1000以上"];
 const znpx=["评分高到低","人气高到低","价格低到高","价格高到低"];
 const menu=["好评酒店","钟点房","情侣酒店","经济连锁",];
  export default {
    data() {
      return {
          index:'',
          index1:'',
          isshow:false,
        cities: cityOptions,
         price: price,
         active:"-1",
         active1:"-1",
         ispz:false,
         iszzpx:false,
         znpx:znpx,
         menu:menu
         
          
       }
    },
    methods: {
      handleChange(value) {
        // console.log(value);
      },
      ...mapActions(["getwzqy","getjdsj"]),
      btn(i,el){
        // console.log(i)
            this.index=i;
      },
      btn1(i){
        //   console.log(i)
          this.index1=i;
      },
      wzdw(){
          this.isshow=!this.isshow
          
      },
      dxk(i){
          this.active=i
      },
       dxk1(i){
          this.active1=i
      },
      cz(){
          this.active=-1
          this.active1=-1
      },
      wc(){
          this.ispz=!this.ispz
      },
      xjjg(){
          this.ispz=!this.ispz
      },
       dxk2(i){
            this.iszzpx=!this.iszzpx     
       },
       znpx1(){
            this.iszzpx=!this.iszzpx 
       },
       goxqy(id){
           this.$router.push({path:"jdxqy",query:{userId:id}})
        console.log(id)
       }
      
    },
    computed: {
        ...mapState(["wzqy","jdsj"]),
    
    },
    mounted() {     
        this.getwzqy()
        this.getjdsj()
    },
    components:{
        pingfen
    }
    
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
.qc{
    color: #333;
    border: 1px solid #bcbcbc;
    background: #fff !important;
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
    /* top: 96px; */
    left: 0;
    z-index: 0;
    position: absolute;
    background: #fff;
    box-sizing: border-box
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
    margin-left: 40px;
    width: 130px;
}
.xj{
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #bcbcbc;
   
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
    margin-top :.266667rem;
    margin-left: .266667rem;
}
.pz{
    position: absolute;
    background: #fff;
    width: 100%;
    box-sizing: border-box
}
.price{
    padding: 0 .266667rem;
    padding-bottom: .533333rem;
    border-bottom: 1px solid #bcbcbc;
}
.price li{
    width: 20%;
    display: inline-block;
    margin-right: .4rem;
    margin-top: .266667rem;
    line-height:.8rem;
    border-radius: .106667rem;
    text-align: center;
    border: 1px solid #bcbcbc;
}
.pz-footer{
    padding: .266667rem
}
.pz-footer ul {
    display: flex;
    justify-content: space-around;
}
.pz-footer ul li{
    line-height: 1.066667rem;
    border: 1px solid #bcbcbc;
    width:40%;
    text-align: center ;
    border-radius: .106667rem;

}
.pz-footer ul li:nth-of-type(2){
        background-color: #fb673d;
    color: #fff;
    border: 1px solid transparent;
}
.zzpx {
    padding: .266667rem .266667rem;
        position: absolute;
        background: #fff;
        width: 100%;
        box-sizing: border-box
    
}    
.zzpx h1{
        line-height: .9rem;
    border-bottom: 1px solid #e1e1e1;
    font-size: .28rem;
    margin-left: .24rem;
}
.zzpx ul li{
    line-height: 1.066667rem;
    border-bottom: 1px solid #e1e1e1;
    font-size: .28rem;
    margin-left: .24rem;
}
.menu{
    padding: .266667rem .266667rem;
    border-bottom: 1px solid #f5f5f5;

}
.menu ul{
    display: flex;
    justify-content: space-between;
   
}
.menu ul li{
     border: 1px solid #f5f5f5;
     line-height:.8rem;
     width: 20%;
     text-align: center;
     color: #333
}
.lists ul li{
    padding: .13rem .266667rem;
    display: flex;
    /* justify-content: space-around */
}
.lists-left{
    margin-right: .213333rem;
    width: 35%
}
 .lists-left img{
    width: 3.2rem;
    height: 3.2rem;
}
.lists-right h3{
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
    width:4.8rem
}
.lists-right>div{
    display: flex
}
.ding{
    background-color: #5eb22d;
    font-size: .213333rem;
    color: #fff;
    transform: scale(0.8);
    line-height: .426667rem;
    width:.426667rem;
    text-align: center
}
.tc{
    background-color: #ff8400;
    color: #fff;
    transform: scale(0.8);
    line-height: .426667rem
   
}
.lists-right1{
    padding-top: .266667rem
}
.lists-right1 h3{
  font-size: .48rem
}
.lists-right2{
    margin-top: .16rem;
    margin-bottom: .16rem
}
.lists-right2>span:nth-of-type(1){
    color: #999;
    margin :0 .16rem 0 .16rem
}
.lists-right2>span:nth-of-type(2){
    color: #999;
    /* margin :0 .16rem 0 .16rem */
}
.lists-right2 i{
    color: #999;
    margin-right: .16rem
}
.lists-right3 {
    color: #999;
    margin-bottom: .213333rem
}
.lists-right4{
    margin-top: .213333rem;

}
.lists-right4 span:nth-of-type(1){
    font-size: .266667rem;
    color: #f63;
    margin-top: .16rem;
}
.lists-right4 span:nth-of-type(2){
    font-size: .533333rem;
    color: #f63;
}
.lists-right4 span:nth-of-type(3){
    font-size: .266667rem;
    color: #999;
    margin-top: .16rem;

}
.lists-right4 span:nth-of-type(4){
    font-size: .266667rem;
    color: #999;
    margin-top: .16rem;
    margin-left: 1.76rem
}
</style>
