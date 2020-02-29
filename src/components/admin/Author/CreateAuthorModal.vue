<template>
    <div class="modal-card-body-inner">
        <div class="field">
            <div class="control">
                <label for="name">Name:</label>
                <input id="name" v-model="name" class="input" type="text" placeholder="name"/>
<!--                <div class="author-search">-->
<!--                    <ul id="author-search-list"></ul>-->
<!--                </div>-->
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="url">www.bell.com/author/:</label>
                <input id="url" v-model="url" class="input" type="text" placeholder="url">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="staff_bio">Short Bio:</label>
                <input id="staff_bio" v-model="staff_bio" class="input" type="text" placeholder="staff bio"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="long_bio">Long Bio:</label>
                <input id="long_bio" v-model="long_bio" class="input" type="text" placeholder="long bio"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="social_handle">Social Handle:</label>
                <input id="social_handle" v-model="social_handle" class="input" type="text" placeholder="social handle"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="email">Email:</label>
                <input id="email" v-model="email" class="input" type="email" placeholder="email"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="photo">Photo:</label>
                <input id="photo" v-model="photo" class="input" type="text" placeholder="photo url"/>
            </div>
        </div>
        <FileUpload></FileUpload>
        <button @click="create" class="button">Create Author</button>
    </div>
</template>

<script>

    import {createAuthor, getAuthorByName} from "../../../repository";
    import FileUpload from "../../FileUpload";

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