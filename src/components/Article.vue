<template>
    <div class="article">
        <div class="article-heading">
            <h1>{{ title }}</h1>
            <p class="byline">{{ byline }}</p>
        </div>
        <div class="article-body">
            <p>{{ tagline }}</p>
            <img :src=img />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Article",
        props: {
            title: String,
            byline: String,
            tagline: String,
            img: String,
            featured: Boolean,
            category: String
        }
    }
</script>

<style scoped>

</style>