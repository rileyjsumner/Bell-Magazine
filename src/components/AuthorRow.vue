<template>
    <div class="author-row">
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
        ></AuthorArticle>
        <AuthorArticle
            :title="articles[3].title"
            :author="articles[3].author"
            img="https://www.thetrace.org/wp-content/uploads/2019/06/warren.png"
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