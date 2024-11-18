<template>
    <footer class="footer">
      <div class="articles-section">
        <h2>Retrouvez-moi aussi sur :</h2>
        <ul class="reseau">
          <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/images/ghithub.jpg" width="50" height="50" alt=""></a>
          </li>
          <li><a href="https://fr.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/images/linkedin.png" width="50" height="50" alt=""></a>
          </li>
          <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/images/facebook.png" width="50" height="50" alt=""></a>
          </li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/images/instagram-logo-300x300.png" width="50" height="50" alt=""></a>
          </li>
          
        </ul>
        <p>&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    text-align: center;
    padding: 20px;
    background-color:darkgray;
    color: white;
    width: 100%;
  }
  .articles-section{
    background-color: darkgray;
  }
  
  .reseau {
    display: flex;
    justify-content: space-around;
  
  }
  
  img {
    border-radius: 50%;
    box-shadow: 0 0 30px black;
    margin-top: 15px;
  }
  p{
    color: white;

  }
  </style>
  