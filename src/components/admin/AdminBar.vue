<template>
    <div class="admin-dropdown">
        <i id="dropdown-toggle" class="fas fa-chevron-circle-down"></i>
        <ul class="admin-dropdown-menu shadow">
            <li><router-link to="/Login">Login</router-link></li>
            <li><router-link to="/Admin">Admin</router-link></li>
            <li id="light" v-on:click="light()"><a>Light Theme</a></li>
            <li id="dark" v-on:click="dark()"><a>Dark Theme</a></li>
        </ul>
    </div>
</template>

<script>

    import JQuery from 'jquery'
    let $ = JQuery;

    $(document).ready(function() {
        $("#dropdown-toggle").click(function() {
            if($(".admin-dropdown-menu").hasClass("admin-dropdown-menu-active")) {

                $(".admin-dropdown-menu").removeClass("admin-dropdown-menu-active");
                $(this).css("transform", "rotate(360deg)");
                $(".admin-dropdown-menu").css("max-height", "0px");

            } else {
                $(".admin-dropdown-menu").addClass("admin-dropdown-menu-active");
                $(this).css("transform", "rotate(180deg)");
                $(".admin-dropdown-menu").css("max-height", "150px");
            }
        });
        $('html').click(function(e) {
            if(e.target.id !== "dropdown-toggle") {
                if($(".admin-dropdown-menu").hasClass("admin-dropdown-menu-active")) {

                    $(".admin-dropdown-menu").removeClass("admin-dropdown-menu-active");
                    $("#dropdown-toggle").css("transform", "rotate(360deg)");
                    $(".admin-dropdown-menu").css("max-height", "0px");

                }
            }
        })
    });

    export default {
        name: "AdminBar",
        methods: {
            light() {
                $("#light").css("display", "none");
                $("#dark").css("display", "block");

                $("#app").removeClass("dark");
                $(".content").removeClass("dark");
                $(".shadow").removeClass("dark");
                $(".footer").removeClass("dark");
                $(".article").removeClass("dark");
                $(" a ").removeClass("dark");
                $(" p ").removeClass("dark");
                $(" label ").removeClass("dark");
                $(" h1 ").removeClass("dark");
                $(" h2 ").removeClass("dark");
                $(" h3 ").removeClass("dark");
                $(" h4 ").removeClass("dark");
                $(" h5 ").removeClass("dark");
                $(" h6 ").removeClass("dark");
                $(".admin-dropdown-menu").removeClass("dark");
                $(".nav").removeClass("dark");
            },
             dark() {
                $("#light").css("display", "block");
                $("#dark").css("display", "none");

                $("#app").addClass("dark");
                $(".content").addClass("dark");
                $(".shadow").addClass("dark");
                $(".footer").addClass("dark");
                $(".article").addClass("dark");
                $(" a ").addClass("dark");
                $(" p ").addClass("dark");
                $(" label ").addClass("dark");
                $(" h1 ").addClass("dark");
                $(" h2 ").addClass("dark");
                $(" h3 ").addClass("dark");
                $(" h4 ").addClass("dark");
                $(" h5 ").addClass("dark");
                $(" h6 ").addClass("dark");
                $(".admin-dropdown-menu").addClass("dark");
                $(".nav").addClass("dark");

            }
        }
    }
</script>

<style scoped>

    #dropdown-toggle {
        font-size: 2.5rem;
        transition: all .2s ease-in-out;
        transform: rotate(360deg);
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    #light {
        display: none;
    }

</style>