<template>
    <div class="login">
        <h1>Login</h1>
        <div class="form form-sm">
            <label class="form-label" for="email">Email</label>
            <input id="email" class="text-input" type="email" name="email" v-model="input.email" placeholder="name@example.com"/>
            <label class="form-label" for="password">Password</label>
            <input id="password" class="text-input" type="password" name="password" v-model="input.password" placeholder=""/>
            <button type="button" v-on:click="login()">Login</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username !== "" && this.input.password !== "") {
                    if(this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>