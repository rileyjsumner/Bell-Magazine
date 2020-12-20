<template>
    <div class="author-list">
        <AuthorArticle v-if="articles[0]"
            :title="articles[0].title"
            :authors="articles[0].author"
            :url="articles[0].category + '/' + articles[0].permalink"
        ></AuthorArticle>
        <AuthorArticle v-if="articles[1]"
            :title="articles[1].title"
            :authors="articles[1].author"
            :url="articles[1].category + '/' + articles[1].permalink"
        ></AuthorArticle>
        <AuthorArticle v-if="!isShort && articles[2]"
            :title="articles[2].title"
            :authors="articles[2].author"
            :url="articles[2].category + '/' + articles[2].permalink"
        ></AuthorArticle>
    </div>
</template>

<script>
    import AuthorArticle from "./articles/AuthorArticle";
    export default {
        name: "AuthorList",
        components: {AuthorArticle},
        props: {
            isShort: Boolean,
            articles: Array,
        }
    }
</script>

<style scoped>

</style>
