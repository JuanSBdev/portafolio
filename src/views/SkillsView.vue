<script setup>
import TxtSk from '../components/TxtSk.vue';
import SkillsLogos from '../components/Skills.vue';
import Donde from '../components/Donde.vue'
import Proyects from '../components/Proyects.vue'
import Este from '../components/Este.vue'
import Contacto from '../components/Contacto.vue'
import Carta from '../components/Carta.vue';
import Arriba from '../components/Arriba.vue';
import Videos from '../components/Videos.vue';

</script>

<template>
      <button class="btn-go-home" >
        <router-link to="/">
          <img src="https://www.freepnglogos.com/uploads/logo-home-png/home-logo-images-black-5.png" class="img-logo-home" alt="">
        </router-link>
    </button>

  <Arriba />
  <div class="wraper">
    <div v-motion-fade >
      <Carta ref="arriba" />
    </div>
    <Proyects id="proyects"/>
    <div  v-motion-pop-visible>
    <Videos/>
    </div>
    <div v-motion-slide-visible-bottom >
    <div class="container">
      <TxtSk></TxtSk>
    </div>
  </div>
    <div class="otro">
        <SkillsLogos />
    </div>
    <div v-motion-slide-visible-bottom >
            <Donde/>
    </div>


    <div v-motion-pop-visible>
      <Este/>
    </div>
    <div v-motion-slide-visible-top class="contact" >

    <Contacto/>
    </div>
  </div>

  </template>
<style scoped>
@media screen and (max-width: 574px) {
  .wraper{
    background-image: url('https://www.pngmart.com/files/13/Pattern-Transparent-Background.png');
    background-size: cover ;
    background-repeat: repeat-y;
  }
  .btn-go-home{
    display: none;
    position: absolute;
    width: 18%;
    height: 10%;
    background-color: transparent;
    border: none;
    margin-left: 75%;
    margin-top: -48%;
    z-index: 2;
  }
  .btn-go-home img{
    width: 100%;
  }
  .container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding-top: 6rem;
    
  }
  .otro{
    position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
}

}
@media screen and (min-width: 575px) {
  .wraper{
    background-image: url('https://www.pngmart.com/files/13/Pattern-Transparent-Background.png');
    background-size: cover ;
    overflow: hidden;


  }
  .btn-go-home{
    position: fixed;
    width: 5%;
    background-color: transparent;
    border: none;
    margin-left: 3%;
    margin-top: 1%;
    z-index: 1;
  }
  .btn-go-home:hover{
    transform: scale(1.1);
  }
  .img-logo-home{
    width: 100%;
  }
.container{
  margin-top: 1%;
    position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 6rem;
  
}
.otro{
    position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
}

.contact{
  margin-top: 15%;
margin-bottom: 5%;
}
}

</style>
