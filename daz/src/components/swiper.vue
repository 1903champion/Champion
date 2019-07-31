<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper" >

            <!--轮播页面 -->
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
        </swiper>
           <!-- 这是按钮指示器 -->
            <div class="swiper-pagination"></div>
    </div>
</template>
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数

           pagination: {
              el: '.swiper-pagination',
            },

        }
      }
    },
    computed: {
      swiper() {
        // return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
     
    },
    methods: {
        slideChangeEnd(){
            // console.log('slideChangeEnd')
        }
    },
  }

</script>

<style scoped>
.swiper-container {
      width: 100%;
      height: 100%;
    }
.swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
}
</style>



