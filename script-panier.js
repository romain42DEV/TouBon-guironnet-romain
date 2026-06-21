// Sélection de toutes les cartes produits dans la page
let cards = document.querySelectorAll(".card");

// Sélection de le paragraphe qui affiche le nombre de produits dans le panier
let nbrProducts = document.querySelector(".basket-number");


// Rôle : compter le nombre de cartes sélectionnées (ajoutées au panier)
// Paramètre : aucun
// Retour : le nombre d'éléments ayant la classe "cardSelect"
function ajouterAuPanier() {

    // On récupère toutes les cartes qui ont été sélectionnées
    let selectedCards = document.querySelectorAll(".box-shadow-rose");

    console.log(selectedCards);

    // On retourne le nombre total de cartes sélectionnées
    return selectedCards.length;
}


// Rôle : ajouter un comportement au clic sur chaque carte produit
// Lorsqu'on clique sur une carte :
// - on ajoute/enlève la classe "cardSelect"
// - on met à jour le nombre de produits dans le panier
function changeColorCard() {

    // On parcourt toutes les cartes produits
    cards.forEach((card) => {

        // On ajoute un événement au clic sur chaque carte
        card.addEventListener("click", () => {

            // On toggle la classe : sélection / désélection visuelle
            card.classList.toggle(".box-shadow-rose");

            // On calcule le nombre total de produits sélectionnés
            let total = ajouterAuPanier();

            console.log(total);

            // On met à jour l'affichage du nombre de produits dans le panier
            nbrProducts.innerHTML = total;
        });

    });

}

// Activation de la logique de sélection des cartes
changeColorCard();



// affiche les div qui ont la classe card
let boites = document.querySelectorAll(".card");
console.log(boites);

// je parcours mon tableau de div
boites.forEach(card=> {
  card.addEventListener("click",function(){
    // j'ai la carte sur laquelle j'ai cliqué
    console.log(card);
    card.classList.toggle("box-shadow-rose");
  });
});








// je recupere le header
let header = document.querySelector("header")
// je recupere le hero
let hero = document.querySelector(".section-hero")
window.addEventListener("scroll",function(){
    //J'ecoute le scroll :
    console.log("coucou")

    // si l'utilisateur a scroollé plus bas que le hero : 
    if(window.scrollY > hero.clientHeight){
        // je donne au header une classe qui change le bg
        header.classList.add("bg-rose")
    }else{
        // sinon
        // je lui enleve la classe qui change le bg
        header.classList.remove("bg-rose")
    }
});







// Tableau contenant les produits
let produits = ["Éclair au Chocolat", "Macarons Variés", "Tarte aux Fruits Frais", "Millefeuille Vanille-Framboise", "Chausson aux Pommes"];

// role : Fonction qui génère un nom aléatoire en associant un adjectif et un animal.
// paramètre : tableauProduits - Liste des produits
// return : rien car elle affiche

function choisiProduit(tableauProduits) {

    // Génère un index aléatoire pour choisir un produit
    let nbrAlea1 = Math.floor(Math.random() * tableauProduits.length);

    // Récupère l’adjectif correspondant à l’index aléatoire
    let produitPioche = tableauProduits[nbrAlea1];

    // Affiche le résultat dans l’élément HTML ayant la classe ".produit-result"
    document.querySelector(".produit-result").innerHTML =
        ` <span>${produitPioche}</span> pour vous servir`;
}

// Ajoute un écouteur d’événement sur le bouton ayant l’id "GoBtn"
document.querySelector("#GoBtn").addEventListener("click", () => {

    // Lance la fonction lorsqu’on clique sur le bouton
    choisiProduit(produits);
});




/* swiper */
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const container = document.querySelector("#produit-container");

container.addEventListener("click", (e) => {
    const card = e.target.closest(".card");

    if (!card) return;

    card.classList.toggle("box-shadow-rose");

    nbrProducts.textContent =
        document.querySelectorAll(".box-shadow-rose").length;
});