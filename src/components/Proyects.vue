

<template>
    <div class="contenedor-pro">
        <h5 class="h3-con">
            { Some Proyects }
        </h5>
        <div class="wraper sobra">
            <div @click="redireccionarCalculadora" class="calculadora col-6 col-sm-2 py-5 card">
                    
                    <h6>Calculadora Javascript</h6>
                    
                    <img src="https://ayudahosting.online/wp-content/uploads/2021/02/031-calculator.png" alt="">
                    <p>html- css- javascript</p>
            </div>
            <div
             @click="redireccionarCoder"
             class="coderhouse col-6 col-sm-2 card">
                <h6>PF Coderhouse</h6>
                    <img src="https://img.freepik.com/iconos-gratis/hamburguesa_318-192560.jpg?w=2000" alt="">
               <p>Landing Page proyecto para coderhouse frontend con html, css, bootstrap, sass, flexbox, git, github, SEO </p> 
            </div>
            <div
             @click="redireccionarCarta"
             class="carta col-6 col-sm-2 card">
                <h6> App Mobile Carta</h6>
                    <img src="https://juansbdev.github.io/carta/img/logo2-removebg-preview.png" alt="">
                <p> Se utiliza para esta mobile app html5 - css3 - bootstrap - javascript</p>
            </div>
            <div
            @click="redireccionarApi"
             class="api col-6 col-sm-2 card">
                <h6>Clima API</h6>
                    <img src="https://fairbanksmuseum.org/wp-content/uploads/2023/03/partly_sunny.png" alt="">
                <p>App desarrollada en React.js - utilizando HTML5 - CSS - SASS - API REST - DEPLOYED</p>
            </div>
            <div
            @click="redireccionarLista"
             class="lista col-6 col-sm-2 card">
                <h6>To Do List.</h6>
                    <img src="https://cdn-icons-png.flaticon.com/512/6194/6194029.png" alt="">
                <p>App desarrollada utilizando JavaScript Vanilla, HTML 5 Y CSS - DEPLOYED</p>

            </div>
        </div>
    </div>
</template>
<style scoped>
@media screen and (max-width: 574px) {
    h5{
        font-size: 4rem;
        display: flex;
        justify-content: center;
        margin-top: 6rem;
    }
    img{
        width: 60%;
    }
    .wraper{
        width: 100%;
        padding-top: 3rem;
        display: flex;
        flex-flow: row-reverse wrap;
        align-items: center;
        justify-content: space-evenly;
        } 
    .card{
        width: 40%;
        padding: 2%;
        min-height: 250px;
        background-color: rgba(238, 130, 238, 0);
        border: none;
    }
    .card h6{
        font-size: 2rem;
    }
    .carta img{
        width:40% ;
    }
}
@media screen and (min-width: 575px) {
    
    h5{
        font-size: 4rem;
        display: flex;
        justify-content: center;
        margin-top: 6rem;
    }
    h6{
        font-size: 1.5rem;
    }
    p{
        margin-top: 5%;
    }
    img{
        width: 60%;
    }
    
    .contenedor-pro{
        margin-right: 1%;
    }
    .wraper{
        width: 90%;
        margin: 5%;
        padding-top: 3rem;
        display: flex;
        text-align: center;
        align-items: center;
        align-content: center;
   
    }
    .card{
        text-decoration: none;
        border-radius: 1rem;
        box-shadow: 0 0 10px 0 black;
        border: 1px solid rgb(130, 26, 222);
        background-color: rgb(236, 226, 244);
        padding: 2% ;
        margin: 2%;
        max-height: 300px;
        padding-bottom: 8%;
        display: flex;
        align-items: center;
        color: rgb(66, 54, 72);
        overflow: hidden;
    }

    .card:hover{
        transform: scale(1.1);
    }

    .card h6, p {
        color:#fff;
        background-image: linear-gradient(45deg,#4a2d89 0%,#ac43cc 35%,#411f8b 85%,#6c3870 100%);
    -webkit-text-fill-color: transparent;
	-webkit-background-clip: text;      
    }

a{
    text-decoration: none;
    
}

}
</style>
<script setup>

const redireccionarCalculadora = () => {
  window.open("https://juansbdev.github.io/appCalculadora/");
};
const redireccionarCarta = () => {
  window.open("https://juansbdev.github.io/carta/");
};
const redireccionarApi = () => {
  window.open("https://beamish-trifle-472703.netlify.app/");
};
const redireccionarLista = () => {
  window.open("https://juansbdev.github.io/listaDeTareas/");
};
const redireccionarCoder = () => {
  window.open("https://juansbdev.github.io/Proyecto-Coderhouse/");
};


</script>