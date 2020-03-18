<template>
    <div class="article author-article article-shadow">
        <div class="article-content author-content">
            <div class="author-profile">
                <img class="profile" alt="profile" :src="data_photo" v-on:click="goToStory(url)" />
            </div>
            <div class="author-body">
                <h2 class="title author-title" v-on:click="goToStory(url)">{{ author }}</h2>
                <p class="byline author-byline" v-on:click="goToStory(url)">{{ title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {getAuthorByName} from "../../repository";

    export default {
        name: "AuthorArticle",
        props: {
            title: String,
            author: String,
            url: String,
        },
        data() {
            return {
                data_title: this.title,
                data_author: this.author,
                data_url: this.url,
                data_author_url: "",
                data_photo: this.photo
            }
        },
        methods: {
            goToStory(url) {
                window.location.replace(url);
            }
        },
        mounted() {
            getAuthorByName(this.data_author).then(author_data => {
                this.data_photo = author_data.author.photo;
                this.data_author_url = author_data.author.url;
            });
        }
    }
</script>

<style scoped>

</style>