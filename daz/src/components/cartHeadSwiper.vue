<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <img src='./../assets/img/banner.png'>
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
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style scoped>
.swiper-container{
  background:#4b445c;

}
.swiper-slide{
  height:2.933333rem /* 110/37.5 */;
}
.swiper-slide img{
  height:2.933333rem /* 110/37.5 */;
}
.swiper-pagination-bullet-active{
  background: #fff !important;
}
span.swiper-pagination-bullet{
  border-radius:0;
  height:8px !important;
  width:15px !important;
}
</style>
