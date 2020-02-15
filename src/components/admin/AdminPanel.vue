<template>
    <div class="container">
        <AdminTabBar></AdminTabBar>
        <div id="tab-post" class="tab tab-active post-list" v-if="posts">
            <PostModal :isPostCreate=true @createPost="createPost"></PostModal>
            <div class="listings">
                <Post v-for="(post, index) in posts" :post="post" :key="index" @deletePost="deletePost" @updatePost="updatePost"></Post>
            </div>
        </div>
        <div id="tab-author" class="tab author-list" v-if="authors">
            <AuthorModal :isAuthorCreate=true @createAuthor="createAuthor"></AuthorModal>
            <div class="listings">
                <Author v-for="(author, index) in authors" :author="author" :key="index" @deleteAuthor="deleteAuthor" @updateAuthor="updateAuthor"></Author>
            </div>
        </div>
    </div>
</template>

<script>

    import Post from './Post.vue'
    import Author from './Author.vue';
    import PostModal from './PostModal.vue'
    import AuthorModal from './AuthorModal.vue'
    import { getPosts, getAuthors } from '../../repository'
    import AdminTabBar from "./AdminTabBar";

    export default {
        name: "AdminPanel",
        components: {AdminTabBar, Post, Author, PostModal, AuthorModal },
        data() {
            return {
                posts: {},
                authors: {},
                authenticated: false
            }
        },
        methods: {
            deletePost(id) {
                this.posts = this.posts.filter(post => post._id !== id);
            },
            updatePost(post) {
                this.deletePost(post._id);
                this.createPost(post);
            },
            createPost(post) {
                this.posts = [post, ...this.posts];
            },
            deleteAuthor(id) {
                this.authors = this.authors.filter(author => author._id !== id);
            },
            updateAuthor(author) {
                this.deleteAuthor(author._id);
                this.createAuthor(author);
            },
            createAuthor(author) {
                this.authors = [author, ...this.authors];
            }
        },
        mounted() {
            // if(!this.authenticated) { // logic broken rn
                // this.$router.replace({ name: "Admin"});
            // } else {
                getPosts()
                    .then(data => this.posts = data.posts)
                    .catch((err => alert(err)));
                getAuthors()
                    .then(data => this.authors = data.authors)
                    .catch((err => alert(err)));
            // }
        }
    }
</script>

<style scoped>

</style>