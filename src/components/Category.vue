<template>
    <div>
        <CategoryGrid v-if="$route.params.article === undefined">Categories</CategoryGrid>
        <router-view></router-view>
    </div>
</template>

<script>

    import  CategoryGrid  from './CategoryGrid';

    export default {
        name: "Category",
        components: { CategoryGrid },
        mounted() {
            let categories = ["perspectives", "womens studies", "dispatches"];
            if(!categories.includes(this.$route.params.category)) {
                this.$router.replace("/404");
            }
        }
    }
</script>

<style scoped>

</style>
