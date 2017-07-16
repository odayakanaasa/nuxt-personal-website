<template>
  <div class="page-slug" v-if="postExists">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <author size="small"></author>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center mt-3">
          <div class="col-sm-10">
            <h6 class="created-at" v-html="post.created_at"></h6>
            <h3 class="mt-3" v-html="post.title"></h3>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-sm-10 markdown">
            <nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import Author from '~/components/author'

  export default {
    components: {
      Author
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
