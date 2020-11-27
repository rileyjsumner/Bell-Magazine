<template>
    <div>
        <div class="modal" :class="{ 'is-active': isActive }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <h1>Create Category</h1>
                </header>
                <section class="modal-card-body">
                    <CreateCategoryModal v-if="isCategoryCreate"></CreateCategoryModal>
                    <UpdateCategoryModal v-else :category="category" :updateId="category._id"></UpdateCategoryModal>
                    <div class="field full">
                        <div id="modal-editor" class="control">
                            <div id="editor"></div>
                        </div>
                    </div>
                </section>
            </div>
            <button @click="toggle" class="modal-close btn-close" aria-label="close"></button>
        </div>
        <button v-if="isCategoryCreate" @click="toggle" class="button">Create Category</button>
        <button v-else @click="toggle" class="button">Update</button>
    </div>
</template>

<script>

    import {createCategory, getCategories, getCategoryByName, updateCategory} from '@/repository';
    import $ from 'jquery';
    import CreateCategoryModal from "./CreateCategoryModal";
    import UpdateCategoryModal from "./UpdateCategoryModal";

    let categoryList = [];

    export default {
        name: "CategoryModal",
        components: {UpdateCategoryModal, CreateCategoryModal  },
        props: {
            isCategoryCreate: Boolean,
            category: String,
        },
        data() {
            return {
                name: "",
                slug: "",
                parent: "",
                isActive: false
            }
        },
        methods: {
            create() {
                let data = {
                    name: this.name,
                    slug: this.slug,
                    parent: this.parent,
                };
                createCategory(data)
                    .then(data => {
                        this.$emit('createCategory', data.name);
                        this.name = this.slug = this.parent =  '';
                        this.toggle();
                    })
                    .catch(err => alert(err.message));
            },
            update() {
                let data = {
                    name: this.name,
                    slug: this.slug,
                    parent: this.parent,
                };
                updateCategory(data, this.category._id)
                    .then(data => {
                        this.$emit('updateCategory', data.name);
                        this.toggle();
                    })
                    .catch(err => alert(err.message));
            },
            toggle() {
                this.isActive = !this.isActive;
                if(this.isActive) {
                    $(" #app ").css("position", "fixed");

                } else {
                    $(" #app ").css("position", "static");
                }
            },
            handleChange() {
                let id = getCategoryByName(this.name);
            }
        },
        mounted() {
            categoryList = getCategories();

        }
    }
</script>

<style scoped>

</style>
