//Connexion Page 3
let BaliseEmail = document.getElementById("email_connexion");
let BaliseMdp = document.getElementById("motdepasse")

function Connecter(BaliseEmail,BaliseMdp){
  window.location.assign("index_3_modale.html");
}

let Connexion = document.getElementById("BoutonConnexion");

Connexion.addEventListener("click", (event)=>{
    event.preventDefault();
    const MessageErreur = document.querySelector(".erreur_message");
    if(MessageErreur){
      MessageErreur.remove()
    }
    if(BaliseEmail.value === "sophie.bluel@test.tld" && BaliseMdp.value === "S0phie"){
      console.log("connexion effectuée")
      Connecter(BaliseEmail,BaliseMdp);
    }else{
      console.log("erreur")
      MessageErreur.classList.add("erreur_message")
      MessageErreur.innerText = "Erreur dans l’identifiant ou le mot de passe"
      const Titre2 = document.querySelector(".form_log_in");
      Titre2.appendChild(MessageErreur);
    }
})

Connexion.addEventListener("click", (event) => {
    event.preventDefault();
  
    // Vérifie si un message d'erreur existe déjà
    const existingErrorMessage = document.querySelector(".error-message");
    if (existingErrorMessage) {
      existingErrorMessage.remove();  // Supprime l'ancien message d'erreur s'il existe
    }
  
    if (BaliseEmail.value === "sophie.bluel@test.tld" && BaliseMdp.value === "S0phie") {
      console.log("connexion effectuée");
      Connecter(BaliseEmail, BaliseMdp);
    } else {
      console.log("erreur");
      const MessageErreur = document.createElement("p");
      MessageErreur.classList.add("error-message");  // Ajoute une classe pour le sélectionner facilement
      MessageErreur.innerText = "Erreur dans l’identifiant ou le mot de passe";
  
      const Titre2 = document.querySelector(".form_log_in");
      Titre2.appendChild(MessageErreur);
    }
  });

 //
  
 const nouveauProjet = {
    "imageUrl" : formData,
    "title" : nomNouveau.value,
    "categoryId" : categorieNouveau.value
  }
  const charge_utile_ajout = JSON.stringify(nouveauProjet)
  console.log(nouveauProjet)
  fetch("http://localhost:5678/api/works", {
    method : "POST",
    headers : { "Content-Type": "application/json",
                "Authorization": `Bearer ${sauvegarde}`
     },
    body : charge_utile_ajout
  });



  const imageAffiche = document.querySelector(".image_choisie");
  imageAffiche.classList.add("VISIBLE");
  ImageNouveau.classList.add("V");
  const logo = document.getElementById("logo_paysage");
  logo.setAttribute( "display : none;")
  const taille_max = document.querySelector(".taille_max");
  taille_max.classList.add("V");
  const affichage_bouton_depose = document.querySelector(".affichage_bouton_depose")
  affichage_bouton_depose.classList.add("V");




  ImageNouveau.addEventListener("change", (event)=>{
    const formData = new FormData();
    formData.append("userfile", ImageNouveau.files[0]);
      Bouton_Envoie.addEventListener("click", (event) => {
        console.log(formData)
        event.preventDefault();
        const nouveauProjet = {
          "imageUrl" : formData,
          "title" : nomNouveau.value,
          "categoryId" : categorieNouveau.value
        }
        const charge_utile_ajout = JSON.stringify(nouveauProjet)
        console.log(nouveauProjet)
        fetch("http://localhost:5678/api/works", {
          method : "POST",
          headers : { "Content-Type": "application/json",
                      "Authorization": `Bearer ${sauvegarde}`
            },
          body : charge_utile_ajout
          });       
          //affichage_image();
        })  
    }
  ) 

  const nomNouveau = document.getElementById("titre_nouveau_projet");
    const categorieNouveau = document.getElementById("categorie_nouveau_projet");
    const ImageNouveau = document.getElementById("bouton_depose");
    const Bouton_Envoie = document.getElementById("envoie_projet");





    // Filtres
const bouton0 = document.createElement("button");
const bouton1 = document.createElement("button");
const bouton2 = document.createElement("button");
const bouton3 = document.createElement("button");
const Filtres = document.querySelector(".filtres");

bouton0.innerHTML = "Tous"
bouton0.addEventListener("click", function (){
  document.querySelector(".gallery").innerHTML="";
  genererProjets(projets);
});
Filtres.appendChild(bouton0)

bouton1.innerHTML = "Objets"
bouton1.addEventListener("click", function (){
  const projetsObjects = projets.filter(function(elem){
    return elem.categoryId === 1;
  });
  console.log(projetsObjects)
  document.querySelector(".gallery").innerHTML=""
  genererProjets(projetsObjects);
});  
Filtres.appendChild(bouton1)
 
bouton2.innerHTML = "Appartements"
bouton2.addEventListener("click", function (){
  const projetsAppart = projets.filter(function(elem){
    return elem.categoryId === 2;
  });
  console.log(projetsAppart)
  document.querySelector(".gallery").innerHTML=""
  genererProjets(projetsAppart);
});   
Filtres.appendChild(bouton2)
 
bouton3.innerHTML = "Hotels & Restaurants"
bouton3.addEventListener("click", function (){
  const projetsAppart = projets.filter(function(elem){
    return elem.categoryId === 3;
  });
  console.log(projetsAppart)
  document.querySelector(".gallery").innerHTML=""
  genererProjets(projetsAppart);
});   
Filtres.appendChild(bouton3)

if (file) {
  const reader = new FileReader();

  // Lorsque le fichier est chargé par le FileReader
  reader.onload = function(e) {
      // Mettre à jour l'élément img avec la source de l'image
      imagePreview.src = e.target.result;
      imagePreview.style.display = 'block'; // Afficher l'image
  };

  // Lire le fichier comme une URL de données
  reader.readAsDataURL(file);
}
});




const NouvelleImage = document.createElement("img");
NouvelleImage.src = e.target.result; // Le résultat du FileReader est une Data URL
const imageAffiche = document.getElementById("texte_ajout");
imageAffiche.appendChild(NouvelleImage);
console.log(NouvelleImage);


imageAffiche.classList.add("image_visible");
imageAffiche.classList.remove("image_choisie");


const AjoutImage = document.createElement("img");
AjoutImage.src = ImageNouveau

//AjoutCategorie = ;
const AjoutTitre = document.createElement("figcaption")


const poubelle = document.createElement("button");
            poubelle.classList.add("poubelle");
            poubelle.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
            //récupération de l'id
            poubelle.setAttribute("id", IdNouveau);
            article.appendChild(poubelle)

            <aside id="modale1" class="modale" aria-hidden="true" role="dialog" aria-labelledby="Titre_modale"
					style="display: none;" aria-modal="false">


boutons.forEach(b => b.classList.remove("flitre_click"));
      boutons[i].classList.add("flitre_click");
    });


    function AjoutProjet(projets) {
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
    let categoryId;
    if (categorieNouveau === 'Objets') {
      categoryId = 1;
    } else if (categorieNouveau === 'Appartements') {
      categoryId = 2;
    } else if (categorieNouveau === 'Hotels & restaurants') {
      categoryId = 3;
    }
    console.log(categoryId)
    console.log(nomNouveau)
    console.log(ImageNouveau)
    formData.append('category', categoryId);
    if(ImageNouveau !== undefined){
      formData.append('image', ImageNouveau);
    }else{
      console.log("pas d'image sélectionnée")
    }
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
            const IdNouveau = data.id; // Récupère l'ID unique
            console.log("ID du projet créé:", IdNouveau);
            //création dynamique dans la modale
            const article = document.createElement("figure");
            const AjoutImage = document.createElement("img");
            AjoutImage.src = URL.createObjectURL(ImageNouveau);
            imagesModale.appendChild(AjoutImage);
            //création dynamique dans la galerie
            const AjoutImage2 = document.createElement("img");
            AjoutImage2.src = URL.createObjectURL(ImageNouveau);
            const AjoutTitre = document.createElement("figcaption");
            AjoutTitre.innerText = nomNouveau;
            const images = document.querySelector(".gallery");
            article.appendChild(AjoutImage2);
            article.appendChild(AjoutTitre);
            images.appendChild(article);
            netoyer_image();
          })

        } else {
          return response.json().then(data => {
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
            console.log(MessageErreur)
          });
        }
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi:', error);
      });
  });
}