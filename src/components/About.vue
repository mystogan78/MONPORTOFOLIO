<template>
    <div class="propos">
      <h1>À propos de moi</h1>
      <p>
  Bonjour à tous, je m'appelle Ibrahim KONTE. Je suis né le 16 mars 1981 à Mantes-la-Jolie et j'ai grandi dans les Yvelines. À l'école, je n'étais pas très studieux, j'étais plutôt rêveur.<br>
  J'ai 7 frères et sœurs. Plus jeune, je pratiquais beaucoup de sports (football, tennis), et cela a toujours été un défi pour moi de gagner, de m'améliorer et d'apprendre sans me contenter de mes acquis.<br>
  J'ai toujours aimé relever des défis et apprendre de nouvelles choses. Sur le plan scolaire, je trouvais les cours assez répétitifs et parfois ennuyeux, alors je me suis orienté vers le métier du transport, où <br>
  il y avait des possibilités d'évolution, d'apprentissage relationnel, et de développement personnel. Après dix ans dans ce domaine, j'ai acquis de l'expérience et des diplômes. Cependant, je me suis retrouvé à stagner,<br>
  répétant les mêmes tâches au point de toujours savoir à l'avance ce que j'allais dire ou faire. Cela ne me convenait plus.<br>
  J'ai donc commencé à chercher un métier qui me correspondrait mieux, avec des défis, une formation continue, et des opportunités d'évolution. C'est ainsi que je me suis tourné vers le domaine de l'informatique.
</p>

    </div>
    <div >
      <ul class="liens">
        <li><a href="https://fr.wikipedia.org/wiki/Football"><img src="@/assets/images/soccer-ball-2121x1414.jpg" width="300" height="300" alt=""></a></li>
        <li><a href="https://fr.wikipedia.org/wiki/Tennis"><img src="@/assets/images/tennis-serve - Copie.jpg" width="300" height="300" alt=""></a></li>
        <li><a href="https://www.vieplusagreable.com/2023/05/comment-relever-les-defis-avec-succes.html"><img src="@/assets/images/relever-defi.jpg" width="300" height="300" alt=""></a></li>
      </ul>
    </div>
    <div class="articles-section">
      <h2>Retrouvez-moi aussi sur :</h2>
      <ul class="reseau">
        <li><a href="https://github.com/"><img src="@/assets/images/ghithub.jpg" width="50" height="50" alt=""></a></li>
        <li><a href="https://fr.linkedin.com/"><img src="@/assets/images/linkedin.png" width="50" height="50" alt=""></a></li>
        <li><a href="https://www.facebook.com/"><img src="@/assets/images/facebook.png" width="50" height="50" alt=""></a></li>
        <li><a href="https://www.instagram.com/"><img src="@/assets/images/instagram-logo-300x300.png" width="50" height="50" alt=""></a></li>
      </ul>
      <p class="creation">Créé le 30/10/2024</p>
    </div>


  </template>
  
  <script>
  export default {
    name: 'About'
  };
  </script>
  
  <style scoped>
  h1{
    display: flex;
    justify-content: center;
    background-color: blue;
    color: antiquewhite;
  }
.liens{
  display: flex;
  justify-content: space-around;
}
  
.articles-section {
 padding: 1px;
  background-color: darkgray;

}
h2{
  display: flex;
  justify-content: center;
}
.reseau{
  display: flex;
  justify-content: space-around;
 
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

  /* Styles spécifiques à la page */
  </style>
  