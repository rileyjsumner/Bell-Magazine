<template>
    <div class="article shadow" v-bind:class="[ featured ? 'article-featured' : '' ]">
        <div class="article-body">
            <img :src=img :alt=alt v-on:click="goToStory(url)" />
        </div>
        <div class="article-heading">
            <h2 class="title" v-on:click="goToStory(url)">{{ title }}</h2>
            <p class="byline" v-on:click="goToStory('/author/' + author_link)">{{ byline }}</p>
            <p class="tagline" v-on:click="goToStory(url)">{{ tagline }}</p>
        </div>
    </div>
</template>

<script>

    import JQuery from 'jquery'
    import {getAuthorByName} from "../../repository";
    let $ = JQuery;

    export default {
        name: "Article",
        data() {
            return {
                author_link: ""
            }
        },
        methods: {
            goToStory(url) {
                window.location.replace(url);
            },
            isDark() {
                if ($("#app").hasClass("dark")) {
                    if (!$(".article").hasClass()) {
                        $(".article").addClass("dark")
                    }
                }

            }
        },
        props: {
            title: String,
            byline: String,
            tagline: String,
            img: String,
            alt: String,
            featured: Boolean,
            category: String,
            url: String
        },
        mounted() {
            this.$nextTick(function() {
                this.isDark();
            });
            getAuthorByName(this.byline).then(author_data => {
                this.author_link = author_data.author.url;
            })
        }
    }
</script>

<style scoped>

</style>