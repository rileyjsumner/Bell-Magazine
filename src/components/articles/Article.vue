<template>
    <div class="article shadow" v-bind:class="[ featured ? 'article-featured' : '' ]">
        <div class="article-body">
            <img :src=img :alt=alt v-on:click="goToStory(slug)" />
        </div>
        <div class="article-heading">
          <h2 class="title" v-on:click="goToStory(slug)">{{ title }}</h2>
          <p v-for="author in authors" :key="author.slug" class="byline" v-on:click="goToStory('/author/' + author.slug)">{{ author.byline }}</p>
          <p class="tagline" v-on:click="goToStory(slug)">{{ tagline }}</p>
        </div>
    </div>
</template>

<script>

    import JQuery from 'jquery'
    import {getAuthorByName} from '@/repository';
    let $ = JQuery;

    export default {
        name: "Article",
        data() {
            return {
                authors: []
            }
        },
        methods: {
            goToStory(url) {
                window.location.href = url;
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
            byline: Array,
            tagline: String,
            img: String,
            alt: String,
            featured: Boolean,
            category: String,
            slug: String
        },
        mounted() {
          this.$nextTick(function() {
              this.isDark();
          });
          for(let i = 0; i < this.byline.length; i++) {
            getAuthorByName(this.byline[i]).then(author_data => {
              this.authors.push({ byline: this.byline[i], slug: author_data.author.slug});
            });
          }
        }
    }
</script>

<style scoped>

</style>
