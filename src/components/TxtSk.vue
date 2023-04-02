<template >
    <!--    <img class='img-back' src="https://mystickermania.com/cdn/stickers/outer-space/astronaut-planet-balloons-512x512.png" alt="">
-->
<div class="containe">
    <p class="col-4">Los lenguajes y tecnologías que utilizo para diseñar y maquetar son HTML5, CSS3, Sass, Flexbox, Grids y Bootstrap.</p>
    <p class="col-4"> 
        Programo con JavaScript Vanilla y en uno de sus frameworks Vue.js 3, aunque tambien realicé pequeños proyectos en React y un CMS WordPress.
    </p>
    <p class="col-4">
        capacitado en UX/UI, SEO y
        manejo de versiones de mi codigo con Git y utilizo GitHub para guardar mis proyectos.
        utilizacion de clientes FTP tales como FileZilla.

    </p>

</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@media (max-width:574px) {
    .containe p{
        font-size: 1.3rem;
    }
}
.containe{
    top: 6 rem;
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