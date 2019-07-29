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
  @import "/styles/global.scss";
</style>
