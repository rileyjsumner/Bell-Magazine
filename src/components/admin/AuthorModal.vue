<template>
    <div>
        <div class="modal" :class="{ 'is-active': isActive }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <h1>Create Article</h1>
                </header>
                <section class="modal-card-body">
                    <CreateAuthorModal v-if="isAuthorCreate"></CreateAuthorModal>
                    <UpdateAuthorModal :author="author" :updateId="author._id" v-if="!isAuthorCreate"></UpdateAuthorModal>
                    <div class="field full">
                        <div id="modal-editor" class="control">
                            <div id="editor"></div>
                        </div>
                    </div>
                </section>
            </div>
            <button @click="toggle" class="modal-close btn-close" aria-label="close"></button>
        </div>
        <button v-if="isAuthorCreate" @click="toggle" class="button">Create Author</button>
        <button v-if="!isAuthorCreate" @click="toggle" class="button">Update</button>
    </div>
</template>

<script>

    import {createAuthor, getAuthorByName, getAuthors, updateAuthor} from "../../repository";
    import $ from 'jquery';
    import CreateAuthorModal from "./CreateAuthorModal";
    import UpdateAuthorModal from "./UpdateAuthorModal";

    let authorList = [];

    export default {
        name: "AuthorModal",
        components: {UpdateAuthorModal, CreateAuthorModal  },
        props: {
            isAuthorCreate: Boolean,
            author: '',
        },
        data() {
            return {
                title: "",
                body: "",
                byline: "",
                category: "",
                permalink: "",
                photo: "",
                description: "",
                isActive: false
            }
        },
        methods: {
            create() {
                let data = {
                    title: this.title,
                    byline: this.byline,
                    permalink: this.permalink,
                    category: this.category,
                    photo: this.photo,
                    description: this.description
                };
                createAuthor(data)
                    .then(data => {
                        this.$emit('createAuthor', data.byline);
                        this.title = this.body = this.byline = this.permalink = this.category = this.description = this.photo = '';
                        this.toggle();
                    })
                    .catch(err => alert(err.message));
            },
            update() {
                let data = { title: this.title,
                    body: this.body,
                    byline: this.byline,
                    permalink: this.permalink,
                    category: this.category,
                    photo: this.photo,
                    description: this.description };
                updateAuthor(data, this.author._id)
                    .then(data => {
                        this.$emit('updateAuthor', data.byline);
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
                let id = getAuthorByName(this.byline);
            }
        },
        mounted() {
            authorList = getAuthors();

        }
    }
</script>

<style scoped>

    .permalink {
        margin: 0;
        font-size: 1rem;
        color: #8D8D8D;
    }
</style>