<template>
    <div class="container col-6">
        <router-link class="col-12" to="Skills" >
        <p>portfolio</p>
      </router-link>
      <router-link class="col-12" to="Cv">
        <p>Download CV</p>
      </router-link>

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

}
</style>