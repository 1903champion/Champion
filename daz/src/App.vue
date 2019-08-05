<template>
  <div id="app">
     <!-- <router-view></router-view> -->
     <router-view></router-view>
  </div>
</template>

<script>
// 引入手机淘宝js
import "./assets/js/flexble"
// 引入jQuery

import "./assets/js/jquery"

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
@import url("http://at.alicdn.com/t/font_1324710_ypszmqkp7r.css");
*{
  margin  :0;
  padding:0;
}
body{
  font-family: Hiragino Sans GB, Arial,Helvetica, "宋体", sans-serif;
}
li{list-style: none;}
a{text-decoration: none;}
</style>