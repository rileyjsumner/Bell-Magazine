<template>
    <article class="data">
        <div class="data-header">
            <h2>{{ author.name }}</h2>
            <div>
                <button @click="deleteAuthor" class="delete btn-close" aria-label="delete"></button>
            </div>
        </div>
        <div class="data-body">
            <img :src="author.photo"/>
            <p><strong>Staff Bio: </strong>{{ author.staff_bio }}</p>
            <p><strong>Long Bio: </strong>{{ author.long_bio }}</p>
            <p><strong>Handle: </strong>@{{ author.social_handle }}</p>
            <p><strong>Email: </strong>{{ author.email }}</p>
        </div>
        <div class="data-details">
            <UpdateAuthorModal :author="author" @updateAuthor="updateAuthor" :key="author._id"></UpdateAuthorModal>
        </div>
    </article>
</template>

<script>

    import { deleteAuthor } from '../../repository';
    import UpdateAuthorModal from './UpdateAuthorModal.vue';
    import Moment from 'moment';

    export default {
        name: "Author",
        props: [ 'author' ],
        components: { UpdateAuthorModal },
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