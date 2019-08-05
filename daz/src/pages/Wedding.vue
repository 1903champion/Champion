<template>

<div id="box">
    <div class="gotop" :class="{topshow:topshow}">
        <img @click="gotop" src="../assets/img/gotop.png" alt="">
    </div>
   

    <!-- 顶部广告 -->
    <div class="swiper-container swiper1">
        <div class="swiper-wrapper">
            <div class="swiper-slide swiper-no-swiping">Slide1SlideSlideSlideSlide 1</div>
            <div class="swiper-slide swiper-no-swiping" >Slide 2SlideSlideSlide</div>
            <div class="swiper-slide swiper-no-swiping ">Slide 3SlideSlideSlideSlide</div>
        </div>
        <img src="../assets/img/icon_laba.png" alt="">
    </div>
    <!-- 顶部title内容 -->
    <div class="head-bg">
        <a href="#"><img src="../assets/img/logo.png" alt=""></a>
        <div>
            <a href="#" @click="callPhone"><img src="../assets/img/phone.png" alt=""></a>
            <a href="#">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                         <img src="../assets/img/icon_list.png" alt="">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>品牌介绍</el-dropdown-item>
                        <el-dropdown-item>我的登录</el-dropdown-item>
                        <el-dropdown-item>客片欣赏</el-dropdown-item>
                        <el-dropdown-item>全球旅拍</el-dropdown-item>
                        <el-dropdown-item>拍摄基地</el-dropdown-item>
                        <el-dropdown-item>客户好评</el-dropdown-item>
                        <el-dropdown-item>新闻资讯</el-dropdown-item>
                        <el-dropdown-item>花园地址</el-dropdown-item>
                        
                    </el-dropdown-menu>
                </el-dropdown>
            </a>
        </div>
    </div>
    <!-- 第二个轮播 -->
    <div class="swiper-container swiper2">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/img/sw1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/img/sw1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/img/sw1.jpg" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>

   <!-- 中间内容 -->
    <ul class="center-ctn">
        <li>
            <a @click="goshot" href="#">
                <img src="../assets/img/icon_ourstory.png" alt="">
                <p>各地拍</p>
                <p>OUR STORY</p>
            </a>
        </li>
        <li>
            <a @click="gomy" href="#">
                <img src="../assets/img/bb.png" alt="">
                <p>我的登录</p>
                <p>OUR STORY</p>
            </a>
        </li>
        
        <li>
            <a href="#">
                <img src="../assets/img/cc.png" alt="">
                <p>客片欣赏</p>
                <p>OUR STORY</p>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="../assets/img/dd.png" alt="">
                <p>全球旅拍</p>
                <p>OUR STORY</p>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="../assets/img/ee.png" alt="">
                <p>拍摄基地</p>
                <p>OUR STORY</p>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="../assets/img/ff.png" alt="">
                <p>客户好评</p>
                <p>OUR STORY</p>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="../assets/img/gg.png" alt="">
                <p>新闻资讯</p>
                <p>OUR STORY</p>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="../assets/img/hh.png" alt="">
                <p>花园地址</p>
                <p>OUR STORY</p>
            </a>
        </li>
    </ul>
    <!-- 视频 -->
    <div class="video">
        <div>
            <video id="video" controls src="../assets/video/jinwf.mp4" ></video>
        </div>
        <img @click="paly" v-show="videobool" src="../assets/img/videoimg.jpg" alt="">
    </div>
 
<!-- 图片样例 -->
        <div class="yangli" id="searchBar">
            <img src="../assets/img/title_newstyleguide.png" alt="">
        </div>
        <div class="photo"> 
            <div class="item"> 
                <img src="../assets/img/a.jpg" alt="">
                <h4>Photo Name</h4>
                <h5>极简视觉2.0</h5>
                <p>GARDEN EXC...</p>
                <span>2019.07.20</span>
            </div> 
            <div class="item"> 
                    <img src="../assets/img/c.jpg" alt=""> 
                    <h4>Photo Name</h4>
                <h5>极简视觉2.0</h5>
                <p>2019  CITY GARDEN EXC....0</p>
                <span>2019.07.20</span>
            </div>
            <div class="item"> 
                    <img src="../assets/img/d.jpg" alt="">
                    <h4>Photo Name</h4>
                <h5>极简视觉2.0</h5>
                <p>夏日清脆 阳光明媚  镜头下的仪式感夏日清脆 阳光明媚  镜头下的仪式感  年...</p>
                <span>2019.07.20</span>
            </div>
            <div class="item"> 
                    <img src="../assets/img/b.jpg" alt="">
                    <h4>Photo Name</h4>
                <h5>极简视觉2.0</h5>
                <p>夏日清脆 阳光明媚  镜头下的仪式感  年...</p>
                <span>2019.07.20</span>
            </div>
            <div class="item"> 
                    <img src="../assets/img/b.jpg" alt="">
                    <h4>Photo Name</h4>
                <h5>极简视觉2.0</h5>
                <p>夏日清脆 阳光明媚  镜头下的仪式感  年...</p>
                <span>2019.07.20</span>
            </div>
         </div>   
         <div class="yangli">
                <img src="../assets/img/onebyone.png" alt="">
        </div>
         <form class="userinfo">
            <input type="text" name="username" placeholder="姓名">
            <input type="number" name="userphone" placeholder="手机号/微信号">
            <input :plain="pbool" @click="tj" type="button" value="提交">
         </form>
        <!-- 地图 -->
        <div class="amap-page-container">
            <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
                <el-amap-text v-for="text in texts" :text="text.text" :offset="text.offset" :position="text.position" :events="text.events"></el-amap-text>
            </el-amap>
        </div>
        <!-- 联系我们 -->
        <div class="footer">
            <h3>Where we are</h3>
            <p>北京城市花园尊贵婚纱电影城</p>
            <ul>
                <li>
                    <h5>ADD/地址</h5>
                    <p>北京市丰台区南三环西路65号</p>
                </li>
                <li>
                    <h5>ADD/地址</h5>
                    <p>北京市丰台区南三环西路65号</p>
                </li>
                <li>
                    <h5>ADD/地址</h5>
                    <p>北京市丰台区南三环西路65号</p>
                </li>
                <li>
                    <h5>ADD/地址</h5>
                    <p>北京市丰台区南三环西路65号</p>
                </li>
            </ul>
            <div>
                    <h4>© Beijing city garden wedding photography co. LTD</h4>
                     <h4>© 北京城市花园婚纱摄影有限公司 京ICP备15005933号</h4>
            </div>
            
        </div>
        
</div>
</template>

<script>
import Swiper from "swiper";
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
     components: {
        swiper,
        swiperSlide
    },
    data(){
        return{
            mokuai:false,//模块的显示隐藏
            videobool:true,//视频图片的显示
            auto:" ",//视频暂停
            topshow:false,//滚动事件
            pbool:false,
            // msg: 'vue-amap向你问好！'
             zoom: 15,
            center: [107.3523520000, 30.3311750000],
            texts: [
                {
                position: [107.3523520000,30.3311750000],
                text: '去这里',
                offset: [0, 0],
                events: {
                    click: () => {
                    alert('click text');
                    }
                }
                }
            ]
        }
    },
   
    methods:{

        callPhone () {
            console.log("拨打")
            window.location.href = 'tel://' + 13224069818
        },
        paly(){ //点击播放
            this.videobool=false;
            document.getElementById("video").play()
        },
        // 监听滚动事件
        handleScroll (e) {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let offsetTop = document.querySelector('#searchBar').offsetTop//当前元素据顶部的距离      
            if(scrollTop>offsetTop){
                this.topshow=true;
            }else{
                this.topshow=false;
            }
        },
        // 提交用户表单
        tj(){
            let phone=document.querySelector(".userinfo>input:nth-of-type(2)").value;
            console.log(phone)
            if((/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))){
                  this.$message({
                    message: '提交成功，提起祝你新婚快乐',
                    type: 'success'
                    });
            }else{
                console.log("no")
                this.pbool=true;
                this.$message.error('手机号格式不对哦~');
            }
        },
        // 点击回到顶部
        gotop(){
            const returnEle = document.querySelector("#box");
            if (returnEle) {
                returnEle.scrollIntoView(true);
            }
        },
        goshot(){
            this.$router.push('shot')
            
        },
        gomy(){
            this.$router.push("weddinglogin")
            console.log(1)
        }


    },
   mounted(){
       console.log(document.getElementById("video"))
         window.addEventListener('scroll',this.handleScroll)
       //轮播一
        var swiper = new Swiper('.swiper1', {
            loop : true,
            noSwiping : true,
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            direction: 'vertical',
           
        }); 
        // 第二个轮播
             var swiper = new Swiper('.swiper2', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                });
    
    
 
 }
}
</script>

<style scoped>
    .head-bg{
        height: 84px;
        background: url(../assets/img/weddingbg.jpg) no-repeat;
        background-size: 100% 100%;
        padding: 0 .266667rem /* 10/37.5 */;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    @import url("../assets/css/wedding.css");
</style>

