<script setup>
import { ref } from 'vue';

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <head>
    <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/512/2534/2534928.png" type="image/x-icon">
  </head>
<main>
  <div class="cara">
    <img src="https://www.mininterior.gov.ar/asuntospoliticos/img/bandera.png" alt="Bandera argentina">
    <p>¡Feliz Día de la Patria!</p>
  </div>
      <router-view>
      </router-view>
</main>
</template>

<style >
@import "./assets/base.css";
.cara{
  width: 10%;
  position:fixed;
  top: 2%;
  right: 1%;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  align-items: center;
  z-index: 1;
  font-size: .8rem;
  color: rgb(23, 104, 209);
}
img{
  width: 25%;
}

</style>

