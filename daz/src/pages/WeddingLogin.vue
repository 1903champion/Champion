<template>
<div>
    <!-- 登录界面 -->
    <div @click="goback" class="goback">
        <span><</span>
        <h2>登录界面</h2>
    </div>
    <!-- 登录/注册 -->
    <div class="title">
        <div @click="btn(i)" :class="[btnactive == i ?'active':'']" v-for='v,i in btntext' :key="i">{{v}}</div>
    </div>
    <!--  -->
    <div class="container">
        <!-- 注册 -->
        <form class="register from" name="register" :class="[bbb?'aaa':'']">
            <div>
                <span>手机号</span><input type="text" placeholder="请输入手机号">
            </div>
            <div>
                <span>密码</span><input type="text" placeholder="请输入密码">
            </div>
            <div>
                <span>推荐人</span><input type="text" placeholder="请输入推荐人姓名">
            </div>
            <div>
                <span>动态码</span><input type="text" placeholder="请输入动态密码">
            </div>
            <p>
                <input type="checkbox">
                <span class="el-checkbox__label">我已阅读并同意</span>
                <span class="show">《用户注册协议》</span>
            </p>
            <input type="button" value="提交">
        </form>
        <!-- 登录 -->
        <form class="login from" name="login"  :class="[bbb?'':'aaa']">

            <div>
                <span>用户名</span><input type="text" placeholder="请输入用户名">
            </div>
            <div>
                <span>密码</span><input type="text" placeholder="请输入密码">
            </div>
            <input type="button" value="登录">
            <p>忘记密码</p>
        </form>
    </div>
   
</div>
   
</template>
<script>
export default {
    data(){
        return{
            btntext:['登录','注册'],
            btnactive:1,
            bbb:false,
        }
    },
    methods:{
        btn(i){
            console.log(1)
            this.btnactive = i;
            if(i==0){
                this.bbb=true;
            }else{
                this.bbb=false;
            }
        },
        goback(){
            this.$router.push('wedding')
        }
    }
}
</script>

<style scoped>
@import url("../assets/css/wlogin.css");
</style>

