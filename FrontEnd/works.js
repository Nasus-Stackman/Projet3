let projet;

let url = "http://localhost:5678/api/works"
fetch(url)
  .then(response => response.json())
  .then(data => {projet = data; console.log(projet);})




    for(let i =0; i < projet.length ; i++ ){
      const Element = projet[i];
      const ImageElement = document.createElement("img");
      ImageElement.src = Element.imageUrl

    }
  
