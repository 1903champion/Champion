<template >
    <div class='elong'>
            <elongHeadSwiper/>
            <div class='elongCenter'>
                <ul>
                    <li class='list1' >
                        <b class='iconfont icon-shouyedianpujishishangcheng'></b>
                        <router-link to='/elongAddr'>
                            {{elongChoosed?elongChoosed:'重庆'}}
                        </router-link>
                        <i class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></i>
                        <i class='iconfont icon-location'></i>
                        <em @click='searchAddr'>附近</em>
                    </li>
                    <li class='list2'>
                        <!-- <b class='iconfont icon-rili'></b> -->
                            <elongTime/>
                            <i class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></i>

                    </li>
                    <li class='list3'>
                        <router-link to='/elongName'>
                            <b class='iconfont icon-fangdajing-copy'></b>
                           {{elongNameChoosed?elongNameChoosed:'酒店名称/位置不限'}}
                        </router-link>
                        <i class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></i>
                    </li>
                     <li class='list4' @click='chooseModel'>
                        <router-link to=''>
                            <b class='iconfont icon-qian'></b>
                           价格星级不限
                        </router-link>
                        <i class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></i>
                    </li>
                    <div class='priceModel' v-show='sureBool' ref='resetTo'>
                        <div class='prContent'>
                            <div class='contentBox'>
                                <div class='xiji'>
                                    <h3>星级（可多选）</h3>
                                    <ul ref='star'>
                                        <li>不限</li>
                                        <li>经济/客栈</li>
                                        <li>三星/舒适</li>
                                        <li>四星/高档</li>
                                        <li class='last'>五星/豪华</li>
                                    </ul>
                                </div>
                                <div class='xiji'>
                                    <h3>价格</h3>
                                    <ul class='list2'>
                                        <li>不限</li>
                                        <li>0-150</li>
                                        <li>150-300</li>
                                        <li>300-450</li>
                                        <li>450-700</li>
                                        <li class='last'>700以上</li>
                                    </ul>
                                </div>                               
                            </div>
                            <div class='btn'>
                                <button @click='reset'>重置</button>
                                <button @click='sure'>确定</button>
                            </div>
                        </div>
                    </div>
                    <div class='searchAddrModel' v-show='searchAddrBool'>
                        <div class='srContent'>
                            <div class='contentBox'>
                                <p>定位失败，可能是您的手机关闭了定位权限。您可以去手机设置-隐私-打开定位，或者手动选择城市。</p>                                                          
                            </div>
                            <div class='btnSearch'>
                                <button @click='cancelChoose'>取消</button>
                                <button @click='chooseCitys'>选择城市</button>
                            </div>
                        </div>
                    </div>
                </ul>
                <div class='elongSearch'>
                    <button><span class='iconfont icon-fangdajing-copy'></span>搜索</button>
                </div>
            </div>
            <div class='elongClass'>
                <div class='classList'>
                    <div class="iconfont icon-jipiao" style='color:#FF724C'></div>
                    <p>机票</p>
                </div>
                 <div class='classList'>
                    <div class="iconfont icon-location" style='color:#55C6ED'></div>
                    <p>附近</p>
                </div>
                <div class='classList'>
                    <div class="iconfont icon-guojijiudian" style='color:#3ABF9C'></div>
                    <p>国际</p>
                </div>
                <div class='classList'>
                    <div class="iconfont icon-huochepiao" style='color:#4ACAA8'></div>
                    <p>火车票</p>
                </div>
                <div class='classList'>
                    <div class="iconfont icon-qichepiao" style='color:#FF7245'></div>
                    <p>汽车票</p>
                </div>
                <div class='classList'>
                    <div class="iconfont icon-minsu_" style='color:#FFDD65'></div>
                    <p>民宿</p>
                </div>
                <div class='classList'>
                    <div class="iconfont icon-shijian-" style='color:#88D7F2'></div>
                    <p>钟点房</p>
                </div>
                <div class='classList'>
                    <div class="iconfont icon-shu" style='color:#FFC548'></div>
                    <p>攻略</p>
                </div>
                <div class='classList'>
                    <div class="iconfont icon-dingdan" style='color:#FF724C'></div>
                    <p>特惠</p>
                </div>
            </div>
            <div class='person'>
                 <div class='classList'>
                    <b class="iconfont icon-yonghutouxiang" ></b>
                    <span>账户</span>
                </div>
                <div class='classList'>
                    <b class="iconfont icon-dingdan" ></b>
                    <span>订单</span>
                </div>
                <div class='classList'>
                    <b class="iconfont icon-weibiaoti-"></b>
                    <span>电话</span>
                </div>
            </div>
            <div class='bg'>
                <img src="http://m.elongstatic.com/static/webapp/hotel/2016/03/v2/img/search_app.jpg" alt="">
            </div>
            <div class='city'>
                <h3>热门城市</h3>
                <ul>
                    <li class='imglist1'>
                        <h3>北京</h3>
                        <p>共有<span>5410</span>家酒店</p>
                        <span class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></span>
                    </li>
                    <li class='imglist1'>
                        <h3>上海</h3>
                        <p>共有<span>4160</span>家酒店</p>
                        <span class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></span>
                    </li>
                    <li class='imglist1'>
                        <h3>广州</h3>
                        <p>共有<span>4271</span>家酒店</p>
                        <span class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></span>
                    </li>
                    <li class='imglist1'>
                        <h3>深圳</h3>
                        <p>共有<span>3232</span>家酒店</p>
                        <span class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></span>
                    </li>
                    <li class='imglist1'>
                        <h3>香港</h3>
                        <p>共有<span>572</span>家酒店</p>
                        <span class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></span>
                    </li>
                    <li class='imglist1'>
                        <h3>杭州</h3>
                        <p>共有<span>3037</span>家酒店</p>
                        <span class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></span>
                    </li>
                    <li class='imglist1'>
                        <h3>苏州</h3>
                        <p>共有<span>1641</span>家酒店</p>
                        <span class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></span>
                    </li>
                    <li class='imglist1'>
                        <h3>宁波</h3>
                        <p>共有<span>1111</span>家酒店</p>
                        <span class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></span>
                    </li>
                    <li class='imglist1'>
                        <h3>南京</h3>
                        <p>共有<span>2394</span>家酒店</p>
                        <span class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></span>
                    </li>
                    <li class='imglist1'>
                        <h3>三亚</h3>
                        <p>共有<span>2106</span>家酒店</p>
                        <span class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></span>
                    </li>
                </ul>
            </div>
            <div class='footer'>
                <p>©2009-2019 艺龙网信息技术（北京）有限公司</p>
                <a href="http://m.elongstatic.com/static/webapp/myelong/static/elservice/service_ruler.html">《艺龙旅行网服务条款》</a>
            </div>
    </div>
</template>

<script>
import elongTime from './../elongTime'
import axios from 'axios'
import elongHeadSwiper from './../elongHeadSwiper'
import {mapState,mapActions,mapMutations} from 'vuex'

export default {
    data(){
        return {
            headElong:[], 
            sureBool:false,
            searchAddrBool:false,       
        }
    },
     mounted(){     
  },
  components:{
    elongHeadSwiper,elongTime
  },
  computed:{
        ...mapState(['elongChoosed','elongNameChoosed'])
    },
    methods:{
        sure(){
            this.sureBool=!this.sureBool
        },
        reset(){
            this.sureBool=!this.sureBool            
        },
        chooseModel(){
            this.sureBool=!this.sureBool
        },
        cancelChoose(){
            this.searchAddrBool=!this.searchAddrBool
        },
        chooseCitys(){
            this.$router.push('elongAddr')
        },
        searchAddr(){
            this.searchAddrBool=!this.searchAddrBool
        }
    }
}
</script>

<style scoped>
@import url('//at.alicdn.com/t/font_1324710_i0cpn8s3hsd.css');
ul{
    list-style:none;
}
a{
    text-decoration: none;
}
.elong{
    position:relative;
    background:#F2F2F2;
}
.elongCenter{
    background:#fff;
}
.elongCenter>ul{
    padding:0 .32rem /* 12/37.5 */;
}
.elongCenter>ul>li{
    height:.906667rem /* 34/37.5 */;
    padding:.32rem /* 12/37.5 */ 0; 
    font-size:.373333rem /* 14/37.5 */;
    border-bottom: 1px solid #DDD;
    color: #C0C4CC;
    position:relative;
    line-height:.906667rem /* 34/37.5 */;

}
.elongCenter>ul>li.list1{
    height:.586667rem /* 22/37.5 */;
    line-height:.586667rem /* 22/37.5 */;
}

.elongCenter>ul>li b{
    margin:0px 40px 0 10px;
    
    font-size:.48rem /* 18/37.5 */;
    float:left
}
.elongCenter>ul>li.list1 a{
    float:left;
    width:60%;
    /* color:#555; */
    font-weight:700;
    display: block;
    color:#C0C4CC;
    text-decoration: none;
}
.icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing{
    font-weight:700;
}
.icon-location{
    color:#49f;
}
.elongCenter>ul>li em{
    font-style:normal;
    color:#49f;
    font-size:.32rem /* 12/37.5 */;
}
.elongCenter>ul>li a{
    color: #C0C4CC;
    display:block;
    width:100%;
    line-height:.906667rem /* 34/37.5 */;

    
}
.elongCenter>ul>li.list3 i{
    position:absolute;
    right:.533333rem /* 20/37.5 */;
    top:30%;
}
.elongCenter>ul>li.list2>i{
    position:absolute;
    right:.533333rem /* 20/37.5 */;
    top:30%;
}
.elongCenter>ul>li.list4>i{
    position:absolute;
    right:.533333rem /* 20/37.5 */;
    top:30%;
}
.priceModel{
    position:fixed;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    top:0;
    left:0;
    z-index:2;
}
.prContent{
    background:#fff;
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
}
.contentBox{
    padding:.32rem /* 12/37.5 */ .32rem /* 12/37.5 */ .64rem /* 24/37.5 */;
    width:100%;
    height:3.733333rem /* 140/37.5 */;

}

.xiji h3{
    font-size:.346667rem /* 13/37.5 */;
    color:#555;
}
.xiji ul{
    overflow: hidden;
    height:1.093333rem /* 41/37.5 */;
    box-sizing: border-box;
    padding-right:.32rem /* 12/37.5 */;
    width:9.36rem /* 351/37.5 */;
    margin-top:4px;
}
.xiji ul li{
    float:left;
    line-height:1.04rem /* 39/37.5 */;
    font-size:.32rem /* 12/37.5 */;
    color:#555;
    text-align: center;
    width:1.76rem /* 66/37.5 */;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
    border-right: 0;
}
.xiji ul li.last{
    border-right:1px solid #ddd;
}
.xiji:nth-of-type(2){
    margin-top:.32rem /* 12/37.5 */;
}
.xiji ul.list2 li{
    width:1.466667rem /* 55/37.5 */;
}
.btn{
    height:1.173333rem /* 44/37.5 */;
    background:#f8f8f8;
    display:flex;
    justify-content: space-around;
    align-items:center;
}
.btn button{
    width:4.693333rem /* 176/37.5 */;
    height:.96rem /* 36/37.5 */;
    background:#fff;
    text-align:center;
    border: 1px solid #DDD;
    border-radius: 3px;
    line-height: 34px;
    font-size:.426667rem /* 16/37.5 */;
}
.btn button:nth-of-type(2){
    background:#49f;
    color:#fff;
}
.elongSearch{
    height:1.173333rem /* 44/37.5 */;
    padding:.533333rem /* 20/37.5 */ 1.2rem /* 45/37.5 */;
}
.elongSearch button{
    width:100%;
    height:1.173333rem /* 44/37.5 */;
    background:#49f;
    border:none;
    outline:none;
    color:#fff;
    font-size:.426667rem /* 16/37.5 */;
}
.elongSearch button span{
    margin-right:.133333rem /* 5/37.5 */;
}
.elongClass{
    background:#fff;
    margin-top:.533333rem /* 20/37.5 */;
    overflow: hidden;
    padding:.32rem /* 12/37.5 */ 0;
}
.elongClass .classList{
    width:2rem /* 75/37.5 */;
    height:2rem /* 75/37.5 */;
    float:left;
    text-align:center;
}
.elongClass .classList>div{
    height:.826667rem /* 31/37.5 */;
    width:.88rem /* 33/37.5 */;
    line-height:.826667rem /* 31/37.5 */;
    font-size:.826667rem /* 31/37.5 */;
    text-align: center;
    margin:0 auto .106667rem /* 4/37.5 */;
}
.person{
    margin-top:.533333rem /* 20/37.5 */ ;
    height:1.2rem /* 45/37.5 */;
    line-height:1.2rem /* 45/37.5 */;
    display:flex;
    justify-content: space-between;
    background:#fff;
    text-align: center;
    box-sizing: border-box;
}
.person .classList{
    width:33.3%;
    border-right:1px solid #ddd;
}
.person .classList b{
    color:#49f;
    font-size:.533333rem /* 20/37.5 */;
    margin-right:.266667rem /* 10/37.5 */;
    vertical-align: middle;
}
.person .classList span{
    font-size:.373333rem /* 14/37.5 */;
    color:#555;

}
.bg{
    width:100%;
    height:2.053333rem /* 77/37.5 */;
    margin-top:.533333rem /* 20/37.5 */;
}
.bg img{
    width:100%;
}
.city>h3{
    text-align: center;
    font-size:.373333rem /* 14/37.5 */;
    color:#555;
    font-weight:100;
    margin:.266667rem /* 10/37.5 */ 0;
}
.city ul li{
    height:1.573333rem /* 59/37.5 */;
    margin-bottom: 4px;
    background:url('//m.elongstatic.com/static/webapp/hotel/img/search/citys.jpg') 0 0;
    background-size: 100% 20rem /* 750/37.5 */;
    color:#fff;
    padding:.426667rem /* 16/37.5 */ .64rem /* 24/37.5 */ 0;
    position:relative;
}
.city ul li h3{
    font-size:.64rem /* 24/37.5 */;
    margin:0 /* 16/37.5 */ 0 2px;
}
.city ul li p{
    font-size:.346667rem /* 13/37.5 */;
}
.city ul li p span{
    color:red;
}
.city ul li>span{
    position:absolute;
    right:.533333rem /* 20/37.5 */;
    top:50%;
    margin-top:-.266667rem /* 10/37.5 */;
}
.city ul li:nth-of-type(2){
    background-position: 0 -75px;
}
.city ul li:nth-of-type(3){
    background-position: 0 -150px;
}
.city ul li:nth-of-type(4){
    background-position: 0 -225px;
}
.city ul li:nth-of-type(5){
    background-position: 0 -300px;
}
.city ul li:nth-of-type(6){
    background-position: 0 -375px;
}
.city ul li:nth-of-type(7){
    background-position: 0 -450px;
}
.city ul li:nth-of-type(8){
    background-position: 0 -525px;
}
.city ul li:nth-of-type(9){
    background-position: 0 -600px;
}
.city ul li:nth-of-type(10){
    background-position: 0 -675px;
}
.city ul li:nth-of-type(2){
    background-position: 0 -75px;
}
.footer{
    padding:.4rem /* 15/37.5 */ 0 1.6rem /* 60/37.5 */;
    text-align: center;
    line-height: 18px;
    color:#888;
}
.footer a{
    color:#888;
    cursor: pointer;
}
.searchAddrModel{
    position: fixed;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background:rgba(0,0,0,0.5);
    z-index:3;
}
.searchAddrModel .srContent{
    height:3.6rem /* 135/37.5 */;
    position:absolute;
    bottom:0;
    left:0;
    background:#EEE;
    padding:.266667rem /* 10/37.5 */ .533333rem /* 20/37.5 */;
}
.searchAddrModel .srContent .contentBox{
    width:8.4rem /* 315/37.5 */;
    padding:.266667rem /* 10/37.5 */;
    font-size:.426667rem /* 16/37.5 */;
    color:#000;
    text-align: center;
}
.searchAddrModel .srContent .btnSearch{
    height:1.173333rem /* 44/37.5 */;
    background:#f8f8f8;
    display:flex;
    justify-content: space-between;
    align-items:center;
    position:absolute;
    left:0;
    bottom:.533333rem /* 20/37.5 */;
    padding:0 .32rem /* 12/37.5 */;
    width:100%;
    box-sizing: border-box;
}
.searchAddrModel .srContent .btnSearch button{
    width:4.266667rem /* 160/37.5 */;
    height:.96rem /* 36/37.5 */;
    background:#fff;
    text-align:center;
    border: 1px solid #4499FF;
    border-radius: 3px;
    line-height: 34px;
    font-size:.426667rem /* 16/37.5 */;
}
.searchAddrModel .srContent .btnSearch button:nth-of-type(2){
    background:#49f;
    color:#fff;
}
</style>

