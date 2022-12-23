<script setup> 
        let titilar = false
        function titila(){
        titilar = true
    }
    console.log(titilar)
</script>
<template>
    <div>
        <h1>Juan Lluvia S.B.</h1>
        <h2>Desarrollador web <div v-if="titilar">_</div></h2>
    </div>
</template>
<style scoped>
:root{
	background-color: #5f5dbd; 

}
h1{
    width:100%;
    padding-top: 10rem;
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