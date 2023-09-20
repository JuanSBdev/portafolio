<script setup>
import { ref } from 'vue';
import axios from 'axios'

const name = ref('');
const email = ref('');
const message = ref('');

const enviarFormulario = () => {
  

  const datos = {
    name: name.value,
    email: email.value,
    message: message.value
  };
  
  if (!name.value || !email.value || !message.value) {
    alert('Por favor, complete todos los campos.');
    return; 
  }
  
  axios.post('https://mailer-nodejs-oziw-dev.fl0.io/', datos)
  .then(response => {
    alert('email sended')
    console.log('Solicitud exitosa:', response.data);
    window.location.href = '/';
  })
  .catch(error => {
    alert(error.message)
    console.error('Error en la solicitud:', error);
  });

}



    
</script>


<template >
  <div class="wrapper">

    <p>dejame aquí tu consulta y te responderé a la brevedad</p>
    
    <div class="info">
      <div class="name">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="name">
      </div>

      <div class="email">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model="email">
      </div>
    </div>
    
    <textarea class="tarea" name="message"  v-model="message"></textarea>
    
    <button class="btn_submit" @click="enviarFormulario()">
      send
    </button>
  
  </div>

</template> 


<style scoped>
.wrapper{
  max-width: 50%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    box-shadow: 0 0 10px 0;
    border-radius: 1rem;
    background-color: rgba(68, 84, 190, 0.145);
}

.info{
  display: flex;
  width: 100%;
}
.name{
  margin: 2%;
}
.email{
  margin: 2%;
  
}
.name input{
background-color: rgba(202, 164, 243, 0.367);
border-radius: 1rem;

border: none;
}
.email input{
  border: none;
background-color: rgba(202, 164, 243, 0.367);
border-radius: 1rem;
}
.tarea{
  width: 100%;
  min-height: 100px;
  background-color: rgba(202, 164, 243, 0.367);
  color: aliceblue;
}
.btn_submit{
  border: none;
  border-radius: 1rem;
  margin: 1%;
  padding: 1% 4%;
}
</style>