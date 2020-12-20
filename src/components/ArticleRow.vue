<template>
    <div class="article-row">
        <ListArticle v-if="articles[0]"
            :title="articles[0].title"
            :author="articles[0].author"
            :tagline="articles[0].description"
            :url="'/' + articles[0].category + '/' + articles[0].permalink"
        ></ListArticle>
        <ListArticle v-if="articles[1]"
            :title="articles[1].title"
            :author="articles[1].author"
            :tagline="articles[1].description"
            :url="'/' + articles[1].category + '/' + articles[1].permalink"
        ></ListArticle>
        <ListArticle v-if="articles[2]"
            :title="articles[2].title"
            :author="articles[2].author"
            :tagline="articles[2].description"
            :url="'/' + articles[2].category + '/' + articles[2].permalink"
        ></ListArticle>
        <ListArticle v-if="articles[3]"
            :title="articles[3].title"
            :author="articles[3].author"
            :tagline="articles[3].description"
            :url="'/' + articles[3].category + '/' + articles[3].permalink"
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
