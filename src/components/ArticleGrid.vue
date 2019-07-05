<template>
    <Article></Article>
</template>

<script>
    const db = require("db.js");
    
    let stories = db.getAllStories();

    export default {
        name: "ArticleGrid"
    }
</script>

<style scoped>

</style>