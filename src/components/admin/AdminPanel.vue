<template>
    <div class="container">
        <h1>Admin Panel</h1>
        <div v-if="posts">
            <CreatePostModal @createPost="createPost"></CreatePostModal>
            <div>
                <Post v-for="(post, index) in posts" :post="post" :key="index" @deletePost="deletePost" @updatePost="updatePost"></Post>
            </div>
        </div>
    </div>
</template>

<script>

    import Post from './Post.vue'
    import CreatePostModal from './CreatePostModal.vue'
    import {getPosts} from '../../repository'

    export default {
        name: "AdminPanel",
        components: { Post, CreatePostModal },
        data() {
            return {
                posts: []
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
        },
        mounted() {
            getPosts()
                .then(data => this.posts = data.posts)
                .catch((err => alert(err)));
        }
    }
</script>

<style scoped>

</style>