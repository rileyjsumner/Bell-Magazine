<template>
    <article class="data">
        <div class="data-header">
            <h2>{{ post.title }}</h2>
            <div>
                <button @click="deletePost" class="delete btn-close" aria-label="delete"></button>
            </div>
        </div>
        <div class="data-body">
            <p><strong>Author:</strong> {{ post.author }}</p>
            <div v-if="post.body.length < 500">{{ post.body }}</div>
            <div v-if="post.body.length >= 500">{{ post.body.substring(0,500) + "... " }}</div>
<!--            <p>Created: {{ post.createdAt | moment }}</p>-->
<!--            <p>Updated: {{ post.updatedAt | moment }}</p>-->
        </div>
        <div class="data-details">
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