<template>
    <div class="author">
        <p>{{ $route.params.name }}</p>
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