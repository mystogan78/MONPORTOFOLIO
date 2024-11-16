<template>
  <header class="main-header">
    <nav class="navbar">
      <!-- Ajout du logo avec lien vers Accueil -->
      <router-link to="/" class="logo">
        <img src="@/assets/images/logo.png.jpg" alt="Logo" />
      </router-link>

      <ul>
        
        <!-- Lien "À propos" avec redirection conditionnelle -->
        <li>
          <a @click.prevent="handleClick('/about')">À propos</a>
        </li>
        
        <!-- Lien "Projets" avec redirection conditionnelle -->
        <li>
          <a @click.prevent="handleClick('/projects')">Projets</a>
        </li>
        
        <!-- Lien "Contact" avec redirection conditionnelle -->
        <li>
          <a @click.prevent="handleClick('/contact')">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
</template>


<script>
export default {
  methods: {
    handleClick(route) {
      if (this.$route.path === route) {
        // Redirige vers une route inexistante pour afficher la page 404
        this.$router.push('/page-inexistante');
      } else {
        // Redirige vers la page sélectionnée normalement
        this.$router.push(route);
      }
    }
  }
};
</script>


<style scoped>
/* Styles pour le logo */
.logo img {
  width: 80px; /* Ajuste la taille du logo */
  cursor: pointer;
}

/* Styles pour la navigation */
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: black;
}

nav a:hover {
  color: gray;
}
</style>
