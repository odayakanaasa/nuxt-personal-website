<template>
  <div class="page-home">
    <section class="intro grey-gradient-bt">
      <div class="container">
        <div class="row row-pt-sm">
          <div class="col-md-12 text-left">
            <p class="label">Hello my name is Baptiste</p>
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
              <li><span class="first-block">Email:</span><span class="second-block">me@baptistedebever.co</span></li>
              <li><span class="first-block">Country:</span><span class="second-block">France</span></li>
            </ul>
          </div>
          <div class="col-md-8">
            <h4>Hello There!</h4>
            <p>There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in bookmarksgrove there live the blind texts far from the countries.</p>
            <social />
          </div>
        </div>
      </div>
    </section>
    <services />
    <portfolio />

    <div class="recent-posts container-fluid">
      <div v-for="post in posts" class="row post mb-5 justify-content-center">
        <div class="col-sm-10">
          <h6 class="created-at" v-html="post.created_at"></h6>
          <h5><router-link class="display-4 post-title" :to="{ name: 'slug', params: { slug: post.slug }}">{{post.title}}</router-link></h5>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Services from '~components/Services.vue'
  import Portfolio from '~components/Portfolio.vue'
  import Social from '~components/Social.vue'

  export default {
    components: {
      Services, Portfolio, Social
    },
    head () {
      return {
        title: 'First Last',
        meta: [
          { hid: 'home', name: 'meta name', content: 'meta content seo goodness' }
        ]
      }
    },
    fetch ({store}) {
      store.dispatch('getPosts')
    },
    computed: {
      posts () {
        return this.$store.state.posts
      }
    }
  }
</script>
