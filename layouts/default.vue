<template>
  <div id="page">
    <HeaderMenu></HeaderMenu>

    <nuxt/>

    <cta></cta>
    <FooterNuxt></FooterNuxt>

  </div>
</template>

<script>
  import Social from '~/components/Social.vue'
  import HeaderMenu from '~/components/Header.vue'
  import FooterNuxt from '~/components/Footer.vue'
  import Cta from '~/components/Cta.vue'

  export default {
    components: {
      Social, HeaderMenu, FooterNuxt, Cta
    },
    data () {
      return {
        defaultArrow: 'gototop js-top',
        activeArrow: 'gototop js-top active'
      }
    }
  }
</script>
