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
    import {getAuthors, getPosts} from "../repository";

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
            loadPosts() {
                stories = getPosts();
                stories.then(response => {
                    this.posts = response.posts;
                });

            },
            loadAuthors() {
                authorList = getAuthors();

                authorList.then(response => {
                    this.authors = response;
                    console.log(this.authors);
                })
            }
        },
        beforeMount() {
            this.loadPosts();
            this.loadAuthors();
        }
    }
</script>

<style scoped>

</style>