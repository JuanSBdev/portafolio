<script setup>
import Contacto from '../components/Contacto.vue'

</script>
<template>
    <div class="wrapper">
        <p class="atras">atrás</p>
        <Contacto></Contacto>
    </div>
</template>
<style scoped>
.wrapper{
    padding: 6%;
}
.atras{
    position: absolute;
    top: 4%;
    padding: 1%;
    border-bottom: 1px solid rgb(255, 255, 255);
}
@media screen and (max-width: 575px) {
    .wrapper{
        padding-top: 45%;
        padding-bottom: 50%;
    }
    .atras{
        position: absolute;
        top: 4%;
        padding: 4%;
        border-bottom: 1px solid rgb(255, 255, 255);
    }
}
</style>