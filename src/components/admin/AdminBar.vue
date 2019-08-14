<template>
    <div class="admin-dropdown">
        <i id="dropdown-toggle" class="fas fa-chevron-circle-down"></i>
        <ul class="admin-dropdown-menu shadow">
            <li><router-link to="/Login">Login</router-link></li>
        </ul>
    </div>
</template>

<script>

    import JQuery from 'jquery'
    let $ = JQuery;

    $(document).ready(function() {
        $("#dropdown-toggle").click(function() {
            console.log("Dropdown");
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
        name: "AdminBar"
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

</style>