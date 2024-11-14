<template>
    <div class="coordonnées">
      <h1>Contacter Moi</h1>
    </div>
    <div class="info-section">
      <div class="column">
        <i class="icon icon-wanderlust"></i>
        <h3>Coordonnés Postale</h3>
        <p class="address"><a href="http://www.google.fr/maps">Cliquez-ici</a></p>
      </div>
      <div class="column">
        <i class="icon icon-ideas"></i>
        <h3>Adresse Mail</h3> 
        <p class="mail"><a href="mailto:ibouba782@gmail.com">Ecrivez-moi</a></p>
      </div>
      <div class="column">
        <i class="icon icon-blogger"></i>
        <h3>Téléphone</h3>
        <p class="tel"><a href="tel:+33615155027">contacter moi</a></p>
      </div>
    </div>
    <div class="articles-section">
      <h2>Retrouver-Moi aussi sur :</h2>
      <ul>
        <p class="github"><a href="https://github.com/"><img src="@/assets/images/ghithub.jpg"width="50" height="50" alt="git"></a></p>
        <p class="linkedin"><a href="https://fr.linkedin.com/"> <img src="@/assets/images/linkedin.png"width="50" height="50" alt=""></a></p>
        <p class="facebook"><a href="https://www.facebook.com/"><img src="@/assets/images/facebook.png"width="50" height="50" alt=""></a></p>
        <p class="instagram"><a href="https://www.instagram.com/"><img src="@/assets/images/instagram-logo-300x300.png"width="50" height="50" alt=""></a></p>
        <!-- Ajoutez d'autres articles ici -->
      </ul>
      <p class="creation">créer le 30/10/2024</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'contact'
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques à la page */
  .coordonnées{
    display: flex;
    justify-content: center;
    background-color: black;
    color:white;
  }
  .info-section {
  display: flex;
  justify-content: space-around;
  padding: 50px 0;
}

.column {
  text-align: center;
  width: 30%;
  background-color: cornflowerblue;
  color: antiquewhite;
}

.icon {
  font-size: 50px;
  color: teal;
  margin-bottom: 10px;
}
/* Responsive design */
@media (max-width: 768px) {
  .info-section {
    flex-direction: column;
    text-align: center;
  
  }

  .column {
    width: 100%;
    margin-bottom: 20px;
  }
}
.articles-section {
 padding: 1px;
  background-color: darkgray;
  align-items: end;

}
 


ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
 
}
h2{
  display: flex;
  justify-content: center;
}
img{ 
  border-radius: 50%;
    box-shadow: 0 0 30px black;
    margin-top: 15px;
}
.creation{
  display: flex;
  justify-content: center;

}

  </style>
  