<template>
    <header class="header header-full">
        <div class="container">
            <img class="logo" alt="Bell Logo" src="../assets/pics/bell_logo.svg" />
        </div>
        <NavBar :links="['Home', 'About', 'Contact', 'Design']"></NavBar>
        <AdminBar></AdminBar>
    </header>
</template>

<script>
    import NavBar from "./NavBar";
    import AdminBar from "./admin/AdminBar";

    export default {
        name: "Header",
        components: {
            AdminBar,
            NavBar
        }
    }
</script>

<style scoped>

</style>