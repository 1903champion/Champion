<template>
    <div class="login_inp">
        <header>
            <span class="iconfont icon-xiaoyu"></span><span>手机号快速登录</span>
        </header>
        <div class="yanzhen">
            <div class="inp">
                    <div @click="number"> <span>{{numId}}</span><span class="iconfont icon-jiantou8"></span></div>
                    <div>
                        <input type="number" v-model="inputNumber" 
                        oninput="if(value.length>11)value=value.slice(0,11)"
                         placeholder="请输入手机号"/>
                       
                        <p @click="send" :class="[sendColor? 'red' :'']">{{sendSmg}}</p>
                    </div>
            </div>
            <div class="inp">
                    <div> 验证码</div>
                    <div>
                        <input type="text" placeholder="请输入验证码"/>
                    </div>
            </div>
        </div>
        <p>未注册的手机号码验证后自动创建点评账户</p>
        <div class="login" @click="login">登录</div>
        <div><span @click="phonelogin">账号密码登录</span></div>
        <div>
            <div class="line"></div>
            <div class=" ">　第三方账号登录　</div>
            <div class="line"></div>
        </div>
        <div class="photo">
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="agreement">
            登录即表示你同意大众点评<a href="//www.dianping.com/aboutus/useragreement">《用户使用协议》</a>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            inputNumber:'',//输入的内容
            sendSmg:"发送验证码",
            sendnum:6,//倒计时数字
            sendColor:false,//颜色
            numId:86
        }
    },
    mounted(){
        this.numId=this.$route.query.id
    },
    computed:{
       
    },
    methods:{
        phonelogin(){
            this.$router.push("/phoneLogin")
        },
        number(){
            this.$router.push("/region")
        },
        //发送验证码
        send(){
                var phone=this.inputNumber          
                if(/^1[3456789]\d{9}$/.test(phone) && this.sendColor==false) {                       
                    this.sendColor=true;
                    var timer=setInterval(() => {
                        this.sendnum--;
                        this.sendSmg=`重新发送(${this.sendnum})`
                            if(this.sendnum==-1){
                                this.sendnum=6;
                                this.sendSmg="发送验证码"
                                clearInterval(timer)
                                this.sendColor=false;
                            }
                            
                        }, 1000);
                }else{
                    if( this.sendColor==false){
                        alert("手机号不符合要求")
                    }
                }  
        },
        login(){
            
        }
    },
    watch:{
       
    }
}
</script>

<style scoped>
.red{
    color: #999;
}
.icon-jiantou8{
    font-size: .32rem /* 12/37.5 */;
        margin-left: 4px;
}
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
}

.inp div{
    height: .64rem /* 24/37.5 */;
    line-height: .64rem ;
}
.inp div:nth-of-type(1){
    font-size: .373333rem /* 14/37.5 */;
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
    margin:0 .266667rem /* 10/37.5 */;
}
.login_inp>div:nth-of-type(3){
    padding: .266667rem /* 10/37.5 */;
    overflow: hidden;
}
.login_inp>div:nth-of-type(3) span{
    float: right;
        color: #466889;
        font-size: .373333rem /* 14/37.5 */;
}
.login_inp>div:nth-of-type(4){
    display: flex;
    align-items: center;
    padding: 0 .266667rem /* 10/37.5 */;
     margin-top: 75px;
}
.login_inp>div:nth-of-type(4)>div:nth-of-type(2){
    white-space: nowrap;
    font-size: .4rem /* 15/37.5 */;
   
}
.login_inp .line{
    height:1px;
    width: 100%;
    background: #999;
}
.photo{
    display: flex;
    justify-content: center;
}
.photo>div{
    width: 180px;
    margin-top: 50px;
    display: flex;
    
    justify-content: space-between;
}
.photo>div>div{
    height:35px;
    width: 35px;
    background: url(../assets/img/oauth.png) no-repeat;
    background-size: 35px;  
    background-position: left top ;
}
.photo>div>div:nth-of-type(2){
     background-position: left -35px ;
}
.agreement{
    position: fixed;
    bottom: 0;
    text-align: center;
    width: 100%;
    height: 1.333333rem /* 50/37.5 */;
    line-height: 1.333333rem /* 50/37.5 */
}
</style>

