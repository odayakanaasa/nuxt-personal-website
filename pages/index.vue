<template>
  <div class="page-home">
    <section class="intro grey-gradient-bt">
      <div class="container">
        <div class="row row-pt-sm">
          <div class="col-md-12 text-left">
            <p class="label typed-element"></p>
            <h1 class="h2">I'm a student and freelancer, making and learning things on the web.</h1>
          </div>
        </div>
      </div>
    </section>
    <section id="about-me">
      <div class="container featured-card">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-left">
            <h2>About me</h2>
          </div>
        </div>
        <div class="row margin-top-40">
          <div class="col-lg-4">
            <ul class="info mb-lg-3">
              <li><span class="info__first-column">Name: </span><span class="info__second-column">Baptiste Debever</span></li>
              <li><span class="info__first-column">Phone:</span><span class="info__second-column">+33 6 19 65 93 52</span></li>
              <li><span class="info__first-column">Email:</span><a class="info__second-column" href="mailto:baptiste.debever@gmail.com">baptiste.debever@gmail.com</a></li>
              <li><span class="info__first-column">Country:</span><span class="info__second-column">France</span></li>
            </ul>
            <a href="#" class="btn btn-primary mt-3">Fresh Resume coming soon</a>
          </div>
          <div class="col-lg-8 mt-5 mt-md-0">
            <h4>Hi there,</h4>
            <p>I am a self-made full-stack web developer - born and brought up in a lovely town in the North of France. I'm currently studying for a 5-year master degree in <b>Engineering and Managerial</b> at ITEEM - Centrale Lille, expected to graduate in 2019.
              Keen on IT, innovations and web-related technologies, dedicated, enlightened and determined, I am a self-taught guy who keeps learning and never fed up and who's always looking to work on a meaningful project!</p>
            <p>I split my spare time between learning, reading, being a <b>freelance Web Developer and Consultant</b> and a bit of fun (sport, series, etc.).</p>

            <social></social>

          </div>
        </div>
      </div>
    </section>

    <services></services>
    <portfolio></portfolio>

    <section class="recent-posts container">
      <div class="row">
        <div v-for="post in posts" :key="post.slug" class="col-md-6 text-center">
          <router-link class="featured-card post" :to="{ name: 'slug', params: { slug: post.slug }}">
            <div class="image-post" :style="{ backgroundImage: `url(img/${post.image})` }"></div>
            <div class="content">
              <h4 v-text="post.title"></h4>
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
