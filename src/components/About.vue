<template>
    <div class="propos">
      <h1>À propos</h1>
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
      <h3>"Découvrez plus d'informations en cliquant sur les images."</h3>
      <ul class="liens">
        <li class="Football" v-show="isImageVisible.Football">
          <a href="https://fr.wikipedia.org/wiki/Football" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/images/soccer-ball-2121x1414.jpg" width="300" height="300" alt=""></a>
        </li>
        <li class="Tennis" v-show="isImageVisible.Tennis">
          <a href="https://fr.wikipedia.org/wiki/Tennis" target="_blank" rel="noopener noreferrer" >
            <img src="@/assets/images/tennis-serve - Copie.jpg" width="300" height="300" alt=""></a>
          </li>
        <li class="Defi" v-show="isImageVisible.Defi">
          <a href="https://www.vieplusagreable.com/2023/05/comment-relever-les-defis-avec-succes.html" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/images/relever-defi.jpg" width="300" height="300" alt=""></a>
          </li>
      </ul>
    </div>
   


  </template>
  
  <script>
   export default {
   data() {
    return{
      isImageVisible: {
        Football: false,
        Tennis: false,
        Defi: false,
      },
    };
   },
   methods: {
    showImagesSequentially() {
      setTimeout(() => {
        this.isImageVisible.Football = true; // La première image devient visible après 1 seconde

      }, 1000);
      setTimeout(() => {
        this.isImageVisible.Tennis = true; // La deuxieme image devient visible après 2 seconde

      }, 2000);

      setTimeout(() => {
        this.isImageVisible.Defi = true; // La troisieme image devient visible après 3 seconde

      }, 3000);
    },
   },
   mounted() {
    this.showImagesSequentially(); // Appeler la méthode au montage du composant
   }
  };
  </script>
  
  <style scoped>
  h1{
    display: flex;
    justify-content: center;
    background-color: blueviolet;
    color: antiquewhite;
  }
  h3{
    display: flex;
    justify-content: center;
    color: blueviolet;
    text-decoration: underline;

  }
.liens{
  display: flex;
  justify-content: space-around;

}
img{
  border-radius: 50%;
    box-shadow: 0 0 30px blueviolet;
    margin-top: 15px;
}
  

  /* Styles spécifiques à la page */
  </style>
  