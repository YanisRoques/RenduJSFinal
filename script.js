//💻📝 Rendu final JS – Génération d'un site web dynamique à partir des données d'une API
//Objectif : utilisation de fetch() pour récupérer des données JSON, manipulation DOM, boucles, gestion d'images et cartes interactives.
//🟢 Niveau 1 – Récupérer les données de l'API
//Utilise fetch() pour récupérer les données JSON depuis l'API https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/.
//Tu as le choix du sujet, donc clique bien sur le sujet de ton choix pour avoir l'URL finale.
//Vérifie si la réponse de l'API est correcte. Si oui, passe les données à une fonction qui affichera le contenu du site.
//🟡 Niveau 2 – Affichage du contenu principal
//Dans la fonction, crée un élément div pour afficher le nom de l'entreprise, sa phrase d'accroche et un bouton d'appel à l'action.
//Affiche ces informations dynamiquement avec les données récupérées depuis l'API.
//🔴 Niveau 3 – Afficher les plats
//Pour chaque plats dans les données JSON, crée dynamiquement une div contenant un titre, une description et une image.
//Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image.
//🔴🔴 Niveau 4 – Afficher les témoignages
//Pour chaque témoignage dans les données JSON, crée dynamiquement une div contenant le prénom, le commentaire.
//1Ajoute ces témoignages sous les activités dans la page.
//🔴🔴🔴 Niveau 5 (optionnel) – Ajouter une carte interactive
//Ajoute une carte interactive à la page à l’aide de la bibliothèque Leaflet.js.
//Utilise les coordonnées fournies dans les données JSON pour centrer la carte et y ajouter un fond de carte interactif.1
//💎 Bonus – Design et personnalisation
//Fonts personnalisées : Ajoute des fonts depuis Google Fonts
//Icônes : Utilise une bibliothèque comme Font Awesome ou Material Icons
//Favicon personnalisé : via balise <link rel="icon" ...>
//Design : styles CSS avec couleurs, espaces, ombres, transitions, animations légères


function afficher() {
    fetch(`data.json`)
        .then(response => response.json())
        .then(data => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");
            const div1 = document.createElement(`div`);
            const div2 = document.createElement(`div`);

            let titre = document.createElement(`h1`);
            titre.textContent = data.nomCommercial;

            let accroche = document.createElement(`p`);
            accroche.textContent = data.texteAccroche;

            let appelAction = document.createElement(`button`);
            appelAction.textContent = data.texteBouton;

            let promesses = data.promessesClient;
            promesses.forEach(promesse => {
                let promessetxt = document.createElement(`p`);
                promessetxt.textContent = promesse;
                div2.appendChild(promessetxt);
            });

            let plats = data.plats;
            plats.forEach(plat => {
                let divplat = document.createElement(`div`);
                section2.appendChild(divplat);

                let nomPlat = document.createElement(`h2`);
                nomPlat.textContent = plat.nom;

                let descPlat = document.createElement(`p`);
                    descPlat.textContent = plat.desc;
                
                let imgPlat = document.createElement(`img`);
                    imgPlat.src = plat.image-url;
                
                divplat.appendChild(nomPlat);
                divplat.appendChild(descPlat);
                divplat.appendChild(imgPlat);
                console.log(plat.nom);
                console.log(plat.desc);                
            })

            section1.appendChild(div1);
            div1.appendChild(titre);
            div1.appendChild(accroche);
            div1.appendChild(appelAction);
            section1.appendChild(div2);
        });
}

afficher();



