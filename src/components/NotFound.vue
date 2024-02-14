<script setup>
import headvue from './head.vue';
import footevue from './foote.vue';


</script>
<template>
        <headvue/>
        <main>
                <div class="image404">
                        <img src="../../public/Média/6324728.jpg" alt="Image 404 page non trouvé">
                </div>
                <div class="redirection">
                        <p><strong>404</strong>La page que vous recherchez n'existe pas, veuillez revenir à l'acceuil</p> 
                        <a href="/">ici</a>
                </div>  
        </main>
        <footevue />
</template>

<style scoped>
.image404{
  padding-top: 100px;
  display: flex;
  justify-content: center;
}
.image404 img{
  width: 50%;
  height: 600px;
}
.redirection{
  height: 100px;
  background-color: #b7935d;
}
.redirection{
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  align-items: center;
}
.redirection p{
  text-align: center;
  align-items: center;
  width: 100%;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  margin-top: 10px;
}
.redirection a{
  text-decoration: none;
  color: rgb(179, 66, 66);
  font-size: 1.5em;
}
</style>