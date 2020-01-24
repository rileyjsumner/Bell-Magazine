<template>
    <div class="container">
        <div class="top-story-line">
            <h1>Top Stories</h1>
        </div>
        <ArticleGrid></ArticleGrid>
    </div>
</template>

<script>
    import ArticleGrid from "../components/ArticleGrid";

    let stories;

    export default {
        name: "Home",
        components: {ArticleGrid}
    }
</script>

<style scoped>

</style>