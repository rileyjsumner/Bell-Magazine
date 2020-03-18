<template>
    <div class="story">
        <h2 class="title">{{ post.title }}</h2>
        <img class="img" alt="story" :src="post.photo"/>
        <div class="author-story-details">
            <router-link :to="'/author/' + this.author.url">
                <img :src="author.photo" :alt="post.author"/>
            </router-link>
            <p class="byline">
                <router-link :to="'/author/' + this.author.url">
                    {{ post.author }}
                </router-link>
            </p>
        </div>
        <div class="story-content" v-html="post.body"></div>

        <div class="author-bio">
            <p>{{ author.staff_bio }}</p>
        </div>

    </div>
</template>

<script>
    import {getArticleFromUrl, getAuthorByName} from "../repository";

    export default {
        name: "Story",
        data() {
            return {
                post: {},
                author: {}
            }
        },
        watch: {
            '$route' (to, from) {
                console.log(to);
            }
        },
        mounted() {
            getArticleFromUrl(this.$route.params.article).then(data => {
                this.post = data.post;

                getAuthorByName(this.post.author).then(author_data => {
                    this.author = author_data.author;
                })
            });

        }
    }
</script>

<style scoped>

</style>