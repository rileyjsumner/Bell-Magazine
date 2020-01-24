<template>
    <div class="tabs">
        <button v-for="tab in tabs" class="btn tab-btn" @click="handleTab(tab)">{{ tab }}</button>
    </div>
</template>

<script>

    import $ from "jquery";

    export default {
        name: "AdminTabBar",
        data() {
            return {
                tabs: ["post", "author"]
            }
        },
        methods: {
            handleTab(tab) {
                $(".tab").each(function() {
                    $(this).removeClass("tab-active");
                });
                console.log($("#tab-" + tab));
                $("#tab-" + tab).addClass("tab-active");

            }
        }
    }
</script>

<style scoped>

</style>