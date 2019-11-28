<template>
    <div class="field">
        <div class="control">
            <div v-for="(file, key) in files" class="file-listing">{{ file.name }} <span v-on:click="removeFile(key)">Delete</span></div>
            <label>Upload Image
                <input type="file" id="files" ref="files" multiple v-on:change="handleFileUpload()"/>
            </label>
            <button v-on:click="addFiles()">Add Files</button>
            <button v-on:click="submitFile()">Submit</button>
        </div>
    </div>
</template>

<script>
    import {uploadArticleImages} from "../repository";

    export default {
        name: "FileUpload",
        data() {
            return {
                files: []
            }
        },
        methods: {
            submitFile() {
                let formData = new FormData();
                for( let i = 0; i < this.files.length; i++ ){
                    let file = this.files[i];
                    formData.append('files[' + i + ']', file); }
                // insert validation here
                uploadArticleImages(formData);
            },
            handleFileUpload() {
                this.files = this.$refs.files.files;

                let uploadedFiles = this.$refs.files.files;

                for( let i = 0; i < uploadedFiles.length; i++ ){
                    this.files.push( uploadedFiles[i] );
                }
            },
            addFiles() {
                this.$refs.files.click();
            },
            removeFile( key ){
                this.files.splice( key, 1 );
            }
        }
    }
</script>

<style scoped>
    input[type="file"]{
        position: absolute;
        top: -500px;
    }
</style>