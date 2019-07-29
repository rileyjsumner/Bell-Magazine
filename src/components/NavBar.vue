<template>
    <nav class="nav nav-mobile nav-mobile-collapsed">
        <div class="container">
            <ul class="nav-links">
                <li class="link" v-bind:key="link" v-for="link in links">
                    <router-link :to="{name: link}">{{ link }}</router-link>
                </li>
            </ul>
            <span id="nav-toggle">&#8801;</span>
        </div>
    </nav>
</template>

<script>
    import $ from 'jquery';

    $(document).ready(function() {
        $("#nav-toggle").click(function() {
            if($(this).html() === String.fromCharCode(215)) { // if close
                $(this).html("&#8801;");
                console.log("times");
                $(".nav-mobile").addClass("nav-mobile-collapsed");
                $(this).removeClass("open");

            } else { // else open
                $(this).html("&times;");
                console.log("hamburger");
                $(".nav-mobile").removeClass("nav-mobile-collapsed");
                $(this).addClass("open");
            }
        });
    });

    export default {
        name: "NavBar",
        props: {
            links: Array
        }
    }
</script>

<style scoped>

</style>