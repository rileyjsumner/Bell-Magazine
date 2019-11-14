<template>
    <article class="post">
        <div class="post-header">
            <h2>{{ author.title }}</h2>
            <div>
                <button @click="deletePost" class="delete btn-close" aria-label="delete"></button>
            </div>
        </div>
        <div class="post-body">
            <div v-if="author.body.length < 500">{{ author.body }}</div>
            <div v-if="author.body.length >= 500">{{ author.body.substring(0,500) + "... " }}</div>
<!--            <p>Created: {{ post.createdAt | moment }}</p>-->
<!--            <p>Updated: {{ post.updatedAt | moment }}</p>-->
        </div><div class="post-details">
            <div class="post-author">
                <strong>Author:</strong><p>{{ author.author }}</p>
            </div>
            <UpdatePostModal :post="post" @updatePost="updatePost" :key="post._id"></UpdatePostModal>
        </div>
    </article>
</template>

<script>

    import { deleteAuthor } from '../../repository';
    import UpdatePostModal from './UpdatePostModal.vue';
    import Moment from 'moment';

    export default {
        name: "Author",
        props: [ 'author' ],
        components: { UpdatePostModal },
        methods: {
            deleteAuthor(e) {
                e.preventDefault();
                deleteAuthor(this.author._id)
                    .then(() => this.$emit('deleteAuthor', this.author._id))
                    .catch(err => alert(err))
            },
            updateAuthor(author) {
                this.$emit('updateAuthor', author);
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