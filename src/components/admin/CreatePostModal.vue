<template>
    <div>
        <div id="editor"></div>
        <div class="modal" :class="{ 'is-active': isActive }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    Add Note
                </header>
                <section class="modal-card-body">
                    <div class="field">
                        <div class="control">
                            <label>Title:
                                <input v-model="title" class="input" type="text" placeholder="title">
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
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

    import { createPost } from "../../repository";
    import Quill from 'quill';

    let editor;

    export default {
        name: "CreatePostModal",
        data() {
            return {
                title: "",
                body: "",
                isActive: false
            }
        },
        methods: {
            create() {
                let body = "";
                let data = {title: this.title, body: body };
                createPost(data)
                    .then(data => {
                        this.$emit('createPost', data.post);
                        this.title = this.body = '';
                        this.toggle();
                    })
                    .catch(err => alert(err.message));
            },
            toggle() {
                this.isActive = !this.isActive;
            },
        },
        mounted() {
            editor = new Quill('#editor', {
                modules: { toolbar: true },
                theme: 'snow'
            });
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