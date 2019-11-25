<template>
    <div>
        <div class="modal" :class="{ 'is-active': isActive }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    Update Post
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
                            <label>Permalink: https://www.bell.com/story/
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
                            <label>Category:
                                <input v-model="description" class="input" type="text" placeholder="description"/>
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <textarea v-model="body">{{ body }}</textarea>
                    </div>
                    <button @click="update" class="button is-primary">Post</button>
                </section>
            </div>
            <button @click="toggle" class="modal-close btn-close" aria-label="close"></button>
        </div>
        <button @click="toggle" class="button">Update</button>
    </div>
</template>

<script>

    import { updatePost } from "../../repository";

    let editor;

    export default {
        name: "UpdatePostModal",
        data() {
            return {
                title: this.post.title,
                body: this.post.body,
                author: this.post.author,
                category: this.post.category,
                permalink: this.post.permalink,
                description: this.post.description,
                isActive: false
            }
        },
        props: [ 'post' ],
        methods: {
            update() {
                let data = { title: this.title, body: this.body, author: this.author, permalink: this.permalink, category: this.category, description: this.description };
                updatePost(data, this.post._id)
                    .then(data => {
                        this.$emit('updatePost', data.post);
                        this.toggle();
                    })
                    .catch(err => alert(err.message));
            },
            toggle() {
                this.isActive = !this.isActive;
            },
        }
    }
</script>

<style scoped>

    .updateEditor {
        border: 1px solid black;
        width: 85%;
        margin: 0 auto;
    }

</style>