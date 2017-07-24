<template>
  <resume />
</template>

<script>
    import Resume from '~components/Resume.vue'

    export default {
        components: {
            Resume
        },
        head () {
            return { title: this.$t('home.title') }
        },

        method: {

        }
    }
</script>
