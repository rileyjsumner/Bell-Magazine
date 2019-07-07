<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Article from './components/Article'
import Author from './components/Author'
import ArticleGrid from "./components/ArticleGrid"
import SocialMedia from "./components/SocialMedia"
import Header from "./components/Header"

export default {
  name: 'app',
  components: {
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
