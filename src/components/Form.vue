<script setup>
import { ref } from 'vue';
import { i18n } from '../main'
import axios from 'axios'

const name = ref('');
const email = ref('');
const message = ref('');

const loading = ref(false);

const enviarFormulario = () => {

  
loading.value = true;

const datos = {
    name: name.value,
    email: email.value,
    message: message.value
  };
  
  if (!name.value || !email.value || !message.value) {
    alert('Por favor, complete todos los campos.');
    loading.value = false;
    return; 
  }
  
  axios.post('http://localhost:8080/', datos)
  .then(response => {
    loading.value = false;
    
    
    alert('email sended')
    console.log('Solicitud exitosa:', response.data);
    window.location.href = '/';
  })
  .catch(error => {
    loading.value = false;
    alert(error.message)
    console.error('Error en la solicitud:', error);
  });

}



    
</script>


<template >

<section v-if="i18n.global.locale === 'es'" class=" flex flex-row justify-center items-center dark:bg-gray-900  w-100" >
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
      <p   class="mb-8 lg:mb-6 font-light text-center text-texto-col dark:text-gray-400 sm:text-xl">dejame aquí tu consulta y te responderé a la brevedad.</p>
      

      <div  class="space-y-5 ">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tu email</label>
              <input type="email" name="email" v-model="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@mail.com" required>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asunto</label>
              <input type="text" id="subject" v-model="name" class="block p-1.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Como puedo ayudarte?" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tu mensaje</label>
              <textarea id="message" name="message" v-model="message" rows="4" class="block p-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deja aquí tu consulta.."></textarea>
          </div>

          <button v-if="!loading" @click="enviarFormulario()" type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar</button>

          <button v-else  type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviando..</button>

      </div>
  </div>
</section>

<section v-else class=" flex flex-row justify-center items-center dark:bg-gray-900  w-100" >
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
      
      <p  class="mb-8 lg:mb-6 font-light text-center text-texto-col dark:text-gray-400 sm:text-xl">get in touch I'll respond as quickly as possible.</p>

      <div  class="space-y-5 ">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" name="email" v-model="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" v-model="name" class="block p-1.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name="message" v-model="message" rows="4" class="block p-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>

          <button v-if="!loading" @click="enviarFormulario()" type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>

          <button v-else  type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sending..</button>

      </div>
  </div>
</section>


</template> 


