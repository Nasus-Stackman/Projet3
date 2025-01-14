let projets;

let url = "http://localhost:5678/api/works";
fetch(url)
  .then(response => response.json())
  .then(data => {
    projets = data;
    console.log(projets)
    genererProjets(projets);
    trouverCategorie(projets);
    genererImages(projets);

    SupprimerProjets(projets);
  })
  .catch(error => console.log(error));


// Après avoir récupéré les données, on peut itérer et ajouter les images au DOM.
function genererProjets(projets) {
  const images = document.querySelector(".gallery")
  images.innerHTML = ""
  for (let i = 0; i < projets.length; i++) {
    const element = projets[i];
    const imageElement = document.createElement("img");
    imageElement.src = element.imageUrl;
    const titreElement = document.createElement("figcaption");
    titreElement.innerText = element.title;
    // on ratache
    const article = document.createElement("figure");
    images.appendChild(article);
    article.appendChild(imageElement);
    article.appendChild(titreElement);
    console.log(element.id)
  }
}
function trouverCategorie(projets) {
  fetch("http://localhost:5678/api/categories")
    .then(response => response.json())
    .then(data => {

      filtercategorie(data, projets)
      Select(data)
      AjoutProjet(data);
    }).catch(error => console.log(error));


}
function filtercategorie(categories, projets) {
  const Filtres = document.querySelector(".filtres");
  Filtres.innerHTML = "";
  const bouton0 = document.createElement("button");
  bouton0.textContent = "Tous"
  bouton0.addEventListener("click", function () {
    genererProjets(projets);
  });
  Filtres.appendChild(bouton0)
  categories.forEach((categorie, index) => {
    const bouton1 = document.createElement("button");
    bouton1.textContent = categorie.name
    bouton1.setAttribute("id", "filtre" + index)
    bouton1.addEventListener("click", () => {
      const filtrage = projets.filter(function (elem) {
        return elem.category.name === categorie.name
      })
      genererProjets(filtrage);
    })
    Filtres.appendChild(bouton1)
  });
  // ACTIVATION DU CSS DES BOUTONS
  const boutons = document.querySelectorAll(".filtres button");
  boutons.forEach(bouton => {
    bouton.addEventListener("click", () => {
      boutons.forEach(b => b.classList.remove("flitre_click"));
      bouton.classList.add("flitre_click");
    });
  });
}




// CHANGEMENTS STYLE HTML

const boutonLogin = document.querySelector(".login");
console.log(boutonLogin)
const boutonLogout = document.querySelector(".logout");
boutonLogin.classList.add("Invisible");

function VisuelEdition() {
  document.getElementById("logo_2").style.display = "none";
  const boutonLogout = document.querySelector(".logout");
  boutonLogout.classList.add("Invisible");

  // BOUTON LOGIN
  //const boutonLogin = document.querySelector(".login");
  boutonLogin.classList.add("Invisible");
  boutonLogout.classList.remove("Invisible");
  // BANDE NOIRE
  const ModeEdition = document.querySelector(".Mode_edition");
  ModeEdition.classList.remove("Invisible");
  // ACCES MODALE
  document.getElementById("logo_2").style.display = "inline";
  const Modale = document.querySelector(".modale_js")
  Modale.classList.remove("Invisible")
  // FILTRES
  const Filtres = document.querySelector(".filtres");
  Filtres.classList.add("Invisible")
}

function VisuelStandard() {
  const boutonLogout = document.querySelector(".logout");
  // BOUTON LOGIN
  //const boutonLogin = document.querySelector(".login");
  boutonLogin.classList.remove("Invisible");
  boutonLogout.classList.add("Invisible");
  // BANDE NOIRE
  const ModeEdition = document.querySelector(".Mode_edition");
  ModeEdition.classList.add("Invisible");
  // ACCES MODALE
  document.getElementById("logo_2").style.display = "none";
  const Modale = document.querySelector(".modale_js")
  Modale.classList.add("Invisible")
  // FILTRES
  const Filtres = document.querySelector(".filtres");
  Filtres.classList.remove("Invisible")
}
VisuelStandard();


// TOKEN ET CONNEXION

const sauvegarde = window.sessionStorage.getItem("token_appel");
if (sauvegarde) {
  VisuelEdition();
} else {
  VisuelStandard();
}

// PROJETS DANS MODALE

function genererImages(projets) {
  const imagesModale = document.querySelector(".Div_projets");
  for (let i = 0; i < projets.length; i++) {
    const element = projets[i];
    const figure = document.createElement("figure");
    figure.classList.add("article_image")
    const imageElement = document.createElement("img");
    imageElement.src = element.imageUrl;
    const poubelle = document.createElement("button");
    //création d'une classe poubelle pour le style css
    poubelle.classList.add("poubelle");
    poubelle.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    //création id pour chaque icone de poubelle      ici element = projets[i]
    poubelle.setAttribute("id", element.id);
    figure.appendChild(poubelle);
    figure.appendChild(imageElement);
    imagesModale.appendChild(figure);
    console.log(poubelle);
  }
}

// CONNEXION AVEC LA PAGE LOGIN

function LancerPage2() {
  window.location.assign("index_2_login.html")
}

boutonLogin.addEventListener("click", function () {
  LancerPage2()
})

boutonLogout.addEventListener("click", () => {
  window.sessionStorage.removeItem("token_appel");
  VisuelStandard();
})


//SUPPRESSION PROJETS

function SupprimerProjets(projets) {
  const poubelle = document.querySelectorAll(".poubelle");
  console.log(poubelle);

  for (let i = 0; i < poubelle.length; i++) {
    poubelle[i].addEventListener("click", (event) => {
      event.preventDefault();

      const charge_utile_suppression = parseInt(event.currentTarget.id);
      console.log(charge_utile_suppression);

      fetch(`http://localhost:5678/api/works/${charge_utile_suppression}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sauvegarde}`
        },
      })
        .then(data => {
          console.log('Réponse de l\'API:', data);

          // Chercher l'élément à supprimer en fonction de l'ID
          const ProjetSupprimer = document.querySelectorAll(".gallery figure");
          const ProjetModaleSupprimer = document.querySelectorAll(".Div_projets figure");

          // Trouver l'élément dans le tableau projets avec le même ID
          const element = projets.find((p) => p.id === charge_utile_suppression);
          if (element) {
            console.log("Projet à supprimer:", element);

            // Trouver les éléments dans le DOM à supprimer
            const indexToRemove = projets.indexOf(element); // Trouver l'index de l'élément dans le tableau

            // Supprimer les éléments du DOM
            if (ProjetSupprimer[indexToRemove]) {
              ProjetSupprimer[indexToRemove].remove();
            }
            if (ProjetModaleSupprimer[indexToRemove]) {
              ProjetModaleSupprimer[indexToRemove].remove();
            }

            // Supprimer l'élément du tableau projets
            projets.splice(indexToRemove, 1);
            console.log("Projet supprimé de 'projets':", element);
          }
        })
        .catch(error => {
          console.error("Erreur lors de la suppression:", error);
        });
    });
  }
}

//AJOUT PROJET

function AjoutProjet(categories) {
  document.getElementById("formulaire").addEventListener('submit', function (event) {
    event.preventDefault();

    // Création FORMDATA depuis FORMULAIRE
    const formData = new FormData();

    const nomNouveau = document.getElementById("titre_nouveau_projet").value
    const categorieNouveau = document.getElementById("categorie_nouveau_projet").value
    const ImageNouveau = document.getElementById("bouton_depose").files[0]
    console.log(categorieNouveau)
    // Ajouter dans FORMDATA
    formData.append('title', nomNouveau);
    console.log(ImageNouveau)
    console.log(nomNouveau)
    console.log(categorieNouveau)
    formData.append('category', categorieNouveau);
    if (ImageNouveau !== undefined && ImageNouveau !== null && nomNouveau !== "" && categorieNouveau !== "") {
      formData.append('image', ImageNouveau);
      // Reqûete
      fetch('http://localhost:5678/api/works', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${sauvegarde}`,
          // Les en-têtes doivent être définis pour indiquer qu'on envoie un formulaire multipart
          'Accept': 'application/json', // Demander une réponse JSON
          // 'Content-Type': 'multipart/form-data' n'est pas nécessaire car FormData gère cela automatiquement
        }
      })
        .then(response => {
          if (response.ok) {
            response.json().then(data => {
              projets.push(data);
              const AncienMessage = document.querySelector(".Div_envoie p")
              if (AncienMessage !== null) {
                console.log(AncienMessage)
                AncienMessage.remove()
              }
              //je vide les champs
              const fileInput = document.getElementById("bouton_depose");
              fileInput.value = '';
              const TitreInput = document.getElementById("titre_nouveau_projet");
              TitreInput.value = '';
              const CategorieInput = document.getElementById("categorie_nouveau_projet");
              CategorieInput.value = '';
              document.querySelector(".Div_projets").innerHTML = '';
              document.querySelector(".gallery").innerHTML = '';
              genererImages(projets);
              genererProjets(projets);
              SupprimerProjets(projets);
              netoyer_image();
            })
          } else {
            return response.json().then(data => { });
          }
        })
        .catch(error => {
          console.error('Erreur lors de l\'envoi:', error);
        })
    } else {
      // JE SUPPRIME L'ANCIEN MESSAGE D'ERREUR
      const AncienMessage = document.querySelector(".Div_envoie p")
      if (AncienMessage !== null) {
        console.log(AncienMessage)
        AncienMessage.remove()
      }
      const MessageErreur = document.createElement("p")
      MessageErreur.innerText = "Erreur dans la sélection des champs"
      const Titre2 = document.querySelector(".Div_envoie");
      Titre2.appendChild(MessageErreur);
    }
  });
}



// VISUEL IMAGE CHOISIE

const bouton_depose = document.getElementById("bouton_depose")
bouton_depose.addEventListener('change', function (event) {

  const file = event.target.files[0]; // Obtenez le premier fichier

  if (file) {
    const fileReader = new FileReader();

    fileReader.onload = function (e) {
      affichage_image()
      const imageAffiche = document.createElement("img");
      imageAffiche.classList.add("image_visible")
      imageAffiche.src = e.target.result; // Le résultat du FileReader est une Data URL
      const DivDepo = document.querySelector(".Div_deposer")
      DivDepo.appendChild(imageAffiche);
    };

    fileReader.readAsDataURL(file); // Lire le fichier comme une Data URL
  } else {
    console.error('Aucun fichier sélectionné');
  }
});

function affichage_image() {
  const imageAffiche = document.querySelector(".image_choisie");
  //1
  const logo = document.getElementById("logo_paysage").style.display = "none";
  //2
  const texte = document.getElementById("texte_ajout").style.display = "none";
  //3
  const bouton_depose = document.getElementById("bouton_depose").style.display = "none";
  //4
  const taille_max = document.querySelector(".taille_max");
  taille_max.classList.add("Invisible");
  //IMAGE
}

function netoyer_image() {
  const imageAffiche = document.querySelector(".image_choisie").style.display = "none";
  //1
  const logo = document.getElementById("logo_paysage").style.display = "";
  //2
  const texte = document.getElementById("texte_ajout").style.display = "";
  //3
  const bouton_depose = document.getElementById("bouton_depose").style.display = "";
  //4
  const taille_max = document.querySelector(".taille_max");
  taille_max.classList.remove("Invisible");
  //IMAGE
  const ImageNouvelle = document.querySelector(".Div_deposer img");
  ImageNouvelle.remove();
}


// Création dynamique de la balise select

function Select(categories) {
  const InputCategorie = document.createElement("select");
  // Créer une option vide par défaut
  const defaultOption = document.createElement("option");
  defaultOption.value = ""; // Valeur vide
  defaultOption.textContent = ""; // Texte affiché dans l'option
  defaultOption.disabled = true; // Empêcher la sélection de cette option
  defaultOption.selected = true; // La rendre sélectionnée par défaut
  InputCategorie.appendChild(defaultOption); // Ajouter l'option vide au début

  for (let i = 0; i < categories.length; i++) {
    const Option = document.createElement("option");
    Option.value = categories[i].id; // Utilisez categories[i].id
    Option.textContent = categories[i].name; // Utilisez categories[i].name
    InputCategorie.appendChild(Option); // Ajoutez l'option à select
  }
  console.log(InputCategorie);
  InputCategorie.setAttribute("id", "categorie_nouveau_projet")
  const Div_form = document.getElementById("balise_select");
  Div_form.appendChild(InputCategorie);
}