<template>
  <div id="app">
    <Header />
    <router-view /> <!-- Affichage dynamique des pages -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

<style>
/* Styles globaux pour votre application ici */
</style>
