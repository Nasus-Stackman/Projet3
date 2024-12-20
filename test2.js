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

  

})

  



