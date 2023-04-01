<template>
    <div class="containerDonde">
        <h2> ¿Donde me capacito?</h2>
        <div class="wraper">
            <div class="coder col-3">
                <h3> Coderhouse</h3>
                <p>Html5, css3, bootstrap, Sass, github, git, SEO, subida al servidor, clientes y presupuestos.</p>
                <a href="https://i.ibb.co/c3HF8N1/coder-cert.png">
                        <img  src="https://i.ibb.co/c3HF8N1/coder-cert.png" alt="">
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
p{
    padding: 1rem;
}
.coder img{
    width:90%;
    padding: 0%;
}
:hover.coder img{
    transform: scale(1.2);
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