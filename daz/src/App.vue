<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Region/> -->

  </div>
</template>

<script>

import "./assets/js/flexble";
// import Region from "./components/Region"
  export default {
    name: 'app',
    components: {
      // Region
    }
  }
</script>

<style>
@import url("http://at.alicdn.com/t/font_1324710_w0j2yjrkrlk.css");
body,h1,h2,h3,p,ul{margin: 0;padding: 0;}
li{list-style: none;}
a{text-decoration: none;}
</style>
