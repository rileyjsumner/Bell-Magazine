<template>
    <div class="article-list">
        <ListArticle
            :title="articles[0].title"
            :author="articles[0].author"
            description="Check out this article about news"
        ></ListArticle>
        <ListArticle
            :title="articles[1].title"
            :author="articles[1].author"
            description="Check out this article about news"
        ></ListArticle>
        <ListArticle
            :title="articles[2].title"
            :author="articles[2].author"
            description="Check out this article about news"
            :isShort=isShort
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