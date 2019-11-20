<template>
    <div>
        <div class="modal" :class="{ 'is-active': isActive }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    Update Author
                </header>
                <section class="modal-card-body">
                    <div class="field">
                        <div class="control">
                            <label>Name:
                                <input v-model="name" class="input" type="text" placeholder="name">
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

    import { updateAuthor } from "../../repository";

    export default {
        name: "UpdateAuthorModal",
        data() {
            return {
                name: this.author.name,
                isActive: false
            }
        },
        props: [ 'author' ],
        methods: {
            update() {
                let data = { name: this.name };
                updateAuthor(data, this.author._id)
                    .then(data => {
                        this.$emit('updateAuthor', data.author);
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