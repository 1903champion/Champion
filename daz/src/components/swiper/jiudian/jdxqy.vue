<template>
    <div>
        <div class="header">
            <button>打开App</button>
            <button>下载App查看更多优惠</button>
        </div>
        <div class="Exhibition">
            <div>
                <img :src="msg.defaultPic" alt="">
                <span class="iconfont icon-xiaoyu" @click="tojdxqy"></span>  
                <span class="iconfont icon-fenxiang"></span>
                <h1>{{msg.fullName}}({{msg.branchName}})</h1>
                <h2>{{msg.categoryName}} <span>|</span> 高于{{msg.position*100}}%同类酒店</h2>

                <h3>{{msg.picCount}}</h3>
            </div>
        </div>
        <div class="introduce">
            <h1>{{msg.address}}</h1>
            <h2>{{msg.nearbyTransport}}</h2>
            <h3>地图  <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span> </h3>
        </div>
        <div class="Practice">
            <div>
                <h2>{{msg.openningTime}}开业</h2>
                <h3>{{msg.decoDate}}装修</h3>
            </div>
            <div>
                <span class="iconfont icon-wifi"> <i>无线上网</i> </span>
                <span class="iconfont icon-reshui"> <i>热水洗浴</i> </span>
                <span class="iconfont icon-xishuyongpin"> <i>洗漱用品</i> </span>
            </div>
            <div>
                <h3>详情/周边 <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span>  </h3>
            </div>
            <div>
                <h1>{{msg.score}} <span>分</span> </h1>
                <h2>{{msg.scoreDesc}}</h2>
                 <span class="iconfont icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></span> 
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            msg:[]
        }
    },
    mounted() {
        let id=this.$route.query.userId
        axios.get("/hotelm/ajax/hotelInfo?shopId="+id)
        .then((res) => {
            // console.log(res.data.data)
            this.msg=res.data.data
            // console.log(this.msg)
        }).catch((err) => {
            console.log(err)
        });
        // axios.get("/hotelproduct/prepay/roomInfo?shopId=9070811&platform=3&checkInDate=2019-08-04&checkOutDate=2019-08-05&onlyHourRoom=false&_token=eJxVT9luwjAQ%2FBc%2F9AUT2wQnEAlVFAiEIxIl0FDEQ0jcxMIhh03pof57jUpVdbXSzM6ONLufoPYS4BCsi0LwymrgAGJgwwIQKKk31Gp3W5gS0iEYgvi%2F1u2YEBzqzRA4O5tiSEyzvb8qj1rYmTaFlmXv4R9rtXVfHZ42gEypUjoI5UbCo1PJT6kRFzmKLiXKKMoKxUQzKZHMirKZMBVxgX7AyFQu7q%2B6l%2FS62MYdQu5irt65HvXlQEfkgY7QeLxhdEP1Oy%2F0q9oreXrSjE3fgpWkXhDbrY%2BJP52PcuIH3kX5SyL9Plm4o%2BEAnUNRDWa5VQva2KzZeRW6aaj5S1TyMHdnrHLZ8iiqQLiNMBpXcvPcWIZsdtg%2BZdV2TNLtmBcPfbdCk7Xsga9vZMBwdA%3D%3D&utm_medium=touch&utm_campaign=ADianpingB&uuid=50a850af-a438-946d-eae3-ec98830c44cf.1564821945")
        // .then(res=>{
        //     console.log(res.data)
        // })
    },methods: {
        tojdxqy(){
            this.$router.push("/jiudian")
        }
    },
}
</script>

<style scoped>
body{
    font-weight: 100;
}
.header{
    display: flex;
    width: 100%;
    padding: .14rem;
    background-color: #f0f0f0;
    display: -webkit-box;
    display: -webkit-flex;
    font-family: Hiragino Sans GB,Arial,Helvetica,\\5B8B\4F53,sans-serif;
    z-index: 72;
    box-sizing: border-box
}   
.header button{
    width: 50%;
    margin: 0 .08rem;
    box-sizing: border-box;
    height: 40px;
    border-radius: .07rem;
    text-align: center;
    line-height: .86rem;
    font-size: .3rem;
    border: 0;
    outline: none
}
.header button:nth-of-type(1){
    border: 1px solid #f63;
    color: #f63;
}
.header button:nth-of-type(2){
    border: 1px solid transparent;
    color: #fff;
    background: #f63
}
.Exhibition div{
    width: 100%;
    height: 4.8rem;
    position: relative;
}
.Exhibition div img{
    width: 100%;
    height: 4.8rem
}
.icon-xiaoyu{
    width: .8rem;
    height: .8rem;
    display: inline-block;
    position: absolute;
    top: .266667rem;
    left:.266667rem;
    background:rgba(0,0,0, .5);
    border-radius: 50%;
    text-align: center;
    line-height: .8rem;
    color: #fff;
    font-size: .533333rem;
}
.icon-fenxiang{
    width: .8rem;
    height: .8rem;
    display: inline-block;
    position: absolute;
    top: .266667rem;
    right:.266667rem;
    background:rgba(0,0,0, .5);
    border-radius: 50%;
    text-align: center;
    line-height: .8rem;
    color: #fff;
    font-size: .533333rem;
}
.Exhibition div h1{
    position: absolute;
    bottom: 30px;
    color: #fff;
    font-size: .426667rem;
    margin-left: .266667rem
}
.Exhibition div h2{
    position: absolute;
    bottom: 12px;
    color: #fff;
    font-size: .32rem;
    margin-left: .266667rem
}
.Exhibition div h2 i{
    margin : .106667rem
}
.Exhibition div h3{
    position: absolute;
    bottom: .32rem;
    right: .533333rem;
    background:rgba(0,0,0, .6);
    width: 40px;
    line-height :.693333rem;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    font-size: .213333rem
}
.introduce{
    margin: 0 15px;
    padding: .4rem 0;
    position: relative;
    border-bottom: 1px solid #f5f5f5

}
.introduce h1{
    font-weight: 100;
    font-size: .426667rem;
    color: #666
}
.introduce h2{
     font-weight: 100;
    font-size: .293333rem;
    margin-top: .266667rem;
    color: #666
}
.introduce h3{
    position: absolute;

    top: 45%;
    right: -13px;
    font-size: .266667rem;
    color: #999;
    font-weight: 100
}
.Practice{
    padding: .4rem 0;
    margin: 0 .4rem;
    position: relative;
    border-bottom: 1px solid #f5f5f5

}
.Practice div:nth-of-type(1){
    display: flex;
}
.Practice div:nth-of-type(1) h2,h3{
    font-size: .426667rem;
    color: #999;
    margin-right: .266667rem;
    font-weight: 100
}
.Practice div:nth-of-type(2){
    margin: .266667rem 0
}
.Practice div:nth-of-type(2) span{
    font-size: .266667rem;
    transform: scale(0.9);

    color: #999
}

.Practice div:nth-of-type(2) i{
    font-style: normal;
    margin: 0 .266667rem 0 .266667rem
}
.Practice div:nth-of-type(3){
    position:absolute;
    top: .8rem;
    right: 2.08rem
}
.Practice div:nth-of-type(3) h3{
    font-size:.213333rem;
    transform: scale(0.9)
}
.Practice div:nth-of-type(4){
    position: absolute;
    width: 20%;
    height: 1.466667rem;
    top: .32rem;
    right: .053333rem
}
.Practice div:nth-of-type(4) h1{
    font-size: .64rem;
    color: #f63;
    font-weight: 600
}
.Practice div:nth-of-type(4) h1 span{
    font-size: .373333rem
}
.Practice div:nth-of-type(4) h2{
    font-size: .266667rem;
    background: #ffece5;
    width: .8rem;
    border-radius: 30%;
    padding: 4px 4px;
    text-align: center;
    font-weight: 100;
    color: #f63;
    transform: scale(0.8);
    margin-left: 10px
}
.Practice div:nth-of-type(4)>span{
    position: absolute;
    top: 31%;
    right: -5px;
    color: #999
}
</style>
