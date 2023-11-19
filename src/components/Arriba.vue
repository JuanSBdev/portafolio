<script setup>
 import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function handleScroll() {
  if (window.pageYOffset > 300) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
    <div class="ir-arriba ">
        <button  v-if="showButton" @click="scrollToTop"> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="wheat" class="w-12 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


        </button>
    </div>
</template>
<style scoped>
.ir-arriba{
    position: fixed;
	bottom:20px;
	right:20px;
    z-index: 2;
    
}
.ir-arriba button{
  background-color: rgba(217, 59, 225, 0.368);
    border-radius: 35%;
}

</style>