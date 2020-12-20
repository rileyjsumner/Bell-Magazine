<template>
    <article class="data">
        <div class="data-header">
            <h2>{{ post.title }}</h2>
            <div>
                <button @click="deletePost" class="delete btn-close" aria-label="delete"></button>
            </div>
        </div>
        <div class="data-body">
            <p><strong>Author:</strong><span :key="author" v-for="author in post.author"> {{author}},</span></p>
            <p class="article-html" v-if="post.body.length < 500">{{ post.body }}</p>
            <p class="article-html" v-else>{{ post.body.substring(0,500).trim() + "... " }}</p>
<!--            <p>Created: {{ post.createdAt | moment }}</p>-->
<!--            <p>Updated: {{ post.updatedAt | moment }}</p>-->
        </div>
        <div class="data-details">
            <PostModal :post="post" :key="post._id" :isPostCreate="false"></PostModal>
        </div>
    </article>
</template>

<script>

    import { deletePost } from '../../../repository';
    import PostModal from './PostModal.vue';
    import Moment from 'moment';

    export default {
        name: "Post",
        props: [ 'post' ],
        components: { PostModal },
        methods: {
            deletePost(e) {
                e.preventDefault();
                deletePost(this.post._id)
                    .then(() => this.$emit('deletePost', this.post._id))
                    .catch(err => alert(err))
            },
            updatePost(post) {
                this.$emit('updatePost', post);
            }
        },
        filters: {
            moment(date) {
                return Moment(date).format('MMMM Do YYYY, h:mm:ss a');
            }
        }
    }
</script>

<style scoped>
    .article-html {
        font-size: 1rem;
    }
</style>
