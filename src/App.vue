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

  export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  @import "/assets/styles/global.scss";

  @font-face {
    font-family: Lemon/Milk;
    src: url("/assets/fonts/LemonMilk.otf") format('opentype');
    font-weight:400;
  }

  @font-face {
    font-family: Quicksand;
    src: url("/assets/fonts/Quicksand_Book.otf") format('opentype');
    font-weight:400;
  }

  @font-face {
    font-family: Bebas Kai;
    src: url("/assets/fonts/BebasKai.otf") format('opentype');
    font-weight:400;
  }

  @font-face {
    font-family: Satisfy;
    src: url("/assets/fonts/Satisfy-Regular.ttf") format('truetype');
    font-weight:400;
  }
</style>
