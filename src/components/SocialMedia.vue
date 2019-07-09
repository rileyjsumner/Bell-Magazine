<template>
    <div :class="size" class="social-media">

    </div>
</template>

<script>
    export default {
        name: "SocialMedia",
        props: {
            instagram: String,
            twitter: String,
            facebook: String,
            snapchat: String,
            email: String,
            size: String
        }
    }
</script>

<style scoped>

</style>