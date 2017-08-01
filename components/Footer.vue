<template>
    <footer>
        <div class="row">
            <div class="col-md-6">
                <p>&copy; {{ date }} Baptiste Debever. All Rights Reserved.</p>
            </div>
            <div class="col-md-6 second-right">
                <social />
            </div>
        </div>
    </footer>
</template>

<script>
  import Social from '~/components/Social.vue'

  export default {
    components: {
      Social
    },
    data () {
      return {
        defaultArrow: 'gototop js-top',
        activeArrow: 'gototop js-top active',
        date: '',
      }
    }
  }
</script>
