<script setup>
import { i18n } from '../main'
import Contacto from '../components/Contacto.vue'
import FormVue from '../components/Form.vue';

</script>
<template>
    <div  class="wrapper">
        <router-link to="/">
            <button v-if="i18n.global.locale === 'es'" class="atras" >volver</button>
            <button v-else class="atras"> back </button>
            
        </router-link>
        <Contacto></Contacto>
        <FormVue/>
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
    color: aliceblue;
    background-color: rgba(240, 248, 255, 0);
    border: none;
    border-bottom: 1px solid rgb(255, 255, 255);
}
.atras:hover{
    border-bottom: 1px solid rgb(215, 75, 208);

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