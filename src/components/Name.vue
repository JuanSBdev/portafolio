        <script setup>
        import {ref, onMounted, onUpdated} from 'vue'
        let tit = true;
      onMounted(() => {
        let  tit = false;
            console.log(tit)
        });
        onUpdated(()=>{
             tit = true;
            console.log(tit)
        })
        </script>

<template>
    <div class="wraper">
        <h1>{ Juan Lluvia S.B. } </h1>
        <h2>Desarrollador web <spam > _ </spam>  </h2>
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