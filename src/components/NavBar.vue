<template>
    <nav class="nav nav-mobile nav-mobile-collapsed">
        <div class="container">
            <img class="nav-logo" src="../assets/pics/bell_logo_small.svg" height="29" alt="small logo"/>
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
                $(".nav-mobile").addClass("nav-mobile-collapsed");
                $(this).removeClass("open");

            } else { // else open
                $(this).html("&times;");
                $(".nav-mobile").removeClass("nav-mobile-collapsed");
                $(this).addClass("open");
            }
        });

        $(".link a").click(function() {
            if(window.screen.width < 576) {
                $("#nav-toggle").html("&#8801;");
                $(".nav-mobile").addClass("nav-mobile-collapsed");
                $("#nav-toggle").removeClass("open");
            }
        });
    });

    window.onscroll = function() {
        let sticky = 150;
        if (window.pageYOffset > sticky) {
            $(".nav").addClass("sticky");
            $(".content").css("padding-top", "45px");
            $(".nav-logo").css("transform", "translateX(0%)");
        } else {
            $(".nav").removeClass("sticky");
            $(".content").css("padding-top", "0px");
            $(".nav-logo").css("transform", "translateX(-200%)");
        }
    };

    export default {
        name: "NavBar",
        props: {
            links: Array
        }
    }
</script>

<style scoped>

    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
    }

    .nav-logo {
        left: 1rem;
        transform: translateX(-200%);
        transition: transform .5s ease-in-out;
        position: absolute;
    }

</style>