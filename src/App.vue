<template>
  <div id="app">
    <div class="header">
      <Header></Header>
    </div>
    <h1>Bell Magazine</h1>
    <Article title="My Article"
             byline="Riley Sumner"
             tagline="This article is about writing"
             img="../assets/bell_logo.png">
    </Article>
    <Author name="Riley Sumner"
            bio="I am Riley">
    </Author>
    <ArticleGrid></ArticleGrid>
    <SocialMedia size="social-media-large"></SocialMedia>
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
