<template>
    <div>
      <div class="footers">
      <div class="footers-header">
         <router-link to="">我的 </router-link>
          <em>|</em>
          <router-link to="">社区论坛 </router-link>
          <em>|</em>
          <router-link to="">社区论坛 </router-link>
          <em>|</em>
          <router-link to="">意见反馈</router-link>
      </div>
       <div class="footer-body">
         
         <router-link to="">美团网 </router-link>
          <em>|</em>
         
         <router-link to="">美团下载</router-link>
          <em>|</em>
         
         <router-link to="">结婚</router-link>
          <em>|</em>
          
         <router-link to="">亲子 </router-link>
          <em>|</em>
          
         <router-link to="">家装 </router-link>
          <em>|</em>
          
         <router-link to="">宴会</router-link>
          <em>|</em>
          
         <router-link to="">教育</router-link>
          
       </div>
       <div class="footers-foot">
         <router-link to="">电脑版 </router-link>
          <em>|</em>
         <router-link to="">客户端 </router-link>

       </div>
        <p>copyright &copy;2018 dianping.com</p>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>


<style scoped>
.footers{
  text-align: center;
    padding: .4rem /* 15/37.5 */ .133333rem /* 5/37.5 */ .266667rem /* 10/37.5 */;
    font-weight: 400;
    font-size: .32rem /* 12/37.5 */;
}
.footers a{
  text-decoration: none;
  color: #adadad;
    line-height: 28px;
}
.footers em{
  padding:  0 .16rem /* 6/37.5 */;
  color:#8c8c8c;
  font-style: normal;
  font-weight: 100
}
.footers p{
      color: #d1d1d1;
    margin-top: .533333rem /* 20/37.5 */;
    text-shadow: 0 1px 1px #fff;
}
</style>
