        <script setup>
        import {ref, onMounted, onUpdated} from 'vue'
        let titi = document.getElementsByClassName('titi');
        titi = false;
setTimeout(function() { titi = !titi; console.log(titi) }, 3000);      
        </script>

<template>
    <div class="wraper">
        <h1>{ Juan Lluvia SB } </h1>
        <h2> Frontend Developer<spam class="titi" v-if="titi" > _ </spam>  </h2>
    </div>
</template>
<style scoped>
h1{
    width:100%;
    padding-top: 3%;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size:2rem;

}
h2{
    width:100%;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size:1rem;

}

</style>