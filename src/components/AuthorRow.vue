<template>
    <div class="author-row">
        <AuthorArticle v-if="articles[0]"
            :title="articles[0].title"
            :authors="articles[0].author"
            :url="articles[0].category + '/' + articles[0].slug"
        ></AuthorArticle>
        <AuthorArticle v-if="articles[1]"
            :title="articles[1].title"
            :authors="articles[1].author"
            :url="articles[1].category + '/' + articles[1].slug"
        ></AuthorArticle>
        <AuthorArticle v-if="articles[2]"
            :title="articles[2].title"
            :authors="articles[2].author"
            :url="articles[2].category + '/' + articles[2].slug"
        ></AuthorArticle>
        <AuthorArticle v-if="articles[3]"
            :title="articles[3].title"
            :authors="articles[3].author"
            :url="articles[3].category + '/' + articles[3].slug"
        ></AuthorArticle>
    </div>
</template>

<script>

    import AuthorArticle from "./articles/AuthorArticle";

    export default {
        name: "AuthorRow",
        components: { AuthorArticle },
        props: {
            articles: Array,
        },
      mounted() {

      }
    }
</script>

<style scoped>

</style>
