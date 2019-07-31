<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>


        </swiper>
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