<template>
    <article class="data">
        <div class="data-header">
            <h2>{{ category.name }}</h2>
            <div>
                <button @click="deleteCategory" class="delete btn-close" aria-label="delete"></button>
            </div>
        </div>
        <div class="data-body">
            <p><strong>Type: </strong>{{ category.type }}</p>
            <p><strong>Slug: </strong>{{ category.slug }}</p>
        </div>
        <div class="data-details">
            <CategoryModal :isCategoryCreate=false :category="category" @updateCategory="updateCategory" :key="category._id"></CategoryModal>
        </div>
    </article>
</template>

<script>

    import { deleteCategory } from '@/repository';
    import Moment from 'moment';
    import CategoryModal from "./CategoryModal";

    export default {
        name: "Category",
        props: [ 'category' ],
        components: { CategoryModal },
        methods: {
            deleteCategory(e) {
                e.preventDefault();
                deleteCategory(this.category._id)
                    .then(() => this.$emit('deleteCategory', this.category._id))
                    .catch(err => alert(err))
            },
            updateCategory(category) {
                this.$emit('updateCategory', category);
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
