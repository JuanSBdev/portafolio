<script setup>
import TxtSk from '../components/TxtSk.vue';
import SkillsLogos from '../components/Skills.vue';
import Donde from '../components/Donde.vue'
import Proyects from '../components/Proyects.vue'
import Este from '../components/Este.vue'
import Contacto from '../components/Contacto.vue'
import Carta from '../components/Carta.vue';
import Arriba from '../components/Arriba.vue';
</script>

<template>
  <Arriba />
  <div class="wraper">
    <div v-motion-fade >
    <Carta ref="arriba" />
    </div>
    <div v-motion-slide-visible-bottom >
    <div class="container">
      <TxtSk></TxtSk>
    </div>
  </div>
    <div class="otro">
        <SkillsLogos />
    </div>
            <Donde/>
    <div v-motion-pop-visible>
    <Proyects/>
    </div>
    <div v-motion-pop-visible>
    <Este/>
    </div>
    <div v-motion-slide-visible-top >

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

</style>
