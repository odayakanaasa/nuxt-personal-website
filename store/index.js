import Vuex from 'vuex'

const makeStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: {}
    },
    mutations: {
      updatePosts (state, { posts }) {
        state.posts = posts
      },
      updatePost (state, { post }) {
        state.post = post
      }
    },
    actions: {
      getPostWithSlug ({commit, state}, slug) {
        let post = state.posts.find((post) => {
          return (post.slug === slug)
        })
        commit('updatePost', { post: post })
      },
      getPosts ({commit}) {
        commit('updatePosts', { posts: [
          {
            id: 1,
            slug: 'fresh-new-website',
            title: 'How did I build my new website ?',
            created_at: '07/27/2017',
            image: 'vue-js-build.png',
            categories: ['web development'],
            meta: {
              id: 1,
              name: 'New website out',
              content: 'New website out'
            }
          },
          {
            id: 2,
            slug: '3-months-sf9',
            title: 'First 3 months at StudioForty9',
            created_at: '8/1/2017',
            image: 'sf9-logo.png',
            categories: ['internship'],
            meta: {
              id: 2,
              name: 'First 3 months at StudioForty9',
              content: 'First 3 months at StudioForty9'
            }
          }
        ]})
      }
    }
  })
}

export default makeStore
