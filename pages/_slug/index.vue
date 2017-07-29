<template>
  <div class="post-content">
    <div v-html="postContent"></div>
  </div>
</template>
<script type="text/babel">
  export default {
    layout: 'slug',
    head () {
      let post = this.post
      return {
        title: post.meta.name + ' | Baptiste Debever',
        meta: [
          {
            hid: post.meta.id,
            name: post.meta.name,
            content: post.meta.content
          }
        ]
      }
    },
    fetch ({store, params}) {
      store.dispatch('getPosts')
      store.dispatch('getPostWithSlug', params.slug)
    },
    computed: {
      post () {
        return this.$store.state.post
      },
      postContent () {
        let post = this.$store.state.post
        return require(`../../content/posts/${post.id}.md`)
      }
    }
  }
</script>
