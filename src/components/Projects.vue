<template>
    <div class="projets">
      <h1 class="parcours">Mon parcours scolaire et mon projet professionnel</h1>
      <p class="professionnel">Mon parcours scolaire m’a conduit en l’obtention d’un CAP, un BEP et puis d’un BAC professionnel dans la métallurgie ce qui m’a été recommandé par les conseillers scolaires. 

Au fil de mon cursus scolaire j’ai appris que j’avais plus de capacité sur le domaine de la théorie mais niveau pratique (manuel) j’avais quelques lacunes. 

Après l’obtention de mon BAC Professionnel Je me suis dirigé dans le domaine du transport j’ai commencé en tant qu’agent de médiation d’information et de service   au sein de la société CTVMI (RD MANTOIS depuis août 2021) , ma société ayant remarqué mon envie d’évoluer m'ont  rapidement permis de suivre des formations internes ( TP AMIS , TP conducteurs voyageurs) mon expérience en tant que conducteur voyageurs m’a permis de comprendre que ce poste n’avait pas d’opportunité d’évoluer , de travailler en équipe et d’acquérir plus de compétences . 

La société m’a proposé en 2007 un poste d’agent de contrôle en transport en commun avec la possibilité d’évoluer en tant qu’agent de maîtrise, encadrant et une formation de tuteur. 

La proposition d’évoluer et d’acquérir de l’expérience m’a plu j’ai accepté, après 15 ans au sein du poste d’agent de contrôle je n’ai plus la possibilité d’évoluer ou d’acquérir des compétences au sein de mon poste. 

Depuis que j’ai commencé dans la société CTVMI la possibilité d’apprendre et d’évoluer et de remettre constamment les acquis en question m’encourageait à rester dans le domaine du transport 

Cela fait depuis de nombreuses années de par ma curiosité, que je m’intéresse de près à l’informatique, j’ai toujours été attiré par l’évolution rapide du matériel et surtout des systèmes</p>
    </div>
    <div class="photos">
      <h3>"Plongez dans les détails en cliquant sur les images."</h3>
      <ul>
  <li class="structure" v-show="isImageVisible.structure">
    <a href="https://fr.wikipedia.org/wiki/Structures_m%C3%A9talliques">
      <img src="@/assets/images/normes-et-réglementations.jpg" width="300" height="300" alt="">
    </a>
  </li>
  <li class="rc mantois" v-show="isImageVisible.rcMantois">
    <a href="https://www.ratpcap.com/ce-que-nous-faisons/nos-reseaux-mantois-paris-saclay-et-bievre/">
      <img src="@/assets/images/RC_mantois.jpg" width="300" height="300" alt="">
    </a>
  </li>
  <li class="developpeur" v-show="isImageVisible.developpeur">
    <a href="https://www.hellowork.com/fr-fr/metiers/developpeur-web.html">
      <img src="@/assets/images/metier-developpeur-web-1.jpg" width="300" height="300">
    </a>
  </li>
</ul>



    
    </div>
    
    <footer>
      <div class="articles-section">
      <h2>Retrouver-Moi aussi sur :</h2>
      <ul>

        <li class="github"><a href="https://github.com/"><img src="@/assets/images/ghithub.jpg"width="50" height="50" alt="git"></a></li>
        <li class="linkedin"><a href="https://fr.linkedin.com/"> <img src="@/assets/images/linkedin.png"width="50" height="50" alt=""></a></li>
        <li class="facebook"><a href="https://www.facebook.com/"><img src="@/assets/images/facebook.png"width="50" height="50" alt=""></a></li>
        <li class="instagram"><a href="https://www.instagram.com/"><img src="@/assets/images/instagram-logo-300x300.png"width="50" height="50" alt=""></a></li>
      
        <!-- Ajoutez d'autres articles ici -->
      </ul>
      <p class="creation">créer le 30/10/2024</p>
    </div>
  </footer>
    
  </template>
  
  <script>
  export default {
    data() {
  return {
    isImageVisible: {
      structure: false,
      rcMantois: false,
      developpeur: false,
    },
  };
},
methods: {
  showImagesSequentially() {
    setTimeout(() => {
      this.isImageVisible.structure = true; // La première image devient visible après 1 seconde
    }, 1000);

    setTimeout(() => {
      this.isImageVisible.rcMantois = true; // La deuxième image devient visible après 2 secondes
    }, 2000);

    setTimeout(() => {
      this.isImageVisible.developpeur = true; // La troisième image devient visible après 3 secondes
    }, 3000);
  },
},
mounted() {
  this.showImagesSequentially(); // Appeler la méthode au montage du composant
}

  };
  
  </script>
 
  <style scoped>
  .parcours{
    background-color: aqua;
    color: blueviolet;
    display: flex;
   justify-content: center;

  }
  .professionnel{
    margin-left: 15px;
    margin-right: 15px;
  }
  h3{
    display: flex;
    justify-content: center;
    color: blue;
    text-decoration: underline;
  }

footer{
  align-items: end;
}
  .articles-section {
 padding: 1px;
  background-color: darkgray;

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
  