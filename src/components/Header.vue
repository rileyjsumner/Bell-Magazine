<template>
    <header class="header header-full">
        <div class="container">
            <img id="header-logo" class="logo" alt="Bell Logo" src="../assets/pics/bell_logo.svg" />
        </div>
        <NavBar :links="['Home', 'About', 'Contact']"></NavBar>
        <AdminBar></AdminBar>
    </header>
</template>

<script>
    import NavBar from "./NavBar";
    import AdminBar from "./admin/AdminBar";
    import {getAllCategories} from "../repository";

    export default {
        name: "Header",
        components: {
            AdminBar,
            NavBar
        },
        mounted() {
            let categories = getAllCategories();
        }
    }
</script>

<style scoped>

</style>