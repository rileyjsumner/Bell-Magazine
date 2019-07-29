<template>
    <div class="container">
        <h1>Contact</h1>

        <form class="form contact-form">
            <label class="form-label" for="name">Name</label>
            <input class="text-input" id="name" type="text" name="name"/>
            <label class="form-label" for="email">Email</label>
            <input class="text-input" id="email" type="email" name="email"/>
            <label class="form-label" for="subject">Subject</label>
            <input class="text-input" id="subject" type="text" name="subject"/>
            <label class="form-label" for="msg">Message</label>
            <textarea class="text-input long-input" id="msg" name="msg"></textarea>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>