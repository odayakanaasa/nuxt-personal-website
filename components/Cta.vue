<template>
    <section class="grey-gradient-bt">
        <div class="call-to-action">
            <div class="container">
                <div class="row animate-box">
                    <div class="col-md-8 col-md-offset-2 text-center heading">
                        <h2>Hire Me!</h2>
                        <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                        <p><a href="#" class="btn btn-default btn-lg">Contact Me</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        // data must be a function with vue components
        data() {
            return {
                offers: [
                    { name: 'Branding', description: 'description', icon: 'icon-test' },
                ]
            }
        }
    }
</script>