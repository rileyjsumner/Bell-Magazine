<template>
    <div class="author">
        <div class="intro">
            <img class="" :src=img />
            <h1>{{ name }}</h1>
            <p>{{ bio }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Author",
        props: {
            name: String,
            email: String,
            phone: String,
            bio: String,
            facebook: String,
            twitter: String,
            instagram: String,
            title: String,
            img: String
        }
    }
</script>

<style scoped>

</style>