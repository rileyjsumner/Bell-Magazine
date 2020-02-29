<template>
    <div class="modal-card-body-inner">
        <div class="field">
            <div class="control">
                <label for="update-title">Title:</label>
                <input id="update-title" v-model="title" class="input" type="text" placeholder="title"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="update-category">Category:</label>
                <input id="update-category" v-model="category" class="input" type="text" placeholder="category"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="update-link">Permalink:</label>
                <input id="update-link" v-model="permalink" class="input" type="text" placeholder="permalink"/>
                <p class="permalink">https://www.bell.com/</p>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="update-author">Author:</label>
                <input id="update-author" v-model="author" class="input" type="text" placeholder="author"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="update-description">Description:</label>
                <input id="update-description" v-model="description" class="input" type="text" placeholder="description"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="update-photo">Description:</label>
                <input id="update-photo" v-model="photo" class="input" type="text" placeholder="photo link"/>
            </div>
        </div>
        <div class="field full">
            <div :id="'modal-editor-' + updateId" class="control">
                <div class='update-editor' id="update-editor"></div>
            </div>
        </div>
        <button @click="update" class="button">Update</button>
    </div>
</template>

<script>

    import { updatePost } from "../../../repository";
    import $ from 'jquery';

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
                photo: this.post.photo,
                isActive: false
            }
        },
        props: [ 'post', 'updateId' ],
        methods: {
            update() {
                let body = $(".ql-editor").html();
                let data = { title: this.title,
                    body: body,
                    author: this.author,
                    permalink: this.permalink,
                    category: this.category,
                    photo: this.photo,
                    description: this.description };
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

    .permalink {
        margin: 0;
        font-size: 1rem;
        color: #8D8D8D;
    }

</style>