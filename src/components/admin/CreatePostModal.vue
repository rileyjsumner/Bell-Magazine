<template>
    <div class="modal-card-body-inner">
        <div class="field">
            <div class="control">
                <label for="create-title">Title:</label>
                <input id="create-title" v-model="title" class="input" type="text" placeholder="title"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="create-category">Category:</label>
                <input id="create-category" v-model="category" class="input" type="text" placeholder="category"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="create-permalink">Permalink:</label>
                <input id="create-permalink" v-model="permalink" class="input" type="text" placeholder="permalink"/>
                <p class="permalink">https://www.bell.com/</p>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="create-author">Author:</label>
                <input id="create-author" v-model="author" class="input" type="text" placeholder="author"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="create-description">Description:</label>
                <input id="create-description" v-model="description" class="input" type="text" placeholder="description"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="create-photo">Photo Link:</label>
                <input id="create-photo" v-model="photo" class="input" type="text" placeholder="photo link"/>
            </div>
        </div>
        <MultipleFileUpload></MultipleFileUpload>
        <div class="field full">
            <div id="modal-editor" class="control">
                <div id="editor"></div>
            </div>
        </div>
        <button @click="create" class="button">Create Post</button>
    </div>
</template>

<script>

    import {createPost, getAuthorByName, getAuthors} from "../../repository";
    import MultipleFileUpload from '../MultipleFileUpload.vue';
    import $ from 'jquery';

    let editor;
    let authorList = [];

    export default {
        name: "CreatePostModal",
        components: { MultipleFileUpload },
        data() {
            return {
                title: "",
                author: "",
                category: "",
                permalink: "",
                photo: "",
                description: "",
                isActive: false
            }
        },
        methods: {
            create() {
                let body = $(".ql-editor").html();
                let data = {
                    title: this.title,
                    body: body,
                    author: this.author,
                    permalink: this.permalink,
                    category: this.category,
                    photo: this.photo,
                    description: this.description
                };
                createPost(data)
                    .then(data => {
                        this.$emit('createPost', data.post);
                        this.title  = this.author = this.permalink = this.category = this.description = this.photo = '';
                        this.toggle();
                    })
                    .catch(err => alert(err.message));
            },
            toggle() {
                this.isActive = !this.isActive;
                if(this.isActive) {
                    $(" #app ").css("position", "fixed");
                } else {
                    $(" #app ").css("position", "static");
                }
            },
            handleChange() {
                let id = getAuthorByName(this.author);
            }
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