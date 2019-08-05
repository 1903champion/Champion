<template >
    <div class='elong'>
            <elongHeadSwiper/>
            <div class='elongCenter'>
                <ul>
                    <li class='list1' >
                        <b class='iconfont icon-shouyedianpujishishangcheng'></b>
                        <router-link to='/elongAddr'>深圳</router-link>
                        <i class='iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing'></i>
                        <i class='iconfont icon-location'></i>
                        <em>附近</em>
                    </li>
                    <li class='list2'>
                        <!-- <b class='iconfont icon-rili'></b> -->
                            <elongTime/>

                    </li>
                </ul>
            </div>
    </div>
</template>

<script>
import elongTime from './../elongTime'
import axios from 'axios'
import elongHeadSwiper from './../elongHeadSwiper'
export default {
    data(){
        return {
            headElong:[],
        }
    },
     mounted(){
      
      
  },
  components:{
    elongHeadSwiper,elongTime
  }
}
</script>

<style scoped>
@import url('//at.alicdn.com/t/font_1324710_i0cpn8s3hsd.css');
ul{
    list-style:none;
}
.elongCenter ul{
    padding:0 .32rem /* 12/37.5 */;
}
.elongCenter ul li{
    height:.906667rem /* 34/37.5 */;
    padding:.32rem /* 12/37.5 */ 0; 
    font-size:.373333rem /* 14/37.5 */;
    border-bottom: 1px solid #DDD;
    color: #C0C4CC;
}
.elongCenter ul li.list1{
    height:.586667rem /* 22/37.5 */;
}

.elongCenter ul li b{
    margin:0px 40px 0 10px;
    
    font-size:.373333rem /* 14/37.5 */;
    float:left
}
.elongCenter ul li.list1 a{
    float:left;
    width:6.133333rem /* 230/37.5 */;
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
.elongCenter ul li em{
    font-style:normal;
    color:#49f;
    font-size:.32rem /* 12/37.5 */;
}
</style>

