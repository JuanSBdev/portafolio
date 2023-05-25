<script setup>
import Carta from '../components/Carta.vue'
import Botones from '../components/Botones.vue';
</script>
<template>
  <div class="contenedor-home ">
      <div class="izq ">
        <h1>Welcome <div class="h1"><p>{}</p></div> </h1> 
        <Botones/>
      </div>
      <div class="der">
       <img src="https://images.fineartamerica.com/images/artworkimages/medium/3/neon-binary-tree-pcb-computer-coding-programmer-noirty-designs-transparent.png" alt="">
      </div>
    </div>
</template>

<style scoped>
.contenedor-home{
  background-image: url('https://www.pngmart.com/files/13/Pattern-Transparent-Background.png');
}
@media screen and  (min-width:175px ) and (max-width:574px) {
  .contenedor-home{
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    padding-top: 5%;
    margin-bottom: -10%;
    background-color: #a824c6;
  }
  h1{
    font-size: 5rem;
    padding: 8%;
    color: rgba(233, 193, 245, 0.805);
  }
  .h1{
    display: flex;
    justify-content: center;

  }
  .izq{
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    
  }
  .der{
    transform: rotate(180deg);

  }
  .der img{
    width: 100%;
    transform: scale(.6);
    -webkit-animation: tit .1s ease alternate infinite;
    -moz-animation: tit .1s ease alternate infinite;
    animation: tit 2s ease infinite;
    margin-bottom: -20%;
  }
}
@media screen and ( min-width: 575px ) and (max-width:767px) {
  
  .contenedor-home{
    width: 100%;
    padding-top: 10%;
    display: flex;
    flex-flow: column wrap;
  }
  h1{
    padding: 8%;
  }
  .h1{
    display: none;
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

    -webkit-animation: tit .1s ease alternate infinite;
    -moz-animation: tit .1s ease alternate infinite;
    animation: tit 2s ease infinite;
  }
}

@media  screen and (min-width: 1024px) {
  
  
  
  .h1{
    font-family: 'Courier New', Courier, monospace;
    font-size: 4rem;
  }
  h1{
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 30%;
    padding-bottom: 15%;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 4rem;
    width: 100%;
    overflow: hidden;
  }
  .contenedor-home{
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    padding-bottom: 2%;
    background-size: contain ;
    background-image: url('https://www.pngmart.com/files/13/Pattern-Transparent-Background.png');

  }
  .der img{
    width: 90%;
    margin-left: 20%;
    transform: rotate(90deg);
    -webkit-animation: fadein .1s ease alternate infinite;
    -moz-animation: fadein .1s ease alternate infinite;
    animation: fadein 5s ease infinite;
  }
  .izq{
    box-shadow: -1px 0px 40px 0px rgba(24, 1, 24, 0.904);
     width: 25%;
    margin: 5%;
    margin-left: 10%;
    border-radius: .5rem;
  }
  
}
  
</style>
