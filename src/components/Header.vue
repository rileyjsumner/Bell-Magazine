<template>
    <header class="header header-full">
        <img class="logo" alt="Bell Logo" src="../assets/bell_logo_transparent.png" />
        <NavBar :links="['Home', 'About', 'Contact']"></NavBar>
    </header>
</template>

<script>
    import NavBar from "./NavBar";

    export default {
        name: "Header",
        components: {
            NavBar
        }
    }
</script>

<style scoped>

</style>