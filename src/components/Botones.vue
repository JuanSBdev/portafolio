<template>
    <div class="container ">
        <div class="row uno">
            <router-link  to="Skills" >
                <p class="col-8">portfolio</p>
                <img class="col-4" id="img-p" src="https://cdn-icons-png.flaticon.com/512/5938/5938891.png" alt="">
            </router-link>
        </div>
        <a class="row dos" target="_blank" href="https://drive.google.com/file/d/1BxcxjX3Y10yMcMxvhvGDx57fE2FRkj6a/view?usp=sharing">
            <p class="col-8">cv - Resume</p>
            <img id="img-d" class="img-down col-4" src="https://static.vecteezy.com/system/resources/previews/015/166/075/original/download-neon-icon-png.png" alt="">
        </a>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    padding: 5%;
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
.uno{
    display: flex;
    align-items: start;
align-content: start;
}
.dos{
    display: flex;
    flex-flow: row nowrap;
    align-items: start;
    height: 20%;
}
#img-p{
    display: flex;
    width: 15%;
    height:fit-content;
    max-height: 140px;
    padding: 2%;
    
}
#img-d{

  width: 20%;
    max-height: 140px;
}
</style>