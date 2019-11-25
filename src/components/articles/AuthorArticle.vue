<template>
    <div class="article author-article" v-on:click="goToStory(url)">
        <div class="article-content author-content">
            <div class="author-profile">
                <img class="profile" alt="profile" :src=this.getPhotoLink(author) />
            </div>
            <div class="author-body">
                <h2 class="title author-title">{{ author }}</h2>
                <p class="byline author-byline">{{ title }}</p>
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
        methods: {
            goToStory(url) {
                window.location.replace(url);
            },
            getPhotoLink(author) {
                getAuthorByName(author).then(author_data => {
                    console.log(author_data.author.photo);
                    return author_data.author.photo;
                });
            }
        }
    }
</script>

<style scoped>

</style>