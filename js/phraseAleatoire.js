/*Pour la vue HTML*/

// Ici, grâce à l'objet document et sa methode getElementById récupération du bouton déclaré dans la vue HTML.
var btGenerer = document.getElementById("btGenerer");

// Ici, le bouton btGenerer est associer à la fonction generer délcarer dans le gestionnaire d'événement addEventListener qui va écouter le click de la souris.
btGenerer.addEventListener("click", generer);

// Configuration de la fonction generer
function generer() {

    function phraseAleatoire(motArrondi) {
        return motArrondi[Math.floor(Math.random() * motArrondi.length)];

    }

    /* Déclaration de la variable newPhrase qui va contenir la phrase générée aléatoirement grâce à la fonciton phraseAleatoire
     * intégrée dans la fonction generer(permettant de cliquer pour générer une phrase aléatoire).
     */
    var newPhrase = "";
    newPhrase += phraseAleatoire(nom) + " " + phraseAleatoire(verbe) + " " + phraseAleatoire(complement) + "."

    // Stockage du paragraphe récupéré dans la page vue html 
    var para = document.getElementById("phraseAleatoireGeneree");

    // design du paragraphe généré : 
    
    para.style.fontWeight = "bold";
    para.style.color = "green";
    para.style.backgroundColor = "#D3D3D8";
    para.style.display = "inline-block";
    para.style.textAlign = "center";
    para.style.paddingTop = "25px";
    para.style.width = "100%";
    para.style.height = "50px";
    
    // Injection de la phrase générée dans le innerHTML du paragrpahe contenu dans la variable para.
    para.innerHTML = newPhrase;




    /*Débogage développeur => Pour les tests via la console (touche F12)*/
//    console.log(phraseAleatoire(nom) + " " + phraseAleatoire(verbe) + " " + phraseAleatoire(complement) + ".");


}
