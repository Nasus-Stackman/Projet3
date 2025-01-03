// connexion



let baliseEmail = document.getElementById("email_connexion");
let baliseMdp = document.getElementById("motdepasse")

function Connecter() {
  window.location.assign("index.html");
  
}


const Connexion = document.getElementById("BoutonConnexion");
Connexion.addEventListener("click", (event) => {
  event.preventDefault();
  const paquetConnexion = {
    "email": baliseEmail.value,
    "password": baliseMdp.value
  }
  const charge_utile = JSON.stringify(paquetConnexion)
  fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: charge_utile
  })
    .then(response => {
      if (response.ok) {
        // ON RECUPERE LE TOKEN
        response.json().then(data => {
          const Token1 = data.token;
          window.sessionStorage.setItem("token_appel", Token1)
          console.log(Token1)
          const sauvegarde = window.sessionStorage.getItem("token_appel");
          console.log(sauvegarde)
          Connecter();
        });

      } else {
        return response.json().then(data => {
          // JE SUPPRIME L'ANCIEN MESSAGE D'ERREUR
          const AncienMessage = document.querySelector(".form_log_in p")
          if( AncienMessage !== null){  
            console.log(AncienMessage)
            AncienMessage.remove()
          }
          const MessageErreur = document.createElement("p")
          MessageErreur.innerText = "Erreur dans l’identifiant ou le mot de passe"
          const Titre2 = document.querySelector(".form_log_in");
          Titre2.appendChild(MessageErreur);
          console.log(MessageErreur)
        });
      }
    })
});






