<script setup>
import {i18n} from '../main'
</script>
<template >
    <!--    <img class='img-back' src="https://mystickermania.com/cdn/stickers/outer-space/astronaut-planet-balloons-512x512.png" alt="">
--> 
<div   v-if="i18n.global.locale === 'es'" class="container row">
    <p class="col-sm-4 col-12">  Los lenguajes y tecnologías que utilizo para diseñar y maquetar son HTML5, CSS3, SASS, LESS, Flexbox, Grids, TailwindsCSS, Material UI,  Bootstrap.
   
    
    </p>
    <p class="col-sm-4 col-12 "> 
         JavaScript Vanilla (advanced), Vue.js 3,  React.js, Redux, Node.js, Express, SQL, PostgreSQL, Sequelize. Realicé tambíen proyectos en WordPress CMS.
    </p>
    <p class="col-sm-4 col-12">
        
        Capacitado en UX/UI, SEO y
        manejo versiones de codigo con Git y utilizo GitHub para guardar mis proyectos.
        Utilización de clientes FTP tales como FileZilla.  Metodologias agiles. 
    </p>

</div>
<div v-else class="container row ">
   
    <p class="col-sm-4 col-12 "> 
        JavaScript Vanilla (advanced), Vue.js 3,  React.js, Redux, Node.js, Express, SQL, PostgreSQL, Sequelize. Additionally, I have completed projects using the WordPress CMS.
    </p>
    <p class="col-sm-4 col-12">  The languages and technologies I use for designing and layout are HTML5, CSS3, SASS, Flexbox, Grids, TailwindsCSS, Material UI & Bootstrap. 
    </p>    
    <p class="col-sm-4 col-12">
        I am proficient in UX/UI design, SEO, and version control using Git. I utilize GitHub to store and manage my projects. 
        FTP clients like FileZilla. I am also familiar with agile methodologies.
    </p>

</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@media (max-width:574px) {
    .containe p{
        font-size: 1.5rem;
    color: rgb(247, 186, 247);
    }
    
    .container{
        top: 1rem;
        position: relative;
        width: 100%;
        border-radius: 1rem;
        display: flex;
        text-align: center;
        padding-top: 5%;
        font-family: 'Ubuntu', sans-serif;

    }
}
.container{
    font-family: 'Ubuntu', sans-serif;

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
    color: rgb(247, 186, 247);
    padding: 5%;
}
img{
    width: 10%;
}
.img-back{
    opacity: .9;
}
</style>