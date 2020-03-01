<template>
    <header class="header header-full">
        <div class="container">
            <img id="header-logo" class="logo" alt="Bell Logo" src="../assets/pics/bell_logo.svg" />
        </div>
        <NavBar :links="this.categoryList"></NavBar>
        <AdminBar></AdminBar>
    </header>
</template>

<script>
    import NavBar from "./NavBar";
    import AdminBar from "./admin/AdminBar";
    import { getCategories} from "../repository";

    export default {
        name: "Header",
        components: {
            AdminBar,
            NavBar
        },
        data() {
            return{
                categoryList: []
            }
        },
        mounted() {
            let categoryList;
            getCategories()
                .then(data => {
                    categoryList = ["Home", "About"];
                    for(let i = 0; i < data.categories.length; i++) {
                        categoryList.push(data.categories[i].name);
                    }
                    categoryList.push("Contact");
                })
                .then(() => {
                    this.categoryList = categoryList;
                });
        }
    }
</script>

<style scoped>

</style>