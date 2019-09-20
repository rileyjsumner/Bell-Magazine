<template>
    <div>
        <div class="modal" :class="{ 'is-active': isActive }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    Update Note
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
                    <button @click="update" class="button is-primary">Post</button>
                </section>
            </div>
            <button @click="toggle" class="modal-close" aria-label="close"></button>
        </div>
        <button @click="toggle" class="button">Update</button>
    </div>
</template>

<script>

    import { updatePost } from "../../repository";

    export default {
        name: "UpdatePostModal",
        data() {
            return {
                title: this.post.title,
                body: this.post.body,
                isActive: false
            }
        },
        props: [ 'post' ],
        methods: {
            update() {
                let data = { title: this.title, body: this.body };
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
        },
    }
</script>

<style scoped>

</style>