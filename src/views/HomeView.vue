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
      <img src="https://cdn.shopify.com/s/files/1/0590/7506/8066/products/Alien-512-Adventure_-alien_-astronomy_-monster_-outer-space_-space_-ufo_2b647b82-0d11-4200-9349-0edf691646eb.png?v=1631522821" alt="">
    </div>
    </div>
</template>
<style scoped>
@-webkit-keyframes fadein {
  0%{
    opacity: .4;

  }
  
  25%{
opacity: 1;
  }
  40%{
    opacity: 1;

  }
      50%{
      opacity: .5;
    }
    75%{
      opacity: .3;
    }
    80%{
      opacity: 1;

    }
    90%{
      opacity: .6;
    }
    100%{
      opacity: 1;
    }

}


h1{
  
  padding-top: 2%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 5rem;

}
img{
  -webkit-animation: fadein .1s ease alternate infinite;
    -moz-animation: fadein 4s ease alternate infinite;
    animation: fadein 2s ease infinite;

  width: 80%;
}
.contenedor-home{
  position: relative;
  display: flex;
  width: 100%;
}
.izq{
  padding-top: 10%;
}

</style>
