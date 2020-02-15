<template>
    <div class="staff-directory">
        <div class="staff-list-item shadow" v-for="author in authors" v-on:click="goToAuthor('author/'+author.url)">
            <img :src="author.photo" :alt="author.name"/>
            <h3 class="author-name">{{ author.name }}</h3>
            <p class="staff-bio">{{ author.staff_bio }}</p>
            <p><a :href='"mailto:" + author.email'>{{ author.email }}</a></p>
        </div>
    </div>
</template>

<script>
    import {getAuthors} from "../repository";

    export default {
        name: "StaffDirectory",
        data() {
            return {
                authors: {}
            }
        },
        mounted() {
            getAuthors().then(response => {
                console.log(response);
                this.authors = response.authors;
            })
        },
        methods: {
            goToAuthor(author_url) {
                window.location.replace(author_url);
            },
        }

    }
</script>

<style scoped>

</style>