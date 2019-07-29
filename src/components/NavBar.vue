<template>
    <nav class="nav">
        <div class="container">
            <ul class="nav-links">
                <li class="link" v-bind:key="link" v-for="link in links">
                    <router-link :to="{name: link}">{{ link }}</router-link>
                </li>
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