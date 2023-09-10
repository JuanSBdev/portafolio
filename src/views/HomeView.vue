<script setup>
import { i18n } from '../main'

</script>
<template>
  <div class="contenedor-home ">
    <div v-if="i18n.global.locale === 'es'"  class="nav">
      <router-link to="Skills">
        <p>About.</p>
      </router-link>
            <a   target="blank" href="https://drive.google.com/file/d/1_fd6A0GEOfygQNemiUDtzuFfHgqDhPIo/view?usp=sharing">
              Resume.
            </a>
      <router-link to="Contacto">
        <p>Contact.</p>
      </router-link>
    </div>
    <div v-else class="nav">
      <router-link to="Skills">
        <p>About.</p>
      </router-link>
            <a   target="blank" href="https://drive.google.com/file/d/1_fd6A0GEOfygQNemiUDtzuFfHgqDhPIo/view?usp=sharing">
              Mi CV.
            </a>
      <router-link to="Contacto">
        <p>Contacto.</p>
      </router-link>
    </div>
    <h1> Fullstack developer</h1> 
    <h2>Juan SB</h2>

    <div v-if="i18n.global.locale === 'es'" class="wraper">
      <router-link to="Skills">
        <div class="der">
          <h3>Ver Portafolio</h3>
        </div>
      </router-link>
      <router-link to="Contacto">
      <div class="izq ">
          <h2>Quiero una pagina web</h2>
        </div>
      </router-link>
    </div>
    
    <div v-else class="wraper">
      <router-link to="Skills">
        <div class="der">
          <h3>Explore Portfolio</h3>
        </div>
      </router-link>
      <router-link to="Contacto">
      <div class="izq ">
          <h2>I need a website.</h2>
        </div>
      </router-link>
    </div>
      <div class="footer">
        <img class="logo-react" src="https://cms.rootstack.com/sites/default/files/inline-images/React.png" alt="react logo">
        <img src="https://miro.medium.com/v2/resize:fit:500/1*CPDIH8BWrGipHRJ6o6E2Vw.png" alt="Vue logo">
        <img src="https://qualitapps.com/wp-content/uploads/2023/02/102.png" alt="node.js logo">
        <img src="https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Logo.png" alt="SQL logo">
        <img src="https://vitejs.dev/logo-with-shadow.png" alt="vite">
      </div>
    </div>
</template>

<style scoped>


  
  a{
    text-decoration: none;
    color: aliceblue;
  }
  a:hover{
    color: rgb(221, 45, 209);
  }
  .contenedor-home{
    font-family: 'Ubuntu', sans-serif;
    color: aliceblue;
    background-image: url('https://www.pngmart.com/files/13/Pattern-Transparent-Background.png');
    display: flex;
    flex-flow: column nowrap;
    padding: 3%
  }
  .contenedor-home h1{
    padding-top: 5%;
    align-self: center;
  }
  .contenedor-home h2{
    align-self: center;
  }
  .nav{
    display: flex;
    justify-content: start;
    width: 100%;
  }
  .nav a{
    margin-inline: 1%;
  }
  .wraper{
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  padding: 6%;
}
.izq{
  border-bottom: 2px solid wheat;
}
.izq:hover{
  transform: scale(1.1);
  transition: ease-in-out;
  border-bottom: 2px solid violet;
  color: rgb(118, 20, 231);
  
}
.der{
  border-bottom: 2px solid wheat;
}
.der:hover{
  transform: scale(1.1);
  transition: ease-in-out;
  color: rgb(201, 94, 207);
  border-bottom: 2px solid violet;
}
.footer{
  display: flex;
  justify-content: space-around;
  padding-bottom: 5%;
}
.footer img{
  width: 20%;
  object-fit: contain;
  transform: scale(.4);
}

@media screen and (max-width: 575px) {
  .wraper{
    display: flex;
    flex-flow: column nowrap;
    padding-top: 60%;
    padding-bottom: 90%;
  }
  h1{
    margin-top: 18%;
  }
.wraper a{
  padding: 8%;
  margin-bottom: 1%;
}
  
}
</style>
