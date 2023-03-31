<script setup>
import Carta from '../components/Carta.vue';
</script>
<template>
    <div class="contenedor">
      <Carta></Carta>
    </div>
    <div class="abajo">
    <router-link to="Skills">
      <input type="button" id="none" v-if="s" value="">
      <img id="boton-abajo" src="https://cdn-icons-png.flaticon.com/512/786/786401.png" alt="">
    </router-link>
    
  </div>
</template>
<style scoped>
</style>
