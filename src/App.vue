<template>
  <div id="app">
    <div class="header">
      <Header></Header>
    </div>
    <h1>Bell Magazine</h1>
    <Article title="My Article"
             byline="Riley Sumner"
             tagline="This article is about writing"
             img="logo.png">
    </Article>
  </div>
</template>

<script>
import Article from './components/Article.vue'

export default {
  name: 'app',
  components: {
    Article
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
