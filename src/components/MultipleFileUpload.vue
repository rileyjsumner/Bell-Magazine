<template>
    <div class="field">
        <div class="control">
            <p v-if="error">{{ message }}</p>
            <form @submit.prevent="submitFiles()" enctype="multipart/form-data">
                <label for="files">Upload Image</label>
                <input id="files" type="file" ref="files" multiple @change="handleFileUploads()"/>
                <button>Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {uploadArticleImages} from "../repository";
    import _ from 'lodash';

    export default {
        name: "MultipleFileUpload",
        data() {
            return {
                files: [],
                error: false,
                uploadFiles: [],
                message: ""
            }
        },
        methods: {
            async submitFiles() {
                const formData = new FormData();
                _.forEach(this.uploadFiles, file => {
                    if(this.validate(file) === "") {
                        formData.append('files', file);
                    }
                });

                uploadArticleImages(formData);
            },
            validate(file) {
                const MAX_SIZE = 1000000;
                const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

                if(file.size > MAX_SIZE) {
                    return `Max size: ${MAX_SIZE/1000}Kb`;
                }

                if(!allowedTypes.includes(file.type)) {
                    return "Allowed file types: .jpg, .png, .gif";
                }

                return "";
            },
            handleFileUploads() {
                const files = this.$refs.files.files;
                this.uploadFiles = [ ...this.files, ...files];

                this.files = [
                    ...this.files,
                    ..._.map(files, file => ({
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        invalidMessage: this.validate(file)
                    }))
                ];
            }
        }
    }
</script>

<style scoped>

</style>