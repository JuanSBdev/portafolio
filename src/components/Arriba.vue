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
  if (window.pageYOffset > 100) {
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
        <button class="btn btn-secondary" v-if="showButton" @click="scrollToTop">Back to Top</button>
    </div>
</template>
<style scoped>
.ir-arriba{
    position: fixed;
	bottom:20px;
	right:20px;
    z-index: 2;

}

</style>