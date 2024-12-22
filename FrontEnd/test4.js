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