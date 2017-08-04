<template>
    <div class="page-blog text-center">

        <h1 class="mt-2 text-center">Some of my thoughts</h1>

        <section class="recent-posts container">
            <div class="row">
                <div v-for="post in posts" class="col-md-10 push-md-1 text-center">
                    <router-link class="feature-card post" :to="{ name: 'slug', params: { slug: post.slug }}">
                        <div class="image-post" v-bind:style="{backgroundImage: 'url(/img/' + post.image + ')'}"></div>
                        <div class="content">
                            <h4>{{post.title}}</h4>
                            <div class="add-info">
                                <span class="created-at" v-html="post.created_at"></span>
                                &nbsp;&nbsp;<i class="fa fa-tags"></i>&nbsp;
                                <span class="created-at" v-for="cat in post.categories" v-html="cat"></span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
  export default {
    fetch ({store}) {
      store.dispatch('getPosts')
    },
    computed: {
      posts () {
        return this.$store.state.posts
      }
    },
  }
</script>
