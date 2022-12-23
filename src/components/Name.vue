        <script setup>
        import {ref, onMounted, onUpdated} from 'vue'
        let titi = true;
setTimeout(function() { titi = !titi; console.log(titi) }, 3000);      
        </script>

<template>
    <div class="wraper">
        <h1>{ Juan Lluvia S.B. } </h1>
        <h2>Desarrollador web <spam v-if="titi" > _ </spam>  </h2>
    </div>
</template>
<style scoped>
h1{
    width:100%;
    padding-top: 3%;
    display: flex;
    justify-content: center;
    align-content: center;
}
h2{
    width:100%;
    display: flex;
    justify-content: center;
    align-content: center;
}

</style>