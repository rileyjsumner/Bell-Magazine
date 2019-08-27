<template>
    <div class="article-grid">
        <Article title="Sample Article"
                 byline="Author McAuthorson"
                 tagline="Check out this article about news"
                 img="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"
                 alt="Sample Image"
                 url="/About"
                 :featured="true"
        ></Article>
        <Article title="Sample Article"
                 byline="Author McAuthorson"
                 tagline="Check out this article about news"
                 img="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"
                 alt="Sample Image"
                 :featured="false"
        ></Article>
        <Article title="Sample Article"
                 byline="Author McAuthorson"
                 tagline="Check out this article about news"
                 img="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"
                 alt="Sample Image"
                 :featured="false"
        ></Article>
        <Article title="Sample Article"
                 byline="Author McAuthorson"
                 tagline="Check out this article about news"
                 img="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"
                 alt="Sample Image"
                 :featured="false"
        ></Article>
        <Article title="Sample Article"
                 byline="Author McAuthorson"
                 tagline="Check out this article about news"
                 img="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"
                 alt="Sample Image"
                 :featured="false"
        ></Article>
    </div>
</template>

<script>

    // import * as db from "../api/db.js";

    // eslint-disable-next-line
    // let stories = db.getAllStories();

    import Article from "./Article";

    export default {
        name: "ArticleGrid",
        components: {Article}
    }
</script>

<style scoped>

</style>