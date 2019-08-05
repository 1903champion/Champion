


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
                        </router-link>
                         <i></i>
                    </div>
                   
                    
                    <div class="jd-header-right">
                        <router-link to="/sousuo">
                            <span class="iconfont icon-fangdajing-copy"></span>
                            <p>商圈/酒店/地址</p> 
                        </router-link>        
                    </div>
                    
                </div>
            </div>
        </div>
            <cs>菜单</cs>
    </div>
</template>
<script>
import cs from "../swiper/jiudian/cs"
export default {
    methods: {
        shouye(){
            this.$router.push("/")
        }
    },
    components:{
        cs
    }
}
</script>


<style scoped>
@import url("http://at.alicdn.com/t/font_1324710_lulpl5ttobc.css");
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
    height: 1.333333rem /* 50/37.5 */
}
.jd-header div{
    display: flex;
}
.icon-xiaoyu{
    font-size: .64rem /* 24/37.5 */;
    color: #fff;
    padding-right:.266667rem /* 10/37.5 */ ;
    line-height: 1.333333rem /* 50/37.5 */

}
.jd-header>div>div{
    border-radius: 1rem;
    padding-left: .1rem;
   background: #fff;    
    box-shadow: 0 0 0.1rem 0 #000;
    border: .5px solid #71706f;
    height: 1.333333rem /* 50/37.5 */;
    width: 8.746667rem /* 328/37.5 */;
    color: #333;
    position: relative;
}
.jd-header-left {
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-size: .26rem;
    width:20%;
    font-size: .373333rem /* 14/37.5 */;
    margin-left: 10px
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
    font-size: .213333rem /* 8/37.5 */;
    height: 100%;
    width: 30%;
    margin-top: .213333rem /* 8/37.5 */
   
}  
.jd-header-center>a{
    margin: 0 auto

}
.jd-header-center>a >div{
    display: block;
    text-align: center;
    font-size: 10px
}

.jd-header-center i{
    margin-top: .4rem /* 15/37.5 */;
    width: 0;
    height: 0;
    border-left: .08rem solid transparent;
    border-right: .08rem solid transparent;
    border-top: .09rem solid #333;

}
.jd-header-right{
        width: 3rem;
        width: 50%;
        font-size: .32rem /* 12/37.5 */
}
.jd-header-right a{
    display: flex;
    margin: 0 auto;
    line-height: 1.333333rem /* 50/37.5 */
}
.jd-header-right span{
    font-size: .266667rem /* 10/37.5 */;
    margin-right: 2px
}
</style>

