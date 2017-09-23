<template>
    <header>
        <nav v-bind:class="[scrolled ? activeClass : '', defaultClass]">
            <div class="container">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/">
                    <img alt="Logo" src="img/logo-bd.png" class="logo"/>
                </a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto justify-content-end">
                        <li class="nav-item ">
                            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                        </li>
                        <li class="nav-item ">
                            <nuxt-link class="nav-link" to="/blog">Blog</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
  export default {
    data () {
      return {
        scrolled: false,
        activeClass: 'scrolled',
        defaultClass: 'navbar navbar-expand-md navbar-default',
        defaultArrow: 'gototop js-top',
        activeArrow: 'gototop js-top active',
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        if (document.body.scrollHeight > 30 &&
          document.body.scrollTop > 10) {
          this.scrolled = true
        } else {
          this.scrolled = false
        }
      }
    }
  }
</script>
