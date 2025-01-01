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
    titreElement.innerText = element.title
    // on ratache
    const article = document.createElement("figure")
    images.appendChild(article)
    article.appendChild(imageElement)
    article.appendChild(titreElement)
  }
}
function trouverCategorie(projets) {
  fetch("http://localhost:5678/api/categories")
    .then(response => response.json())
    .then(data => {

      filtercategorie(data, projets)
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
  categories.forEach(categorie => {
    const bouton1 = document.createElement("button");
    bouton1.textContent = categorie.name
    bouton1.addEventListener("click", () => {
      const filtrage = projets.filter(function(elem){
        return elem.category.name === categorie.name
      })
      genererProjets(filtrage);
    })
    Filtres.appendChild(bouton1)
  });

}

// ACTIVATION DES BOUTONS

const boutons = document.querySelectorAll(".filtres button");
for(i = 0; i < boutons.length; i++){
  boutons[i].addEventListener("click", ()=>{
    

})
}

// CHANGEMENTS STYLE HTML
document.getElementById("logo_2").style.display = "none";
const boutonLogout = document.querySelector(".logout");
boutonLogout.classList.add("V");

function VisuelEdition(){
  // BOUTON LOGIN
  const boutonLogin = document.querySelector(".login");
  boutonLogin.classList.add("V");
  boutonLogout.classList.remove("V");
  // BANDE NOIRE
  const ModeEdition = document.querySelector(".Mode_edition");
  ModeEdition.classList.remove("V");
  // ACCES MODALE
  document.getElementById("logo_2").style.display = "inline";
  const Modale = document.querySelector(".modale_js")
  Modale.classList.remove("V")
}
VisuelEdition();

  function VisuelStandard(){
  // BOUTON LOGIN
  const boutonLogin = document.querySelector(".login");
  boutonLogin.classList.remove("V");
  boutonLogout.classList.add("V");
  // BANDE NOIRE
  const ModeEdition = document.querySelector(".Mode_edition");
  ModeEdition.classList.add("V");
  // ACCES MODALE
  document.getElementById("logo_2").style.display = "none";
  const Modale = document.querySelector(".modale_js")
  Modale.classList.add("V") 
}


// PROJETS DANS MODALE

const imagesModale = document.querySelector(".Div_projets");
function genererImages(projets) {
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

// TOKEN ET CONNEXION

 const sauvegarde = window.localStorage.getItem("token_appel");
 const boutonLogin = document.querySelector(".login")

 // CONNEXION AVEC LA PAGE LOGIN

function LancerPage2(){
  window.location.assign("index_2_login.html")
}
 
boutonLogin.addEventListener("click", function(){
  LancerPage2()
})

boutonLogout.addEventListener("click", ()=>{
  window.localStorage.removeItem("token_appel");
  VisuelStandard();
})