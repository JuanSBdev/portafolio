<script setup>
import Name from './Name.vue'
import btnHeader from './Btns.vue'
</script>

<template>
    <header  class="">
        <router-link to="/">
            <name/>
        </router-link>
        <btnHeader/>
    
      </header>

</template>
<style scoped>
@import '../assets/base.css';
header{
    background-image: url('https://img.freepik.com/free-vector/realistic-galaxy-background_52683-12121.jpg?w=2000');
    background-size: cover;
    color: aliceblue;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    border-bottom: 1px solid rgb(76, 43, 167);
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