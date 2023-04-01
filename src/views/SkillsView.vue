<script setup>
import TxtSk from '../components/TxtSk.vue';
import SkillsLogos from '../components/Skills.vue';
import Donde from '../components/Donde.vue'
import Proyects from '../components/Proyects.vue'
import Este from '../components/Este.vue'
import Contacto from '../components/Contacto.vue'
import Carta from '../components/Carta.vue';

</script>

<template>
    <Carta/>
    <div class="container">
        <TxtSk></TxtSk>
    </div>
    <div class="otro">
        <SkillsLogos/>
    </div>
        <Donde/>
        <Proyects/>
        <Este/>
        <Contacto/>
</template>
<style scoped>
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
  padding-right: 0%;
}
</style>
