<template>
  <div id="app">
    <div class="header">
      <Header></Header>
    </div>
    <h1>Bell Magazine</h1>
    <Article title="My Article"
             byline="Riley Sumner"
             tagline="This article is about writing"
             img="/src/assets/logo.png">
    </Article>
    <Author name="Riley Sumner"
            bio="I am Riley">
    </Author>
  </div>
</template>

<script>
import Article from './components/Article.vue'
import Author from './components/Author.vue'

export default {
  name: 'app',
  components: {
    Article,
    Author
  }
}
</script>

<style lang="scss">
  @import "/dist/css/app.6af8ca07.css";
</style>
