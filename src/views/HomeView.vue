<script setup>
import Carta from '../components/Carta.vue'
import Botones from '../components/Botones.vue';
</script>
<template>
  <div class="contenedor-home ">
    <div class="izq col-6">
      <h1>Welcome</h1> 
      <Botones/>
    </div>
    <div class="der">
      <img src="https://images.fineartamerica.com/images/artworkimages/medium/3/neon-binary-tree-pcb-computer-coding-programmer-noirty-designs-transparent.png" alt="">
    </div>
    </div>
</template>

<style scoped>

@media screen and (max-width:575px) {
  .contenedor-home{
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    padding-bottom: 50%;
  }
  h1{
    padding: 8%;
  }
  .izq{
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
  .der img{
    width: 100%;
    -webkit-animation: fadein .1s ease alternate infinite;
    -moz-animation: fadein .1s ease alternate infinite;
    animation: fadein 2s ease infinite;
  }
}
@media screen and ( max-width: 899px ) {
  
  .contenedor-home{
    width: 100%;
    display: flex;
    flex-flow: column wrap;
  }
  h1{
    padding: 8%;
  }
  .izq{
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
  .der{
    display: flex;
    justify-content: center;
  }
  .der img{
    width: 80%;
    max-width: 590px;
    transform: rotate(180deg);

    -webkit-animation: fadein .1s ease alternate infinite;
    -moz-animation: fadein .1s ease alternate infinite;
    animation: fadein 2s ease infinite;
  }
}

@media  screen and (min-width: 900px) {
  
  
  
  
  h1{
    
    padding-top: 2%;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 5rem;
    
  }
  .contenedor-home{
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    padding-bottom: 2%;
  }
  .der img{
    width: 90%;
    margin-left: 20%;
    transform: rotate(90deg);
    -webkit-animation: fadein .1s ease alternate infinite;
    -moz-animation: fadein .1s ease alternate infinite;
    animation: fadein 2s ease infinite;
  }
  .izq{
    background-image: url('');
    background-size: 5%;
    background-repeat: repeat;
    background-color: #9263cf10;
    box-shadow: 0px 1px 6px 6px rgba(0,0,0,0.57);
    padding-top: 8%;
    width: 25%;
    margin: 5%;
    margin-left: 15%;
    border-radius: 1rem;
  }
  
}
  
</style>
