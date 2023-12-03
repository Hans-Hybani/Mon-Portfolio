Avant de commencer, assurez-vous d'avoir Node.js installé sur votre ordinateur. Node.js est un environnement qui vous permet d'exécuter du JavaScript localement.

Suivez ces étapes :

Rendez-vous sur le site https://nodejs.org/fr/ et téléchargez la version recommandée de Node.js. Installez ensuite Node.js sur votre ordinateur.
Une fois Node installé :
A. Si vous avez téléchargé ce projet :
1. Décompressez le fichier téléchargé.
2. Placez-le dans un répertoire facile à retrouver.
3. Ouvrez l'invite de commande (cmd) en appuyant sur Windows+R, par exemple.
4. Accédez au répertoire du projet en tapant la commande cd chemin (par exemple, cd C:\Users\hyban\OneDrive\Bureau\CEF\Portfolio).
5. Une fois dans le bon répertoire, exécutez la commande npm install pour installer les dépendances nécessaires.
6. Après l'installation, lancez la commande npm run dev. Une fois la commande lancée, copiez le lien qui vous est donné, par exemple, http://localhost:5173/, et collez-le dans la barre de recherche de votre navigateur.

B. Si vous êtes à l'aise avec GitHub :
1. Clonez le projet depuis https://github.com/Hans-Hybani/Mon-Portfolio.
2. Suivez les étapes 5 et 6 ci-dessus.

ATTENTION !!
Si vous rencontrez une erreurs de type :
'vite' n’est pas reconnu en tant que commande interne
ou externe, un programme exécutable ou un fichier de commandes.

lorsque vous lancez la commande npm run dev, cela voudrais donc dire que vite n'est pas installer, vous ne pourrez donc pas lancer le serveur de développement.
Solution : 
1. Installer vite globalement avec la commande :
   npm install -g create-vite
Cette commande installe Vite globalement afin qu'il puisse être utilisé comme une commande système.
2. Installer vite dans le projet avec la commande :
   npm install vite --save-dev
Elle installera vite dans ce projet que vous avez télécharger dans votre pc.

# testRouter

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
