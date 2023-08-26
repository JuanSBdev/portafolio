<script setup>
import { i18n } from '../main'

</script>
<template>
    <div class="container  row">
      <div class="brand">
        <h2>JLSB.</h2>
      </div>
      <div class="row  links-info">
            <a class="col-4  cv  px-2" target="blank" href="https://drive.google.com/file/d/1IrDbfiex3S8UBIk_13wTOAdbcbZSPYk7/view?usp=sharing">Resume</a>

            <a class="col-4 px-2 pro " href="#proyects">proyects</a>
              <!-- <img src="https://images.fineartamerica.com/images/artworkimages/medium/3/neon-binary-tree-pcb-computer-coding-programmer-noirty-designs-transparent.png" alt=""> -->
      </div>

        <div class="profile col-sm-4">
          <div class="foto">
            <img src="https://i.ibb.co/VNNJzxK/img510.jpg" alt="Imagen cv">
            <h2  v-if="i18n.global.locale === 'es'">Hola, soy Juan Lluvia</h2>
            <h2  v-else>Hi i'm Juan Lluvia</h2>
            <h3 > ⚡Full Stack Developer⚡ </h3>
          </div>
          <div class="row  links-info-mobile">
            <a class="col-4  cv  px-2" target="blank" href="https://drive.google.com/file/d/1IrDbfiex3S8UBIk_13wTOAdbcbZSPYk7/view?usp=sharing">Resume</a>

            <a class="col-4 px-2 pro " href="#proyects">proyects</a>
              <img src="https://images.fineartamerica.com/images/artworkimages/medium/3/neon-binary-tree-pcb-computer-coding-programmer-noirty-designs-transparent.png" alt="">
      </div>
          <div class="logos ">
            <a href="https://www.linkedin.com/in/jlsb/">
              <img src="../assets/resources/linkedin_image.png" alt="linkedin logo">
            </a>
            <a  href="https://github.com/JuanSBdev">
              <img id="github" src="https://icons-for-free.com/iconfiles/png/512/coding+development+github+programming+social+icon-1320086085448562008.png" alt=" github logo">
            </a>
          </div>
        </div>

        
        <div class="div col-sm-7">
          <div class="con2">

            <div class="info ">
              <h3>Basic Info</h3>
             <p v-if="i18n.global.locale === 'es'" >Tengo 25 años </p>
             <p v-else >I'm 25 years old. </p>

             <p v-if="i18n.global.locale === 'es'" >Vivo en Argentina.</p>
             <p v-else>Based in Argentina.</p>
             <p>Spanish native <br/>
                i've got an english B2 level<br/>
                & A2 deustch</p>
            </div>
            <div class="skills ">
              <h3 v-if="i18n.global.locale === 'es'">tecnologías</h3>
              <h3 v-else >technologies</h3>
              <p>HTML5 - CSS - SASS - Bootstrap - FlexBox - Figma. </p>
              <p> JavaScript ES6 - Vue3.JS - React.JS + Vite</p>
              <p>Node.js - Express - SQL - PostgreSQL - Sequelize  </p>
              <p>SPA - Mobile first  / GIT - GITHUB / NPM - Yarn</p>
            </div>
          </div>
          <div class="con3">
            <div class="presenta">
              <div v-if="i18n.global.locale === 'es'" >
                <p>
 ✍
✔ Capacitado en Coderhouse, soyHenry, y autodidacta.
 Desarrollador de páginas web, responsivas, mobile first, front y backend utilizando las últimas tecnologías para ello. 
</p>
<p>
  ⌛ En busca de experiencia laboral y un espacio el cual me permita el seguir formando y capacitándome.⌛ 
  
</p>
</div>
              <div v-else >
                  <p>
                    ✍✔
                   Trained in Coderhouse, Henry, and self-taught. Developing responsive, mobile-first websites using the latest technologies.
                 </p>
                 <p>
                  ⌛ 
   Constantly seeking learning opportunities and aiming to strengthen my knowledge through work experience that allows me to grow professionally.⌛ 
  
                 </p>
                </div>
                </div>
          </div>

        </div>

    
    </div>
</template>
<style scoped>
@media screen and (max-width: 574px) {
  h3{
    font-size: 1.5rem;
  }
  .container{
    width: 90%;
    margin-left: 5%;
    top: 2rem;
    padding: 1.5rem;
    border-radius: 1rem;
    border: 1px solid rgb(65, 31, 144);
    box-shadow: 0px 0px 15px 0px rgba(53, 5, 53, 0.671);
    background: rgb(189,63,223);
    background: linear-gradient(315deg, rgba(112, 13, 241, 0.644) 15%, rgb(203, 123, 243) 56%, rgba(203, 54, 216, 0.863) 96%);
    color: aliceblue;
    font-family: 'Ubuntu', sans-serif;

  }
  .brand{
  position: absolute;
  top: 1%;
  left: 4%;
  font-family: 'Shadows Into Light';
}
  .foto{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-left: 2%;
  margin-top: -4rem;
  margin-bottom: 10%;
}


.foto img{
  border-radius: 6rem;
  width: 70%;
  margin-bottom: 10%;
  min-width: 100px;
  opacity: .9;
}
  .logos{
  width: 90%;
  display: flex;
align-content: center;
justify-content: end;
margin-left: 25%;
}
.logos a{
  display: flex;
  justify-content: end;
  align-content: center;
  align-items: center;
}
.logos img{
  width: 35%;
  width: 60%;
}
 #github{
transform: scale(.7);
width: 100%;

 }
 .con2{
  display: flex;
 }
 .links-info{
  display: none;

}
.links-info a{
  display: none;

}
.links-info-mobile{
  display: flex;
  flex-flow: column wrap;
  position: relative;
  width: 80%;
  justify-content: center;
  margin-bottom: -20%;
}
.links-info-mobile a{
  width: 60%;
  margin-bottom: 2%;
  text-align: center;
  border-radius: 2rem;
  padding: 2%;
  color: rgb(23, 17, 23);
  box-shadow: 0 0 10px 0;
text-decoration: none;
}
.links-info-mobile img{
  display: none;
  position: relative;
}
.cv{
  border-right: 2px solid black;
  
}
:hover.cv{
  color: rgb(128, 31, 160);
}
:hover.pro{
  color: rgb(128, 31, 160);
}
.links-info img{
  display: none;
    width: 25%;
    transform: rotate(90deg);
    -webkit-animation: tit .1s ease alternate infinite;
    -moz-animation: tit .1s ease alternate infinite;
    animation: tit 2s ease infinite;
  }
 
}
@media screen and (min-width: 575px) {
  .foto{
  display: flex;
  flex-flow: column wrap;
  align-items: start;
  margin-left: 2%;
}
.foto img{
  border-radius: 6rem;
  width: 70%;
  margin-bottom: 10%;
  min-width: 100px;
  opacity: .9;
    border: 1px solid rgba(191, 50, 226, 0.658);
    box-shadow: 0 0 10px 0;

}
.foto h2{
  align-self: flex-start;
  font-size: 1.8rem;
}
  h3{
    align-self: start;
    font-size: 1.4rem;
  }
.container{
  
  left: 13%;
  top: 3rem;
  width: 75%;
  padding: 3rem;
  padding-left: 5%;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px 0px rgba(53, 5, 53, 0.671);
background: rgb(189,63,223);
background: linear-gradient(315deg, rgba(112, 13, 241, 0.644) 15%, rgb(203, 123, 243) 56%, rgba(203, 54, 216, 0.863) 96%);
font-family: 'Ubuntu', sans-serif;

}
p{
  color: rgb(245, 236, 251);
  
}
h2{
  color: rgb(245, 236, 251);
  
}
h3{
  color: rgba(143, 21, 231, 0.918);

}
.brand{
  position: absolute;
  top: 6%;
  left: 2%;
  font-family: 'Shadows Into Light';
}
.links-info-mobile{
  display: none;
}
.links-info{
  top: 5%;
  left: 70%;
  position: absolute;
  width: 30%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
}
.links-info a{
  text-decoration: none;
  color: rgba(143, 21, 231, 0.918);
  border-bottom: 1px solid rgba(143, 21, 231, 0.918);
  display: flex;
  justify-content: end;
}

:hover.cv{
  border-bottom: 1px solid rgba(253, 250, 255, 0.918);
  color: rgb(245, 236, 251);
  
}
:hover.pro{
  border-bottom: 1px solid rgba(253, 250, 255, 0.918);
  color: rgb(245, 236, 251);
}
.links-info img{
    width: 25%;
    transform: rotate(90deg);
    -webkit-animation: tit .1s ease alternate infinite;
    -moz-animation: tit .1s ease alternate infinite;
    animation: tit 2s ease infinite;
    
  }
.con2{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.con3{
  text-align: start;
}

.logos{
  width: 60%;
  display: flex;
  justify-content: start;
  align-items: center;
}

.logos img{
  display: flex;
  align-items: center;
  align-content: start;

  width: 50%;
  min-width: 70px;

}
 #github{
  width: 110%;
  min-width: 40px;

 }
}


</style>