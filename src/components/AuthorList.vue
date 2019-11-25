<template>
    <div class="author-list">
        <AuthorArticle
            :title="articles[0].title"
            :author="articles[0].author"
            :url="articles[0].category + '/' + articles[0].permalink"
        ></AuthorArticle>
        <AuthorArticle
            :title="articles[1].title"
            :author="articles[1].author"
            :url="articles[1].category + '/' + articles[1].permalink"
        ></AuthorArticle>
        <AuthorArticle v-if="!isShort"
            :title="articles[2].title"
            :author="articles[2].author"
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