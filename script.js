// role : questionner l'api
// parametre:  rien
// retour : rien

    fetch("data.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        // a ce niveau on devrait avoir dans la console les données renvoyé par l'api
        console.log(data)
        afficheProduit(data)
    });


    // role : récupérer les produits 1 par 1 et de les afficher dans le Dom
    // paramètre : tableau de produits
    // return : rien

    function afficheProduit(tableauProduits) {
        tableauProduits.forEach(produit => {
            let produitCard = `<div class="card w-45 flex space-between align-center"> <!-- produit 1 -->
                    <img src="https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/images/patisserie/eclair-chocolat.webp" alt="éclair au chocolat" class="w-20">

                    <div class="w-70">
                        <h4>${produit.nom}</h4>
                        <p class="mt-10">Laissez-vous tenter par notre éclair au chocolat, une délicieuse pâtisserie faite maison. Une coque croquante et une crème onctueuse pour une explosion de saveurs.</p>
                        <a href="" class="bouton blanc mt-20">voir le produit</a>
                    </div>
                </div>`

        document.querySelector("#produit-container").innerHTML += produitCard;
        })
    }
