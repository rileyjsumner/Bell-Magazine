<template>
    <div>
        <div class="modal" :class="{ 'is-active': isActive }">
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
                            <label>Body:
                                <textarea v-model="body" class="textarea"  placeholder="enter content"></textarea>
                            </label>
                        </div>
                    </div>
                    <button @click="create" class="button">Post</button>
                </section>
            </div>
            <button @click="toggle" class="modal-close" aria-label="close"></button>
        </div>
        <button @click="toggle" class="button">Create Post</button>
    </div>
</template>

<script>

    import { createPost } from "../../repository";

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
                let data = {title: this.title, body: this.body }
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
    }
</script>

<style scoped>

</style>