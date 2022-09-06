<template>
<Navbar/>
<div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading': $store.state.isLoading }">
  <div class="lds-dual-ring"></div>
</div>
  <section class="container mb-5">
  <router-view/>
  </section>
<Footer/>
</template>
<script>
  import axios from 'axios'

import Navbar from "@/components/Layout/Navbar"
import Footer from "@/components/Layout/Footer"

export default {
    name: 'App',
    components: {
      Navbar,
      Footer
    },
    beforeCreate() {
      this.$store.commit('initializeStore')
      if (this.$store.state.token) {
        axios.defaults.headers.common['Authorization'] = "Token " + this.$store.state.token
      } else {
        axios.defaults.headers.common['Authorization'] = ""
      }
    },
}
</script>

<style lang="scss">
@import '../node_modules/bulma'
</style>
