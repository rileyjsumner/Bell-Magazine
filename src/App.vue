<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "./components/Header";
import Footer from "./components/Footer";

  export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: Lemon;
    src: url("./assets/fonts/LemonMilk.otf") format('opentype');
  }

  @font-face {
    font-family: Quicksand;
    src: url("./assets/fonts/Quicksand_Book.otf") format('opentype');
  }

  @font-face {
    font-family: Bebas Kai;
    src: url("./assets/fonts/BebasKai.otf") format('opentype');
  }

  @font-face {
    font-family: Satisfy;
    src: url("./assets/fonts/Satisfy-Regular.ttf") format('truetype');
  }

  @import "assets/styles/global.scss";
</style>
