<template>
    <nav class="nav">
        <ul class="nav-links">
            <li class="link" v-for="link in links"><a :href="link">{{ link }}</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "NavBar",
        props: {
            links: Array
        }
    }
</script>

<style scoped>

</style>