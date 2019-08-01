<template >

  <div>
    <div class="index">
      <div class="header">
        <h1 @click="btn">
          {{choosed}}
          <span class="iconfont icon-jiantou8"></span>
        </h1>
        <div class="header-input">
          <span class="iconfont icon-fangdajing-copy">输入商户名、地点</span>
        </div>
        <span class="iconfont icon-04"></span>
      </div>
      <div class="content">
        <div class="content-title">
          <span class="iconfont icon-dazhongdianping"></span>
          <h1>{{indexheader.title}}</h1>
        </div>
        <div class="content-footer">
          <h1>{{indexheader.openAppText}}</h1>
          <h2>{{indexheader.downloadAppText}}</h2>
        </div>
      </div>
      <!-- 滚动swiper -->
      <swiper />
      <!-- 分割线 -->
      <div class="bord"></div>

      <!-- 超值特惠 -->
      <div class="Preferential">
          <div class="Preferential-header">
            <h1>超值特惠</h1>
            <h4>更多优惠 <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span> </h4>
          </div>
      </div>
      <div class="Preferential-middle">
          <div v-for="p in Preferential" :key="p.dgId">
              <img :src=p.imageUrl alt="">
              <h3>{{p.shortTitle}}</h3>
              <h4>￥{{parseInt(p.price) }}  <span>￥{{parseInt(p.markPrice)}}</span></h4>
          </div>
      </div>
            <!-- 分割线 -->
      <div class="bord"></div>
        <!-- 猜你喜欢板块 -->
      <div class="like">
          <h1>猜你喜欢</h1>
          <div v-for="c in cnxh " :key="c.dealgroupid">
            <div class="like-pic">
                <img :src=c.defaultPic alt="">
                <div>{{c.pictag.tag}}</div>

            </div>
            <div class="like-center">
                <h2>{{c.shopName}}</h2>
                <h3>{{c.dealGroupTitle}}</h3>
                <div>
                    <h4>￥{{c.dealgroupPrice}}</h4>
                    <h5>￥{{c.marketPrice}}</h5>
                    <h6>{{c.salesdesc}}</h6>
                </div>
            </div>
          </div>
      <div class="seemore">
        <h1>查看更多</h1>
      </div>
      </div>
      <!-- 尾部 -->
      <footers/>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import swiper from "../components/swiper";
import footers from '../components/footers'
export default {

  computed: {
    ...mapState(["indexheader","Preferential","cnxh",'choosed'])
  },
  methods: {
    ...mapActions(["getindexheader"]),
    btn(){
        this.$router.push("/china")
        // console.log(1)
    }
  },
  mounted() {
    this.getindexheader();
    
  },
  components: {
    swiper,footers
  }
};

</script>
<style scoped>
@import url("http://at.alicdn.com/t/font_1324710_dyk1f9ynwa.css");
.index {
  overflow: hidden;
}
.header {
  position: fixed;
  width: 100%;
  height: 1.333333rem /* 50/37.5 */;
  line-height: 1.333333rem /* 50/37.5 */;
  background-color: #f63;
  color: #fff;
  padding: 0 .266667rem /* 10/37.5 */;
  text-align: center;
  display: -webkit-box;
  z-index: 305;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.header h1 {
  position: relative;
  padding-right: .453333rem /* 17/37.5 */;
  font-size: 0.373333rem /* 14/37.5 */;
  color: #fff;
  max-width: 60px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
}
.header-input {
  background-color: #fff;
  padding: 0 0 0 0.8rem /* 30/37.5 */;
  -webkit-box-flex: 1;
  height: 30px;
  margin: .24rem /* 9/37.5 */ .16rem /* 6/37.5 */ .24rem /* 9/37.5 */ .266667rem /* 10/37.5 */;
  line-height: 32px;
  color: #b8b8b8;
  text-align: left;
  font-size: .346667rem /* 13/37.5 */;
  transition: left 0.2s, right 0.2s;
  -webkit-border-radius: 25px;
  border-radius: 25px;
  position: relative;
}
.header-input span {
  font-size: 8px;
}
.header > span {
  display: block;
  width: .746667rem /* 28/37.5 */;
  height: 100%;
  font-size: 0.64rem; /* 24/37.5 */
}
.content {
  background: url("../assets/img/bgt.jpg") no-repeat 0 0;
  height: 3.2rem /* 120/37.5 */;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 1.333333rem /* 50/37.5 */;
  overflow: hidden;
}
.content-title {
  display: flex;
  justify-content: center;
  margin: .64rem /* 24/37.5 */ 0 .373333rem /* 14/37.5 */;

  height: 30px;
}
.content-title span {
  height: .8rem /* 30/37.5 */;
  width: .8rem /* 30/37.5 */;
  margin-right: .213333rem /* 8/37.5 */;
  font-size: 0.8rem /* 30/37.5 */;
  background: #fff;
  color: #f63;
}
.content-title h1 {
  font-size: 20px;
  color: #111;
  font-weight: bolder;
}
.content-footer {
  display: flex;
  justify-content: center;
}
.content-footer h1 {
  color: #f63;
  margin-right: 15px;
  line-height: 40px;
  width: 126px;
  text-align: center;
  align-items: center;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid #f63;
}
.content-footer h2 {
  color: #fff;
  background-color: #f63;
  line-height: 40px;
  width: 126px;
  text-align: center;
  align-items: center;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid #f63;
}
.bord{
    height :10px;
    background-color: #f0f0f0;
}
.Preferential{
    padding: 7px 6px 10px;
   
}
.Preferential-header{
 display:flex;
 justify-content: space-between;
  height: 32px;
    line-height: 32px;
    font-size: 15px;
    padding-bottom: 5px;
    padding-left: 3px;
}
.Preferential-header h1{
    color: #ff524b;
    font-size: .4rem /* 30/37.5 */
}
.Preferential-header h4{
    font-size: .32rem /* 12/37.5 */;
    float: right;
    padding-right: .48rem /* 18/37.5 */;
    color: #bbb;
}
.Preferential-header h4 span{
    font-size: .32rem /* 12/37.5 */
}
.Preferential-middle{
    display: flex;
}
.Preferential-middle div{
    width: 33%;
    border-radius: 3px;
    padding: 0 4px;
    display: block;
    box-sizing: border-box;
}
.Preferential-middle div h3{
    color: #333;
    font-size: .373333rem /* 14/37.5 */;
    padding-top: 3px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.Preferential-middle div h4{
     color: #f63;
    text-decoration: none;
    font-size: .426667rem /* 16/37.5 */;
}
.Preferential-middle div h4 span{
   color: #999;
    font-size: .266667rem /* 10/37.5 */;
    margin-left: 2px;
    text-decoration: line-through
}
 .like h1{
     height: .8rem /* 30/37.5 */;
    line-height: 1.066667rem /* 40/37.5 */;
    padding-left: .4rem /* 15/37.5 */;
    font-size: .373333rem /* 14/37.5 */;
    color: #777;
 }
 .like>div{
     margin-left: 15px;
    padding: .293333rem /* 11/37.5 */ .266667rem /* 10/37.5 */ .293333rem /* 11/37.5 */ 0;
    box-sizing: border-box;
    display: -webkit-box;
 }
 .like .like-pic{
     position: relative;
    font-size: 0;
    padding-right: 10px;
 }
 .like .like-pic>img{
     width: 2.4rem /* 90/37.5 */;
    height: 2.4rem /* 90/37.5 */;
 }
 .like .like-pic>div{
     position: absolute;
     top: 0;
     left:0;
    color: #e5bf86;
    font-size: .32rem /* 12/37.5 */;
    -webkit-transform: scale(.98);
    transform: scale(.98);
    padding: .08rem /* 3/37.5 */ .186667rem /* 7/37.5 */;
    background-color: #000;
    color: #e5bf86;
    position: absolute;
    font-weight: 700;
 }
 .like-center h2{
    max-width: 3.866667rem /* 145/37.5 */;
    font-size: .453333rem /* 17/37.5 */;
    font-weight: 700;
    color: #111;
    padding-right: .213333rem /* 8/37.5 */;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
     
 }
 .like-center h3{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .346667rem /* 13/37.5 */;
    color: #777;
    padding-top: .24rem /* 9/37.5 */;
    padding-bottom: .346667rem /* 13/37.5 */;
    width: 80%
 }
 .like-center div{
    display: -webkit-flex;
    display: flex;
    height: .586667rem /* 22/37.5 */;
    line-height: .586667rem /* 22/37.5 */;
    padding-right: .106667rem /* 4/37.5 */;
 }
 .like-center div>h4{
     color: #f63;
    font-size: .56rem /* 21/37.5 */;
    text-decoration: none;
    font-weight: 700;
    margin-right: .213333rem /* 8/37.5 */
 }
 .like-center div>h5{
     font-size: .346667rem /* 13/37.5 */;
    color: #777;
    text-decoration: line-through;
    vertical-align: 1px;
    margin-right    :1.333333rem /* 50/37.5 */
    }
.like-center div>h6{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
    font-size: .346667rem /* 13/37.5 */;
    color: #777;
    line-height: .64rem /* 24/37.5 */;
}
.seemore{
  /* display: none; */
  border-top:1px solid #f5f5f5;
  text-align: center;
  background-color: #fff;
  margin: 0;
  
}
.seemore h1{
  color: #333;
  font-size: .4rem /* 15/37.5 */;
   line-height: 1.2rem /* 45/37.5 */;
  margin: 0 auto;
   height: 1.2rem /* 45/37.5 */;
}
 
</style>
