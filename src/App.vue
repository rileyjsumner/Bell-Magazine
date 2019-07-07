<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <DesignKit></DesignKit>
    </div>
  </div>
</template>

<script>
import Article from './components/Article'
import Author from './components/Author'
import ArticleGrid from "./components/ArticleGrid"
import SocialMedia from "./components/SocialMedia"
import Header from "./components/Header"
import DesignKit from "./components/DesignKit";

export default {
  name: 'app',
  components: {
    DesignKit,
    SocialMedia,
    ArticleGrid,
    Article,
    Author,
    Header
  }
}
</script>

<style lang="scss">
  @import "/styles/global.scss";
</style>
