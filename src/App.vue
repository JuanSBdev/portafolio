<script setup>
import { ref } from 'vue';

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <head>
    <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/512/2534/2534928.png" type="image/x-icon">
  </head>
<main>
      <router-view>
      </router-view>
</main>
</template>

<style >
@import "./assets/base.css";

</style>

