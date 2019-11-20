<template>
    <div class="author-list">
        <AuthorArticle
            :title="articles[0].title"
            :author="articles[0].author"
            img="https://www.thetrace.org/wp-content/uploads/2019/06/warren.png"
        ></AuthorArticle>
        <AuthorArticle
            :title="articles[1].title"
            :author="articles[1].author"
            img="https://www.thetrace.org/wp-content/uploads/2019/06/warren.png"
        ></AuthorArticle>
        <AuthorArticle
            :title="articles[2].title"
            :author="articles[2].author"
            img="https://www.thetrace.org/wp-content/uploads/2019/06/warren.png"
            :isShort=isShort
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