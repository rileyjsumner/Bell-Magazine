<template>
    <div class="container">
        <div class="top-story-line">
            <h1>Top Stories</h1>
        </div>
        <ArticleGrid :posts="this.posts" :authors="this.authors"></ArticleGrid>
    </div>
</template>

<script>
    import ArticleGrid from "../components/ArticleGrid";
    import {getAuthors, getPosts} from "@/repository";

    let stories;
    let authorList;

    export default {
        name: "Home",
        components: {ArticleGrid},
        data() {
            return {
                posts: {},
                authors: {}
            }
        },
        methods: {
            async loadPosts() {
                stories = await getPosts().then(response => {
                    this.posts = response.posts;
                });

            },
            async loadAuthors() {
                authorList = await getAuthors().then(response => {
                    this.authors = response;
                })
            }
        },
        created() {
            this.loadPosts();
            this.loadAuthors();
        }
    }
</script>

<style scoped>

</style>
