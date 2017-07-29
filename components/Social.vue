<template>
    <ul class="social-icons list-unstyled">
        <li v-for="social in socials">
            <a class="hover-shrink" v-bind:href="social.link" target="_blank">
                <i v-bind:class="social.icon" aria-hidden="true"></i>
            </a>
        </li>
    </ul>
</template>

<script>
  export default {
    data () {
      return {
        socials: [
          {name: 'LinkedIn', icon: 'fa fa-linkedin', link: 'https://www.linkedin.com/in/bdebever/'},
          {name: 'Twitter', icon: 'fa fa-twitter', link: 'https://twitter.com/baptistedebever'}
        ]
      }
    }
  }
</script>
