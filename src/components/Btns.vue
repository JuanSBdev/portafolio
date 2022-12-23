<template>
    <div class="btn-header">
        <router-link to="/skills" class="btn-skill">Skills</router-link>
        <router-link to="/skills" class="btn-skill">Skills</router-link>
        <router-link to="/skills" class="btn-skill">Skills</router-link>
        <router-link to="/skills" class="btn-skill">Skills</router-link>

    </div>
</template>
<style scoped>

.btn-header{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 2%;
    
}
.btn-skill{
    text-decoration: none;
    padding: 2rem;
    border-radius: 1rem;
    color: black;
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
}
.btn-skill:hover{
    background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,1) 55%, rgba(252,70,107,1) 100%);}
</style>