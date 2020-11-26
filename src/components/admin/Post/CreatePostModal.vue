<template>
    <div class="modal-card-body-inner">
        <div class="field">
            <div class="control">
                <label>Title:</label>
                <input v-model="title" class="input" type="text" placeholder="title"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Category:</label>
                <input v-model="category" class="input" type="text" placeholder="category"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Permalink:</label>
                <input v-model="permalink" class="input" type="text" placeholder="permalink"/>
                <p class="permalink">https://www.bell.com/</p>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Author:</label>
                <input v-model="author" class="input" type="text" placeholder="author"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Description:</label>
                <input v-model="description" class="input" type="text" placeholder="description"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label>Photo Link:</label>
                <input v-model="photo" class="input" type="text" placeholder="photo link"/>
            </div>
        </div>
        <FileUpload></FileUpload>
        <div class="field full">
            <div id="modal-editor" class="control">
                <div id="editor"></div>
            </div>
        </div>
        <button @click="create" class="button">Create Post</button>
    </div>
</template>

<script>

    import {createPost, getAuthorByName, getAuthors} from '@/repository';
    import $ from 'jquery';
    import FileUpload from '@/components/FileUpload';

    let editor;
    let authorList = [];

    export default {
        name: "CreatePostModal",
        components: { FileUpload },
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
