<template>
    <div class="btn-header">
        <router-link to="/skills" class="btn-skill">Skills</router-link>
        <spam class="diva"></spam>
        <router-link to="/proyects" class="btn-skill">Proyects</router-link>
        <spam class="diva"></spam>
        <router-link to="/contacto" class="btn-skill">Contact Me!</router-link>

    </div>
</template>
<style scoped>

.btn-header{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 2%;
    
}
.btn-skill{
    text-decoration: none;
    padding: 2rem;
    border-radius: 1rem;
    color: rgb(253, 253, 253);
    margin-left: 1%;
    margin-right: 1%;
}
.btn-skill:hover{
    background: rgba(115, 130, 206, 0.568);
    }
.diva{
    border: 1px solid white;
}
</style>