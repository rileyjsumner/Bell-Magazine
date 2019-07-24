<template>
    <nav class="nav">
        <div class="container">
            <ul class="nav-links">
                <li class="link" v-bind:key="link" v-for="link in links"><a :href="link">{{ link }}</a></li>
            </ul>
        </div>
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