// connexion

let baliseEmail = document.getElementById("email_connexion");
let baliseMdp = document.getElementById("motdepasse")

function Connecter(BaliseEmail,BaliseMdp){
window.location.assign("index_3_modale.html");
}

const paquetConnexion = {
  "email": baliseEmail.value,
  "password": baliseMdp.value
}


const charge_utile = JSON.stringify(paquetConnexion)



  fetch("http://localhost:5678/api/users/login", {
      method : "POST",
      headers : { "Content-Type": "application/json" },
      body : {charge_utile}
  })


  let Connexion = document.getElementById("BoutonConnexion");
  Connexion.addEventListener("click", (event)=>{
    event.preventDefault();
    const MessageErreur = document.querySelector(".erreur_message");
    if(MessageErreur){
      MessageErreur.remove()
    }else{

    }
    
    });

      
// suppression

fetch("http://localhost:5678/api/works/{id}"), {
  method : "DELETE",
  headers : { "Content-Type": "application/json" },
  body : {charge_utile2}
}







