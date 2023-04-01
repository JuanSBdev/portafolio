<script setup>
</script>
<template>
    <div class="container row">
        <div class="col-6">
          <div class="foto">
            <img src="https://i.ibb.co/VNNJzxK/img510.jpg" alt="Imagen cv">
            <h2> Juan Lluvia</h2>
            <h3> Front-end Web Developer</h3>
          </div>
        </div>

        <div class="div col-6">
            <div class="info">
              <h3>Basic Info</h3>
             <p>Hi! I'm Juan. I'm 25 years old. </p>
             <p>I come from Argentina</p>
             <p> Speack spanish and ive got an english B1 level, and A2 deustch</p>
            </div>
    
          <div class="skills">
            <h3>Languages:</h3>
            <p>HTML5, CSS, SASS, GIT, GITHUB</p>
            <p> JavaScript, Vue3</p>
          </div>
        </div>
    
    </div>
</template>
<style scoped>
.foto img{
  border-radius: 6rem;
  border: 5px solid black;
}
  img{
    width: 30%;
    min-width: 200px;
    padding-bottom: 3%;
  }
  h3{
    font-size: 1.5rem;
  }
.container{
  left: 13%;
  top: 2rem;
  width: 70%;
  padding: 3%;
  border: 5px solid rgb(5, 3, 3);
  border-radius: 1rem;
  background-color: aqua;
  position: absolute;
  background: rgb(0,230,77);
background: linear-gradient(13deg, rgba(0,230,77,1) 0%, rgba(18,230,198,1) 46%, rgba(66,219,66,1) 100%);

}
.row{
  display: flex;
  flex-flow: row wrap;

}
.row-2{
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;

}
.foto{
  display: flex;
  flex-flow: column;
  align-items: start;
  margin-left: 25%;
}

.info{
  width: 45%;
}
.skills{
  width: 45%;
}

</style>