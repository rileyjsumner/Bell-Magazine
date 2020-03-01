<template>
    <div class="modal-card-body-inner">
        <div class="field">
            <div class="control">
                <label for="cat_name">Name:</label>
                <input id="cat_name" v-model="name" class="input" type="text" placeholder="name"/>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="type">Type:</label>
                <input id="type" v-model="type" class="input" type="text" placeholder="type">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label for="parent">Parent:</label>
                <input id="parent" v-model="parent" class="input" type="text" placeholder="parent"/>
            </div>
        </div>

        <button @click="update" class="button">Update</button>
    </div>
</template>

<script>
    import {updateCategory} from "../../../repository";

    export default {
        name: "UpdateCategoryModal",
        data() {
            return {
                name: this.name,
                type: this.type,
                parent: this.parent,
                isActive: false
            }
        },
        props: [ 'category' ],
        methods: {
            update() {
                let data = { name: this.name,
                    type: this.type,
                    parent: this.parent };
                updateCategory(data, this.author._id)
                    .then(data => {
                        this.$emit('updateCategory', data.author);
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