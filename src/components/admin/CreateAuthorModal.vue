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
                    <div class="field">
                        <div class="control">
                            <label>www.bell.com/author/:
                                <input v-model="url" class="input" type="text" placeholder="url">
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label>Short Bio:
                                <input v-model="staff_bio" class="input" type="text" placeholder="staff bio"/>
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label>Long Bio:
                                <input v-model="long_bio" class="input" type="text" placeholder="long bio"/>
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label>Social Handle:
                                <input v-model="social_handle" class="input" type="text" placeholder="social handle"/>
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label>Email:
                                <input v-model="email" class="input" type="email" placeholder="email"/>
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label>Photo:
                                <input v-model="photo" class="input" type="text" placeholder="photo url"/>
                            </label>
                        </div>
                    </div>
                    <FileUpload></FileUpload>
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
    import FileUpload from "../FileUpload";

    export default {
        name: "CreateAuthorModal",
        components: {FileUpload},
        data() {
            return {
                name: "",
                url: "",
                staff_bio: "",
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
                    name: this.name,
                    url: this.url,
                    staff_bio: this.staff_bio,
                    long_bio: this.long_bio,
                    social_handle: this.social_handle,
                    email: this.email,
                    photo: this.photo
                };
                createAuthor(data)
                    .then(data => {
                        console.log(data.author);
                        this.$emit('createAuthor', data.author);
                        this.name = this.url = this.staff_bio = this.long_bio = this.social_handle = this.email = this.photo = '';
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

</style>