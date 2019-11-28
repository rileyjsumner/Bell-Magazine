<template>
    <div class="field">
        <div class="control">
            <label>Upload Image
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
            </label>
            <button v-on:click="submitFile()">Submit</button>
        </div>
    </div>
</template>

<script>
    import {uploadAuthorImage} from "../repository";

    export default {
        name: "FileUpload",
        data() {
            return {
                file: ''
            }
        },
        methods: {
            submitFile() {
                let formData = new FormData();
                formData.append('file', this.file);
                // insert validation here
                console.log(this.file);
                uploadAuthorImage(formData);
            },
            handleFileUpload() {
                this.file = this.$refs.file.files[0];
            }
        }
    }
</script>

<style scoped>

</style>