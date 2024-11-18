<template>
    <div class="coordonnées">
      <h1>Contacter Moi</h1>
    </div>
    <div class="info-section">
      <div class="column">
        <i class="icon icon-wanderlust"></i>
        <h3>Coordonnés Postale</h3>
        <p class="address"><a href="http://www.google.fr/maps" target="_blank" rel="noopener noreferrer">Cliquez-ici</a></p>
      </div>
      <div class="column">
        <i class="icon icon-ideas"></i>
        <h3>Adresse Mail</h3> 
        <p class="mail"><a href="mailto:ibouba782@gmail.com" target="_blank" rel="noopener noreferrer">Ecrivez-moi</a></p>
      </div>
      <div class="column">
        <i class="icon icon-blogger"></i>
        <h3>Téléphone</h3>
        <p class="tel"><a href="tel:+33615155027" target="_blank" rel="noopener noreferrer">contacter moi</a></p>
      </div>
    </div>

    <div class="emoji">
      <img src="@/assets/images/postale.jpg" width="200" height="200" alt="">
      <img src="@/assets/images/email.jpg" width="200" height="200" alt="">
      <img src="@/assets/images/telephone.jpg" width="200" height="200" alt="">

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
.emoji{
  display: flex;
  justify-content: space-around;
}

img{ 
  border-radius: 50%;
    box-shadow: 0 0 30px black;
    margin-top: 15px;
}

  </style>
  