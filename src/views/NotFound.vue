<template>
    <div class="not-found">
      <h1>Erreur 404</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <router-link to="/">Retour à la page d'accueil</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound"
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  