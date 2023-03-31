<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Carta from './components/Carta.vue';
import SkillsView from './views/SkillsView.vue';
</script>

<template>
  <!--<header>
    <Header/>
  </header> -->
<main>
  <div>
    <router-view></router-view>
  </div>
  
</main>
<footer>
</footer>
</template>

<style >
@import "./assets/base.css";

</style>

