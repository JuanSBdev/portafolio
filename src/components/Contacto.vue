<script setup>
import { i18n } from '../main';
import Form from './Form.vue';


function copyEmail() {
  const email = 'juansb.dev@gmail.com';
  navigator.clipboard.writeText(email);
  alert('Correo electrónico copiado: ' + email);
}
</script>
<template>
    <h6 v-if="i18n.global.locale=== 'es'" class=""> [ Conecta ]</h6>
    <h6 v-else class=""> [ Reach me ]</h6>

    
    <div class="contenedor">
        <div class="email"  @click="copyEmail()">
            <div class="maildata">
                <img src="https://aonialearning.com/wp-content/uploads/2021/08/Curso-Google-Gmail.png" alt="gmail logo">
                <p >juansb.dev@gmail.com</p>
            </div>
        </div>
        <div class="linkedin">
            <a href="https://www.linkedin.com/in/jlsb/">
                <img src="https://img.freepik.com/iconos-gratis/linkedin_318-157468.jpg?" alt="linkedin logo">
                 <p>linkedIn  </p>
            </a>
        </div>
    </div>
    
    <div class="elForm w-100  flex justify-center">
        <Form></Form>
        <!-- <Form class="form_skillsview"></Form> -->
    </div>
    <div class="cvu flex w-100 justify-center ">
        <a id="cv" class="w-10" target="_blank" href="https://drive.google.com/file/d/1qVXrlQJ3aOj-I5usOSJDtsi_8kPdfXxX/view?usp=sharing">
            <p v-if="i18n.global.locale=== 'es'"> Descargar CV</p>
            <p v-else> Download Resume</p>
            <img id="img-d" class="img-down " src="https://static.vecteezy.com/system/resources/previews/015/166/075/original/download-neon-icon-png.png" alt="">

        </a>

    </div>

</template>
<style scoped>
@media screen and (max-width: 574px) {
    img{
    width: 50%;
}
h6{
    margin-top: 15%;
    display: flex;
    justify-content: center;
    font-size: 2rem;
}
p{
    display: flex;
    justify-content: center;

}
.contenedor{
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    align-items: center;
    padding: 10%;
}
.email{
    font-size: 1.5rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.email p{
    padding: 10%;

}
.linkedin{
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
}
.linkedin a{
    padding: 10%;
    text-decoration: none;
    font-size: 1.8rem;

}

.cv{
    width: 100%;
    padding-bottom: 1%;
    margin-top: 10%;
}
.cv p{
    color:black ;
}
#cv{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    text-decoration: none;

}

#img-d{
    width: 5%;
}
#img-d{
    width: 10%;
}
}
@media screen and (min-width: 575px) {

img{
    width: 20%;
}
h6{
    margin-top: 15%;
    display: flex;
    justify-content: center;
    font-size: 2rem;
}
p{
    display: flex;
    justify-content: center;
}
.contenedor{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    padding-bottom: 0%;

    

}

.email{
    font-size: 1rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 20%;
    text-align: center;
    
}
.maildata{
    display: flex;
    align-items: end;
    justify-content: center;
}
.linkedin{
    width: 20%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
}
.linkedin a{
    display: flex;
    justify-content: center;
    align-items: start;
    text-decoration: none;
    font-size: 1.2rem;
    color: rgb(247, 232, 255);


}
.linkedin p{
    margin-left: 2%;
}
.linkedin img{
    width: 10%;
}
/* .linkedin:hover{
    transform: scale(1.1);
} */
.form_skillsview{
    width: 150%;
  
}
.cv{
    width: 100%;
    margin-top: 5%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    padding-bottom: 5%;
}
.cv p{
    color:rgb(245, 228, 254) ;
}
#cv{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    text-decoration: none;
    width: 30%;

}

#img-d{
    width: 10%;
}
#cv:hover{
    transform: scale(1.1);
}
}
</style>