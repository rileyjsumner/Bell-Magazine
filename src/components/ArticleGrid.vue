<template>
    <div v-if="posts" class="article-grid">
        <ArticleList :articles="[posts[1], posts[2], posts[3]]"></ArticleList>
        <Article v-if="posts[0]"
                 :title="posts[0].title"
                 :byline="posts[0].author"
                 :img="posts[0].photo"
                 alt="Sample Image"
                 :url="posts[0].category + '/' + posts[0].permalink"
                 :tagline="posts[0].description"
                 :featured="true"
        ></Article>
        <AuthorList :articles="[posts[4], posts[5], posts[6]]"></AuthorList>
        <ArticleRow :articles="[posts[7], posts[8], posts[9], posts[10]]"></ArticleRow>
        <ArticleList :articles="[posts[13], posts[14]]" :isShort="true"></ArticleList>
        <Article v-if="posts[11]"
                 :title="posts[11].title"
                 :byline="posts[11].author"
                 :img="posts[11].photo"
                 alt="Sample Image"
                 :url="posts[11].category + '/' + posts[11].permalink"
                 :tagline="posts[11].description"
                 :featured="false"
        ></Article>
        <Article v-if="posts[12]"
                 :title="posts[12].title"
                 :byline="posts[12].author"
                 :img="posts[12].photo"
                 alt="Sample Image"
                 :url="posts[12].category + '/' + posts[12].permalink"
                 :tagline="posts[12].description"
                 :featured="false"
        ></Article>
        <AuthorRow :articles="[posts[15], posts[16], posts[17], posts[18]]"></AuthorRow>
        <Article v-if="posts[19]"
                 :title="posts[19].title"
                 :byline="posts[19].author"
                 :img="posts[19].photo"
                 alt="Sample Image"
                 :url="posts[19].category + '/' + posts[19].permalink"
                 :tagline="posts[19].description"
                 :featured="false"
        ></Article>
        <Article v-if="posts[20]"
                 :title="posts[20].title"
                 :byline="posts[20].author"
                 :img="posts[20].photo"
                 alt="Sample Image"
                 :url="posts[20].category + '/' + posts[20].permalink"
                 :tagline="posts[20].description"
                 :featured="false"
        ></Article>
        <AuthorList :articles="[posts[21], posts[22]]" :isShort="true"/>
    </div>
</template>

<script>

    // eslint-disable-next-line
    // let stories = db.getAllStories();



    import Article from "./articles/Article";
    import ArticleList from './ArticleList';
    import AuthorList from './AuthorList';
    import ArticleRow from "./ArticleRow";
    import AuthorRow from './AuthorRow';


    export default {
        name: "ArticleGrid",
        components: {ArticleRow, Article, ArticleList, AuthorList, AuthorRow },
        props: {
            posts: {},
            authors: {}
        }
    }
</script>

<style scoped>

</style>
