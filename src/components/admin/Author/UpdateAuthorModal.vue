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
                    <button @click="update" class="button is-primary">Post</button>
                </section>
            </div>
            <button @click="toggle" class="modal-close btn-close" aria-label="close"></button>
        </div>
        <button @click="toggle" class="button">Update</button>
    </div>
</template>

<script>

    import { updateAuthor } from "../../../repository";

    export default {
        name: "UpdateAuthorModal",
        data() {
            return {
                name: this.author.name,
                url: this.author.url,
                staff_bio: this.author.staff_bio,
                long_bio: this.author.long_bio,
                social_handle: this.author.social_handle,
                email: this.author.email,
                photo: this.author.photo,
                isActive: false
            }
        },
        props: [ 'author' ],
        methods: {
            update() {
                let data = { name: this.name,
                    url: this.url,
                    staff_bio: this.staff_bio,
                    long_bio: this.long_bio,
                    social_handle: this.social_handle,
                    email: this.email,
                    photo: this.photo };
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