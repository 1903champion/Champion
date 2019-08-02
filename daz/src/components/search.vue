<template>
    <div>
        <div class="search">
            <div class="header">
                <div>
                    <input type="text" placeholder="输入商户名、地点" v-focus >
                </div>
                <h2 @click="qx">取消</h2>
            </div>
            <div class="content">
                <router-link to="">烤全羊</router-link>
                <router-link to="">串串</router-link>
                <router-link to="">火锅</router-link>
                <router-link to="">星巴克</router-link>
                <router-link to="">观音桥</router-link>
                <router-link to="">一只酸奶牛</router-link>
                <router-link to="">解放碑</router-link>
                <router-link to="">时代天街</router-link>
                <router-link to="">新光天地</router-link>
            </div>
            <div class="history">
                <h2>搜索历史</h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
      
    },
    directives: {
        focus: {
        // 指令的定义
            inserted: function (el) {
                 el.focus()
            }
        }
    },
    methods: {
        qx(){
            this.$router.push("/index")
        }
    },
}
</script>


<style scoped>
.search{
    overflow: hidden;
}
.header{
   position: fixed;
    width: 80%;
    padding: 0 18% 0 2%;
    height: 1.2rem /* 45/37.5 */;
    text-align: center;
    color: #F63;
    z-index: 300;
    display: box;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-align: center;
    -ms-box-align: center;
    box-align: center;
   
}
.header div {
    background-color: #f0f0f0;
    font-size: .373333rem /* 14/37.5 */;
    width: 100%;
    height: .8rem /* 30/37.5 */;
    padding-left: .266667rem /* 10/37.5 */;
    border: none;
    border-radius: 15px;
    -webkit-border-radius: 15px;
    display: box;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-align: center;
    -ms-box-align: center;
    box-align: center;
}
.header div input{
    border: 0;
    outline: none;
    background-color: #f0f0f0;
      width: 100%;
    height: .8rem /* 30/37.5 */;
    text-indent: .533333rem /* 20/37.5 */

}
.header h2{
    color: #f63;
    right: 10px;
    top: 0;
    font-size: 14px;
    margin-left: .266667rem /* 10/37.5 */
}
.content{
    margin-top:1.2rem /* 45/37.5 */; 
    background-color: #f0f0f0;
    padding: .266667rem /* 10/37.5 */.4rem /* 15/37.5 */
}
.content{
    display: flex;
    flex-wrap: wrap
}
.content a{
    width :33%;
    text-decoration: none;
    color  :#323232;
    line-height: 1.013333rem /* 38/37.5 */;
    height: 1.013333rem /* 38/37.5 */;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: #fff;
    font-size: .373333rem /* 14/37.5 */;
    margin-right: 1px
}
.history h2{
    background-color: #f0f0f0;
    padding: 8px 15px;
    color: #999;
}
</style>
