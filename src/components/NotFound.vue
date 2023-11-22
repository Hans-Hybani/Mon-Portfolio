<script setup>
import foote from './foote.vue';

</script>
<template>
        <header>
                <img src="../../public/Média/6324728.jpg" alt="">
        </header>
        <main>
                <div>
                        <p><strong>404</strong> La page que vous recherchez n'existe pas, veuillez revenir à l'acceuil</p> 
                        <a href="http://localhost:5174/">ici</a>
                </div>  
        </main>
        <foote/>
</template>

<style scoped>
header{
        display: flex;
        justify-content: center;
}
header img{
       width: 50%;
       height: 600px;
}
main{
        height: 100px;
        background-color: #b7935d;
}
main div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
}
main div p{
        text-align: center;
        align-items: center;
        width: 100%;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        margin-top: 20px;
}
main div a{
        text-decoration: none;
        color: rgb(179, 66, 66);
        margin-top: 10px;
        font-size: 1.5em;
}


</style>