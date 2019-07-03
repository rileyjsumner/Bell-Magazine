<template>
    <div class="header">
        <img src="/src/assets/logo.png" />
    </div>
    <NavBar></NavBar>
</template>

<script>
    import NavBar from "./NavBar";
    export default {
        name: "Header",
        components: {NavBar}
    }
</script>

<style scoped>

</style>