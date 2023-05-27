<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const state = reactive({ link: ''  })
const handleLink=()=>{
  if(state.link === ''){
    return state.link = '/en'
  }
  else{
    return state.link = ''
  }
}
const changeLanguage = () => {
      const currentPath = router.currentRoute.value.path;
      if (!currentPath.includes('EN')) {
        const newPath = currentPath + 'EN';
        router.push(newPath);
      } 
            else{
              const pato = currentPath.replace('EN', '')
              router.push(pato)
            }

    };
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <head>
    <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/512/2534/2534928.png" type="image/x-icon">
  </head>
  
<main>
  <router-link to="" >
  <button @click="changeLanguage"  >{{state.link}}</button>
</router-link>
      <router-view>
      </router-view>
</main>
</template>

<style >
@import "./assets/base.css";

img{
  width: 25%;
}

</style>

