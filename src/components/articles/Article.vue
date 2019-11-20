<template>
    <div class="article shadow" v-bind:class="[ featured ? 'article-featured' : '' ]" v-on:click="goToStory(url)">
        <div class="article-body">
            <img :src=img :alt=alt />
        </div>
        <div class="article-heading">
            <h2 class="title">{{ title }}</h2>
            <p class="byline">{{ byline }}</p>
            <p v-if="featured">{{ tagline }}</p>
        </div>
    </div>
</template>

<script>

    import JQuery from 'jquery'
    let $ = JQuery;

    export default {
        name: "Article",
        methods: {
            goToStory(url) {
                window.location.replace(url);
            },
            isDark() {
                if($("#app").hasClass("dark")) {
                    if(!$(".article").hasClass()) {
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
        mounted: function() {
            this.$nextTick(function() {
                this.isDark();
            });
        }
    }
</script>

<style scoped>

</style>