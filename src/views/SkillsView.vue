<script setup>
import TxtSk from '../components/TxtSk.vue';
import SkillsLogos from '../components/Skills.vue'
</script>

<template>
    <div class="container">
        <TxtSk></TxtSk>
    </div>
    <div class="otro">
        <SkillsLogos/>

    </div>
</template>
<style scoped>
.container{
    position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

}
.otro{
    position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-right: 0%;
}
</style>
