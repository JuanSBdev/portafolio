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
@media screen and ( min-width: 575px ) and (max-width:766px) {
  
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
    padding-top: 5%;
  }
}

@media  screen and (min-width: 767px) and (max-width:1023px) {
  .contenedor-home{
    width: 100%;
    padding-top: 10%;
    display: flex;
    flex-flow: column wrap;

  }
h1{
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
  font-size: 4rem;
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
    padding-bottom: 20%;
  }
  .der img{
    width: 50%;
    transform: rotate(180deg);
    -webkit-animation: tit .1s ease alternate infinite;
    -moz-animation: tit .1s ease alternate infinite;
    animation: tit 2s ease infinite;
    margin-top: -10%;
  }
  }
@media  screen and (min-width: 1024px) {
  
  
  
  .h1{
    font-family: 'Courier New', Courier, monospace;
    font-size: 4rem;
    margin-top: 5%;
  }
  h1{
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    text-align: center;

  }
  .contenedor-home{
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    padding-bottom: 25%;
    padding-top: 10%;
    padding-right: 15%;
    background-size: cover ;
    background-image: url('https://www.pngmart.com/files/13/Pattern-Transparent-Background.png');

  }
  .der{
    width: 60%;
    
  }
  .der img{
    width: 80%;
    margin-left: 20%;
    margin-top: -15%;
    transform: rotate(90deg);
    -webkit-animation: fadein .1s ease alternate infinite;
    -moz-animation: fadein .1s ease alternate infinite;
    animation: fadein 5s ease infinite;

  }
  .izq{
    box-shadow: -1px 0px 40px 0px rgba(24, 1, 24, 0.904);
     width: 40%;
     height: 100%;
    margin: 5%;
    margin-left: 10%;
    margin-top: -1%;
    border-radius: .5rem;
    padding-bottom: 5%;
    padding-top: 5%;
  }
  
}
  
</style>
