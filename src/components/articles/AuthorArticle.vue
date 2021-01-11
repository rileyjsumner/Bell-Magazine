<template>
    <div class="article author-article article-shadow">
        <AuthorArticleContents :key="toggleUpdate" :authors="authorList" :title="title" :url="url"/>
    </div>
</template>

<script>
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
          if(this.authors !== undefined) {
              for(let i = 0; i < this.authors.length; i++) {
                getAuthorByName(this.authors[i]).then(author_data => {
                  this.authorList.push({name: this.authors[i], photo: author_data.author.photo, slug: author_data.author.url});
                }).finally(() => {
                  this.toggleUpdate += 1;
                });
              }
          }
        }
    }
</script>

<style scoped>

</style>
