<template>
    <div>
        <div class="modal" :class="{ 'is-active': isActive }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    Add Post
                </header>
                <section class="modal-card-body">
                    <div class="field">
                        <div class="control">
                            <label>Title:
                                <input v-model="title" class="input" type="text" placeholder="title"/>
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label>Category:
                                <input v-model="category" class="input" type="text" placeholder="category"/>
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label>Permalink: https://www.bell.com/
                                <input v-model="permalink" class="input" type="text" placeholder="permalink"/>
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label>Author:
                                <input v-model="author" class="input" type="text" placeholder="author"/>
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label>Description:
                                <input v-model="description" class="input" type="text" placeholder="description"/>
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label>Description:
                                <input v-model="photo" class="input" type="text" placeholder="photo link"/>
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <div id="editor"></div>
                        </div>
                    </div>
                    <button @click="create" class="button">Post</button>
                </section>
            </div>
            <button @click="toggle" class="modal-close btn-close" aria-label="close"></button>
        </div>
        <button @click="toggle" class="button">Create Post</button>
    </div>
</template>

<script>

    import {createPost, getAuthorByName, getAuthors} from "../../repository";
    import Quill from 'quill';

    let editor;
    let authorList = [];

    export default {
        name: "CreatePostModal",
        components: {  },
        data() {
            return {
                title: "",
                body: "",
                author: "",
                category: "",
                permalink: "",
                photo: "",
                description: "",
                isActive: false
            }
        },
        methods: {
            create() {
                let body = editor.root.innerHTML;
                let data = {
                    title: this.title,
                    body: body,
                    author: this.author,
                    permalink: this.permalink,
                    category: this.category,
                    photo: this.photo,
                    description: this.description };
                createPost(data)
                    .then(data => {
                        this.$emit('createPost', data.post);
                        this.title = this.body = this.author = this.permalink = this.category = this.description = this.photo = '';
                        this.toggle();
                    })
                    .catch(err => alert(err.message));
            },
            toggle() {
                this.isActive = !this.isActive;
            },
            handleChange() {
                let id = getAuthorByName(this.author);
                console.log(id);
            }
        },
        mounted() {
            editor = new Quill('#editor', {
                modules: { toolbar: true },
                theme: 'snow'
            });

            authorList = getAuthors();

        }
    }
</script>

<style scoped>

    #editor {
        border: 1px solid black;
        width: 85%;
        margin: 0 auto;
    }
</style>