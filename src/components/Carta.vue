<script setup>
</script>
<template>
    <div class="container row">
        <div class="profile col-sm-4">
          <div class="foto">
            <img src="https://i.ibb.co/VNNJzxK/img510.jpg" alt="Imagen cv">
            <h2>i'm Juan Lluvia</h2>
            <h3> Front-end  Developer</h3>
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
            <p>SFC -Mobile first  / GIT - GITHUB</p>
          </div>
          
        </div>

    
    </div>
</template>
<style scoped>
@media screen and (max-width: 574px) {
  .foto{
  display: flex;
  flex-flow: column;
  align-items: start;
  margin-bottom: 10%;
}
.foto img{
  border-radius: 6rem;
  border: 5px solid black;
  width: 50%;
  margin-bottom: 10%;
  min-width: 180px;
  margin-top: -20%;
  align-self: center;
}
  h3{
    font-size: 1.5rem;
  }
.container{
  left: 18%;
  top: 4rem;
  width: 70%;
  padding: 3rem;
  border: 5px solid rgb(5, 3, 3);
  border-radius: 1rem;
  background: rgb(0,230,77);
background: linear-gradient(13deg, rgba(0,230,77,1) 0%, rgba(18,230,198,1) 46%, rgba(66,219,66,1) 100%);

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
}
  h3{
    font-size: 1.5rem;
  }
.container{
  
  left: 13%;
  top: 3rem;
  width: 75%;
  padding: 3rem;
  border-radius: 1rem;
  border: 1px solid gray;
  box-shadow: 0px 0px 15px 0px rgba(53, 5, 53, 0.671);
  background: rgb(0,230,77);
background: linear-gradient(13deg, rgba(0,230,77,1) 0%, rgba(18,230,198,1) 46%, rgba(66,219,66,1) 100%);

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
}
 #github{
  width: 120%;
 }
}


</style>