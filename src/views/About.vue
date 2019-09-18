<template>
    <div class="container">
        <div id="about" class="row">
            <div class="col col-wide">
                <h1>About</h1>
                <p>Here at <em>Bell</em>, we hope to capture the essence of what feminism is to us: an inclusive, engaging effort towards equality, as told through data-driven, personalized storytelling.</p>
                <p>Named after two notable alumni who fought hard for women's rights through activism and writing, bell hooks and Bell Case LaFollette, we serve as a microphone for the voices who have all-too-often been muted.</p>
                <p>Whether it's via our coverage of the trials and triumphs of gender minorities on campus, enlightening lectures and discussions with faculty and visiting academics, or vehement retellings of our personal experiences, we are connected by the common goal of lifting others, and hope you will join us.</p>

            </div>
            <div class="col col-narrow col-no-header">
                <p class="pull-quote">I will not have my life narrowed down. I will not bow down to somebody else's whim or to someone else's ignorance.</p>
            </div>
        </div>

        <StaffDirectory></StaffDirectory>
    </div>
</template>

<script>
    import StaffDirectory from "../components/StaffDirectory";
    export default {
        name: "About",
        components: {StaffDirectory}
    }
</script>

<style scoped>

</style>