<template>
    <div class="article author-article article-shadow">
        <div class="article-content author-content">
            <div class="author-profile">
                <img v-for="author in authorList" :key="author.name" class="profile" alt="profile" :src="author.photo" v-on:click="goToStory(url)" />
            </div>
            <div class="author-body">
                <h3 v-for="author in authorList" :key="author.name" class="title author-title" v-on:click="goToStory(url)">{{ author.name }}</h3>
                <p class="byline author-byline" v-on:click="goToStory(url)">{{ title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {getAuthorByName} from '@/repository';

    export default {
        name: "AuthorArticle",
        props: {
            title: String,
            authors: Array,
            url: String,
        },
        data() {
            return {
                data_title: this.title,
                data_url: this.url,
                authorList: []
            }
        },
        methods: {
            goToStory(url) {
                window.location.replace(url);
            }
        },
        mounted() {
            for(let i = 0; i < this.authors.length; i++) {
              getAuthorByName(this.authors[i]).then(author_data => {
                this.authorList.push({name: this.authors[i], photo: author_data.author.photo_url, slug: author_data.author.slug});
              });
            }

        }
    }
</script>

<style scoped>

</style>
