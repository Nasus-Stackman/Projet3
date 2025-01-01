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
    function genererProjets(projets) {
      for (let i = 0; i < projets.length; i++) {
        const element = projets[i];
        const imageElement = document.createElement("img");
        imageElement.src = element.imageUrl;
        const titreElement = document.createElement("p");
        titreElement.innerText = element.title
        // on ratache
        const article = document.createElement("article")
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
    bouton0.addEventListener("click", function () {
      document.querySelector(".gallery").innerHTML = "";
      genererProjets(projets);
    });
    Filtres.appendChild(bouton0)

    bouton1.innerHTML = "Objets"
    bouton1.addEventListener("click", function () {
      const projetsObjects = projets.filter(function (elem) {
        return elem.categoryId === 1;
      });
      console.log(projetsObjects)
      document.querySelector(".gallery").innerHTML = ""
      genererProjets(projetsObjects);
    });
    Filtres.appendChild(bouton1)

    bouton2.innerHTML = "Appartements"
    bouton2.addEventListener("click", function () {
      const projetsAppart = projets.filter(function (elem) {
        return elem.categoryId === 2;
      });
      console.log(projetsAppart)
      document.querySelector(".gallery").innerHTML = ""
      genererProjets(projetsAppart);
    });
    Filtres.appendChild(bouton2)

    bouton3.innerHTML = "Hotels & Restaurants"
    bouton3.addEventListener("click", function () {
      const projetsAppart = projets.filter(function (elem) {
        return elem.categoryId === 3;
      });
      console.log(projetsAppart)
      document.querySelector(".gallery").innerHTML = ""
      genererProjets(projetsAppart);
    });
    Filtres.appendChild(bouton3)

    // PROJETS DANS MODALE

    const imagesModale = document.querySelector(".Div_projets");
    function genererImages(projets) {
      for (let i = 0; i < projets.length; i++) {
        const element = projets[i];
        const article = document.createElement("article");
        article.classList.add("article_image")
        const imageElement = document.createElement("img");
        imageElement.src = element.imageUrl;
        const poubelle = document.createElement("button");
        //création d'une classe poubelle pour le style css
        poubelle.classList.add("poubelle");
        poubelle.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        //création id pour chaque icone de poubelle      ici element = projets[i]
        poubelle.setAttribute("id", element.id);
        article.appendChild(poubelle);
        article.appendChild(imageElement);
        imagesModale.appendChild(article);
        console.log(poubelle);
      }
    }
    genererImages(projets);


    // Récupération de la variable poubelle pour les futures suppressions

    const poubelle = document.querySelectorAll(".poubelle")
    console.log(poubelle)

    const sauvegarde = window.localStorage.getItem("token_appel");
    console.log(sauvegarde);

    //SUPPRESSION PROJETS
    for (let i = 0; i < poubelle.length; i++) {
      poubelle[i].addEventListener("click", (event) => {
        event.preventDefault();
        //utilisation de currentTarget pour avoir l'ID du bouton dans son ensemble (et pas juste l'icone)
        const charge_utile_suppression = parseInt(event.currentTarget.id)
        console.log(charge_utile_suppression)
        fetch(`http://localhost:5678/api/works/${charge_utile_suppression}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sauvegarde}`
          },
        })
        .then(data => {
          console.log('Réponse de l\'API:', data);
          // Ici, tu peux ajouter une action, comme afficher un message de succès ou réinitialiser le formulaire
        })
      })
    }

    // VISUEL IMAGE LOAD
    
    function affichage_image() {
      const Visuel = document.querySelector(".Div_deposer");
      const imageAffiche = document.querySelector(".image_choisie");
      const logo = document.getElementById("logo_paysage").style.display = "none";
      Visuel.classList.add("V")
      imageAffiche.classList.add("image_visible");
      imageAffiche.classList.remove("image_choisie");
      const taille_max = document.querySelector(".taille_max");
      taille_max.classList.add("V");
      const texte = document.getElementById("texte_ajout").style.display = "none";
      console.log(imageAffiche)
      imageAffiche.classList.add("image_visible");
      const bouton_depose = document.getElementById("bouton_depose").style.display = "none";
      console.log(imageAffiche)
    }
    
    function affichage_formulaire(){
      const Visuel = document.querySelector(".Div_deposer");
      const imageAffiche = document.querySelector(".image_choisie");
      console.log(imageAffiche);
      
      console.log(imageAffiche)
      
    }
    //AJOUT PROJET

   
    document.getElementById("B").addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche l'envoi classique du formulaire
      
      // Créer un objet FormData à partir du formulaire
      const formData = new FormData();
      
      const nomNouveau = document.getElementById("titre_nouveau_projet").value
      const categorieNouveau = document.getElementById("categorie_nouveau_projet").value
      const ImageNouveau = document.getElementById("bouton_depose").files[0]
      console.log(categorieNouveau)
      // Ajouter les données dans FormData
      formData.append('title',  nomNouveau);
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
      formData.append('image', ImageNouveau);
      // Créer la requête pour envoyer les données à l'API
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
        if (response.ok){
          response.json().then(data =>{})
          affichage_image()
        } else {
          return response.json().then(data => {
            // JE SUPPRIME L'ANCIEN MESSAGE D'ERREUR
            const AncienMessage = document.querySelector(".Div_envoie p")
            if( AncienMessage !== null){  
              console.log(AncienMessage)
              AncienMessage.remove()
            }
            const MessageErreur = document.createElement("p")
            MessageErreur.innerText = "Erreur dans la sélection des champs"
            const Titre2 = document.querySelector(".Div_envoie");
            Titre2.appendChild(MessageErreur);
            console.log(MessageErreur)
            affichage_image()
          });
        }
        
        // Ici, tu peux ajouter une action, comme afficher un message de succès ou réinitialiser le formulaire
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi:', error);
      });
    });


  })  