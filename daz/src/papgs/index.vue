<template >
    <div>
        <div class="index">
            <div class="header">
                <h1>重庆  <span class="iconfont icon-jiantou8"></span></h1> 
                <div class="header-input"><span class="iconfont icon-fangdajing-copy">
                    输入商户名、地点
                    </span>
                </div>
                <span class="iconfont icon-04"></span>
            </div>
            <div class="content">
                <div class="content-title"><span class="iconfont icon-dazhongdianping"></span> <h1>{{indexheader.title}}</h1>
                </div>
                <div class="content-footer">
                    <h1>{{indexheader.openAppText}}</h1>
                    <h2>{{indexheader.downloadAppText}}</h2>
                </div>
            </div>
            <!-- 滚动swiper -->
            <swiper/>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex";
import swiper from "../components/swiper"
export default {
    computed: {
        ...mapState(["indexheader"])
    },
    methods: {
        ...mapActions(['getindexheader'])
    },
    mounted() {
        this.getindexheader()
    },
    components:{
        swiper
    }
}
</script>
<style scoped>
@import url("http://at.alicdn.com/t/font_1324710_w0j2yjrkrlk.css");
.index{
    overflow: hidden;
}
.header{
    position: fixed;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #f63;
    color: #fff;
    padding: 0 10px;
    text-align: center;
    display: -webkit-box;
    z-index: 305;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.header h1{
    position: relative;
    padding-right: 17px;
    font-size: .373333rem /* 14/37.5 */;
    color: #fff;
    max-width: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
}
.header-input {
    background-color: #fff;
    padding: 0 0 0 .8rem /* 30/37.5 */;
    -webkit-box-flex: 1;
    height: 30px;
    margin: 9px 6px 9px 10px;
    line-height: 32px;
    color: #b8b8b8;
    text-align: left;
    font-size: 13px;
    transition: left .2s,right .2s;
    -webkit-border-radius: 25px;
    border-radius: 25px;
    position: relative;
}
.header-input span{
    font-size: 8px;
}
.header>span{
    display: block;
    width: 28px;
    height: 100%;
    font-size: .64rem /* 24/37.5 */
}
.content{
    background: url("../assets/img/bgt.jpg")no-repeat 0 0 ;
    height: 120px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin-top :50px; 
    overflow: hidden;
}
.content-title{
    display: flex;
    justify-content: center;
    margin: 24px 0 14px;
    
    height: 30px;}
.content-title span{
    height: 30px;
    width: 30px;
     margin-right: 8px;
     font-size: .8rem /* 30/37.5 */;
     background: #fff;
     color: #f63    
}  
.content-title h1{
    font-size: 20px;
    color: #111;
    font-weight: bolder;
}
.content-footer{
    display: flex;
    justify-content: center;
}
.content-footer h1{
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
.content-footer h2{
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
</style>
