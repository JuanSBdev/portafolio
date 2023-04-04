<template>
    <div class="container ">
        <router-link class="row uno"  to="Skills" >
            <p class="col-8">portfolio</p>
            <img class="col-4" id="img-p" src="https://cdn-icons-png.flaticon.com/512/5938/5938891.png" alt="">
        </router-link>
        <a class="row dos" target="_blank" href="https://drive.google.com/file/d/1n7PvEbOAO-R4SMNf86ZwE-x65o5mJZBa/view?usp=sharing">
            <p class="col-8">Download CV</p>
            <img id="img-d" class="img-down col-4" src="https://static.vecteezy.com/system/resources/previews/015/166/075/original/download-neon-icon-png.png" alt="">
        </a>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    width: 100%;
    flex-flow: column wrap;
    align-items: center;

}
a{
    display: flex;
    font-size: 2rem;
    justify-content: center;
    text-decoration: none;
    color: rgb(181, 133, 226);

}
#img-d{
  width: 20%;
  height:fit-content;

}
#img-p{
    display: flex;
    width: 15%;
  height:fit-content;
  padding: 2%;

}
.uno{
    display: flex;
    align-items: start;

}
</style>