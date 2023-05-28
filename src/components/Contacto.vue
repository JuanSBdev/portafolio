<script setup>
import { i18n } from '../main';


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
            <img src="https://aonialearning.com/wp-content/uploads/2021/08/Curso-Google-Gmail.png" alt="">
            
                <p >juansb.dev@gmail.com</p>
        </div>
        <div class="linkedin">
            <img src="https://img.freepik.com/iconos-gratis/linkedin_318-157468.jpg?w=2000" alt="">
            <a href="https://www.linkedin.com/in/jlsb/"> <p>Mi linkedIn  </p> </a>
        </div>
    </div>
    <div class="cv">
        <a id="cv" target="_blank" href="https://drive.google.com/file/d/1BxcxjX3Y10yMcMxvhvGDx57fE2FRkj6a/view?usp=sharing">
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
    justify-content: center;
    flex-flow: row nowrap;
    align-items: center;
    padding-bottom: 2%;

}
.email{
    margin-left: -10%;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.linkedin{
    display: flex;
    align-items: center;
    justify-content: center;
}
.linkedin a{
    text-decoration: none;
    padding-left: 2rem;
    font-size: 2rem;

}
.cv{
    width: 100%;
    padding-bottom: 1%;
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
:hover.cv{
    transform: scale(1.1);
}
}
</style>