<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const tarea = ref('');

const enviarFormulario = () => {
  const datos = {
    name: name.value,
    email: email.value,
    tarea: tarea.value
  };
  console.log(datos)
}
    
</script>


<template class="wrapper">
  <div>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" v-model="name">
    <label for="email">Email</label>
    <input type="text" name="email" id="email" v-model="email">
  </div>

  <textarea name="tarea" placeholder="Consulta" v-model="tarea"></textarea>
<button @click="enviarFormulario()">
    Enviar 
</button>
</template> 


<style scoped>
.wrapper{
    display: flex;
    flex-flow: column;
}
</style>