<template>
    <div class="author-row">
        <AuthorArticle
            :title="articles[0].title"
            :author="articles[0].author"
            :url="articles[0].category + '/' + articles[0].slug"
        ></AuthorArticle>
        <AuthorArticle
            :title="articles[1].title"
            :author="articles[1].author"
            :url="articles[1].category + '/' + articles[1].slug"
        ></AuthorArticle>
        <AuthorArticle
            :title="articles[2].title"
            :author="articles[2].author"
            :url="articles[2].category + '/' + articles[2].slug"
        ></AuthorArticle>
        <AuthorArticle
            :title="articles[3].title"
            :author="articles[3].author"
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
        }
    }
</script>

<style scoped>

</style>
