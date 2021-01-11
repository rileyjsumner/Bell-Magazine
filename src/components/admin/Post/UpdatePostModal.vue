<template>
    <div class="modal-card-body-inner">
        <div class="field">
          <div class="control">
            <label>Title:</label>
            <input v-model="title" class="input create-post-title" type="text" placeholder="title"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label>Author:</label>
            <input v-model="author" class="input" type="text" placeholder="author(s), separated by a comma"/>
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
            <label>Publish Date</label>
            <input v-model="publish_date" class="input" type="datetime-local" placeholder="Publish Date"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label>Slug:</label>
            <input v-model="slug" class="input create-post-slug" type="text" placeholder="slug"/>
            <p class="permalink">https://www.bell.com/</p>
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
            <input id="create-photo-link" v-model="photo_url" class="input" type="text" placeholder="photo link"/>
          </div>
        </div>
        <FileUpload></FileUpload>
        <div class="field full">
            <div :id="'modal-editor-' + updateId" class="control">
                <div class='update-editor'></div>
            </div>
        </div>
        <button @click="update" class="button">Update</button>
    </div>
</template>

<script>

    import { updatePost } from '@/repository';
    import FileUpload from '../../FileUpload'
    import $ from 'jquery';

    let editor;

    export default {
        name: "UpdatePostModal",
        components: { FileUpload },
        data() {
            return {
                title: this.post.title,
                body: this.post.body,
                author: this.post.author,
                category: this.post.category,
                publish_date: this.post.publish_date,
                slug: this.post.slug,
                description: this.post.description,
                photo_url: this.post.photo_url,
                isActive: false
            }
        },
        props: [ 'post', 'updateId' ],
        methods: {
            update() {
                let body = $(".ql-editor").html();
                let data = {
                    title: this.title,
                    body: body,
                    author: this.author,
                    slug: this.slug,
                    publish_date: this.publish_date,
                    category: this.category,
                    photo_url: this.photo_url,
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
