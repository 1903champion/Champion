<template>
    <div class="login_inp">
        <header>
            <span @click="goback" class="iconfont icon-xiaoyu"></span><span>手机号快速登录</span>
        </header>
        <div class="yanzhen">
            <div class="inp">
                    <div> <span>86</span><span class="iconfont icon-xiaoyu"></span></div>
                    <div>
                        <input type="text" placeholder="手机号">
                    </div>
            </div>
            <div class="inp">
                    <div> 验证码</div>
                    <div>
                        <input type="text" placeholder="密码">
                    </div>
            </div>
        </div>
        <div class="login">登录</div>
        <div><span>忘记密码?</span></div>
       
        
    </div>
</template>
<script>

export default {
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

.login_inp{
    background: #f5f5f5;
    height: 100vh;
}
header{
    width:100%;
    height: 1.173333rem /* 44/37.5 */;
    line-height: 1.173333rem /* 44/37.5 */;
    text-align: center;
    background: #fff;
    font-size: .48rem /* 18/37.5 */;
    position: relative;
    border-bottom: 1px solid #f63;
}
header span:nth-of-type(1){
   position: absolute;
   left: .266667rem /* 10/37.5 */;
   color: #f63;
   display: block;
   height: 1.173333rem /* 44/37.5 */;
   width: 1.173333rem /* 44/37.5 */;
}
header span:nth-of-type(1):active{
    background: #f5f5f5;
}
.yanzhen{
    padding:0 .266667rem /* 10/37.5 */;
    background: #fff;
    margin-top: .426667rem /* 16/37.5 */;
}
.inp{
    display: flex;
    padding: .266667rem /* 10/37.5 */;
    border-bottom: 1px solid #eee;
    font-size: .426667rem /* 16/37.5 */;
}
.inp div{
    height: .64rem /* 24/37.5 */;
    line-height: .64rem ;
}
.inp div:nth-of-type(1){
    color: #333;
    width: 1.6rem /* 60/37.5 */;
    border-right: 1px solid #eee;
}
.inp div:nth-of-type(1) span:nth-of-type(2){
    transform:rotate(7deg);
}
.inp div:nth-of-type(2){
    position:relative;
    width: 100%;
}
.inp div:nth-of-type(2) input{
    border: 0;
    outline: none;
    width: 4.466667rem /* 205/37.5 */;
    padding: 0 .266667rem /* 10/37.5 */;
    height: .64rem /* 24/37.5 */;
    line-height: .64rem /* 24/37.5 */;
    font-size: .373333rem /* 14/37.5 */;
}
.inp div:nth-of-type(2) input::-webkit-input-placeholder {
       color: #aab2bd;
       font-size: .426667rem /* 16/37.5 */;
    }
.inp div:nth-of-type(2) p{
    border-radius: 4px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -.32rem /* 12/37.5 */;
    border: 1px solid #999;
    padding: .16rem /* 6/37.5 */;
    line-height: 1;
}
.login_inp>p{
    font-size: .32rem /* 12/37.5 */;
    color: #999;
    text-align: center;
    line-height: 1.066667rem /* 40/37.5 */;
}
.login{
    font-size: .373333rem /* 14/37.5 */;
    text-align: center;
    line-height: 1.066667rem /* 40/37.5 */;
    color: #fff;
    background: #f63;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    letter-spacing: 6px;
    display: block;
    margin: .266667rem /* 10/37.5 */;
}
.login_inp>div:nth-of-type(3){
    padding: .266667rem /* 10/37.5 */;
    overflow: hidden;
}
.login_inp>div:nth-of-type(3) span{
    float: left;
        color: #466889;
        font-size: .373333rem /* 14/37.5 */;
}
</style>

