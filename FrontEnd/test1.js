

url = "http://localhost:5678/api/works"
fetch(url)
  .then(response => response.json())
  .then(data => {projet = data; console.log(data);})
  
const image = projet.img

