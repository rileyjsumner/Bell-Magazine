<template>
    <div class="article-grid">
        <ArticleList :articles="[posts[1], posts[2], posts[3]]"></ArticleList>
        <Article :title="posts[0].title"
                 :byline="posts[0].author"
                 tagline="Check out this article about news"
                 img="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"
                 alt="Sample Image"
                 url="/Story"
                 :featured="true"
        ></Article>
        <AuthorList :articles="[posts[4], posts[5], posts[6]]"></AuthorList>
        <ArticleRow :articles="[posts[7], posts[8], posts[9], posts[10]]"></ArticleRow>
        <ArticleList :articles="[posts[13], posts[14], posts[0]]" :isShort="true"></ArticleList>
        <Article :title="posts[11].title"
                 :byline="posts[11].author"
                 tagline="Check out this article about news"
                 img="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"
                 alt="Sample Image"
                 :featured="false"
        ></Article>
        <Article :title="posts[12].title"
                 :byline="posts[12].author"
                 tagline="Check out this article about news"
                 img="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"
                 alt="Sample Image"
                 :featured="false"
        ></Article>
        <AuthorRow :articles="[posts[15], posts[16], posts[17], posts[18]]"></AuthorRow>
        <Article :title="posts[19].title"
                 :byline="posts[19].author"
                 tagline="Check out this article about news"
                 img="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"
                 alt="Sample Image"
                 :featured="false"
        ></Article>
        <Article :title="posts[20].title"
                 :byline="posts[20].author"
                 tagline="Check out this article about news"
                 img="https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"
                 alt="Sample Image"
                 :featured="false"
        ></Article>
        <AuthorList :articles="[posts[21], posts[22], posts[0]]" :isShort="true"/>
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
    import {getAuthors, getPosts} from "../repository";


    let stories;
    let authorList;

    export default {
        name: "ArticleGrid",
        components: {ArticleRow, Article, ArticleList, AuthorList, AuthorRow },
        data() {
            return {
                posts: {},
                authors: {}
            }
        },
        methods: {
            loadPosts() {
                stories = getPosts();
                stories.then(response => {
                    console.log(response.posts);
                    this.posts = response.posts;
                });

            },
            loadAuthors() {
                authorList = getAuthors();
                authorList.then(response => {
                    this.authors = response;
                })
            }
        },
        created() {
            this.loadPosts();
            this.loadAuthors();
        }
    }
</script>

<style scoped>

</style>