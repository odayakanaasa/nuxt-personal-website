<template>
    <section class="services grey-gradient-tb">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 text-center heading">
                    <h2>My Services</h2>
                </div>
            </div>
            <div class="row margin-top-40">
                <div v-for="offer in offers" class="col-md-4 text-center">
                    <div class="feature-left">
                        <span class="icon">
                            <i v-bind:class="offer.icon"></i>
                        </span>
                        <div class="feature-copy">
                            <h3>{{ offer.name }}</h3>
                            <p>{{ offer.description }}</p>
                        </div>
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
                    { name: 'test', description: 'description', icon: '' }
                ]
            }
        }
    }
</script>