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
                            <label>Name:
                                <input v-model="name" class="input" type="text" placeholder="name"/>
                            </label>
                            <div class="author-search">
                                <ul id="author-search-list"></ul>
                            </div>
                        </div>
                    </div>
<!--                    <div class="field">-->
<!--                        <div class="control">-->
<!--                            <label>Email:-->
<!--                                <input v-model="email" class="input" type="email" placeholder="email"/>-->
<!--                            </label>-->
<!--                        </div>-->
<!--                    </div>-->
                    <div class="field">
                        <div class="control">

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

    import {createAuthor, getAuthorByName} from "../../repository";

    export default {
        name: "CreateAuthorModal",
        data() {
            return {
                name: "",
                short_bio: "",
                long_bio: "",
                social_handle: "",
                email: "",
                photo: "",
                isActive: false
            }
        },
        methods: {
            create() {
                let data = {
                    name: this.name
                    // short_bio: this.short_bio,
                    // long_bio: this.long_bio,
                    // social_handle: this.social_handle,
                    // email: this.email,
                    // photo: this.photo
                };
                createAuthor(data)
                    .then(data => {
                        console.log(data.author);
                        this.$emit('createAuthor', data.author);
                        this.name = '';
                        // this.name = this.short_bio = this.long_bio = this.social_handle = this.email = this.photo = '';
                        this.toggle();
                    })
                    .catch(err => alert(err.message));
            },
            toggle() {
                this.isActive = !this.isActive;
            }
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