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
        afficheNomCommercial(data)
        affichePraseDaccroche(data)
        afficheTexteAppelAction(data)
        afficheAvantagesClients(data.avantagesClients)
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

    function afficheTemoignage(tableauTemoignages) {
        tableauTemoignages.forEach(temoignage=> {
            let temoignageCard = `
            <div class="w-30 bg-grey padding-20 border-radius-20 border-1">
                    <div class="flex gap-10 align-center">
                        <div class="avatar">
                            <img src="asset/user3.png" alt="user 3">
                        </div>
                        <div>
                            <h4>${temoignage.prenom}</h4>
                            <div class="mt-10">
                                <i class="ph-fill ph-star jaune"></i>
                                <i class="ph-fill ph-star jaune"></i>
                                <i class="ph-fill ph-star jaune"></i>
                                <i class="ph-fill ph-star jaune"></i>
                                <i class="ph-fill ph-star jaune"></i>
                                
                                <p class="mt-10">note : ${temoignage.note}</p>
                            </div>
                        </div>
                    </div>
                    <p class="mt-10">Experience : ${temoignage.typeExperience}</p>
                    <p class="mt-10">${temoignage.commentaire}</p>          
                </div>
            `

        document.querySelector("#produit-temoignages").innerHTML += temoignageCard;
        })
    };





    // role : récupérer le nomCommercial et l'afficher dans le Dom
    // paramètre : data
    // return : rien car elle affiche

    function afficheNomCommercial (data) {
        let nomCommercial = `
        <h1 class="mb-60">${data.nomCommercial}</h1>
        `
        console.log(nomCommercial);

    document.querySelector("#produit-titre").innerHTML += nomCommercial;
    }





    // role : récupérer la phrase d'accroche et l'afficher dans le Dom
    // paramètre : data
    // return : rien car elle affiche

    function affichePraseDaccroche (data) {
        let phraseDaccroche = `
        <h2>${data.phraseAccroche}</h2>
        `

        console.log(phraseDaccroche);

    document.querySelector("#produit-phraseDaccroche").innerHTML += phraseDaccroche;
    }




    // role : récupérer le texte Appel Action et l'afficher dans le Dom
    // paramètre : data
    // return : rien car elle affiche

    function afficheTexteAppelAction (data) {
        let TexteAppelAction = `
        <a href="" class="bouton blanc">${data.texteAppelAction}</a>
        `

        console.log(TexteAppelAction);

    document.querySelector("#produit-TexteAppelAction").innerHTML += TexteAppelAction;
    }







    // role : récupérer les avantages clients 1 par 1 et de les afficher dans le Dom
    // paramètre : tableau des avantages clients
    // return : rien car elle affiche

    function afficheAvantagesClients(tableauAvantages) {
        tableauAvantages.forEach(avantage => {
            let avantagesClients = `
            <div> <!-- avantage client 1 -->
                    <p class="mt-20">${avantage}</p>
                </div>
            `

        document.querySelector("#avantages-clients").innerHTML += avantagesClients;
        })
    };
    