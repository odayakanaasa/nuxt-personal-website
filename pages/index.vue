<template>
  <div class="page-index">
    <div class="container-fluid text-center">
      <div class="row">

      </div>
      <div class="row justify-content-center">
        <div class="col-sm-2">
          <hr class="mt-5 mb-5"/>
        </div>
      </div>
    </div>

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
  export default {
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
