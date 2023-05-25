<template>
    <div class="container ">
        <div class="row uno">
            <router-link  class="btnDiv" to="Skills" >
                <p class="col-8">ir a portfolio</p>
                <img class="col-4" id="img-p" src="https://cdn-icons-png.flaticon.com/512/5938/5938891.png" alt="">
            </router-link>
        </div>
        <a class="row dos btnDiv" target="_blank" href="https://drive.google.com/file/d/1BxcxjX3Y10yMcMxvhvGDx57fE2FRkj6a/view?usp=sharing">
            <p class="col-8">cv - Resume</p>
            <img id="img-d" class="img-down col-4" src="https://static.vecteezy.com/system/resources/previews/015/166/075/original/download-neon-icon-png.png" alt="">
        </a>
    </div>
</template>
<style scoped>
@media screen and ( max-width: 574px ) {
   .container p{
    color: rgb(233, 193, 245);
   }
    .btnDiv{
        display: flex;
        font-size: 2rem;
        justify-content: center;
        text-align: center;
        align-items: center;
        text-decoration: none;
        font-size: 3rem;
        margin-bottom: 10%;
        border-radius: 2rem;
        background: rgb(74,43,154);
        background: linear-gradient(132deg, rgba(74,43,154,0.577468487394958) 8%, rgba(144,44,205,0.6082808123249299) 30%, rgba(74,43,154,0.5690651260504201) 96%);
        box-shadow: -1px 1px 17px 0 ;

}
#img-p{
        margin-top: -5%;
        margin-left: 1%;
        padding: 1%;
    }
    
#img-d{
    padding: 1%;
}
}

@media screen and ( max-width: 1024px ) {
    .btnDiv{
        display: flex;
        font-size: 2rem;
        justify-content: center;
        text-align: center;
        align-items: center;
        text-decoration: none;
        font-size: 3rem;
        margin-bottom: 10%;
        border-radius: 2rem;
        background: rgb(74,43,154);
        background: linear-gradient(132deg, rgba(74,43,154,0.577468487394958) 8%, rgba(144,44,205,0.6082808123249299) 30%, rgba(74,43,154,0.5690651260504201) 96%);
        box-shadow: -1px 1px 17px 0 ;

}
    #img-p{
        margin-top: -5%;
        margin-left: 1%;
        padding: 1%;
    }
    #img-d{
    padding: 1%;
}
}
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
    text-align: center;
    align-items: center;
    text-decoration: none;
    font-size: 2rem;
    margin-bottom: 10%;
    color: black;
    padding: 1%;
}
p{
    color: rgb(58, 23, 63);

}
.dos{
    display: flex;
    flex-flow: row nowrap;
    align-items: start;
    height: 20%;
}
#img-p{
    width: 15%;
    max-height: 140px;
    
}
#img-d{

  width: 20%;
    max-height: 140px;
}
@media screen and ( min-width: 1024px ) {
    a{
        font-size: 1.8rem;
    }
    .btnDiv{
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        text-align: center;
    }
    
    #img-p{
        margin-top: -5%;
        margin-left: 1%;
        padding: 1%;
    }
}
</style>