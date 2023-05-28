<script setup>
import {i18n} from '../main'
</script>
<template >
    <!--    <img class='img-back' src="https://mystickermania.com/cdn/stickers/outer-space/astronaut-planet-balloons-512x512.png" alt="">
--> 
<div   v-if="i18n.global.locale === 'es'" class="container row">
    <p class="col-sm-4 col-12"> <spam>{</spam> Los lenguajes y tecnologías que utilizo para diseñar y maquetar son HTML5, CSS3, Sass, Flexbox, Grids y Bootstrap.
    Metodologias agiles.
    <spam>}</spam>
    </p>
    <p class="col-sm-4 col-12 "> 
        Programo con JavaScript Vanilla y React.js / redux. Puedo maquetar  en uno de sus frameworks Vue.js 3. Tambien realicé pequeños proyectos en WordPress CMS .
    </p>
    <p class="col-sm-4 col-12">
        
        capacitado en UX/UI, SEO y
        manejo versiones de codigo con Git y utilizo GitHub para guardar mis proyectos.
        utilizacion de clientes FTP tales como FileZilla. 
    </p>

</div>
<div v-else class="container row">
    <p class="col-sm-4 col-12"> <spam>{</spam> The languages and technologies I use for designing and layout are HTML5, CSS3, Sass, Flexbox, Grids, and Bootstrap. 
I am also familiar with agile methodologies.
    <spam>/></spam>
    </p>
    <p class="col-sm-4 col-12 "> 
        I program with Vanilla JavaScript and have experience with React.js/Redux. I am also capable of creating layouts and implementing them using the Vue.js 3 framework. Additionally, I have completed small projects using the WordPress CMS.
    </p>
    <p class="col-sm-4 col-12">
        I am proficient in UX/UI design, SEO, and version control using Git. I utilize GitHub to store and manage my projects. Additionally,
         I am experienced in working with FTP clients like FileZilla to transfer files to and from servers.}
    </p>

</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@media (max-width:574px) {
    .containe p{
        font-size: 1.5rem;
        color: rgb(243, 235, 246);
    }
    
    .container{
        top: 1rem;
        position: relative;
        width: 100%;
        border-radius: 1rem;
        display: flex;
        text-align: center;
        padding-top: 5%;
    }
}
.container{
        top: 2rem;
        position: relative;
        width: 100%;
        border-radius: 1rem;
        display: flex;
        text-align: center;
        padding-top: 5%;
    }
p{
    font-size: 1.5rem;
    color: antiquewhite;
    padding: 5%;
}
img{
    width: 10%;
}
.img-back{
    opacity: .9;
}
</style>