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
                            <label>Author:
                                <input v-model="author" class="input" type="text" placeholder="author"/>
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
        <button @click="toggle" class="button">Create Author</button>
    </div>
</template>

<script>

    import { createAuthor } from "../../repository";

    export default {
        name: "CreateAuthorModal",
        data() {
            return {
                title: "",
                body: "",
                author: "",
                isActive: false
            }
        },
        methods: {
            create() {
                let data = {title: this.title, body: this.body, author: this.author };
                createAuthor(data)
                    .then(data => {
                        this.$emit('createAuthor', data.author);
                        this.title = this.body = this.author = '';
                        this.toggle();
                    })
                    .catch(err => alert(err.message));
            },
            toggle() {
                this.isActive = !this.isActive;
            },
        },
        mounted() {
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