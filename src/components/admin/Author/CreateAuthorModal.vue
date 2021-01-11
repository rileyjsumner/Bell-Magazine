<template>
    <div class="modal-card-body-inner">
        <div class="field">
            <div class="control">
                <label for="name">Name:</label>
                <input id="name" v-model="name" class="input" type="text" placeholder="name"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="url">www.bell.com/author/:</label>
                <input id="url" v-model="slug" class="input" type="text" placeholder="url">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="staff_bio">Staff Bio:</label>
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
                <label for="facebook_url">Facebook URL:</label>
                <input id="facebook_url" v-model="facebook_url" class="input" type="text" placeholder="facebook handle"/>
            </div>
        </div>
        <div class="field">
          <div class="control">
            <label for="twitter_username">Twitter Username:</label>
            <input id="twitter_username" v-model="twitter_username" class="input" type="text" placeholder="twitter handle"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label for="instagram_username">Instagram Username:</label>
            <input id="instagram_username" v-model="instagram_username" class="input" type="text" placeholder="insta handle"/>
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
            <label for="rank">Rank:</label>
            <input id="rank" v-model="rank" class="input" type="number" placeholder="rank"/>
          </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="photo">Photo URL:</label>
                <input id="photo" v-model="photo_url" class="input" type="text" value="" placeholder="photo url"/>
            </div>
        </div>
        <FileUpload></FileUpload>
        <button @click="create" class="button">Create Author</button>
    </div>
</template>

<script>

import { createAuthor } from '@/repository';
    import FileUpload from "../../FileUpload";

    export default {
        name: "CreateAuthorModal",
        components: {FileUpload},
        data() {
            return {
                name: "",
                slug: "",
                staff_bio: "",
                long_bio: "",
                facebook_url: "",
                twitter_username: "",
                instagram_username: "",
                email: "",
                photo_url: "",
                rank: 0,
                isActive: false
            }
        },
        methods: {
            create() {
                let data = {
                    name: this.name,
                    slug: this.slug,
                    staff_bio: this.staff_bio,
                    long_bio: this.long_bio,
                    facebook_url: this.facebook_url,
                    twitter_username: this.twitter_username,
                    instagram_username: this.instagram_username,
                    email: this.email,
                    rank: this.rank,
                    photo_url: this.photo_url
                };
                createAuthor(data)
                    .then(data => {
                        this.$emit('createAuthor', data.author);
                        this.name = this.slug = this.staff_bio = this.rank = this.long_bio = this.facebook_url = this.instagram_username = this.twitter_username = this.email = this.photo_url = '';
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
