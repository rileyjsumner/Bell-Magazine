<template>
    <div class="staff-directory">
        <div v-for="author in authors">
            <p>{{ author.name }}</p>
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
        }

    }
</script>

<style scoped>

</style>