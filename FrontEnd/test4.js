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

