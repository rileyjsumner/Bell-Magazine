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

        <button @click="create" class="button">Create</button>
    </div>
</template>

<script>
    import {createCategory} from '@/repository';

    export default {
        name: "CreateCategoryModal",
        data() {
            return {
                name: "",
                type: "",
                parent: "",
                isActive: false
            }
        },
        methods: {
            create() {
                let data = {
                    name: this.name,
                    type: this.type,
                    parent: this.parent,
                };
                createCategory(data)
                    .then(data => {
                        this.$emit('createCategory', data.category);
                        this.name = this.type = this.parent = '';
                        this.toggle();
                    })
                    .catch(err => alert(err.message));
            },
            toggle() {
                this.isActive = !this.isActive;
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
