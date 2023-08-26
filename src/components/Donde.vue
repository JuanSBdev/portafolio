<script setup>
import {i18n} from '../main'

</script>
<template>
<div class="cont mt-5 pt-5">

    <h2 v-if="i18n.global.locale=== 'es'" > ¿Donde me capacito?</h2>
    <h2 v-else > Learning Hub</h2>
    <div class="containerDonde">

        <div v-if="i18n.global.locale=== 'es'"  class="wraper row">
            <div  class="soy col-sm-4">
                <h3> Soy Henry </h3>
                <p>Donde ya aprendí mucho sobre JavaScript(avanzado) , estructura de datos, React.js, Redux, node.js, express, PostgreSQL y donde actualmente estudio</p>
                <img src="https://camo.githubusercontent.com/35b81f213ddb0e019b3567f6982d740bb2d01ae5dd712a1537e09e826e940228/68747470733a2f2f643331757a386c77666d796e38672e636c6f756466726f6e742e6e65742f4173736574732f6c6f676f2d68656e72792d77686974652d6c672e706e67" alt="">
                
            </div>
            <div  class="coder col-sm-3 mr-1">
                <h3> Coderhouse</h3>
                <p>Html5, css3, bootstrap, Sass, github, git, SEO, subida al servidor, clientes y presupuestos.</p>
                <img  src="https://i.ibb.co/c3HF8N1/coder-cert.png" alt="">
                <a target="_blank" href="https://i.ibb.co/c3HF8N1/coder-cert.png"> 
                    <div class="ver" >
                        <p id="p2">ver certificado</p>
                    </div>
                    
                </a>
            </div>
            <div class="udemy  col-sm-4 ml-1">
                <h3>Udemy</h3>
                <p>Donde aprendi, aprendo y refuerzo conocimientos en Vue.js 3, JavaScript, consultas API con framaworks, y diseño.</p>
                <img src="https://companieslogo.com/img/orig/UDMY_BIG.D-125629a7.png?t=1635531363" alt="">
                
            </div>
        </div>
        <div v-else class="wraper row">
            <div class="soy col-sm-4">
    <h3>Soy Henry</h3>
    <p>Where I have learned a lot about JavaScript, data structures, React Redux, and currently studying full-stack development.</p>
    <img src="https://camo.githubusercontent.com/35b81f213ddb0e019b3567f6982d740bb2d01ae5dd712a1537e09e826e940228/68747470733a2f2f643331757a386c77666d796e38672e636c6f756466726f6e742e6e65742f4173736574732f6c6f676f2d68656e72792d77686974652d6c672e706e67" alt="">
            
</div>
<div  class="coder col-sm-3 mr-1">
    <h3>Coderhouse</h3>
    <p>HTML5, CSS3, Bootstrap, Sass, GitHub, Git, SEO, server deployment, clients, and budgets.</p>
    <img src="https://i.ibb.co/c3HF8N1/coder-cert.png" alt="">
    <a target="_blank" href="https://i.ibb.co/c3HF8N1/coder-cert.png"> 
        <div class="ver" >
            <p id="p2">view certificate</p>
        </div>    
    </a>
</div>
<div class="udemy col-sm-4 ml-1">
    <h3>Udemy</h3>
    <p>Where I learn, reinforce and acquire knowledge in Vue.js 3, JavaScript, API queries with frameworks, and design.</p>
    <img src="https://companieslogo.com/img/orig/UDMY_BIG.D-125629a7.png?t=1635531363" alt="">
            
</div>

        </div>
    </div>
</div>
</template>
<style scoped>
@media screen and (max-width: 574px) {
    img{
        width: 40%;
        margin-bottom: 12%;
    }
    p{
        width: 80%;
    }
    h2{
        font-size: 2rem;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 4rem;
    }
    #p2 {
        color: rgba(14, 11, 11, 0.295);
        padding: 5%;
        margin-bottom: 0% ;
        padding-top: .8rem;
        text-decoration: none;
        font-size: 1.2rem;
    }
    .containerDonde{
        display: flex;
        justify-content: center;
        margin-top: 1%;
        width: 100%;
        color: aliceblue;
        font-family: 'Ubuntu', sans-serif;
        
    }
    .wraper{
        width: 90%;
        margin-left: 5%;
        margin-right: 0%;
        display: flex;
        flex-flow: row-reverse wrap;
        justify-content: space-evenly;
        align-items:start;
        text-align: center;
        
    }

    .ver{
        display:flex;
        margin-left: 30%;
        justify-content: center;
        width: 40%;
        position:relative;
        bottom: 8rem;
        border-radius: 1rem;
        background-color: rgba(119, 61, 184, 0.37);
        box-shadow: 5px 5px 5px black;
    }
    
}
@media screen and ( max-width: 1023px) {
    img{
        width: 100%;
        margin-top: 12%;
    }
    h2{
        font-size: 2rem;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 4rem;
        color: aliceblue;
    }
    #p2 {
        display: none;
    }
    .containerDonde{
        display: flex;
        justify-content: center;
        margin-top: 1%;
        width: 100%;
        margin-bottom: 20%;
        color: aliceblue;
        font-family: 'Ubuntu', sans-serif;
        
    }
    .wraper{
        width: 90%;
        margin-left: 5%;
        margin-right: 0%;
        display: flex;
        flex-flow: row-reverse wrap;
        justify-content: space-evenly;
        align-items:start;
        text-align: center;
        
    }
    
    :hover.coder img{
        filter: blur(1px);
        
    }
    .ver{
        display:flex;
        margin-left: 30%;
        justify-content: center;
        width: 40%;
        position:relative;
        bottom: 8rem;
        border-radius: 1rem;
        background-color: rgba(119, 61, 184, 0.37);
        box-shadow: 5px 5px 5px black;
    }
}

@media screen and (min-width: 1024px) {
    
    .containerDonde{
        display: flex;
        justify-content: center;
        color: aliceblue;
        font-family: 'Ubuntu', sans-serif;
    }
    h2{

        color: aliceblue;
        width: 100%;
        display: flex;
    justify-content: center;
    padding: 5rem;
}
.wraper{
    width: 80%;
    display: flex;
    flex-flow: row-reverse wrap;
    justify-content: space-around;
    align-items:start;
    text-align: center;
    
}

.coder img{
    width:90%;
    padding: 0%;
}
:hover.coder img{
    filter: blur(1px);
    
}
.ver{
        display:flex;
        margin-left: 20%;
        justify-content: center;
        width: 60%;
        position:relative;
        bottom: 8rem;
        border-radius: 1rem;
        background-color: rgba(118, 61, 184, 0.034);
        padding: rem;
        box-shadow: 5px 5px 5px black;
    }
    :hover.ver{
        background-color: rgba(236, 240, 9, 0.39);
    }

 #p2 {
    z-index: 10;
        color: rgba(14, 11, 11, 0.295);
        padding: 5%;
        margin-bottom: 0% ;
        padding-top: .8rem;
        font-size: 1.2rem;
    }
    :hover#p2{
        color: black;
    }
    .coder a{
        text-decoration: none;
        
}
.soy img{
    width: 100%;
    margin-top: 10%;
    padding-bottom: 20%;
}
.udemy img{
    width:100%;

}
}
</style>