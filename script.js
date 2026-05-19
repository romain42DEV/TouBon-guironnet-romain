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
        afficheProduit(data.produits)
        afficheService(data.services)
        afficheTemoignage(data.temoignages)
    });


    // role : récupérer les produits 1 par 1 et de les afficher dans le Dom
    // paramètre : tableau de produits
    // return : rien

    function afficheProduit(tableauCréations) {
        tableauCréations.forEach(produits=> {
            let produitCard = `
            <div class="card w-45 flex space-between align-center"> <!-- produit 1 -->
                    <img src="${produits.imageurl}" alt="produits" class="w-20">

                    <div class="w-70">
                        <h4>${produits.nom}</h4>
                        <p class="mt-10">${produits.description}</p>
                        <a href="" class="bouton blanc mt-20">voir le produit</a>
                    </div>
                </div>`

        document.querySelector("#produit-container").innerHTML += produitCard;
        })
    }



    // role : récupérer les services 1 par 1 et de les afficher dans le Dom
    // paramètre : tableau de services
    // return : rien

    function afficheService(tableauServices) {
        tableauServices.forEach(service=> {
            let serviceCard = `
            <div class="card w-30 flex space-between align-center"> <!-- service 1 -->
                    <div class="w-50">
                        <h4>${service.nom}</h4>
                        <p class="mt-10">${service.description}</p>
                        <a href="" class="bouton blanc mt-20 ml-50">voir le service</a>
                    </div>
                </div>
            `

        document.querySelector("#produit-services").innerHTML += serviceCard;
        })
    }




    // role : récupérer les témoignages 1 par 1 et de les afficher dans le Dom
    // paramètre : tableau de témoignages
    // return : rien

    function afficheTémoignage(tableauTemoignages) {
        tableauTémoignages.forEach(témoignage=> {
            let témoignageCard = `
            <div class="w-30 bg-grey padding-20 border-radius-20 border-1">
                    <div class="flex gap-10 align-center">
                        <div class="avatar">
                            <img src="asset/user3.png" alt="user 3">
                        </div>
                        <div>
                            <h4>Sophie</h4>
                            <div class="mt-10">
                                <i class="ph-fill ph-star jaune"></i>
                                <i class="ph-fill ph-star jaune"></i>
                                <i class="ph-fill ph-star jaune"></i>
                                <i class="ph-fill ph-star jaune"></i>
                                <i class="ph-fill ph-star jaune"></i>
                                
                                <p class="mt-10">note : 5</p>
                            </div>
                        </div>
                    </div>
                    <p class="mt-10">Experience : Macarons Variés</p>
                    <p class="mt-10">Les macarons de TouBon sont une véritable explosion de saveurs. Chaque bouchée est un délice. Une pâtisserie incontournable à Auxerre !</p>          
                </div>
            `

        document.querySelector("#produit-témoignages").innerHTML += témoignageCard;
        })
    }
