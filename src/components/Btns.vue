<template>
    <div class="btn-header">
        <router-link to="/skills" class="btn-skill">Skills</router-link>
        <spam class="diva"></spam>
        <router-link to="/proyects" class="btn-skill">Proyects</router-link>
        <spam class="diva"></spam>
        <router-link to="/contacto" class="btn-skill">Contact</router-link>

    </div>
</template>
<style scoped>

.btn-header{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding: 1%;
    
}
.btn-skill{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    text-decoration: none;
    padding: 10%;
    border-radius: 1rem;
    color: rgb(253, 253, 253);
    margin-left: 4%;
    margin-right: 4%;
    font-size: .8rem;
}
.btn-skill:hover{
    background: rgba(115, 130, 206, 0.568);
    }
.diva{
    border: 1px solid white;
    background-color:wheat ;
}
</style>