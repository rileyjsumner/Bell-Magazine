<template>
    <div class="container">
        <h1>Admin Panel</h1>
        <div class="post-list" v-if="posts">
            <CreatePostModal @createPost="createPost"></CreatePostModal>
            <div class="posts">
                <Post v-for="(post, index) in posts" :post="post" :key="index" @deletePost="deletePost" @updatePost="updatePost"></Post>
            </div>
        </div>
        <div class="author-list" v-if="authors">
            <CreateAuthorModal @createAuthor="createAuthor"></CreateAuthorModal>
            <div class="authors">
                <Author v-for="(author, index) in authors" :author="author" :key="index" @deleteAuthor="deleteAuthor" @updateAuthor="updateAuthor"></Author>
            </div>
        </div>
    </div>
</template>

<script>

    import Post from './Post.vue'
    import Author from './Author.vue';
    import CreatePostModal from './CreatePostModal.vue'
    import CreateAuthorModal from './CreateAuthorModal.vue'
    import { getPosts, getAuthors } from '../../repository'

    export default {
        name: "AdminPanel",
        components: { Post, Author, CreatePostModal, CreateAuthorModal },
        data() {
            return {
                posts: [],
                authors: [],
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
            if(!this.authenticated) { // logic broken rn
                this.$router.replace({ name: "Admin"});
            } else {
                getPosts()
                    .then(data => this.posts = data.posts)
                    .catch((err => alert(err)));
                getAuthors()
                    .then(data => this.authors = data.authors)
                    .catch((err => alert(err)));
            }
        }
    }
</script>

<style scoped>

</style>