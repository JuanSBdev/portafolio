<template>
    <div class=" row justify-content-center wrapper">
        
        <div class="col-11 col-xl-5  div-countries d-flex flex-column  align-items-center py-5">
            <p class="videoTitles">e-commerce D'Lujo</p>
            <p>E-Commerce developed in React.js using JavaScript, HTML5, CSS Modules, Redux, Bootstrap, Express.JS, PostgreSQL, Sequelize, MercadoPago JWT ,Auth0, + </p>
            <video controls class=" video-country col-12 pt-5" src="../assets/resources/ecommerce-PF-grupo08.mp4"></video>
        </div>
        <div class="col-11 col-xl-5  div-countries d-flex flex-column  align-items-center py-5">
            <p class="videoTitles">Countries API</p>
            <p>App fullstack developed in React using NodeJS, expressJS, PostgreSQL, Sequelize, JavaScript, Redux, CSS modules  </p>
            <video controls class=" video-country col-12 pt-5" src="../assets/resources/presentacionCountries.mp4"></video>
        </div>
        <div class="col-11 col-xl-5 div-pokemon d-flex flex-column  align-items-center">
            <p class="videoTitles"> Pokemon API</p>
            <p>App fullstack developed in React / Node.js / express / PostgreSQL / Sequelize / JavaScript / css modules  </p>
            <video  class="video-pokemon col-12 mx-1" src="../assets/resources/pokemonvid1.mp4" controls></video>
        </div>
      
        <div class="col-11 col-xl-5 div-nft d-flex flex-column  align-items-center">
            <p class="videoTitles">Landing page</p>
            <p>  100% responsive / Bootstrap / HTML5 / CSS3 / JavaScript Vanilla /
                - Web Landing page freelance for NFT - </p>
            <video controls class="video-nft col-12 mx-1 " src="../assets/resources/sube3.mp4"></video>
        </div>
    </div>
</template>
<style scoped>
.wrapper{
    font-size: 1.2rem;
    font-family: 'Ubuntu', sans-serif;
    color: rgb(247, 186, 247);

}
video {
border-radius: 1rem;
}
.videoTitles{
    font-size: 2rem;
}
</style>