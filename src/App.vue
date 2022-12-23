<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Name from './components/Name.vue'
import btnHeader from './components/Btns.vue'
</script>

<template>
      <name/>
      <btnHeader/>

      <router-view></router-view>
</template>

<style >
@import "./assets/base.css"

</style>
<style scoped>
.wrapper{
  position: relative;
  display: flex;
  width: 99.9%;
  padding-bottom: 30%;
  justify-content: center;
	background: #83cee0; 
}

</style>
