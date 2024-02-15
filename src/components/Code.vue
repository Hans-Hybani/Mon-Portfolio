<template>
  <main>
          <section id="Me">
                <div class="Me_text">
                    <h2 class="Me_titre">HYBANI PRINCIA Hans</h2>
                    <div class="Me_monProfil">
                          <p class="Me_monProfil__titre">Développeur Web et Mobile<br>
                          & <span> & Web Designer Junior</span></p>
                          <p class="Me_monProfil__presentation">Jeune développeur web et mobile je suis particulièrement passionné par le web design. J'exprime ma créativité avec Adobe XD. En dehors du code, j'explore l'astronomie ainsi que divers thème culturelle. Mon scientifique préféré est Stephen Hawking, il m'inspire à surmonter les obstacles. Je crois que, malgré les handicaps, on peut accomplir de grandes choses. Mon parcours est une aventure continue d'apprentissage et de croissance dans le monde du développement. Ce portfolio en est une prémisse</p>
                    </div>
                </div>
                <div class="Me_photoDeProfil">
                      <img src="../../public/Média/photo1.png" alt="photo de profil de Hans Hybani">
                </div>
          </section>
  
          <section id="aboutMyskills">
                <h2 class="aboutMyskills_titre">A propos</h2>
                <div class="aboutMyskills_description">
                      <p>Mes premiers pas dans le développement ont débuté avec du HTML et du CSS, que j'ai rapidement maîtrisés. En quête d'interactivité, j'ai plongé dans du JavaScript, marquant mon entrée dans le monde complexe du développement. Vue.js a ensuite été un défi, devenant ainsi mon premier framwork. En parallèle, je me suis initié au design web avec Adobe XD, fusionnant ainsi le code et le design.Ma liste de compétences ne cesse de s'élargir. Actuellement à l'aise avec HTML, CSS, JavaScript, je suis sur le point d'intégrer Python et Figma à mes compétences. De plus, l'apprentissage du framework React est également prévu dans mon parcours.</p>
                </div>
                <section class="aboutMyskills_skills">
                      <h3>Hard & Soft skills</h3>
                      <div class="aboutMyskills_outils">
                            <div class="skills">
                                  <img src="../../public/Média/html-5.png" alt="image de html 5">
                                  <img src="../../public/Média/css-3.png" alt="image de css 3">
                                  <p>HTML & CSS</p>
                            </div>
                            <div class="skills">
                                  <img src="../../public/Média/js.png" alt="image de javascript">
                                  <p>JAVASCRIPT</p>
                            </div>
                            <div class="skills">
                                  <img src="../../public/Média/vue.png" alt="image de vue js">
                                  <p>VueJS</p>
                            </div>
                            <div class="skills">
                                  <img src="../../public/Média/Angular.png" alt="image d'angular">
                                  <p>Angular</p>
                            </div>
                            <div class="skills">
                                  <img src="../../public/Média/figma.png" alt="image de figma">
                                  <p>Figma</p>
                            </div>
                            <div class="skills">
                                  <img src="../../public/Média/React.png" alt="image de React">
                                  <p>React</p>
                            </div>
                            <div class="skills">
                                  <img src="../../public/Média/xd.png" alt="image d'adobe XD">
                                  <p>Adobe XD</p>
                            </div>
                        </div>
                </section>
                <!-- cette div ayant l'id orverlay, sera celle qui prendra toute la largeur de notre ecran et se mettra 
                  en noir avec une légère opacité, au click d'une de trois réalisation dans la section portfolio, afin de mettre en evidence
                la modale  -->
                <div id="overlay" @click="exitModaleOverlay()"></div>
                <!-- il y'a trois réalisation, j'ai donc fait trois modale car je rencontrais des problèmes lorsque je chargeais les informations 
                dans la modale -->
                <!-- Et cette quatrieme modale ne s'affiche que si vous avez correctement rempli le formulaire, afin de l'envoyer -->
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
                                  <a href="https://trouve-ton-artisan.vercel.app/" target="_blank" rel="noopener noreferrer">
                                      <div class="Portfolio_realisation all card espaceCommentaire">
                                            <img src="../../public/Média/Logo.png" alt="">
                                            <p>Trouve ton artisan</p>
                                      </div>
                                  </a>
                                  <a href="https://petit-village.vercel.app/" target="_blank" rel="noopener noreferrer">
                                      <div class="Portfolio_realisation all card cahierDeCharge">
                                            <img src="../../public/Média/lecampsromain.jpg" alt="Une image qui envoie vers un fichier pdf du cahier de charge la socketterie">
                                            <p>Petit village</p>
                                      </div>
                                  </a>
                                  <a href="https://john-doe-cv.vercel.app/" target="_blank" rel="noopener noreferrer">
                                      <div class="Portfolio_realisation all card">
                                            <img src="../../public/Média/softwaredeveloper.jpg" alt="Une image qui envoie vers le site de mon CV">
                                            <p>CV de John Doe</p>
                                      </div>
                                  </a>
                                  <a href="../../public/dispro.pdf" target="_blank" rel="noopener noreferrer">
                                      <div class="Portfolio_realisation all card">
                                            <img src="../../public/Média/Dashboard.png" alt="Une image qui envoie vers le pdf gestion">
                                            <p>Projet XD - Gestion</p>
                                      </div>
                                  </a>
                                  <a href="../../public/ProjetProcFin.pdf" target="_blank" rel="noopener noreferrer">
                                      <div class="Portfolio_realisation all card">
                                            <img src="../../public/Média/Carte.jpg" alt="Une image qui envoie vers le pdf caisse">
                                            <p>Porjet XD - Bank</p>
                                      </div>
                                  </a>
                                  <a href="../../public/SpringProject.pdf" target="_blank" rel="noopener noreferrer">
                                      <div class="Portfolio_realisation all card">
                                            <img src="../../public/Média/Caisse.jpg" alt="Une image qui envoie vers le pdf caisse">
                                            <p>Projet XD - Caisse</p>
                                      </div>
                                  </a>
                            </div>
                </section>
          </section>
          <section class="charte">
                <h2>Charte graphique</h2>
                <div class="charte__color">
                      <div class="charte__color__1">
                        <p>#FFBD59</p>
                      </div>
                      <div class="charte__color__2">
                        <p>#b7935d</p>
                      </div>
                      <div class="charte__color__3">
                        <p>#34353A</p>
                      </div>
                      <div class="charte__color__4">
                        <p>#23242a</p>
                      </div>
                      <div class="charte__color__5">
                        <p>rgb(179, 66, 66)</p>
                      </div>
                </div>
                <div class="police">
                      <h3>Police d'ecriture</h3>
                      <div class="police__font">
                            <p>---'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif---</p>
                            <p class="courrier">---'Courier New', Courier, monospace---</p>
                      </div>
                </div>
          </section>
          <section id="Contact">
                <h2 class="titreDuFormulaire">Contactez Moi</h2>
                <!-- Ici s'afficheront les messages d'erreurs lorsque l'utilisateur n'aura pas rempli un ou tout les champs -->
                      <div class="formulaire_Error">
                              <h3 id="formulair_message_alert">Tous les champs doivent etre remplis</h3>
                              <h3 id="Numsyntaxe__prenom">Il ne manque plus que votre prenom</h3>
                              <h3 id="Numsyntaxe__nom">Il ne manque plus que votre nom</h3>
                              <h3 id="Numsyntaxe__objet">Il ne manque plus que l'objet du message</h3>
                              <h3 id="Numsyntaxe__message">Il ne manque plus que le message</h3>
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

  // ****** C'est le font tout noir lorsq'une modale s'affiche
  overlay: null, 
  messageMail: null, 

  // ***** Le titre des modales
  titreMoText1: null, 
  titreMoText2: null, 
  titreMoText3: null, 

  // ****** Première modale
  modale1: null, 

  // ****** Deuxième modale
  modale2: null,

  // ****** Troième modale
  modale3: null,  

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

};
},
methods: {
  modaleCard1() {
    this.overlay.style.display="block"
    this.modale1.style.display="block"
  },
  modaleCard2() {
    this.overlay.style.display="block"
    this.modale2.style.display="block"
  },
  modaleCard3() {
    this.overlay.style.display="block"
    this.modale3.style.display="block"
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
    this.overlay.style.display="none"
    this.messageMail.style.display="none"
  },
  exitModaleOverlay() {
    this.overlay.style.display="none"
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
      this.NumSyntaxePrenom.style.display='block'
      this.NumSyntaxeNom.style.display='none'
      this.NumSyntaxeObjet.style.display='none'
      this.NumSyntaxeMessage.style.display='none'
      this.MessageError.style.display="none"
    }else if(this.nom.value == "" && (this.prenom.value && this.objet.value && this.textArea.value) !== ""){
      this.NumSyntaxeNom.style.display='block'
      this.NumSyntaxePrenom.style.display='none'
      this.NumSyntaxeObjet.style.display='none'
      this.NumSyntaxeMessage.style.display='none'
      this.MessageError.style.display="none"
    }else if(this.objet.value == "" && (this.prenom.value && this.nom.value && this.textArea.value) !== "") {
      this.NumSyntaxeObjet.style.display='block'
      this.NumSyntaxePrenom.style.display='none'
      this.NumSyntaxeNom.style.display='none'
      this.NumSyntaxeMessage.style.display='none'
      this.MessageError.style.display="none"
    }else if(this.textArea.value == "" && (this.prenom.value && this.nom.value && this.objet.value) !== ""){
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
  }
},
mounted() {
  //Fond noir au clique d'une carte du porfolio 
  this.overlay = document.getElementById('overlay')

  // Modale commentaire
  this.modale1 = document.getElementById('modale__commentaire')

  // Modale cahier des charge
  this.modale2 = document.getElementById('modale__cahier')

  // Modale CV
  this.modale3 = document.getElementById('modale__cv')

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
a{
  text-decoration: none;
}
/* Debut du Main */
/* Cette section contient le nom, une petite pésentation ainsi que ma photo, c'est la section juste en dessous du menu  */
#Me{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
  background-color: #34353A;
  padding-top:160px;
  padding-bottom: 40px;
}
.Me_text{
  width: 400px;
}
#Me h2{
  color: #FFBD59;
  font-size: 2.5em;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.Me_monProfil{
  margin-top: 10px;
}
.Me_monProfil__presentation{
  margin-top: 20px;
  font-size: 1.3em;
  text-indent: 30px;
  text-align: justify;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #FFF;
}
.Me_monProfil__titre{
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
  overflow: hidden;
  box-shadow: 3px 3px 9px 3px #FFF;
}
.Me_photoDeProfil img{
  width: 400px;
  height: 500px;
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
.Me_text{
  width: 700px;  
}
.Me_photoDeProfil img{
  width: 300px;
  height: 400px;
}
.Me_photoDeProfil{
  border: 3px solid #FFBD59;
  height: 400px;
  background-color: #34353A;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 3px 3px 9px 3px #FFF;
}
}
@media only screen and (max-width: 767px) {
.Me_text{
  width: 350px; 
  margin-top: 20px; 
}  
.Me_photoDeProfil img{
  width: 350px;
  height: 450px;
}
.Me_photoDeProfil{
  border: 3px solid #FFBD59;
  height: 350px;
  background-color: #34353A;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 3px 3px 9px 3px #FFF;
}
}

/* Cette section comment à partir du titre About */
#aboutMyskills{
  background-color:#23242a;
  margin-top: -25px;
  padding-top: 50px;
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
  padding-left: 20px;
  padding-right: 20px;
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
  padding-bottom: 30px;
  font-size: 1.9em;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.aboutMyskills_outils{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  gap: 15px;
}
.aboutMyskills_outils div{
  background-color: #34353A;
  box-shadow: 2px 2px 2px 2px #000;
  width: 250px;
  height: 250px;
  border-radius: 30px;
}
.skills{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
.skills img{
  margin-top: 40px;
  width: 100px;
  height: 100px;
}
.skills p{
  width: 100%;
}

@media screen and (max-width: 768px) {
  .aboutMyskills_outils div {
    width: 150px;
    height: 150px;
  }
  
  .skills img {
    width: 40px;
    height: 40px;
  }
}

/* Media Query pour les appareils mobiles */
@media screen and (max-width: 480px) {
  .aboutMyskills_outils div {
    width: 100px;
    height: 100px;
  }
  
  .skills img {
    width: 30px;
    height: 30px;
  }
}
/* Cette partie du css apporte du style à toute mes modales */
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
#modale__header__commentaire{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
}
#modale__header__cahier{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
}
#modale__header__cv{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
}
#modale__header__commentaire h2{
  padding: 10px;
  background-color: #a94848;
  color: #FFF;
  font-size: 1.2em;
  border-radius: 5px;
  box-shadow: 1px 1px 8px 1px black;
  margin-bottom: 5px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#modale__header__cahier h2{
  padding: 10px;
  background-color: #a94848;
  color: #FFF;
  font-size: 1.2em;
  border-radius: 5px;
  box-shadow: 1px 1px 8px 1px black;
  margin-bottom: 5px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#modale__header__cv h2{
  padding: 10px;
  background-color: #a94848;
  color: #FFF;
  font-size: 1.2em;
  border-radius: 5px;
  box-shadow: 1px 1px 8px 1px black;
  margin-bottom: 5px;
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
.modale__body{
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
/* Cette section est celle où j'ai mis mes realisations */
#Portfolio{
  padding-top: 50px;
  background-color: #34353A;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
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
  gap: 25px;
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
  width: 400px;
  height: 300px;
  border-radius: 20px;
}
.Portfolio_realisation div:hover{
  box-shadow: 12px 12px 22px 0 #000;
}
.Portfolio_realisation img{
  width: 400px;
  height: 250px;
  border-radius: 20px 20px 0px 0;
}
@media screen and (max-width: 768px) {
  .Portfolio_realisation div{
    background-color: #23242a;
    width: 215px;
    height: 190px;
    border-radius: 20px;
}
  .Portfolio_realisation img {
    width: 215px;
    height: 130px;
  }
}
@media screen and (min-width: 769px) {
  .Portfolio_realisation div {
    background-color: #23242a;
    width: 300px; /* Largeur ajustée pour les écrans plus larges */
    height: 250px; /* Hauteur ajustée pour les écrans plus larges */
    border-radius: 25px; /* Rayon de bord ajusté pour les écrans plus larges */
  }
  
  .Portfolio_realisation img {
    width: 300px; /* Largeur ajustée pour les écrans plus larges */
    height: 200px; /* Hauteur ajustée pour les écrans plus larges */
  }
}

/* Media Query pour les appareils mobiles */

/* Cette section est celle où il y'a les carte montrant les couleurs et polices utiliser dans ce portfolio */
.charte{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.charte h2{
  margin-top: 25px;
  font-size: 1.4em;
  width: 100%;
  text-align: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.charte__color{
  width: 100%;
  display: flex;
  justify-content: center;
}
.charte__color div{
  margin-top: 25px;
  width: 250px;
  height: 300px;
  border-radius: 15px;
  box-shadow: 1px 3px 8px 3px black;
}
.charte__color div p{
  padding-left: 20px;
  padding-top: 10px;
}
.charte__color__1{
  background-color: #FFBD59;
}
.charte__color__2{
  background-color: #b7935d;
  margin-left: -10px;
}
.charte__color__3{
  background-color: #34353A;
  margin-left: -10px;
}
.charte__color__4{
  background-color: #23242a;
  margin-left: -10px;
}
.charte__color__5{
  background-color: rgb(179, 66, 66);
  margin-left: -10px;
}

@media only screen and (max-width: 768px) {
  .charte__color{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
  }
  .charte__color div{
    width: 100%;
  }
  .charte__color__1{
  background-color: #FFBD59;
  margin-bottom: -150px;
  margin-left: -10px;
}
  .charte__color__2{
  background-color: #b7935d;
  margin-bottom: -150px;
}
.charte__color__3{
  background-color: #34353A;
  margin-bottom: -150px;
}
.charte__color__4{
  background-color: #23242a;
  margin-bottom: -150px;
}
.charte__color__5{
  background-color: rgb(179, 66, 66);
  margin-bottom: 30px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .charte__color{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
  }
}
.police h3{
  width: 100%;
  padding-top: 45px;
  text-align: center;
  font-size: 1.4em;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.police__font{
  padding-top: 25px;
  padding-bottom: 30px;
}
.police__font p{
  color: #000;
  text-align: center;
} 
.courrier{
  padding-top: 5px;
  font-family: 'Courier New', Courier, monospace;
}
/* C'est ici que commence le dormulare de contacte */
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
  width: 100%;
  text-align: center;
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
  resize: none;
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
@media only screen and (max-width: 600px) {
  .titreDuFormulaire {
    font-size: 1.5em; /* Ajuster la taille de police pour les écrans très petits */
  }

  input,
  textarea,
  .formulair_commentaire_button button {
    width: 85%; /* Réduire la largeur des éléments sur les petits écrans */
  }
}

</style>
