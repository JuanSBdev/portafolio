<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Este.vue'
import Carta from './components/Carta.vue';
import SkillsView from './views/SkillsView.vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
  <head>
    <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/512/2534/2534928.png" type="image/x-icon">
  </head>
<main>
  <div>
      <router-view>
      </router-view>
    
  </div>
  
</main>
<footer>

</footer>
</template>

<style >
@import "./assets/base.css";

</style>

