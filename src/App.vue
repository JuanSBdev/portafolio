<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Name from './components/Name.vue'
import btnHeader from './components/Btns.vue'
</script>

<template>
  <header class="">
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
    background-image: url('https://img.freepik.com/free-vector/realistic-galaxy-background_52683-12121.jpg?w=2000');
    background-size: cover;
    color: aliceblue;
}

</style>
