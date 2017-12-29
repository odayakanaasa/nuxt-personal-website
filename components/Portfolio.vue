<template>
    <section class="portfolio grey-gradient-tb">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 text-left heading">
                    <h2>Some chunks of my work</h2>
                </div>
            </div>
            <div class="row portfolio__container">
                <div v-for="element in portfolioElements"
                    :key="element.id"
                    class="col-md-4 text-center col-padding">
                    <a :href="element.link" class="portfolio__container__block" :id="element.id" target="_blank">
                        <div>
                            <h3 v-text="element.name"></h3>
                            <p v-text="element.description"></p>
                            <span v-for="cat in element.categories" v-text="`#${cat}`" :key="cat"></span>
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
              name: 'StudioForty9 Cross-Sell Recommendations API',
              description: 'This was one of my project I set out during my 8-month internship in Ireland. [Description coming soon]',
              id: 'sf9-recommendation',
              categories: ['api', 'laravel', 'ecommerce'],
              link: 'https://studioforty9.com'
            },
            {
              name: 'Mushin',
              description: 'Mushin is a fast-growing French tech-startup who recently won an award at the VivaTech contest. This website was built from scratch using best practices, as the objective number one was the speed - I worked in collaboration with a designer.',
              id: 'mushin',
              categories: ['website', 'startup'],
              link: 'https://mymushin.com'
            },
            {
              name: 'Raphaële Fabre',
              description: 'Website built using Wordpress for a Lawyer - I acted as a consultant more than a developer.',
              id: 'fabre',
              categories: ['website', 'layer'],
              link: 'https://rfabre-avocat.fr'
            },
            {
              name: 'Clémence & Margaux',
              description: 'First eCommerce website built from scratch during my internship - using an internal MVC PHP Framework.',
              id: 'infitex',
              categories: ['website', 'ecommerce'],
              link: 'https://clemence-margaux.com'
            }
          ]
        }
      }
    }
</script>
