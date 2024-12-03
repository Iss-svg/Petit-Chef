//On donne l'url du site a appeller
fetch('data.json')
    .then((rep) => {
        //javascript reçoit unne reponse de l'api (object js pas exploitable directement)=> il faut le transformer en json
        return rep.json()
    })
    .then(donnee => {
        //ensuite j'ai access ici à ma donnée
        console.log(donnee)
        //ici j'ai une liste de produit
        //je boucle sur le tableau de données :
        donnee.forEach(recette => {
            affiche(recette)

          
            
        });

        



    })


// ** Fonction : afficher **
// Rôle : Afficher une recette dans la page HTML en le stylisant, sous forme de cartes ou d'autres composants visuels
// Paramètre : "prod",  un objet représentant un produit contenant les informations des recettes
// Retour : Cette fonction ne retourne rien (elle effectue des manipulations DOM)
function affiche(recette) {
    let titre=recette.nom;
    let image=recette.img;
    let diffe=recette.difficulte;
    let prepa=recette.tempPreparation;
    let tmpC=recette.tempCuisson;
    let port=recette.portions;

    // Je vuex gerer les ingredients : recette.ingredients qui est un tableau d'objet avec des clés : quantite, unite, aliment
    // <li>200 gr de pates</li>

    let listeIng =""
    recette.ingredients.forEach(ing=>{
        listeIng += `<li>${ing.quantite} ${ing.unite} ${ing.aliment}</li>`
    })

    console.log(listeIng)

    // Je vuex gerer les ingredients : recette.ingredients qui est un tableau d'objet avec des clés : quantite, unite, aliment
    // <li>200 gr de pates</li>
    let listeEtap =""
    recette.etapes.forEach(eta => {
        listeEtap += `<li>${eta.descEtape}</li> `
    });    

    console.log(listeEtap)
    let container =document.querySelector(".container")
    container.innerHTML += `  <div class="marg">
                    <h3 class="col">${titre}</h3>
                    <ul class="flex spaceBetween width70 listeP">
                        <li><span>Difficultés:</span> ${diffe}</li>
                        <li><span>Portions:</span> ${port}</li>
                        <li><span>Temps de préparation:</span> ${prepa}</li>
                        <li><span>Temps de cuisson:</span> ${tmpC}</li>
                    </ul>
                    <div>
                        <div class="flex spaceBetween">
                            <div class="width25">
                                <h4>Ingrédients :</h4>
                                <ul class="pad">
                                    ${listeIng}
                                </ul>
                            </div>
                            <div class="width25">
                                <h4>Étapes :</h4>
                                <ol>
                                   ${listeEtap}
                                </ol>
                            </div>
                            <div class="divIg width45">
                                <img src="${image}" alt="">
                            </div>
                        </div>



                    </div>
                </div>`

   
   

  
  };