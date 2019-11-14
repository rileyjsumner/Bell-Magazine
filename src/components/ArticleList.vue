<template>
    <div class="article-list">
        <ListArticle
            title="Sample Article"
            author="Author McAuthorson"
            description="Check out this article about news"
        ></ListArticle>
        <ListArticle
                title="Sample Article"
                author="Author McAuthorson"
                description="Check out this article about news"
        ></ListArticle>
        <ListArticle
                title="Sample Article"
                author="Author McAuthorson"
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
        }
    }
</script>

<style scoped>

</style>