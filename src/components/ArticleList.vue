<template>
    <div class="article-list">
        <ListArticle
            :title="articles[0].title"
            :author="articles[0].author"
            :tagline="articles[0].description"
        ></ListArticle>
        <ListArticle
            :title="articles[1].title"
            :author="articles[1].author"
            :tagline="articles[1].description"
        ></ListArticle>
        <ListArticle v-if="!isShort"
             :title="articles[2].title"
             :author="articles[2].author"
             :tagline="articles[2].description"
        ></ListArticle>
    </div>
</template>

<script>
    import ListArticle from "./articles/ListArticle";
    export default {
        name: "ArticleList",
        components: {ListArticle},
        props: {
            isShort: Boolean,
            articles: Array,
        }
    }
</script>

<style scoped>

</style>