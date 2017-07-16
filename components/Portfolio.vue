<template>
    <section class="portfolio grey-gradient-tb">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 text-center heading">
                    <h2>Work</h2>
                </div>
            </div>
            <div class="row portfolio-results margin-top-40">
                <div v-for="element in portfolioElements" class="col-md-3 text-center col-padding">
                    <a href="#" class="work" v-bind:id="element.identifiant">
                        <div class="desc">
                            <h3>{{ element.name }}</h3>
                            <span>{{ element.description }}</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                portfolioElements: this.$i18n.t('portfolio'),
                filter: null,
                search: '',
                open: false
            }
        }
    }
</script>