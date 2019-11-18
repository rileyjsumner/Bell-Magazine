<template>
    <div class="article-row">
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
        ></ListArticle>
        <ListArticle
                title="Sample Article"
                author="Author McAuthorson"
                description="Check out this article about news"
        ></ListArticle>
    </div>
</template>

<script>

    import ListArticle from './articles/ListArticle'

    export default {
        name: "ArticleRow",
        components: { ListArticle }
    }
</script>

<style scoped>

</style>