<template >
    <div class='cart'>
        <div class='header'>
            <router-link to='/index' class="iconfont icon-xiaoyu back"></router-link>
            <div class='buy'>
                购物
            </div>           
        </div>
        <cartHeadSwiper/>
        <div class='topCenter'>
            <div class='list1'>
                <h3>综合商场</h3>
                <p>为您优选</p>
                <h4>每周热门商场</h4>
            </div>
             <div class='list1'>
                <h3>商标/地标</h3>
                <p>附近商圈</p>
                <h4>北滨二路</h4>
            </div>
             <div class='list1'>
                <h3>服饰</h3>
                <p>猜你喜欢</p>
                <h4>adidas/NIKE/N</h4>
            </div>
        </div>

        <cartSwiperClass/>
        <div class='bg1'>
            <img src="../../assets/img/bg1.webp" >
        </div>
        <div class='today'>
            <h3>今日首推</h3>
            <div class='listAll'>
                <div class='list'>
                    <h3>礼物盒</h3>
                    <p></p>
                    <img src="../../assets/img/bag.webp" alt="">
                    <img src="../../assets/img/show.webp" alt="">
                </div>
                <div class='list'>
                    <h3>免费领</h3>
                    <p>戴森吹风机</p>
                    <img src="../../assets/img/gift.webp" alt="">
                    <img src="../../assets/img/other.webp" alt="">
                </div>
            </div>
        </div>

        <div class='shopclassBox'>
            <div class='shopclass'>
                <h3>商场</h3>
                <p>商圈/地标</p>
                <p>运动户外</p>
                <p>奢侈品</p>
                <p>珠宝饰品</p>
                <p>鞋靴</p>
                <p>箱包</p>
                <p>配饰</p>
                <p>书店影像</p>
                <P>服装</P>
            </div>
        </div>

    </div>
</template>

<script>
import cartHeadSwiper from "./../cartHeadSwiper";
import cartSwiperClass from "./../cartSwiperClass";

export default {
    components: {
    cartHeadSwiper,cartSwiperClass
  }
}
</script>

<style scoped>
@import url('//at.alicdn.com/t/font_1324710_lulpl5ttobc.css');
*{
    margin:0;
    padding:0;
}
a{
    text-decoration: none;
}
.cart{
    background:#F2F2F2;
}
.cart .header{
    height:1.2rem /* 45/37.5 */;
    width:100%;
    background:#4b445c;
}
.cart .header .back{
    display:block;
    line-height:1.2rem /* 45/37.5 */;
    color:#fff;
    font-size:.8rem /* 30/37.5 */;
    float:left;
    height:1.2rem /* 45/37.5 */;
    width:1.2rem /* 45/37.5 */;
    text-align:center;
}
.buy{
    color:#fff;
    line-height:1.2rem /* 45/37.5 */;
    font-size:.48rem /* 18/37.5 */;
    width:7.653333rem /* 287/37.5 */;
    float:left;
    text-align:center;
   
}
.topCenter{
    padding: 13px 12px 0;
     display:flex;
    justify-content: space-between;
    background:#fff;
}
.topCenter .list1{
    height:2.4rem /* 90/37.5 */;
    width:25%;
    background:url('../../assets/img/cart1.webp');
    padding: 8px 10px 10px;
    border-radius: .266667rem /* 10/37.5 */

}
.topCenter .list1:nth-of-type(2){
    background:url('../../assets/img/cart2.webp');

}
.topCenter .list1:nth-of-type(3){
    background:url('../../assets/img/cart3.webp');

}

.topCenter .list1 h3{
    font-size:.48rem /* 18/37.5 */;
    color:#fff;
    margin-top:.266667rem /* 10/37.5 */
}
.topCenter .list1 p{
    font-size: .32rem /* 12/37.5 */;
    padding:0 4px;
    background:#fff;
    color:#4b445c;
    width:1.493333rem /* 56/37.5 */;
    margin-top:.533333rem /* 20/37.5 */;
}
.topCenter .list1 h4{
    color:#fff;
    font-size:.32rem /* 12/37.5 */;
    font-weight:100;
    margin-top:.266667rem /* 10/37.5 */
}
.bg1 img{
    width:100%;
}
.today{
    background:#fff;
}
.today>h3{
    line-height:1.2rem /* 45/37.5 */;
    font-weight:100;
    margin-left:.32rem;
}
.today .listAll{
    padding:.266667rem /* 10/37.5 */ .32rem /* 12/37.5 */ .4rem /* 15/37.5 */;
    display:flex;
    justify-content: space-around;
}
.today .listAll .list{
    width:50%;
    padding:0 .32rem /* 12/37.5 */;
    background:#F5F6F7;
    height:3.146667rem /* 118/37.5 */;
    margin-right:.053333rem /* 2/37.5 */;
}
.today .listAll .list h3{
    margin:.266667rem /* 10/37.5 */ 0 .266667rem /* 10/37.5 */;
}
.today .listAll .list p{
    height:.48rem /* 18/37.5 */;
}
.today .listAll .list img{
    width:1.68rem /* 63/37.5 */;
    height:1.333333rem /* 50/37.5 */;
}
.shopclassBox{
    /* width:100%; */
    overflow-x: scroll;
    background:#fff;
}
.shopclass{
   padding:0 .32rem /* 12/37.5 */;
   height:1.28rem /* 48/37.5 */;
    width:16rem /* 600/37.5 */;
}
 .shopclass h3{
  display:inline-block;
  line-height:1.28rem /* 48/37.5 */;
}
.shopclass p{
    display:inline-block;
    margin-left:.613333rem /* 23/37.5 */;
    line-height:1.28rem /* 48/37.5 */;
    /* float:left; */
} 
</style>
