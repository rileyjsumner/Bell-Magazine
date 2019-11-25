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
        components: { CategoryGrid }
    }
</script>

<style scoped>

</style>