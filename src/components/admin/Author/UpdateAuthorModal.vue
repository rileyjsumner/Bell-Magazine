<template>
    <div>
        <div class="modal" :class="{ 'is-active': isActive }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                  <h1>Update Author</h1>
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
                                <input v-model="slug" class="input" type="text" placeholder="url">
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
                            <label>Email:
                                <input v-model="email" class="input" type="email" placeholder="email"/>
                            </label>
                        </div>
                    </div>
                    <div class="field">
                      <div class="control">
                        <label>Rank:
                          <input v-model="rank" class="input" type="number" placeholder="rank"/>
                        </label>
                      </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label>Photo:
                                <input v-model="photo_url" class="input" type="text" placeholder="photo url"/>
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

    import { updateAuthor } from "@/repository";

    export default {
        name: "UpdateAuthorModal",
        data() {
            return {
                name: this.author.name,
                slug: this.author.slug,
                staff_bio: this.author.staff_bio,
                long_bio: this.author.long_bio,
                facebook_url: this.author.facebook_url,
                twitter_username: this.author.twitter_username,
                instagram_username: this.author.instagram_username,
                email: this.author.email,
                photo_url: this.author.photo_url,
                rank: this.author.rank,
                isActive: false
            }
        },
        props: [ 'author' ],
        methods: {
            update() {
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
                  photo_url: this.photo_url, };
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
