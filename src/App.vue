<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Name from './components/Name.vue'
import btnHeader from './components/Btns.vue'
</script>

<template>
  <header>
    <name/>
    <btnHeader/>

  </header>

      <router-view></router-view>
</template>

<style >
@import "./assets/base.css"

</style>
<style scoped>
header{
  background-color: #00BFFF;
}

</style>
