<script setup>
import Carta from '../components/Carta.vue';
</script>
<template>
    <div class="contenedor-home">
      <h1>Welcome</h1>

      <router-link to="Skills" >
        <p>portafolio</p>
      </router-link>
      <router-link to="Cv"></router-link>
    </div>
</template>
<style scoped>
.contenedor-home{
  position: relative;
  padding: 18%;
}

</style>
