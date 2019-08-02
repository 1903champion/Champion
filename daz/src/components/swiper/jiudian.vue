<template >
    <div>
        <div class="jd-header">
            <div>
                <span class="iconfont icon-xiaoyu" @click="shouye"></span>
                <div>
                    <div class="jd-header-left">
                        <router-link to="/china"> 重庆</router-link>
                        <i></i>
                    </div>
                    <div class="jd-header-center">
                        <router-link to="/date">    
                            <div>
                                <div>住</div>
                                <div>退</div>
                            </div>
                            <i></i>
                        </router-link>
                    </div>
                   
                    
                    <div class="jd-header-right">
                        <router-link to="/sousuo">
                            <span iconfont icon-fangdajing-copy></span>
                            <p>商圈/酒店/地址</p> 
                        </router-link>        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        shouye(){
            this.$router.push("/")
        }
    },
}
</script>


<style scoped>
@import url("http://at.alicdn.com/t/font_1324710_dyk1f9ynwa.css");
a{
    text-decoration: none;
    color: #000;
}
.jd-header {
    display: flex;
    background-color: #181818;
    padding: .2rem;
    display: -webkit-box;
    display: -webkit-flex;
    
}
.jd-header div{
    display: flex;
}
.icon-xiaoyu{
    font-size: .426667rem /* 16/37.5 */;
    color: #fff;
    padding-right:.266667rem /* 10/37.5 */ ;
    line-height: .906667rem /* 34/37.5 */

}
.jd-header>div>div{
    /* display: flex; */
    border-radius: 1rem;
    padding-left: .1rem;
    background-color: #f6f6f6;
    box-shadow: 0 0 0.1rem 0 #000;
    border: .5px solid #71706f;
    height: .8rem;
    width: 100%;
    color: #333;
    position: relative;
}
.jd-header-left {
        align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-size: .26rem;
    width: 1.5rem;
    font-size: .373333rem /* 14/37.5 */
}
.jd-header-left i{
    margin-left: .06rem;
    width: 0;
    height: 0;
    border-left: .08rem solid transparent;
    border-right: .08rem solid transparent;
    border-top: .09rem solid #333;
    margin-right: .1rem;
}
.jd-header-center{
    font-size: .24rem;
    height: 100%;
    width: 2rem;
    font-size: .24rem;
    height: 100%;
    text-align: center;
}  
.jd-header-center i{
    margin-left: .06rem;
    width: 0;
    height: 0;
    border-left: .08rem solid transparent;
    border-right: .08rem solid transparent;
    border-top: .09rem solid #333;
    margin-right: .1rem;
}
</style>
