<script setup>
</script>
<template>
    <div class="container  row">
        <div class="profile col-sm-4">
          <div class="foto">
            <img src="https://i.ibb.co/VNNJzxK/img510.jpg" alt="Imagen cv">
            <h2>i'm Juan Lluvia</h2>
            <h3> Frontend  Developer</h3>
          </div>
          <div class="logos ">
            <a href="https://www.linkedin.com/in/jlsb/">
              <img src="https://static.vecteezy.com/system/resources/previews/018/930/483/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="">
            </a>
            <a  href="https://github.com/JuanSBdev">
              <img id="github" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="">
            </a>
          </div>
        </div>

        
        <div class="div col-sm-7">
          <div class="row  links-info">
            <a class="col-4  cv  px-2" target="blank" href="https://drive.google.com/file/d/1n7PvEbOAO-R4SMNf86ZwE-x65o5mJZBa/view?usp=sharing">RESUME / cv</a>
            <a class="col-4 px-2" href="#proyects">proyects</a>
              <img src="https://images.fineartamerica.com/images/artworkimages/medium/3/neon-binary-tree-pcb-computer-coding-programmer-noirty-designs-transparent.png" alt="">
          </div>
          <div class="con2">

            <div class="info">
              <h3>Basic Info</h3>
             <p>I'm 25 years old. </p>
             <p>I live in Argentina</p>
             <p>Spanish native <br/>
                i've got an english B1 level<br/>
                & A2 deustch</p>
            </div>
            <div class="skills ">
              <h3>technologies</h3>
              <p>HTML5 / CSS - SASS - bootstrap / mockups </p>
              <p> JavaScript - Vue3 / SEO / UX/UI</p>
              <p>SFC -Mobile first  / GIT - GITHUB / NPM</p>
            </div>
          </div>
          <div class="con3">
            <div class="presenta">
              <p>Desarrollador front-end capacitado en Coderhouse y autodidacta. Específicamente desarrollo de páginas web,
                responsivas , mobile first, utilizando las últimas tecnologías para ello. En búsqueda constante de aprendizaje y de fortalecer mis conocimientos a través de una experiencia laboral que me permita crecer profesionalmente.
              </p>
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
    left: 3%;
    width: 75%;
    top: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid gray;
    box-shadow: 0px 0px 15px 0px rgba(53, 5, 53, 0.671);
    background: rgb(0,230,77);
    background: linear-gradient(13deg, rgba(0,230,77,1) 0%, rgba(18,230,198,1) 46%, rgba(66,219,66,1) 100%);
    
  }
  .foto{
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-left: 2%;
  margin-top: -2rem;
}
.foto img{
  border-radius: 6rem;
  width: 70%;
  margin-bottom: 10%;
  min-width: 100px;
  opacity: .9;
}
  .logos{
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
}

.logos img{
  display: flex;
  align-items: center;
  align-content: start;

  width: 40%;
}
 #github{
  width: 100%;
 }
 .con2{
  display: flex;
 }
 
}
@media screen and (min-width: 575px) {
  .foto{
  display: flex;
  flex-flow: column;
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

}
  h3{
    font-size: 1.5rem;
  }
.container{
  
  left: 13%;
  top: 3rem;
  width: 75%;
  padding: 3rem;
    padding-left: 5%;

  border-radius: 1rem;
  border: 1px solid rgb(80, 11, 119);
  box-shadow: 0px 0px 15px 0px rgba(53, 5, 53, 0.671);
background: rgb(189,63,223);
background: linear-gradient(315deg, rgba(112, 13, 241, 0.644) 15%, rgb(203, 123, 243) 56%, rgba(203, 54, 216, 0.863) 96%);
}
.links-info{
  top: 5%;
  left: 70%;
  position: absolute;
  width: 30%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.links-info a{
  text-decoration: none;
  color: rgb(46, 43, 226);
}
:hover.links-info a{
  color: aqua;
}
.links-info img{
    width: 25%;
    transform: rotate(90deg);
    -webkit-animation: tit .1s ease alternate infinite;
    -moz-animation: tit .1s ease alternate infinite;
    animation: tit 2s ease infinite;
  }
.cv{
  border-right: 2px solid black;
  
}
.con2{
  display: flex;
  flex-flow: row wrap;
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