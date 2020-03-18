<template>
    <div class="container author-container">
        <div class="author-data">
            <h1>{{ author.name }}</h1>
            <p>@{{ author.social_handle }}</p>
            <p><a :href="'mailto:' + author.email ">Email: {{ author.email }}</a></p>
            <img :src="author.photo" alt="profile"/>
            <p>{{ author.long_bio }}</p>
        </div>
        <div class="author-stories">
            <div class="author-story" v-for="post in stories">
                <Article :title="post.title"
                         :byline="post.author"
                         :img="post.photo"
                         alt="Sample Image"
                         :url="post.category + '/' + post.permalink"
                         :tagline="post.description"
                ></Article>
            </div>
        </div>
    </div>
</template>

<script>
    import {getAuthorByUrl, getAuthorStories} from "../repository";
    import  Article  from './articles/Article';

    export default {
        name: "Author",
        components: { Article },
        data() {
            return {
                author: {},
                stories: {}
            }
        },
        mounted() {
            getAuthorByUrl(this.$route.params.name).then(data => {
                this.author = data.author;
                getAuthorStories(this.author.name).then(data => {
                    console.log(data.posts);
                    this.stories = data.posts;
                })
            });

        }
    }
</script>

<style scoped>

</style>