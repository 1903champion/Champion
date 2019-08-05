<!-- The ref attr used to find the swiper instance -->
<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- 轮播第一页 -->
      <!-- slides -->
      <swiper-slide class="swiper-slide">
        <router-link to="/wedding">
          <div class="iconfont icon-liren"></div>
          <div>
            <span>婚礼</span>
          </div>
        </router-link>
        <router-link to="/maoyan">
          <div class="iconfont icon-icon_-maoyandianying"></div>
          <div>
            <span>猫眼电影</span>
          </div>
        </router-link>
        <router-link to="/jiudian">
          <div class="iconfont icon-jiudian"></div>
          <div>
            <span>酒店</span>
          </div>
        </router-link>
        <router-link to="/xiuxian">
          <div class="iconfont icon-jiubeikuai"></div>
          <div>
            <span>休闲娱乐</span>
          </div>
        </router-link>
        <router-link to="/waimai">
          <div class="iconfont icon-waimai"></div>
          <div>
            <span>外卖</span>
          </div>
        </router-link>
        <router-link to="/huoguo">
          <div class="iconfont icon-huoguo"></div>
          <div>
            <span>火锅</span>
          </div>
        </router-link>
        <router-link to="/liren">
          <div class="iconfont icon-knife-fork "></div>
          <div>
            <span>丽人</span>
          </div>
        </router-link>
        <router-link to="/gouwu">
          <div class="iconfont icon-gouwu-copy"></div>
          <div>
            <span>购物</span>
          </div>
        </router-link>
        <router-link to="/zhoubianyou">
          <div class="iconfont icon-xiaoshan"></div>
          <div>
            <span>周边游</span>
          </div>
        </router-link>
        <router-link to="/ktv">
          <div class="iconfont icon-huatong"></div>
          <div>
            <span>KTV</span>
          </div>
        </router-link>
      </swiper-slide>
      <!-- 轮播第二页 -->
      <swiper-slide>
        <router-link to="/meishi">
          <div class="iconfont icon-jiezhi"></div>
          <div>
            <span>婚纱摄影</span>
          </div>
        </router-link>
        <router-link to="/maoyan">
          <div class="iconfont icon-fangzi"></div>
          <div>
            <span>生活服务</span>
          </div>
        </router-link>
        <router-link to="/jiudian">
          <div class="iconfont icon-jingdian"></div>
          <div>
            <span>景点</span>
          </div>
        </router-link>
        <router-link to="/xiuxian">
          <div class="iconfont icon-qiche"></div>
          <div>
            <span>爱车</span>
          </div>
        </router-link>
        <router-link to="/waimai">
          <div class="iconfont icon-flow-yaling"></div>
          <div>
            <span>运动健身</span>
          </div>
        </router-link>
        <router-link to="/huoguo">
          <div class="iconfont icon-naiping"></div>
          <div>
            <span>亲子</span>
          </div>
        </router-link>
        <router-link to="/liren">
          <div class="iconfont icon-zhuangxiu"></div>
          <div>
            <span>家族</span>
          </div>
        </router-link>
        <router-link to="/gouwu">
          <div class="iconfont icon-shuben"></div>
          <div>
            <span>学习培训</span>
          </div>
        </router-link>
        <router-link to="/zhoubianyou">
          <div class="iconfont icon-yiliao"></div>
          <div>
            <span>医疗健康</span>
          </div>
        </router-link>
        <router-link to="/ktv">
          <div class="iconfont icon-huayishidaojia"></div>
          <div>
            <span>到家</span>
          </div>
        </router-link>
      </swiper-slide>

      <!-- 轮播第三页 -->

      <swiper-slide>
        <router-link to="/meishi">
          <div class="iconfont icon-dangao"></div>
          <div>
            <span>小吃快餐</span>
          </div>
        </router-link>
        <router-link to="/maoyan">
          <div class="iconfont icon-yachi_teeth"></div>
          <div>
            <span>口腔齿科</span>
          </div>
        </router-link>
        <router-link to="/jiudian">
          <div class="iconfont icon-zizhucan"></div>
          <div>
            <span>自助餐</span>
          </div>
        </router-link>
        <router-link to="/xiuxian">
          <div class="iconfont icon-meifa"></div>
          <div>
            <span>美发</span>
          </div>
        </router-link>
        <router-link to="/waimai">
          <div class="iconfont icon-meijia"></div>
          <div>
            <span>美甲美睫</span>
          </div>
        </router-link>
        <router-link to="/huoguo">
          <div class="iconfont icon-shouye-mianmo"></div>
          <div>
            <span>美容SPA</span>
          </div>
        </router-link>
        <router-link to="/liren">
          <div class="iconfont icon-yifu"></div>
          <div>
            <span>瘦身纤体</span>
          </div>
        </router-link>
        <router-link to="/gouwu">
          <div class="iconfont icon-yuyin"></div>
          <div>
            <span>亲子摄影</span>
          </div>
        </router-link>
        <router-link to="/zhoubianyou">
          <div class="iconfont icon-youerjiaoyu"></div>
          <div>
            <span>幼儿教育</span>
          </div>
        </router-link>
        <router-link to="/ktv">
          <div class="iconfont icon-leimupinleifenleileibie1"></div>
          <div>
            <span>全部分类</span>
          </div>
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
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
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {},
  methods: {}
};
</script>

  <style scoped>
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-pagination {
  bottom: -2px;
}
.swiper-pagination-bullet-active {
  background: #f5734b !important;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  float: left;
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  position: relative;
  width: 10rem /* 375/37.5 */;
  left: 0px;
  transition-duration: 0ms;
  transform: translate(0px, 0px) translateZ(0px);
}
.swiper-slide > a {
  width: 20%;
  height: 87px;
  padding: 13px 0 0;
  display: block;
  float: left;
  color: #333;
  position: relative;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  font-size: 13px;
  text-decoration: none;
}
.swiper-slide > a > div:nth-of-type(1) {
  border-radius: 50%;
  width: 44px;
  line-height: 44px;
  margin: 0 auto 2px;
  color: #fff;
  position: relative;
  /* background: red; */
  font-size: 0.64rem; /* 24/37.5 */
}
.icon-knife-fork {
  background: #ffc22c;
}
.icon-icon_-maoyandianying {
  background: #ff5241;
}
.icon-jiudian {
  background: #39a1dd;
}
.icon-jiubeikuai {
  background: #7747fc;
}
.icon-waimai {
  background: #42c5d6;
}
.icon-huoguo {
  background: #ff7657;
}

.icon-liren {
  background: #fc2668;
}

.icon-gouwu-copy {
  background: #8b54ca;
}

.icon-xiaoshan {
  background: #a0e23c;
}

.icon-huatong {
  background: #8250c9;
}
.icon-jiezhi {
  background: #fe3e72;
}
.icon-fangzi {
  background: #3595e1;
}
.icon-jingdian,
.icon-shuben {
  background: #a1e23d;
}
.icon-qiche {
  background: #2fc6f5;
}
.icon-flow-yaling {
  background: #19d2bc;
}
.icon-naiping,
.icon-zhuangxiu {
  background: #ffb530;
}
.icon-yiliao,
.icon-huayishidaojia {
  background: #38bcd4;
}
.icon-dangao {
  background: #18d1b9;
}
.icon-yachi_teeth {
  background: #37bbd4;
}
.icon-zizhucan {
  background: #ff7955;
}
.icon-meifa,
.icon-meijia,
.icon-shouye-mianmo,
.icon-yifu {
  background: #ff427d;
}
.icon-yuyin,
.icon-youerjiaoyu {
  background: #ffc528;
}
.icon-leimupinleifenleileibie1 {
  background: #3ca7dc;
}
</style>