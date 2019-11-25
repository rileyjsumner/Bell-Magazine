<template>
    <div class="article list-article">
        <div class="article-content">
            <h2 class="title">{{ title }}</h2>
            <p class="byline">{{ author }}</p>
            <p class="description">{{ tagline }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListArticle",
        props: {
            title: String,
            tagline: String,
            author: String
        }
    }
</script>

<style scoped>

</style>