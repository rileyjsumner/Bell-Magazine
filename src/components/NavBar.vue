<template>
    <nav class="nav nav-mobile nav-mobile-collapsed">
        <div class="container">
            <img class="nav-logo" src="../assets/pics/bell_logo_small.svg" height="29" alt="small logo"/>
            <ul class="nav-links">
                <li class="link" v-bind:key="link" v-for="link in links">
                    <router-link :to="{name: link}">{{ link }}</router-link>
                </li>
                <li id="search-bar" class="link link-search"><a v-on:click="handleSearch()"><i class="fas fa-search"></i></a></li>
                <li class="link link-search-input"><input type="text"/></li>
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
        },
        methods: {
            handleSearch() {
                if(!$(".link-search").hasClass("search-active")) {
                    $(".link-search-input input").css("width", "250px");
                    $(".link-search-input input").css("background-color", "#FDFDF9");
                    $(".link-search").css("right", "16.93rem");
                    $(".link-search").addClass("search-active");
                } else {
                    $(".link-search-input input").css("width", "0px");
                    $(".link-search-input input").css("background-color", "#04070D");
                    $(".link-search").css("right", ".25rem");
                    $(".link-search").removeClass("search-active");
                }


            }
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

</style>