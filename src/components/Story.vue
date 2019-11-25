<template>
    <div class="story">
        <h2 class="title">{{ post.title }}</h2>
        <p class="byline">{{ post.author }}</p>
        <p>{{ $route.params.article }}</p>
        <img class="img" alt="story" src="https://images.unsplash.com/photo-1430116267665-e7f6b3dafce3?ixlib=rb-1.2.1&w=1000&q=80"/>

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