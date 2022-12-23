<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Name from './components/Name.vue'
import btnHeader from './components/Btns.vue'
</script>

<template>
  <header  class="">
    <router-link to="/">    <name />
</router-link>
    <btnHeader/>

  </header>
<main>
  <router-view></router-view>

</main>
</template>

<style >
@import "./assets/base.css"

</style>
<style scoped>
header{
    background-image: url('https://img.freepik.com/free-vector/realistic-galaxy-background_52683-12121.jpg?w=2000');
    background-size: cover;
    color: aliceblue;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    border-bottom: 1px solid white;
    position: fixed;
    z-index: 10;
}
a{
  text-decoration: none;
  color: white;
}
a:hover{
  color: white;
}

</style>
