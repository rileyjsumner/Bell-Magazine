<template>
    <div class="article author-article">
        <div class="article-content author-content">
            <div class="author-profile">
                <img class="profile" alt="profile" :src=img />
            </div>
            <div class="author-body">
                <h2 class="title">{{ author }}</h2>
                <p class="byline">{{ title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AuthorArticle",
        props: {
            img: String,
            title: String,
            author: String,
        }
    }
</script>

<style scoped>

</style>