// JAVA POUR PAGE ADMIN
let projets;

let url = "http://localhost:5678/api/works";
fetch(url)
  .then(response => response.json())
  .then(data => {
    projets = data;
    console.log(projets)
    
  const images = document.querySelector(".gallery")   
    // Après avoir récupéré les données, on peut itérer et ajouter les images au DOM.
  function genererProjets(projets){
    for (let i = 0; i < projets.length; i++) {
      const element = projets[i];
      const imageElement = document.createElement("img");
      imageElement.src = element.imageUrl;
      const titreElement = document.createElement("p");
      titreElement.innerText = element.title
      // on ratache
      const article= document.createElement("article")
      images.appendChild(article)
      article.appendChild(imageElement)
      article.appendChild(titreElement)
    } 
  }
  genererProjets(projets);
  
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

  // PROJETS DANS MODALE

  const imagesModale = document.querySelector(".Div_projets");
  function genererImages(projets){
    for (let i = 0; i < projets.length; i++) {
      const element = projets[i];
      const article = document.createElement("article");
      article.classList.add("article_image")
      const imageElement = document.createElement("img");
      imageElement.src = element.imageUrl;
      const poubelle = document.createElement("button");
      //création d'une classe poubelle pour le style css
      poubelle.classList.add("poubelle")
      poubelle.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
      //création id pour chaque icone de poubelle      ici element = projets[i]
      poubelle.setAttribute("id", element.id)
      article.appendChild(poubelle)
      article.appendChild(imageElement)
      imagesModale.appendChild(article)
      console.log(poubelle)
    }
  }
  genererImages(projets);
  
  
  // Récupération de la variable poubelle pour les futures suppressions
  
  const poubelle = document.querySelectorAll(".poubelle")
  console.log(poubelle)
  
  localStorage.getItem("le bro");
  console.log()

  //SUPPRESSION PROJETS
  for (let i = 0; i < poubelle.length; i++){
    poubelle[i].addEventListener("click", (event)=>{
      //utilisation de currentTarget pour avoir l'ID du bouton dans son ensemble (et pas juste l'icone)
      const charge_utile_suppression = parseInt(event.currentTarget.id)
      console.log(charge_utile_suppression)
      fetch(`http://localhost:5678/api/works/${charge_utile_suppression}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
     
    })
  }
  
  //AJOUT PROJET
  
  const sauvegarde = window.localStorage.getItem("token_appel");
  console.log(sauvegarde);

  const nomNouveau = document.getElementById("titre_nouveau_projet");
  const categorieNouveau = document.getElementById("categorie_nouveau_projet");
  const ImageNouveau = document.getElementById("bouton_depose");
  const Bouton_Envoie = document.getElementById("envoie_projet");

  Bouton_Envoie.addEventListener("click", (event) => {
    event.preventDefault();
    const nouveauProjet = {
      "title" : nomNouveau.value,
      "imageUrl" : ImageNouveau.src,
      "categoryId" : categorieNouveau.value
    }
    const charge_utile_ajout = JSON.stringify(nouveauProjet)
    fetch("http://localhost:5678/api/works", {
      method : "POST",
      headers : { "Content-Type": "application/json" },
      body : charge_utile_ajout
    });
  })




  

  



  
  
  







})  