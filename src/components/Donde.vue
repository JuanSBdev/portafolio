<script setup>


</script>
<template>
    <div class="containerDonde">
        <h2> ¿Donde me capacito?</h2>
        <div class="wraper">
            <div  class="coder col-3">
                <h3> Coderhouse</h3>
                <p>Html5, css3, bootstrap, Sass, github, git, SEO, subida al servidor, clientes y presupuestos.</p>
                <img  src="https://i.ibb.co/c3HF8N1/coder-cert.png" alt="">
                <a href="https://i.ibb.co/c3HF8N1/coder-cert.png"> 
                    <div class="ver" >
                        <p id="p2">ver certificado</p>
                    </div>
                
                </a>
                

            </div>
            <div class="soy col-3">
                <h3> Soy Henry </h3>
                <h4>(JavaScript)</h4>
                <p>Donde durante la etapa de su prep.course aprendí mucho sobre las bases de JavaScript</p>
                <img src="https://camo.githubusercontent.com/35b81f213ddb0e019b3567f6982d740bb2d01ae5dd712a1537e09e826e940228/68747470733a2f2f643331757a386c77666d796e38672e636c6f756466726f6e742e6e65742f4173736574732f6c6f676f2d68656e72792d77686974652d6c672e706e67" alt="">

            </div>
            <div class="udemy col-3">
                <h3>Udemy</h3>
                <p>Donde aprendi, aprendo y refuerzo conocimientos en Vue.js 3, JavaScript, consultas API con framaworks, y diseño.</p>
                <img src="https://companieslogo.com/img/orig/UDMY_BIG.D-125629a7.png?t=1635531363" alt="">

            </div>
        </div>
    </div>
</template>
<style scoped>
.containerDonde{
    margin-top: 8%;
}
h2{
    display: flex;
    justify-content: center;
    padding: 4rem;
}
.wraper{
    width: 100%;
    display: flex;
    flex-flow: row-reverse wrap;
    justify-content: space-evenly;
    align-items: center;
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
        background-color: rgba(177, 125, 236, 0.61);
        padding: rem;
        box-shadow: 10px 5px 5px black;
    }
    :hover.ver{
        background-color: rgba(219, 223, 30, 0.39);
    }

 #p2 {
    z-index: 10;
        color: rgb(14, 11, 11);
        padding-top: .8rem;
        font-size: 1.2rem;
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
</style>