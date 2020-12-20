<template>
    <div class="article author-article article-shadow">
        <AuthorArticleContents :key="toggleUpdate" :authors="authorList" :title="title" :url="url"/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {getAuthorByName} from '@/repository';
    import AuthorArticleContents from "@/components/articles/AuthorArticleContents";

    export default {
      name: "AuthorArticle",
      components: {AuthorArticleContents},
      props: {
            title: String,
            authors: Array,
            url: String,

        },
        data() {
            return {
                data_title: this.title,
                data_url: this.url,
                authorList: [],
                toggleUpdate: 0,
            }
        },
        methods: {
            goToStory(url) {
                window.location.href = url;
            }
        },
        created() {
          console.log(this.title);
          if(this.authors !== undefined) {
              for(let i = 0; i < this.authors.length; i++) {
                console.log(this.authors[i]);
                getAuthorByName(this.authors[i]).then(author_data => {
                  this.authorList.push({name: this.authors[i], photo: author_data.author.photo, slug: author_data.author.url});
                }).finally(() => {
                  this.toggleUpdate += 1;
                  console.log("toggle update");
                  console.log(this.authorList);
                });
              }
          }
        }
    }
</script>

<style scoped>

</style>
