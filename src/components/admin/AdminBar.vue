<template>
    <div class="admin-dropdown">
        <i id="dropdown-toggle" class="fas fa-chevron-circle-down"></i>
        <ul class="admin-dropdown-menu shadow">
            <li><router-link to="/Login">Login</router-link></li>
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
        })
    });

    export default {
        name: "AdminBar",
        methods: {
            light() {
                $("#light").css("display", "none");
                $("#dark").css("display", "block");

                $("#app").addClass("light");
                $(".content").addClass("light");
                $(".shadow").addClass("light");
                $(".footer").addClass("light");
                $(".article").addClass("light");
                $("a").addClass("light");
                $(".admin-dropdown-menu").addClass("light");
            },
             dark() {
                $("#light").css("display", "block");
                $("#dark").css("display", "none");

                $("#app").removeClass("light");
                $(".content").removeClass("light");
                $(".shadow").removeClass("light");
                $(".footer").removeClass("light");
                $(".article").removeClass("light");
                $("a").removeClass("light");
                $(".admin-dropdown-menu").removeClass("light");

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

    #dark {
        display: none;
    }

</style>