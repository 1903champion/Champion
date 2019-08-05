<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class='elongHead' v-for='h in headElong' :key='h.adId'>
        <img :src="h.picUrl">
    </swiper-slide>
   

    <!-- Optional controls -->
    <div class="swiper-pagination elongHeadPoint"  slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import axios from 'axios'

import { swiper, swiperSlide } from "vue-awesome-swiper";
  export default {
    components: {
    swiper,
    swiperSlide
  },

    data() {
      return {
        headElong:[],
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
        axios.get('/home/api/gethotelbanners?_rt=1564801913508')
        .then(res=>{
            this.headElong=res.data.advList
        })
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style scoped>
.elongHead img{
    height:3.733333rem /* 140/37.5 */;
}
.elongHeadPoint{
    position:absolute;
    right:0 /* 100/37.5 */
}
</style>
