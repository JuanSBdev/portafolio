<script setup>
</script>
<template>
    <div class="container ">
        <div class="row">
          <div class="foto">
            <img src="https://cdn-icons-png.flaticon.com/512/62/62932.png" alt="Imagen cv">
            <h2> Juan Lluvia</h2>
          </div>
        </div>

        <div class="row-2">
          <div class="info">
            <h3>Info</h3>
            <p>Hey, I'm Juan. I'm 25 years old. </p>
            <p>I live in Argentina</p>
            <p> Speack spanish and ive got an english B1 level, and A2 deustch</p>
          </div>

          <div class="skills">
            <h3>Skills</h3>
            <p>HTML5, CSS, SASS, GIT, GITHUB</p>
            <p> JavaScript, Vue3</p>
          </div>
            
        </div>
    </div>
</template>
<style scoped>
  img{
    width: 30%;
    min-width: 200px;
  }
.container{
  position: absolute;
  left: 5rem;
  top: 10rem;

  width: 70%;
  border: 5px solid red;
  border-radius: 1rem;
  background-color: aqua;
  display: flex;
  flex-flow: column nowrap;
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