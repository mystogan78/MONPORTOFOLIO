<template>
  <div id="app">
    <!-- Ne mets que le strict nécessaire -->
    <Header />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style>
/* Ajoute des styles simples si nécessaire */
</style>
