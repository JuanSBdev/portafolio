<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Carta from './components/Carta.vue';
import SkillsView from './views/SkillsView.vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
  <!--<header>
    <Header/>
  </header> -->
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
.route-enter-from {
  opacity: 0;
  transform: translateY(100px)
}
.route-enter-active,
.route-leave-active {
  transition: all .2s ease-out
}
.route-leave-to {
  opacity: 0;
  transform: translateY(100px)
}
</style>

