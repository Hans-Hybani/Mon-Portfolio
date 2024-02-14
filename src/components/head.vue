<template>
        <header id="menu">
                <nav>
                      <div class="logo">
                            <a href="#menu"><img src="../../public/Média/hans.png" alt="logo du site"></a>
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
</template>
<script>

export default{
        data(){
                return{
                        // ****** style lorsqu'on clique sur un lien du menu
                        moiLink: null,
                        portfolioLink: null, 
                        contactLink: null
                }
        },methods: {
                // le lien actif sera souligné au clique
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
        },mounted() {
                this.moiLink =  document.getElementById('moi__link')
                this.portfolioLink = document.getElementById('portfolio__link')
                this.contactLink = document.getElementById('contact__link')
        }
}
</script>

<style scoped>
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

@media only screen and (max-width: 768px) {
  nav {
    height: 130px;
  }

  .logo img {
    width: 80px;
    height: 80px;
  }
  
  .nav_link ul {
    gap: 10px;
  }
  
  .nav_link a {
    font-size: 1.2em;
  }
  
  .titre_page {
    font-size: 1.5em;
  }
}
</style>