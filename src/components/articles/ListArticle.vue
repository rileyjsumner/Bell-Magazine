<template>
    <div class="article list-article article-shadow">
        <div class="article-content">
            <h2 class="title" v-on:click="goToStory(url)">{{ title }}</h2>
            <p class="byline" v-on:click="goToStory('/author/' + author_link)">{{ author[0] }}</p>
            <p v-if="tagline.length < 125" class="description" v-on:click="goToStory(url)">{{ tagline }}</p>
            <p v-else class="description" v-on:click="goToStory(url)">{{ tagline.substring(0,125).trim() }}...</p>
        </div>
    </div>
</template>

<script>
    import {getAuthorByName} from '@/repository';

    export default {
        name: "ListArticle",
        data() {
            return {
                author_link: "",
            }
        },
        props: {
            title: String,
            tagline: String,
            author: Array,
            url: String
        },
        methods: {
            goToStory(url) {
                window.location.href = url;
            }
        },
        mounted() {
            getAuthorByName(this.author[0]).then(author_data => {
                this.author_link = author_data.author.url;
            })
        }
    }
</script>

<style scoped>

</style>
