<template>
    <section class="services grey-gradient-tb">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 text-left heading">
                    <h2>My Core Focus and Skills</h2>
                </div>
            </div>
            <div class="row margin-top-40">
                <div v-for="skill in offers" class="col-md-4 text-center">
                    <div class="feature-card skills">
                        <span class="icon" v-bind:style="{backgroundImage: 'url(/img/' + skill.icon + '.svg)'}"></span>
                        <div class="feature-copy">
                            <h3>{{ skill.name }}</h3>
                            <p v-html="skill.description"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
      data () {
        return {
          offers: [
            { name: 'Team Spirit', description: 'I am keen really keen on Team Work, and I am especially delighted in steering team and take part in a growing / determined team toward a common goal.', icon: 'thumbs_up' },
            { name: 'Project Management, Leadership and Determination', description: '<a href="https://www.linkedin.com/in/bdebever/#ember4104" target="_blank">Read some testimonials!</a>', icon: 'lightbulb_idea' },
            { name: 'Full-stack web development', description: 'Html, Css, Saas, Less, Gulp, Npm, Git, Php, MySql, Bash are part of my daily life.', icon: 'laptop' },
            { name: 'Wordpress Theme Development', description: 'I have been building Wordpress stuff for a while now, and I keep it going.', icon: 'monitor' },
            { name: 'Vue.js', description: 'I am in love of this blazing fast javascript Framework: growing, straightforward and stunning fast! This, along with ES6, works just fine!', icon: 'fountain_pen' },
            { name: 'Laravel', description: 'Except a school project (we built an intranet), I can\'t tell you much for the time being, but trust me, exciting things to come..', icon: 'cloud' },
            { name: 'Agile Development and Management', description: 'Sprints, epics, JIRA, Trello, Scrum,..it\'s a must!', icon: 'coffee' },
            { name: 'SEO & Google Analytics Certified', description: 'I passed the certification this year to show off my Analytics skills, which is a much as far as I\'m concerned. <a href="https://www.google.com/partners/#i_profile;idtf=105683438641654386744;" target="_blank">View it!</a>', icon: 'laptop' },
            { name: 'Self-made', description: 'I always look for inspiring resources, and I spend a lot of time learning by myself: Python, Angular are part of the new things I am learning.', icon: 'zoom' }
          ]
        }
      }
    }
</script>
