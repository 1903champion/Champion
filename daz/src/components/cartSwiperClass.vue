<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class='centerClass'>
      <div class='classList'>
          <div class="iconfont icon-fuzhuang"></div>
          <p>服装</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-xiexue" style='color:#F54081'></div>
          <p>鞋靴</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-icon-" style='color:#7260F1'></div>
          <p>箱包</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-maozi" style='color:#F9A545'></div>
          <p>配饰</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-neiyi" style='color:#F6497C'></div>
          <p>内衣</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-zhubaopeishi" style='color:#A849EC'></div>
          <p>珠宝饰品</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-jianshen-yundongxie-xie-exercisesh" style='color:#746BF6'></div>
          <p>户外运动</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-shechipin" style='color:#AA51E4'></div>
          <p>奢侈品</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-shouyedianpujishishangcheng" style='color:#755EF3'></div>
          <p>书店影像</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-shangdian" style='color:#FAAD4A'></div>
          <p>特色集市</p>
      </div>
    </swiper-slide>
    <swiper-slide class='centerClass'>
      <div class='classList'>
          <div class="iconfont icon-shoubiao" style='color:#F54081'></div>
          <p>钟表</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-bao" style='color:#F54081'></div>
          <p>轻奢</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-weiyi" style='color:#7260F1'></div>
          <p>快时尚</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-shouyedianpujishishangcheng" style='color:#F9A545'></div>
          <p>折扣店</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-armchair" style='color:#F6497C'></div>
          <p>日用家居</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-bao-" style='color:#A849EC'></div>
          <p>杂货礼品</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-bangonglou" style='color:#746BF6'></div>
          <p>办公文化</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-shangdian" style='color:#AA51E4'></div>
          <p>免税店</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-chehangAmen" style='color:#755EF3'></div>
          <p>车行</p>
      </div>
      <div class='classList'>
          <div class="iconfont icon-shangdian" style='color:#FAAD4A'></div>
          <p>特色集市</p>
      </div>
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
  export default {
    components: {
    swiper,
    swiperSlide
  },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style scoped>
.centerClass{
    background:#fff;
    padding:5px 10px 12px ! important;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
}
.centerClass .classList{
    height:1.866667rem /* 70/37.5 */;
    width:20%;
    padding:.266667rem /* 10/37.5 */ 0 0;
}
.centerClass .classList>div.iconfont{
    height:.88rem /* 33/37.5 */;
    width:.88rem /* 33/37.5 */;
    font-size:.88rem /* 33/37.5 */;
    color:orangered;
    margin:0 auto;
}
.centerClass .classList p{
    font-size:.346667rem /* 13/37.5 */;
    color: #333;
    text-align: center;
    height:.613333rem /* 23/37.5 */;
    line-height:.613333rem /* 23/37.5 */;
    margin-top:.133333rem /* 5/37.5 */;
}
</style>
