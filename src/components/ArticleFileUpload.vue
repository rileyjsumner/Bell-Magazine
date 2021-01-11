<template>
    <div class="field">
        <div class="control">
            <p v-if="error">{{ message }}</p>
            <form @submit.prevent="submitFile()" enctype="multipart/form-data">
                <label>Upload Image</label>
                <input type="file" ref="file" @change="handleFileUpload()"/>
                <button>Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {uploadArticleImage} from '@/repository';
    import $ from 'jquery';

    export default {
      name: "ArticleFileUpload",
      props: {
        linkref: String
      },
      data() {
          return {
              file: '',
              error: false,
              message: ""
          }
      },
      methods: {
          submitFile() {
              let formData = new FormData();
              formData.append('file', this.file);
              // insert validation here
              uploadArticleImage(formData);

              $(`#${this.linkref}`).val("/static/"+this.file.name);
          },
          handleFileUpload() {
              const file = this.$refs.file.files[0];
              const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
              const MAX_SIZE = 1000000;

              if(allowedTypes.includes(file.type) && !(file.size > MAX_SIZE)) {
                  this.file = file;
                  this.error = false;
              } else {
                  this.error = true;
                  this.message = (file.size > MAX_SIZE) ? "too big" : "wrong type";
              }
          }
      }
    }
</script>

<style scoped>

</style>
