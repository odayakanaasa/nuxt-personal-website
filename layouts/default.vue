<template>
  <div id="page">
    <HeaderMenu></HeaderMenu>

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

    <FooterNuxt></FooterNuxt>

  </div>
</template>

<script>
  import Social from '~components/Social.vue'
  import HeaderMenu from '~components/Header.vue'
  import FooterNuxt from '~components/Footer.vue'

  export default {
    components: {
      Social, HeaderMenu, FooterNuxt
    },
    data () {
      return {
        defaultArrow: 'gototop js-top',
        activeArrow: 'gototop js-top active'
      }
    }
  }
</script>
