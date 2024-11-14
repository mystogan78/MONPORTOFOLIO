<template>
  <div>
    <section class="home">
      <div v-if="showContent" class="intro-container">
        <h1 class="fade-in">Salut, je suis Ibrahim KONTE</h1>
        <p class="fade-in-delay">
          Je viens des Yvelines, en région parisienne et vous présente mon parcours personnel et professionnel.
        </p>
      </div>
    </section>
<div class="cliquez-ici"> 
        <h3> Si vous vouliez en savoir plus sur les métiers cliquez sur la photo correspondante</h3>
      </div>
    <!-- Bannière avec images et vidéos associées -->
    <div class="hero-section">
      <div v-if="showContent" class="overlay">
        
        <!-- Bloc image-vidéo : Agent de médiation -->
        <div class="video-block">
          <p>
            <a @click.prevent="playVideo('firstVideo')">
              <img src="@/assets/images/Agent de médiation.jpg" width="200" height="200" alt="Agent de médiation" class="reduire" />
            </a>
          </p>
          <div v-show="isVideoVisible.firstVideo" class="video-container">
            <video ref="firstVideoPlayer" controls width="320" height="240">
              <source :src="firstVideoPath" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </div>

        <!-- Bloc image-vidéo : Contrôleur de bus -->
        <div class="video-block">
          <p>
            <a @click.prevent="playVideo('secondVideo')">
              <img src="@/assets/images/controleur de bus.jpg" width="200" height="200" alt="Contrôleur de bus" class="reduire" />
            </a>
          </p>
          <div v-show="isVideoVisible.secondVideo" class="video-container">
            <video ref="secondVideoPlayer" controls width="320" height="240">
              <source :src="secondVideoPath" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </div>

        <!-- Bloc image-vidéo : Structure métallique -->
        <div class="video-block">
          <p>
            <a @click.prevent="playVideo('thirdVideo')">
              <img src="@/assets/images/Structure_metallique.jpg" width="200" height="200" alt="Structure métallique" class="reduire" />
            </a>
          </p>
          <div v-show="isVideoVisible.thirdVideo" class="video-container">
            <video ref="thirdVideoPlayer" controls width="320" height="240">
              <source :src="thirdVideoPath" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </div>
      </div>
    </div>
    <!-- Section des articles récents -->
    <div class="articles-section">
      <h2>Retrouvez-Moi aussi sur :</h2>
      <ul class="liens">
        <li><a href="https://github.com/"><img src="@/assets/images/ghithub.jpg" width="50" height="50" alt=""></a></li>
        <li><a href="https://fr.linkedin.com/"><img src="@/assets/images/linkedin.png" width="50" height="50" alt=""></a></li>
        <li><a href="https://www.facebook.com/"><img src="@/assets/images/facebook.png" width="50" height="50" alt=""></a></li>
        <li><a href="https://www.instagram.com/"><img src="@/assets/images/instagram-logo-300x300.png" width="50" height="50" alt=""></a></li>
      </ul>
      <p class="creation">Créé le 30/10/2024</p>
    </div>
  </div>
</template>

<script>
import firstVideoPath from '@/assets/videos/Vidéo_métier_agent_de_médiation.mp4';
import secondVideoPath from '@/assets/videos/Keolis Portrait Agent Controle.mp4'; // Remplacez par votre deuxième vidéo
import thirdVideoPath from '@/assets/videos/Découvrez le métier de chaudronnier.mp4'; // Remplacez par votre troisième vidéo

export default {
  data() {
    return {
      showContent: true,
      isVideoVisible: {
        firstVideo: false,
        secondVideo: false,
        thirdVideo: false,
      },
      firstVideoPath,
      secondVideoPath,
      thirdVideoPath,
    };
  },
  methods: {
    playVideo(video) {
      // Masquer toutes les vidéos avant de jouer une nouvelle
      this.stopAllVideos();
      
      // Afficher la vidéo sélectionnée
      this.isVideoVisible[video] = true;

      // Lecture de la vidéo correspondante
      this.$nextTick(() => {
        if (video === 'firstVideo') {
          this.$refs.firstVideoPlayer.play().catch(error => {
            console.log("Erreur lors de la lecture de la vidéo Agent de médiation :", error);
          });
        } else if (video === 'secondVideo') {
          this.$refs.secondVideoPlayer.play().catch(error => {
            console.log("Erreur lors de la lecture de la vidéo Contrôleur de bus :", error);
          });
        } else if (video === 'thirdVideo') {
          this.$refs.thirdVideoPlayer.play().catch(error => {
            console.log("Erreur lors de la lecture de la vidéo Structure métallique :", error);
          });
        }
      });
    },
    stopAllVideos() {
      // Arrête toutes les vidéos et les cache
      Object.keys(this.isVideoVisible).forEach(video => {
        this.isVideoVisible[video] = false; // Masquer la vidéo
        const playerRef = this.$refs[`${video}Player`];
        if (playerRef) {
          playerRef.pause(); // Mettre en pause
          playerRef.currentTime = 0; // Remettre à zéro
        }
      });
    }
  }
};
</script>

<style scoped>
.home, .hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: aqua;
}
.cliquez-ici{
  display: flex;
  justify-content: center;
  background-color: aqua;
  color: red;


}
.intro-container, .video-block, .articles-section {
  margin: 20px;
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}

.fade-in-delay {
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

.overlay {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.video-container {
  margin-top: 10px;
}

.reduire {
  cursor: pointer;
  transition: transform 0.3s;
}

.reduire:hover {
  transform: scale(1.05);
}

.articles-section {
  background-color: darkgrey;
}
.liens{
  display: flex;
  justify-content: space-around;

}

.creation {
  display: flex;
  justify-content: center;

}
</style>

