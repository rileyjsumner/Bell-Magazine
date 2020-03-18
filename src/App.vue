<template>
    <div id="app" class="app">
        <Header></Header>
        <div class="content">
            <router-view @authenticated="setAuthenticated" />
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

    import Header from "./components/Header";
    import Footer from "./components/Footer";

    export default {
        name: 'app',
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "root",
                    password: "admin"
                },
            }
        },
        mounted() {
            if(this.authenticated) { // logic broken rn
                this.$router.replace({ name: "Login"});
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        },
        components: {
            Header,
            Footer
        }
    }
</script>

<style lang="scss">
    @font-face {
        font-family: Lemon;
        src: url("./assets/fonts/LemonMilk.otf") format('opentype');
    }

    @font-face {
        font-family: Quicksand;
        src: url("./assets/fonts/Quicksand_Book.otf") format('opentype');
    }

    @font-face {
        font-family: Bebas Kai;
        src: url("./assets/fonts/BebasKai.otf") format('opentype');
    }

    @font-face {
        font-family: Satisfy;
        src: url("./assets/fonts/Satisfy-Regular.ttf") format('truetype');
    }

    @font-face {
        font-family: Fira Sans;
        src: url("./assets/fonts/FiraSansExtraCondensed-ExtraBold.ttf") format('truetype');
    }

    @font-face {
        font-family: Open Sans;
        src: url("./assets/fonts/OpenSans-Regular.ttf") format('truetype');
    }

    @font-face {
        font-family: Rubik Mono One;
        src: url("./assets/fonts/RubikMonoOne-Regular.ttf") format('truetype');
    }


    @import "assets/styles/global.scss";
</style>
