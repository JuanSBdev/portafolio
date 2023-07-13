<script setup>
import Contacto from '../components/Contacto.vue'

</script>
<template>
    <div class="wrapper">
        <p>atrás</p>
        <Contacto></Contacto>
    </div>
</template>
<style scoped>
.wrapper{
    padding: 6%;
}
@media screen and (max-width: 575px) {
    .wrapper{
        padding-top: 45%;
        padding-bottom: 50%;
    }
}
</style>