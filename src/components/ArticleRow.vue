<template>
    <div class="article-row">
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
        <ListArticle
            :title="articles[2].title"
            :author="articles[2].author"
            :tagline="articles[2].description"
        ></ListArticle>
        <ListArticle
            :title="articles[3].title"
            :author="articles[3].author"
            :tagline="articles[3].description"
        ></ListArticle>
    </div>
</template>

<script>

    import ListArticle from './articles/ListArticle'

    export default {
        name: "ArticleRow",
        components: { ListArticle },
        props : {
            articles: Array,
        }
    }
</script>

<style scoped>

</style>