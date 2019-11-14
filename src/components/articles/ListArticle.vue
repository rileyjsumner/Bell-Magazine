<template>
    <div class="article list-article" v-bind:class="[ isShort ? 'hidden' : '' ]">
        <div class="article-content">
            <h2 class="title">{{ title }}</h2>
            <p class="byline">{{ author }}</p>
            <p class="description">{{ description }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ListArticle",
        props: {
            title: String,
            description: String,
            author: String,
            isShort: Boolean,
        }
    }
</script>

<style scoped>

</style>