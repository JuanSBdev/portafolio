<script setup>
import { i18n } from '../main';
</script>
<template>
    <div v-if="i18n.global.locale=== 'es'" class="contenedor mx-5">
        <h6>Portfolio desarrollado en  vue.js sfc </h6>
    </div>
    <div v-else class="contenedor mx-5">
        <h6>Portfolio developed with vue.js 3 sfc </h6>
    </div>
</template>
<style scoped>
.contenedor{
    margin-top: 12%;
    display: flex;
    justify-content: center;
    padding: 2%;
    background-color: rgb(236, 184, 229);
}
h6{
    font-size: 3rem;
    color: rgba(211, 66, 150, 0.959);
    display: flex;


}
</style>