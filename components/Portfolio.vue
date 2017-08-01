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
                    <a :href="element.link" class="work" v-bind:id="element.identifiant" target="_blank">
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
              description: 'Mushin is a fast-growing French tech-startup who recently won an award at the VivaTech contest. This website was built from scratch using best practices, as the objective number one was the speed - I worked in collaboration with a designer.',
              identifiant: 'mushin',
              categories: ['website', 'startup'],
              link: 'https://mymushin.com'
            },
            {
              name: 'Raphaële Fabre',
              description: 'Website built using Wordpress for a Lawyer - I acted as a consultant more than a developer.',
              identifiant: 'fabre',
              categories: ['website', 'avocat'],
              link: 'https://rfabre-avocat.fr'
            },
            {
              name: 'Clémence & Margaux',
              description: 'First eCommerce website built from scratch during my internship - using an internal MVC PHP Framework.',
              identifiant: 'infitex',
              categories: ['website', 'avocat'],
              link: 'https://clemence-margaux.com'
            }
          ]
        }
      }
    }
</script>
