<template>
  <div id="page">
    <header>
      <nav  v-bind:class="[scrolled ? activeClass : '', defaultClass]">
        <nuxt-link class="nav-item" to="/">Home</nuxt-link>
        <nuxt-link class="nav-item" to="/about">About</nuxt-link>
      </nav>
    </header>
    <div class="full container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2 text-center">
          <div class="profile-thumb"></div>
          <h1><span>Hello my name is Baptistenpm install @nuxtjs/pwa</span></h1>
          <h3><span>Web Developer / Freelancer</span></h3>
        </div>
      </div>
    </div>
    <nuxt/>
    <section class="bg-red">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center">
            <h3 class="thin"></h3>
            <p></p>
            <ul class="social-icons list-unstyled">
              <li><a class="hover-shrink" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a class="hover-shrink" href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              <li><a class="hover-shrink" href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="row">
        <div class="col-md-12">
          <p>&copy; {{ date }}  Free HTML5 Template. All Rights Reserved. <br>Designed by <a href="http://freehtml5.co" target="_blank">FreeHTML5.co</a> Demo Images: <a href="http://unsplash.com" target="_blank">Unsplash</a></p>
        </div>
      </div>
    </footer>
    <div v-bind:class="[scrolled ? activeArrow : '', defaultArrow]">
      <a href="#" class="js-gotop" v-on:click="goToTop"><i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i></a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        scrolled: false,
        activeClass: 'scrolled',
        defaultClass: 'nav navbar navbar-fixed-top',
        defaultArrow: 'gototop js-top',
        activeArrow: 'gototop js-top active',
        date: Date.now()
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
      // window.sr = VueScrollReveal()
      // sr.reveal('.row')
      // sr.reveal('.feature-left', { duration: 2000 }, 50)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      path (url) {
        return (this.$i18n.locale === 'en' ? url : '/' + this.$i18n.locale + url)
      },
      handleScroll () {
        if ((document.body.scrollHeight > 0) && (document.body.scrollTop !== 0)) {
          this.scrolled = true
        } else {
          // $('nav').removeClass('scrolled');
          this.scrolled = false
        }
      },
      goToTop (event) {
        event.preventDefault()

        /* $('html, body').animate({
         scrollTop: $('html').offset().top
         }, 500, 'easeInOutExpo');

         return false; */
      }
    }
  }
</script>
