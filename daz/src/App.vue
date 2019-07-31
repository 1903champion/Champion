<template>
  <div id="app">
      <!-- <index/> -->
      <addr/>
      <!-- <china/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import "./assets/js/flexble"
// import index from "./papgs/index"
import addr from "./papgs/addr"
// import china from "./components/china"

export default {
  name: 'app',
  components: {
    addr,
    // china
  }
}
</script>

<style>
*{
  margin  :0;
  padding:0;
}

</style>
