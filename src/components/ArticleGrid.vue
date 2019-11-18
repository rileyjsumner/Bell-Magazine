<template>
    <div class="article-grid">
        <ArticleList></ArticleList>
        <Article title="this.posts[0].title"
                 byline="Author McAuthorson"
                 tagline="Check out this article about news"
                 img="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"
                 alt="Sample Image"
                 url="/Story"
                 :featured="true"
        ></Article>
        <AuthorList></AuthorList>
        <ArticleRow></ArticleRow>
        <ArticleList :isShort="true"></ArticleList>
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
        <AuthorRow></AuthorRow>
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
        <AuthorList :isShort="true"/>
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
    import {getPosts} from "../repository";


    let stories;

    export default {
        name: "ArticleGrid",
        components: {ArticleRow, Article, ArticleList, AuthorList, AuthorRow },
        data() {
            return {
                posts: {
                    title: 'my title',
                    body: 'my body'
                }
            }
        },
        beforeCreate() {
            stories = getPosts();
            stories.then(function(response) {
                self.posts = response.posts;
                console.log(self.posts[0]);
            });
        }
    }
</script>

<style scoped>

</style>