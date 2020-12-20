<template>
  <div class="article-content author-content">
    <div class="author-profile">
      <img v-for="author in authors" :key="author.name" class="profile" alt="profile" :src="author.photo" v-on:click="goToStory(url)" />
    </div>
    <div class="author-body">
      <h3 v-for="author in authors" :key="author.name" class="title author-title" v-on:click="goToStory(url)">{{ author.name }}</h3>
      <p class="byline author-byline" v-on:click="goToStory(url)">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorArticleContents",
  methods: {
    goToStory(url) {
      window.location.href = url;
    }
  },
  props: {
    authors: Array,
    title: String,
    url: String,
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
