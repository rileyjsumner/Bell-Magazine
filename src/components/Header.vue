<template>
    <header class="header header-full">
        <div class="container">
            <img class="logo" alt="Bell Logo" src="../assets/pics/bell_logo.svg" />
        </div>
        <NavBar :links="['Home', 'About', 'Contact', 'Design']"></NavBar>
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