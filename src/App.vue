<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Carta from './components/Carta.vue';
</script>

<template>
  <!--<header>
    <Header/>
  </header> -->
<main>
  <router-view></router-view>

</main>
<footer>
</footer>
</template>

<style >
@import "./assets/base.css"

</style>

