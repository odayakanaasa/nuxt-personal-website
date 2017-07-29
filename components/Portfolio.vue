<template>
    <section class="portfolio grey-gradient-tb">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 text-left heading">
                    <h2>Some chunks of my work</h2>
                </div>
            </div>
            <div class="row portfolio-results margin-top-40">
                <div v-for="element in portfolioElements" class="col-md-4 text-center col-padding">
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
      data () {
        return {
          portfolioElements: [
            {
              name: 'Mushin',
              description: 'acilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit',
              identifiant: 'mushin',
              categories: ['website', 'startup']
            },
            {
              name: 'Raphaële Fabre',
              description: 'acilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit',
              identifiant: 'fabre',
              categories: ['website', 'avocat']
            },
            {
              name: 'Clémence & Margaux',
              description: 'acilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit',
              identifiant: 'infitex',
              categories: ['website', 'avocat']
            }
          ]
        }
      }
    }
</script>
