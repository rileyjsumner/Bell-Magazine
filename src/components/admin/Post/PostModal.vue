<template>
    <div>
        <div class="modal" :class="{ 'is-active': isActive }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <h1 v-if="isPostCreate">Create Article</h1>
                    <h1 v-else>Update Article</h1>
                </header>
                <section class="modal-card-body">
                    <CreatePostModal v-if="isPostCreate"></CreatePostModal>
                    <UpdatePostModal :post="post" :updateId="post._id" v-if="!isPostCreate"></UpdatePostModal>
                    <div class="field full">
                        <div id="modal-editor" class="control">
                            <div id="editor"></div>
                        </div>
                    </div>
                </section>
            </div>
            <button @click="toggle" class="modal-close btn-close" aria-label="close"></button>
        </div>
        <button v-if="isPostCreate" @click="toggle" class="button">Create Post</button>
        <button v-if="!isPostCreate" @click="toggle" class="button">Update</button>
    </div>
</template>

<script>

    import {createPost, getAuthorByName, getAuthors, updatePost} from '@/repository';
    import Quill from 'quill';
    import $ from 'jquery';
    import CreatePostModal from "./CreatePostModal";
    import UpdatePostModal from "./UpdatePostModal";

    let editor;

    export default {
        name: "PostModal",
        components: {UpdatePostModal, CreatePostModal  },
        props: {
            isPostCreate: Boolean,
            post: Object,
        },
        data() {
            return {
                title: "",
                body: "",
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
                let body = editor.root.innerHTML;
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
                        this.title = this.body = this.author = this.permalink = this.category = this.description = this.photo = '';
                        this.toggle();
                    })
                    .catch(err => alert(err.message));
            },
            update() {
                let data = { title: this.title,
                    body: this.body,
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
                if(this.isActive) {
                    $(" #app ").css("position", "fixed");
                    if(this.isPostCreate) {
                        $(" #modal-editor ").html("<div id='editor'></div>");
                        editor = new Quill('#editor', {
                            modules: { toolbar: true },
                            theme: 'snow'
                        });
                    } else {
                        $(" #modal-editor-"+this.post._id).html("<div class='update-editor' id='update-editor-"+this.post._id+"'>" + this.post.body + "</div>");
                        editor = new Quill('#update-editor-'+this.post._id, {
                            modules: { toolbar: true },
                            theme: 'snow'
                        });
                    }
                } else {
                    $(" #app ").css("position", "static");
                    editor = null;
                    $("#modal-editor").html("");
                }
            },
            handleChange() {
                let id = getAuthorByName(this.author);
            }
        },
        mounted() {
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
