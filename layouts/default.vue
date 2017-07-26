<template>
  <div id="page">
    <header>
      <nav v-bind:class="[scrolled ? activeClass : '', defaultClass]">
        <div class="container">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Navbar</a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto justify-content-end">
              <li class="nav-item ">
                <nuxt-link class="nav-link" to="/">Home</nuxt-link>
              </li>
              <li class="nav-item ">
                <nuxt-link class="nav-link" to="/about">About</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <nuxt/>
    <section class="bg-red">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2>Hire Me!</h2>
            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
            <a href="#" class="btn btn-default btn-lg cta-btn">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="row">
        <div class="col-md-6">
          <p>&copy; {{ date }}  Free HTML5 Template. All Rights Reserved. <br>Designed by <a href="http://freehtml5.co" target="_blank">FreeHTML5.co</a> Demo Images: <a href="http://unsplash.com" target="_blank">Unsplash</a></p>
        </div>
        <div class="col-md-6">
          <social />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import Social from '~components/Social.vue'

  export default {
    components: {
      Social
    },
    data () {
      return {
        scrolled: false,
        activeClass: 'scrolled',
        defaultClass: 'navbar navbar-toggleable-md',
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
      handleScroll () {
        if ((document.body.scrollHeight > 0) && (document.body.scrollTop !== 0)) {
          this.scrolled = true
        } else {
          // $('nav').removeClass('scrolled');
          this.scrolled = false
        }
      }
    }
  }
</script>
