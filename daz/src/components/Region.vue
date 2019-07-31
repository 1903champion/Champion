<template>
    <div class="region">
        <div class="goback" @click="goback"><span>X</span></div>
        <div class="guojia">
            <h2>选择国家/地区</h2>
            <div>
                <span class="iconfont icon-fangdajing-copy"></span>
                <input type="text" placeholder="输入国家/地区名查询">
                <ul>
                    <p class="d_jump">热门</p>
                    <li>
                        <span>中国</span><span>+86</span>
                    </li>
                </ul>
                <ul>
                    <p class="d_jump">A</p>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                </ul>
                <ul>
                    <p class="d_jump">B</p>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                </ul>
                <ul>
                    <p class="d_jump">C</p>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                    <li><span>中国</span><span>+86</span></li>
                </ul>
            </div>
        </div>
        <ul>
            <li class="" v-for="v,i in wolds">
                <a @click="wold(i,$event)" ref="aaa">{{v}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            wolds:["热","A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","T","W","X","Y","Z"]
        }
    },
    methods:{
        wold(index,e){
             //i:是下标
             //e:是事件$event来的
            // console.log(e.path[1].children)//这里的ref可以获取到元素
            for(var j=0;j<this.wolds.length;j++){
                this.$refs.aaa[j].style.background="#fff";
                 this.$refs.aaa[j].style.color="#446889";
            }
            e.target.style.background="#446889";
            e.target.style.color="#fff";

                  let jump = document.querySelectorAll('.d_jump')
                // 获取需要滚动的距离
                
                    let total = jump[index].offsetTop+50;
                    document.documentElement.scrollTop = total
        },
        goback(){
            this.$router.go(-1)
        }

    },
    mounted(){
         axios.post("/api/module")
            .then(res =>{
            })
    }
}
</script>

<style>
.region>ul{
    position: fixed;
    right: 0;
    top:50%;
    margin-top: -189px;
}
.region>ul>li{
     padding:0 8px;
    text-align: center;
    font-size: 12px;
}
.region>ul>li a{
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    line-height: 18px;
    color: #446889; 
}
.region>ul>li:nth-of-type(1) a{
    color: #fff;
    background: #446889;
}
.goback{
    /* display: none; */
    width: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 5;

}
.goback>span{
    font-weight: 900;
    font-size: 20px;
    display:block;
    width: 44px;
    height:44px;
    line-height: 44px;
    float: left;
    text-align:center;
}
.goback>span:active{
    background: #f5f5f5;
}
.guojia{
    padding:0 35px 0 10px;
    margin-top: 45px;
    
}
.guojia h2{
    padding: 4px 0 10px 0;
    font-size: 22px;
}
.guojia>div{
    position: relative;
    width: 100%;
}
.guojia>div>span{
    position: absolute;
    left: 6px;
    top: 7px;
}
.guojia>div input{
    background: #F0F0F0;
    width: 100%;
    height: 35px;
    line-height: 35px;
    padding-left: 30px;
    border-radius: 35px;
    border: 0;
    box-sizing: border-box;
    outline: none;
}
.guojia>div>ul>p{
    font-size: 13px;
     height: 30px;
    line-height: 45px;
}
.guojia>div>ul>li{
    border-bottom: 1px solid #f5f5f5;
    height: 45px;
    line-height: 45px;
    width: 100%;
    overflow: hidden;
}
.guojia>div>ul>li span:nth-of-type(1){
    float: left;
    font-size: 16px;
    color: #666;
}
.guojia>div>ul>li span:nth-of-type(2){
    float: right;
    font-size: 12px;
    color: #999;
}
</style>
