<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <header>
    <Header/>
  </header>
<main>
  <router-view></router-view>

</main>
</template>

<style >
@import "./assets/base.css"

</style>

