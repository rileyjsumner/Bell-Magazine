<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-section">
                <ul class="footer-list">
                    <li class="footer-link"><router-link to="/Home">Home</router-link></li>
                    <li class="footer-link"><router-link to="/About">About</router-link></li>
                    <li class="footer-link"><router-link to="/Contact">Contact</router-link></li>
                </ul>
            </div>
            <div class="footer-section">
                <ul class="footer-list">
                    <li class="footer-link"><a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a></li>
                    <li class="footer-link"><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
            <div class="footer-section">
                <img class="footer-logo" src="../assets/pics/bell_logo_white.svg" alt="logo"/>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>