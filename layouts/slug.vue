<template>
  <div id="page" class="page-blog" v-if="postExists">
    <HeaderMenu></HeaderMenu>

    <article class="col-md-8 text-center">
      <div class="text-center">
        <h4 class="created-at" v-html="post.created_at"></h4>
        <h1 class="mt-3" v-html="post.title"></h1>
      </div>

      <nuxt/>

    </article>

    <cta></cta>
    <footerNuxt></footerNuxt>

  </div>
</template>

<script type="text/babel">
  import Social from '~/components/Social.vue'
  import HeaderMenu from '~/components/Header.vue'
  import FooterNuxt from '~/components/Footer.vue'
  import Cta from '~/components/Cta.vue'

  export default {
    components: {
      Social, HeaderMenu, FooterNuxt, Cta
    },
    fetch ({store, params}) {
      store.dispatch('getPosts')
      store.dispatch('getPostWithSlug', params.slug)
    },
    computed: {
      slug () {
        return this.$route.params.slug
      },
      postExists () {
        return !!this.$store.state.post
      },
      post () {
        return this.$store.state.post
      }
    }
  }
</script>
