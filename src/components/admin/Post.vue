<template>
    <article class="message">
        <div class="message-header">
            <p>{{ post.title }}</p>
            <button @click="deletePost" class="delete btn-close" aria-label="delete"></button>
        </div>
        <div class="message-body">
            {{ sanitizeBlocks(post.body) }}
            <br>
            <br>
            <span class="has-text-grey-light">Created at: {{ post.createdAt | moment }}</span>
            <br>
            <span class="has-text-grey-light">last updated: {{ post.updatedAt | moment }}</span><br>
            <UpdatePostModal :post="post" @updatePost="updatePost" :key="post._id"></UpdatePostModal>
        </div>
    </article>
</template>

<script>

    import { deletePost } from '../../repository';
    import UpdatePostModal from './UpdatePostModal.vue';
    import Moment from 'moment';

    export default {
        name: "Post",
        props: [ 'post' ],
        components: { UpdatePostModal },
        methods: {
            deletePost(e) {
                e.preventDefault();
                deletePost(this.post._id)
                    .then(() => this.$emit('deletePost', this.post._id))
                    .catch(err => alert(err))
            },
            updatePost(post) {
                this.$emit('updatePost', post);
            },
            sanitizeBlocks(body) {
                let blocks = JSON.parse(body);
                console.log(blocks);
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

</style>