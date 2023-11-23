<template>
        <footer>
                <section class="Reseau">
                        <h2>Mes réseaux</h2>
                        <div class="Reseau__link">
                                <a href="https://www.linkedin.com/in/hans-h-bb5336293/" target="_blank"><img src="../../public/Média/linkedin.png" alt="Icone vers mon compte Linkdin"></a>
                                <a href="https://github.com/Hans-Hybani" target="_blank"><img src="../../public/Média/signe-github.png" alt="Icone vers mon compte GitHub"></a>
                                <a href="https://twitter.com/HybaniHans" target="_blank"><img src="../../public/Média/twitter.png" alt="Icone vers mon compte Twitter"></a>
                        </div>
                </section>
                <section class="copy">
                        <h2> |Copyright &copy;2023| Codé par HYBANI PRINCIA Hans. |</h2>
                </section>
                <section class="end">
                        <h2>Dernière mise à jour :</h2>
                        <p><time datetime="2023-11-20">Le 20/11/2023</time></p>
                </section>
        </footer>
</template>
<style>
/* footer formulaire */
footer {
  display: flex;
  justify-content: space-around;
  background-color: #34353A;
  padding-bottom: 50px;
  padding-top:20px;
}
.Reseau h2{
  display: flex;
  justify-content: center;
  color: #FFF;
  font-size: 1.6em;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.Reseau__link{
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}
.Reseau__link a:hover{
  opacity: 20%;
}
.Reseau img{
  width: 40px;
  height: 40px;
}
.copy h2{
  color: #FFF;
  font-size: 1.1em;
}
.end{
 display: flex;
 flex-wrap: wrap;
}
.end p {
  padding-left: 5px;
}
.end h2,p{
  color: #FFF;
  font-size: 1.4em;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>