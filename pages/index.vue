<template>
  <div class="page-home">
    <section class="intro grey-gradient-bt">
      <div class="container">
        <div class="row row-pt-sm">
          <div class="col-md-12 text-left">
            <p class="label typed-element"></p>
            <h1>I'm a student, freelancer and web developer, making and learning things on the web.</h1>
          </div>
        </div>
      </div>
    </section>
    <section id="about-me">
      <div class="container feature-card">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-left">
            <h2>About me</h2>
          </div>
        </div>
        <div class="row margin-top-40">
          <div class="col-md-4">
            <ul class="info">
              <li><span class="first-block">Name: </span><span class="second-block">Baptiste Debever</span></li>
              <li><span class="first-block">Phone:</span><span class="second-block">+33 6 19 65 93 52</span></li>
              <li><span class="first-block">Email:</span><span class="second-block">hello@baptistedebever.co</span></li>
              <li><span class="first-block">Country:</span><span class="second-block">France</span></li>
            </ul>
          </div>
          <div class="col-md-8">
            <h4>Hello There!</h4>
            <p>I am a 3rd-year French <b>Engineering and Managerial Student</b> at ITEEM - Centrale Lille. Keen on IT, innovations and web-related technologies, dedicated, enlightened and determined, I am also a self-taught guy who keep learning and never fed up.</p>
            <p>I split my spare time between learning, reading, being a <b>freelance Web Developer and Consultant</b>, hanging out with friends, and a bit of fun (sport, series, etc.).</p>
            <social />
          </div>
        </div>
      </div>
    </section>
    <services />
    <portfolio />

    <section class="recent-posts container">
      <div class="row">
        <div v-for="post in posts" class="col-md-6 text-center">
          <router-link class="feature-card post" :to="{ name: 'slug', params: { slug: post.slug }}">
            <div class="image-post" v-bind:style="{backgroundImage: 'url(/img/' + post.image + ')'}"></div>
            <div class="content">
              <h4>{{post.title}}</h4>
              <div class="add-info">
                <span class="created-at" v-html="post.created_at"></span>
                &nbsp;&nbsp;<i class="fa fa-tags"></i>&nbsp;
                <span class="created-at" v-for="cat in post.categories" v-html="cat"></span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import Services from '~/components/Services.vue'
  import Portfolio from '~/components/Portfolio.vue'
  import Social from '~/components/Social.vue'
  import Typed from 'typed.js'

  export default {
    components: {
      Services, Portfolio, Social
    },
    data () {
      return {
        typedOptions: {
          strings: ['', 'Hello, ^200 my name is Baptiste', '&nbsp;<i>You are currently looking at my website, ^70 that\'s awesome! </i>'],
          typeSpeed: 70,
          startDelay: 0,
          showCursor: false,
          backSpeed: 100,
        },
        typedElement: ''
      }
    },
    head () {
      return {
        title: 'Baptiste Debever | Personal Website - Full Stack Web Developer',
      }
    },
    fetch ({store}) {
      store.dispatch('getPosts')
    },
    computed: {
      posts () {
        return this.$store.state.posts
      }
    },
    mounted () {
      this.typedElement = new Typed('.typed-element', this.typedOptions)
    }
  }
</script>
