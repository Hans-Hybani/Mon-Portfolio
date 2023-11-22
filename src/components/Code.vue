<template>
    <header id="menu">
          <nav>
                <div class="logo">
                      <a href="#menu"><img src="../../public/Média/hans.png" alt=""></a>
                </div>
                <div class="nav_link">
                      <ul>
                        <li><a href="#Me" id="moi__link" @click="linkEvent1()">Moi</a></li>
                        <li><a href="#Portfolio" id="portfolio__link" @click="linkEvent2()">Portfolio</a></li>
                        <li><a href="#Contact" id="contact__link" @click="linkEvent3()">Contact</a></li>  
                      </ul>
                </div>
                <div class="titre_page">
                      <h1>MyFolio</h1>
                </div>
          </nav>
    </header>

    <main>
          <section id="Me">
                <h2 class="Me_titre">HYBANI PRINCIA Hans</h2>
                <div class="Me_monProfil">
                      <p>Developpeur Web et mobile <br>
                      & <span>Web designer junior</span></p>
                      <article class="Me_monProfil presentation">Jeune développeur web et mobile je suis particulièrement passionné par le web design. J'exprime ma créativité avec Adobe XD. En dehors du code, j'explore l'astronomie ainsi que divers thème culturelle. Mon scientifique préféré est Stephen Hawking, il m'inspire à surmonter les obstacles. Je crois que, malgré les handicaps, on peut accomplir de grandes choses. Mon parcours est une aventure continue d'apprentissage et de croissance dans le monde du développement. Ce portfolio en est une prémisse</article>
                </div>
                <div class="Me_photoDeProfil">
                      <img src="../../public/Média/photo1.png" alt="">
                </div>
          </section>

          <section id="aboutMyskills">
                <h2 class="aboutMyskills_titre">A propos</h2>
                <div class="aboutMyskills_description">
                      <p>Mes premiers pas dans le développement ont débuté avec HTML et CSS, que j'ai rapidement maîtrisés. En quête d'interactivité, j'ai plongé dans JavaScript, marquant mon entrée dans le monde complexe du développement. Vue.js a ensuite été un défi, devenant mes "hard skills". En parallèle, je me suis initié au design web avec Adobe XD, fusionnant ainsi le code et le design.Ma liste de compétences ne cesse de s'élargir. Actuellement à l'aise avec HTML, CSS, JavaScript, je suis sur le point d'intégrer Python et Figma à mes compétences. De plus, l'apprentissage du framework React est également prévu dans mon parcours.</p>
                </div>
                <section class="aboutMyskills_skills">
                      <h3>Hard & Soft skills</h3>
                      <div class="aboutMyskills_outils card">
                            <div class="htmlCss card">
                                  <img src="../../public/Média/html-5 (1).png" alt="">
                                  <img src="../../public/Média/css-3 (1).png" alt="">
                                  <p>HTML & CSS</p>
                            </div>
                            <div class="javaScript card">
                                  <img src="../../public/Média/js.png" alt="">
                                  <p>JAVASCRIPT</p>
                            </div>
                            <div class="vueJs card">
                                  <img src="../../public/Média/vue.png" alt="">
                                  <p>VueJS</p>
                            </div>
                            <div class="adobeXD card">
                                  <img src="../../public/Média/xd.png" alt="">
                                  <p>Adobe XD</p>
                            </div>
                        </div>
                </section>
                <div id="overlay" @click="exitModaleOverlay()"></div>
                <div id="modale__commentaire">
                      <div id="modale__header">
                            <h2 id="modale__header__titre"></h2>
                            <div class="modale__header__button">
                                  <button type="button" @click="modaleRealisation1()">Aller Vers la réalisation</button>
                                  <button type="button" @click="closeModale()">Fermer</button>
                            </div>
                            <div class="modale__header__information">
                                  <p id="modale__header__date1"><time datetime="2023-11-07">Date de création : 07 Novembre 2023</time></p>
                                  <p id="modale__header__technologie1">Technologie : HTML & CSS, JavaScript</p>
                                  <p>GitHub :<a href="https://github.com/Hans-Hybani/EspaceCommentaireCEF" target="_blank">Ici</a></p>
                            </div>
                      </div>
                      <div class="modale__body">
                            <div class="modale__body">
                                  <div class="modale__body__image">
                                        <img id="modale__body__image1__commentaire" src="" alt="">
                                        <p id="modale__body__text1__commentaire"></p>
                                  </div>
                                  <div class="modale__body__image">
                                        <img id="modale__body__image2__commentaire" src="" alt="">
                                        <p id="modale__body__text2__commentaire"></p>
                                  </div>
                                  <div class="modale__body__image">
                                        <img id="modale__body__image3__commentaire" src="" alt="">
                                        <p id="modale__body__text3__commentaire"></p>
                                  </div>
                            </div>
                      </div>
                </div>
                <div id="modale__cahier">
                      <div id="modale__header">
                            <h2 id="modale__header__titre2"></h2>
                            <div class="modale__header__button">
                                  <button type="button" @click="modaleRealisation2()">Aller Vers la réalisation</button>
                                  <button type="button" @click="closeModale()">Fermer</button>
                            </div>
                            <div class="modale__header__information">
                                  <p id="modale__header__date2"><time datetime="2023-10-18">Date de création : 18 Octobre 2023</time></p>
                            </div>
                      </div>
                      <div class="modale__body">
                            <div class="modale__body">
                                  <div class="modale__body__image">
                                        <img id="modale__body__image1__cahier" src="" alt="">
                                  </div>
                                  <div class="modale__body__image">
                                        <img id="modale__body__image2__cahier" src="" alt="">
                                  </div>
                                  <div class="modale__body__image">
                                        <img id="modale__body__image3__cahier" src="" alt="">
                                        <p id="modale__body__text3__cahier"></p>
                                  </div>
                            </div>
                      </div>
                </div>
                <div id="modale__cv">
                      <div id="modale__header">
                            <h2 id="modale__header__titre3"></h2>
                            <div class="modale__header__button">
                                  <button type="button" @click="modaleRealisation3()">Aller Vers la réalisation</button>
                                  <button type="button" @click="closeModale()">Fermer</button>
                            </div>
                            <div class="modale__header__information">
                                  <p id="modale__header__date3"><time datetime="2023-10-08">Date de création : 08 Octobre 2023.</time></p>
                                  <p id="modale__header__technologie3">Technologie : HTML & CSS</p>
                                  <p>GitHub :<a href="https://github.com/Hans-Hybani/My-CV" target="_blank">Ici</a></p>
                            </div>
                      </div>
                      <div class="modale__body">
                            <div class="modale__body">
                                  <div class="modale__body__image">
                                        <img id="modale__body__image1__cv" src="" alt="">
                                  </div>
                                  <div class="modale__body__image">
                                        <img id="modale__body__image2__cv" src="" alt="">
                                  </div>
                                  <div class="modale__body__image">
                                        <img id="modale__body__image3__cv" src="" alt="">
                                        <p id="modale__body__text3__cv"></p>
                                  </div>
                            </div>
                      </div>
                </div>
                <div id="modale__mail__confirmation">
                      <div class="modale__mail__confirmation__titre">
                            <h2>Votre Message a été envoyer</h2>
                      </div>
                      <div class="modale__mail__confirmation__button">
                            <button type="button" @click="closeModale()">Fermer</button>
                      </div>
                </div>
                <section id="Portfolio">
                      <h2 class="Portfolio_titre">Portfolio</h2>
                            <div class="Portfolio_realisation all card main">
                                  <div v-on:click="modaleCard1()" class="Portfolio_realisation all card espaceCommentaire">
                                        <img src="../../public/Média/commentaire.PNG" alt="Une image qui envoie vers le lien du site dynamiser une espace commentaire">
                                        <p>Espace Commentaire Dynamique</p>
                                  </div>
                                  <div @click="modaleCard2()" class="Portfolio_realisation all card cahierDeCharge">
                                        <img src="../../public/Média/cahier.PNG" alt="Une image qui envoie vers un fichier pdf du cahier de charge la socketterie">
                                        <p>Cahier des charges</p>
                                  </div>
                                  <div @click="modaleCard3()" class="Portfolio_realisation all card">
                                        <img src="../../public/Média/cv.PNG" alt="Une image qui envoie vers le site de mon CV">
                                        <p>Mon CV</p>
                                  </div>
                            </div>
                </section>
          </section>
          <section id="Contact">
                <h2  class="titreDuFormulaire">Contactez Moi</h2>
                      <div class="formulaire_Error">
                              <h3 id="formulair_message_alert">Tous les champs doivent etre remplis</h3>
                              <h3 id="Numsyntaxe__prenom"></h3>
                              <h3 id="Numsyntaxe__nom"></h3>
                              <h3 id="Numsyntaxe__objet"></h3>
                              <h3 id="Numsyntaxe__message"></h3>
                      </div>
                      <form  id="formId" method="POST" name="formulaire_de_commentaire">
                              <!-- L'ajout des div dans ce formualire est choix personnel afin de m'aider à
                              mieux manipuler certaine partie lorsque je viendrais à donner du style à mon fichier -->    
                              <div class="formulair_prenom">
                                      <input name="prenom" type="text" id="prenom" placeholder="Prenom"><br>
                              </div>
                              <div class="formulair_nom">
                                      <input name="nom" type="text" id="nom" placeholder="Nom"><br>
                              </div>
                              <div class="formulair_objet">
                                      <input name="objet" type="text" id="objet" placeholder="objet"><br>
                              </div>
                              <div class="formulair_commentaire">
                                      <textarea name="commentaire" id="textArea" required placeholder="Message"></textarea><br>
                                      <div class="formulair_commentaire_button">
                                              <button id="btt" @click="Run()" type="button">Envoyer</button>
                                      </div>
                              </div>
                      </form>
          </section>
    </main>
</template>

<script>

export default {
data() {
return {

// ******C'est le font tout noir lorsq'une modale s'affiche
overlay: null, 

modale1: null, 
modale2: null, 
modale3: null, 
messageMail: null, 

titreMoText1: null, 
titreMoText2: null, 
titreMoText3: null, 

// ****** Les textes en dessous des images dans chaque modale
modaleParagraph11: null, 
modaleParagraph12: null, 
modaleParagraph13: null, 
modaleParagraph23: null, 
modaleParagraph33: null, 

// ****** Première modale
modale1: null, 
titreModale1: null, 
modaleImage1: null, 
modaleImage2: null, 
modaleImage3: null, 
modaleText1: null,
modaleText2: null, 
modaleText3: null, 

// ****** Deuxième modale
modale2: null,
titreModale2: null, 
modaleImage1Cahier: null, 
modaleImage2Cahier: null, 
modaleImage3Cahier: null, 
modaleText1Cahier: null, 
modaleText2Cahier: null, 
modaleText3Cahier: null, 

// ****** Troième modale
modale3: null, 
titreModale3: null, 
modaleImage1cv: null, 
modaleImage2cv: null, 
modaleImage3cv: null, 
modaleText1cv: null,
modaleText2cv: null, 
modaleText3cv: null, 

// ****** Pour l'envoi de l'email
form: null, 
prenom: null, 
nom: null, 
objet: null,
textArea: null, 

// ****** Message d'erreur du formulaire
MessageError: null, 
NumSyntaxePrenom: null, 
NumSyntaxeNom: null, 
NumSyntaxeObjet: null, 
NumSyntaxeMessage: null, 

// ****** style lorsqu'on clique sur un lien du menu
moiLink: null,
portfolioLink: null, 
contactLink: null
};
},
methods: {
modaleCard1() {
  this.titreModale1.appendChild(this.titreMoText1)
  this.modaleText1.appendChild(this.modaleParagraph11)
  this.overlay.style.display="block"
  this.modale1.style.display="block"
  this.modaleImage1.src ='../public/Média/commentaire1.PNG'
  this.modaleText2.appendChild(this.modaleParagraph12)
  this.modaleImage2.src ='../public/Média/commentaire2.PNG'
  this.modaleText3.appendChild(this.modaleParagraph13)
  this.modaleImage3.src ='../public/Média/commentaire3.PNG'
},
modaleCard2() {
  this.titreModale2.appendChild(this.titreMoText2)
  this.overlay.style.display="block"
  this.modale2.style.display="block"
  this.modaleImage1Cahier.src ='../public/Média/cahier1.PNG'
  this.modaleImage2Cahier.src ='../public/Média/cahier2.PNG'
  this.modaleText3Cahier.appendChild(this.modaleParagraph23)
  this.modaleImage3Cahier.src ='../public/Média/cahier3.PNG'
},
modaleCard3() {
  this.titreModale3.appendChild(this.titreMoText3)
  this.overlay.style.display="block"
  this.modale3.style.display="block"
  this.modaleImage1cv.src ='../public/Média/cv1.PNG'
  this.modaleImage2cv.src ='../public/Média/cv2.PNG'
  this.modaleText3cv.appendChild(this.modaleParagraph33)
  this.modaleImage3cv.src ='../public/Média/cv3.PNG'
},
// Lien vers les réalisations mises dans le portfolio
modaleRealisation1() {
  window.open('../public/DynamiserUnEspaceDeCommentaires_DocumentsDevoir/index.html')
},
modaleRealisation2() {
  window.open('../public/CEF-DevoirCahierDesCharges.pdf')
},
modaleRealisation3() {
  window.open('../public/My CV/index.html')
},
closeModale() {
  this.modale1.style.display="none"
  this.modale2.style.display="none"
  this.modale3.style.display="none"
  this.overlay.style.display="none"
  this.messageMail.style.display="none"
},
exitModaleOverlay() {
  this.overlay.style.display="none"
  this.modale1.style.display="none"
  this.modale2.style.display="none"
  this.modale3.style.display="none"
  this.messageMail.style.display="none"
},
sendMail() {
  this.prenomValeur = this.prenom.value
  this.nomValeur = this.nom.value
  this.objetValeur = this.objet.value
  this.textAreaValeur = this.textArea.value    

  this.body = `
          Prénom : ${this.prenomValeur}
          Nom : ${this.nomValeur}
          Objet : ${this.objetValeur}
          Message : ${this.textAreaValeur}`

Email.send({
  Host : "smtp.elasticemail.com",
  Username : "lordhansell@gmail.com",
  Password : "7AC1FE8DF7309082CC3AECC9FE7519E806F4",
  To : 'hhybani@gmail.com',
  From : "lordhansell@gmail.com",
  Subject : 'Mail from my Portfolio',
  Body : this.body
}).then(
this.modaleMail()
);
},
// Message de cofirmation lorsque le mail a bien été envoyer
modaleMail() {
  this.overlay.style.display="block"
  this.messageMail.style.display="block"
},
// Lorsqu'un champ est vide
Erreur() {
  if(this.prenom.value == "" && (this.nom.value && this.objet.value && this.textArea.value) !== ""){
  this.prenomError = document.createTextNode('Il ne manque plus que votre prenom')
  this.NumSyntaxePrenom.appendChild(this.prenomError)
  this.NumSyntaxePrenom.style.display='block'
  this.NumSyntaxeNom.style.display='none'
  this.NumSyntaxeObjet.style.display='none'
  this.NumSyntaxeMessage.style.display='none'
  this.MessageError.style.display="none"
}else if(this.nom.value == "" && (this.prenom.value && this.objet.value && this.textArea.value) !== ""){
  this.nomError = document.createTextNode('Il ne manque plus que votre nom')
  this.NumSyntaxeNom.appendChild(this.nomError)
  this.NumSyntaxeNom.style.display='block'
  this.NumSyntaxePrenom.style.display='none'
  this.NumSyntaxeObjet.style.display='none'
  this.NumSyntaxeMessage.style.display='none'
  this.MessageError.style.display="none"
}else if(this.objet.value == "" && (this.prenom.value && this.nom.value && this.textArea.value) !== "") {
  this.ObjetError = document.createTextNode('Il ne manque plus que l objet du message')
  this.NumSyntaxeObjet.appendChild(this.ObjetError)
  this.NumSyntaxeObjet.style.display='block'
  this.NumSyntaxePrenom.style.display='none'
  this.NumSyntaxeNom.style.display='none'
  this.NumSyntaxeMessage.style.display='none'
  this.MessageError.style.display="none"
}else if(this.textArea.value == "" && (this.prenom.value && this.nom.value && this.objet.value) !== ""){
  this.textAError = document.createTextNode('Il ne manque plus que le message')
  this.NumSyntaxeMessage.appendChild(this.textAError)
  this.NumSyntaxeMessage.style.display='block'
  this.NumSyntaxePrenom.style.display='none'
  this.NumSyntaxeNom.style.display='none'
  this.NumSyntaxeObjet.style.display='none'
  this.MessageError.style.display="none"
}else if((this.prenom.value && this.nom.value && this.objet.value && this.textArea.value) == ""){
  this.MessageError.style.display="block"
  this.NumSyntaxeMessage.style.display='none'
  this.NumSyntaxePrenom.style.display='none'
  this.NumSyntaxeNom.style.display='none'
  this.NumSyntaxeObjet.style.display='none'
}else{
  this.sendMail()
  this.modaleMail() 
  this.DeleteForm()
}
},
// Enlever le texte saisie à l'envoie du formulaire 
DeleteForm() {
  this.prenom.value=""
  this.nom.value=""
  this.objet.value=""
  this.textArea.value=""
},
// Il est placé dans le bouton du fomulaire
Run() {
  this.Erreur()
},
// le lien actif soit souligné au clique
linkEvent1(){
  this.moiLink.style.textDecoration ='underline'
  this.portfolioLink.style.textDecoration ='none'
  this.contactLink.style.textDecoration ='none'
},
linkEvent2(){
  this.moiLink.style.textDecoration ='none'
  this.portfolioLink.style.textDecoration ='underline'
  this.contactLink.style.textDecoration ='none'
},
linkEvent3(){
  this.moiLink.style.textDecoration ='none'
  this.portfolioLink.style.textDecoration ='none'
  this.contactLink.style.textDecoration ='underline'
},
},
mounted() {
//Fond noir au clique d'une carte du porfolio 
this.overlay = document.getElementById('overlay')

// Modale commentaire
this.modale1 = document.getElementById('modale__commentaire')
this.titreModale1 = document.getElementById('modale__header__titre')
this.titreMoText1 = document.createTextNode('Dynamiser un Espace Commentaire')
this.modaleImage1 = document.getElementById('modale__body__image1__commentaire')
this.modaleImage2 = document.getElementById('modale__body__image2__commentaire')
this.modaleImage3 = document.getElementById('modale__body__image3__commentaire')
this.modaleText1 = document.getElementById('modale__body__text1__commentaire')
this.modaleText2 = document.getElementById('modale__body__text2__commentaire')
this.modaleText3 = document.getElementById('modale__body__text3__commentaire')
this.modaleParagraph11 = document.createTextNode('Ce projet est le premier que j aie fait en javascript, Comme nous pouvons le voir dans ce projet nous disposons de champ que nous devons remplire afin que nous puissions ajouter nos noms ainsi que notre commmentaire.')
this.modaleParagraph12 = document.createTextNode('Une fois les informations correctement remplli, il s ajoute automatiquement dans la page web, et ce à la liste de commentaire déja présent.')
this.modaleParagraph13 = document.createTextNode('Mais attention !! si l un des champs n est pas rempli un message derreur s affichera et votre commentaire ne s ajoutera pas')

// Modale cahier des charge
this.modale2 = document.getElementById('modale__cahier')
this.titreModale2 = document.getElementById('modale__header__titre2')
this.titreMoText2 = document.createTextNode('Cahier des charges du site la socketterie')
this.modaleImage1Cahier = document.getElementById('modale__body__image1__cahier')
this.modaleImage2Cahier = document.getElementById('modale__body__image2__cahier')
this.modaleImage3Cahier = document.getElementById('modale__body__image3__cahier')
this.modaleText1Cahier = document.getElementById('modale__body__text1__cahier')
this.modaleText2Cahier = document.getElementById('modale__body__text2__cahier')
this.modaleText3Cahier = document.getElementById('modale__body__text3__cahier')
this.modaleParagraph23 = document.createTextNode('Les informations ici haut, réprensentent l une des parties du cahier de charge fait pour l entreprise la socketterie, clique sur le lien aller vers la réalisation pour plus de detail')

// Modale CV
this.modale3 = document.getElementById('modale__cv')
this.titreModale3 = document.getElementById('modale__header__titre3')
this.modaleImage1cv = document.getElementById('modale__body__image1__cv')
this.titreMoText3 = document.createTextNode('Première création, curriculum vitae')
this.modaleImage2cv = document.getElementById('modale__body__image2__cv')
this.modaleImage3cv = document.getElementById('modale__body__image3__cv')
this.modaleText1cv = document.getElementById('modale__body__text1__cv')
this.modaleText2cv = document.getElementById('modale__body__text2__cv')
this.modaleText3cv = document.getElementById('modale__body__text3__cv')
this.modaleParagraph33 = document.createTextNode('Ceci est ma toute première réalisation en html CSS, tu veux en voir plus ? clique sur le lien !')

// Envoie du formulaire par mail
this.messageMail = document.getElementById('modale__mail__confirmation')
this.form = document.getElementById('formId')
this.prenom = document.getElementById('prenom')
this.nom = document.getElementById('nom')
this.objet = document.getElementById('objet')
this.textArea = document.getElementById('textArea')

// Message d'erreur
this.MessageError = document.getElementById('formulair_message_alert')
this.NumSyntaxePrenom = document.getElementById('Numsyntaxe__prenom')
this.NumSyntaxeNom = document.getElementById('Numsyntaxe__nom')
this.NumSyntaxeObjet = document.getElementById('Numsyntaxe__objet')
this.NumSyntaxeMessage = document.getElementById('Numsyntaxe__message')

// Lien de navigation
this.moiLink =  document.getElementById('moi__link')
this.portfolioLink = document.getElementById('portfolio__link')
this.contactLink = document.getElementById('contact__link')
},
};
</script>

<style>
*{
margin: 0;
padding: 0;
}
</style>

<style scoped>
body{
  padding: 0;
  margin: 0;
}
nav{
  background-color:#34353A;
  display: flex;
  justify-content: space-around;
  height: 120px;
  align-items: center;
  position: fixed;
  width: 100%;
  box-shadow: 1px 1px 9px 2px black;
  z-index: auto;
}
.logo img{
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
.nav_link ul{
  list-style: none;
  display: flex;
  gap: 20px;
}
.nav_link a{
  text-decoration: none;
  color: #FFF;
  font-size: 1.4em;
  font-weight: 400;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.titre_page{
  color: #FFBD59;
  font-size: 1.8em;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
/* Debut du Main */
/* Section Me */
#Me{
  display: grid;
  grid-template-columns:repeat(2,405px);
  grid-template-rows: repeat(1,50px);
  gap: 50px;
  justify-content: space-evenly;
  background-color: #34353A;
  padding-top:160px;
  padding-bottom: 40px;
}

#Me h2{
  color: #FFBD59;
  font-size: 2.5em;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.Me_monProfil{
  grid-area: 2 / 1 / 3 / 2;
  margin-top: -30px;
}
.presentation{
  margin-top: 30px;
  font-size: 1.3em;
  text-indent: 30px;
  text-align: justify;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #FFF;
}
.Me_monProfil p{
  font-size: 2.0em;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.Me_monProfil p span{
  font-size: 0.6em;
}
.Me_photoDeProfil{
  border: 3px solid #FFBD59;
  height: 500px;
  background-color: #34353A;
  border-radius: 15px;
  grid-area: 1 / 2 / 3 / 2;
  overflow: hidden;
  box-shadow: 3px 3px 9px 3px #FFF;
}
.Me_photoDeProfil img{
  width: 400px;
  height: 500px;
}
/* Section Portfolio commence par aboutMyskills */
#aboutMyskills{
  background-color:#23242a;
  margin-top: -25px;
  padding-top: 50px;
  /* padding-bottom: 30px; */
}
.aboutMyskills_titre{
  padding-top: 20px;
  margin-left: 30px;
  font-size: 1.8em;
  color: #fff;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.aboutMyskills_description{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.aboutMyskills_description p{
  width: 1100px;
  font-size: 1.4em;
  text-align: justify;
  color: #fff;
  font-family:'Courier New', Courier, monospace;
}
.aboutMyskills_skills h3{
  display: flex;
  justify-content: center;
  color: #fff;
  padding-top: 50px;
  padding-bottom: 20px;
  font-size: 1.9em;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.aboutMyskills_outils{
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 50px;
}
.aboutMyskills_outils div{
  background-color: #34353A;
  box-shadow: 2px 2px 2px 2px #000;
  width: 200px;
  height: 200px;
  border-radius: 30px;
}
.htmlCss{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.htmlCss img{
  width: 60px;
  height: 60px;
  margin-top: 40px;
}
.htmlCss p{
  color: #fff;
  font-size: 1.3em;
  margin-top: -10px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.javaScript{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
.javaScript img{
  width: 60px;
  height: 60px;
  margin-top: 35px;
}
.javaScript p{
  color: #fff;
  font-size: 1.3em;
  margin-top: -30px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.vueJs{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 80px;
}
.vueJs img{
  width: 70px;
  height: 70px;
  margin-top: 35px;
}
.vueJs p{
  color: #fff;
  font-size: 1.3em;
  margin-top: -70px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.adobeXD{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 60px;
}
.adobeXD img{
  width: 70px;
  height: 70px;
  margin-top: 35px;
}
.adobeXD p{
  color: #fff;
  font-size: 1.3em;
  margin-top: -55px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
/* Modale */
#overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000007a;
  display: none;
}
#modale__commentaire{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 900px;
  height: 600px;
  background-color: #FFF;
  box-shadow: 2px 2px 8px 2px black;
  overflow: scroll;
  display: none;
}
#modale__cv{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 900px;
  height: 600px;
  background-color: #FFF;
  box-shadow: 2px 2px 8px 2px black;
  overflow: scroll;
  display: none;
}
#modale__cahier{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 900px;
  height: 600px;
  background-color: #FFF;
  box-shadow: 2px 2px 8px 2px black;
  overflow: scroll;
  display: none;
}
.modale__header__information p{
  padding-top: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #000;
}
.modale__header__information a{
  text-decoration: none;
  color: #a94848;
}
#modale__header{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
}
#modale__header h2{
  padding: 10px;
  background-color: #a94848;
  color: #FFF;
  font-size: 1.2em;
  border-radius: 5px;
  box-shadow: 1px 1px 8px 1px black;
  margin-bottom: Rpx;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.modale__header__button button{
  width: 100px;
  height: 50px;
  color: #FFF;
  border-radius: 5px;
  border: 0 solid #FFBD59;
  background-color: #FFBD59;
}
.modale__header__button button:hover{
  box-shadow: 1px 1px 5px 1px#000;
}
.modale__header__button{
  display: flex;
  justify-content: space-evenly;
  gap:10px;
}
.modale__body div {
  text-align: center;
  overflow: hidden;
  padding: 10px;
}
.modale__body p{
  color: black;
  font-size: 1.1em;
  text-align: justify;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#modale__mail__confirmation{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 400px;
  height: 150px;
  background-color: #FFF;
  box-shadow: 2px 2px 8px 2px black;
  border-radius: 10px;
  display: none;
}
.modale__mail__confirmation__titre{
  padding-top: 30px;
  width: 100%;
  text-align: center;
  align-items: center;
  color: rgb(12, 153, 12);
}
.modale__mail__confirmation__button{
  display: flex;
  justify-content: center;
  padding-top: 15px;
}
.modale__mail__confirmation__button button{
  width: 100px;
  height: 50px;
  color: #FFF;
  border-radius: 5px;
  border: 0 solid #FFBD59;
  background-color: #FFBD59;
}
/* Portfolio */
#Portfolio{
  padding-top: 50px;
  background-color: #34353A;
  padding-bottom: 50px;
}
.Portfolio_titre{
  display: flex;
  justify-content:center;
  color: #FFF;
  font-size: 1.9em;
  margin-bottom: 50px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.Portfolio_realisation{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.Portfolio_realisation p{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #FFF;
  font-weight: bolder;
  text-align: center;
  font-size: 1.1em;
}
.Portfolio_realisation div{
  background-color: #23242a;
  width: 290px;
  height: 290px;
  border-radius: 20px;
}
.Portfolio_realisation div:hover{
  box-shadow: 12px 12px 22px 0 #000;
}
.Portfolio_realisation img{
  width: 290px;
  height: 240px;
  border-radius: 20px 20px 0px 0;
}
#Contact{
  background-color: #23242a;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 20px;
}
.titreDuFormulaire{
  width: 100%;
}
.Contact__conteneur{
  display: flex;
}
.formulaire_Error{
  width: 100%;
  display: flex;
  justify-content: center;
}
#formulair_message_alert{
  display: none;
}
#Numsyntaxe__prenom{
  display: none;
}
#Numsyntaxe__nom{
  display: none;
}
#Numsyntaxe__objet{
  display: none;
}
#Numsyntaxe__message{
  display: none;
}
.formulaire_Error h3{
  background-color: rgb(212, 68, 68);
  display: flex;
  text-align: center;
  align-items: center;
  margin-top: 20px;
  padding: 5px;
  border-radius: 5px;
  color:#FFF ;
  width: 510px;
  height: 30px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.titreDuFormulaire{
  display: flex;
  justify-content:center;
  color: #FFF;
  font-size: 1.9em;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
form{
  display: block;
  text-align: center;
  width: 700px;
  flex-wrap: wrap;
  margin-top: 35px;
}
input{
  border-radius:6px;
  border: 1px solid;
  height: 40px;
  width: 500px;
  padding: 5px;
  margin-top: 10px;
  font-size:1.1em;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
textarea{
  height: 100px;
  width: 490px;
  border-radius: 6px;
  border: 1px solid black;
  padding:10px;
  font-size:1.4em;
  margin-top: 10px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.formulair_commentaire_button{
  display: flex;
  justify-content: center;
}
.formulair_commentaire_button button{
  border-radius: 6px;
  border: 2px solid #FFBD59;
  background: #FFBD59;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin-top:10px;
  color: #FFF;
  width: 510px;
  height: 50px;
  font-size: 1.3em;
}
</style>
