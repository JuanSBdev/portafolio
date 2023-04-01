<template>
    <h6 class=""> [ Reach me ]</h6>
    <div class="contenedor">
        <div class="email">
            <img src="https://aonialearning.com/wp-content/uploads/2021/08/Curso-Google-Gmail.png" alt="">
            <p>juansb.dev@gmail.com</p>
        </div>
        <div class="linkedin">
            <img src="https://img.freepik.com/iconos-gratis/linkedin_318-157468.jpg?w=2000" alt="">
            <a href="https://www.linkedin.com/in/jlsb/"> Mi linkedIn</a>
        </div>
    </div>
    <div class="cv">
        <a id="cv" target="_blank" href="https://drive.google.com/file/d/1n7PvEbOAO-R4SMNf86ZwE-x65o5mJZBa/view?usp=sharing">
            <p>Download CV</p>
        </a>

    </div>
</template>
<style scoped>
img{
    width: 20%;
}
h6{
    margin-top: 15%;
    display: flex;
    justify-content: center;
    font-size: 2rem;
}
p{
    display: flex;
    justify-content: center;

}
.contenedor{
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    align-items: center;
    padding-bottom: 2%;
}
.email{
    margin-left: -10%;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.linkedin{
    display: flex;
    align-items: center;
    justify-content: center;
}
.linkedin a{
    text-decoration: none;
    padding-left: 2rem;
    font-size: 2rem;

}
#cv{
    width: 100%;
    padding: 0%;
}

</style>