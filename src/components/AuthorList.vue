<template>
    <div class="author-list">
        <AuthorArticle
            title="Sample Article"
            author="Author McAuthorson"
            img="https://www.thetrace.org/wp-content/uploads/2019/06/warren.png"
        ></AuthorArticle>
        <AuthorArticle
                title="Sample Article"
                author="Author McAuthorson"
                img="https://www.thetrace.org/wp-content/uploads/2019/06/warren.png"
        ></AuthorArticle>
        <AuthorArticle
                title="Sample Article"
                author="Author McAuthorson"
                img="https://www.thetrace.org/wp-content/uploads/2019/06/warren.png"
        ></AuthorArticle>
    </div>
</template>

<script>
    import AuthorArticle from "./articles/AuthorArticle";
    export default {
        name: "AuthorList",
        components: {AuthorArticle}
    }
</script>

<style scoped>

</style>