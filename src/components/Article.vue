<template>
    <div class="article shadow" v-bind:class="[ featured ? 'article-featured' : '' ]">
        <div class="article-body">
            <img :src=img :alt=alt />
            <p>{{ tagline }}</p>
        </div>
        <div class="article-heading">
            <h1 class="title">{{ title }}</h1>
            <p class="byline">{{ byline }}</p>
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
            alt: String,
            featured: Boolean,
            category: String
        }
    }
</script>

<style scoped>

</style>