//Connexion Page 3
let BaliseEmail = document.getElementById("email_connexion");
let BaliseMdp = document.getElementById("motdepasse")

function Connecter(BaliseEmail,BaliseMdp){
  window.location.assign("index_3_modale.html");
}

let Connexion = document.getElementById("BoutonConnexion");

Connexion.addEventListener("click", (event)=>{
    event.preventDefault();
    if(BaliseEmail.value === "sophie.bluel@test.tld" && BaliseMdp.value === "S0phie"){
      console.log("connexion effectuée")
      Connecter(BaliseEmail,BaliseMdp);
    }else{
      console.log("erreur")
      const MessageErreur = document.createElement("p");
      if(MessageErreur){
        MessageErreur.remove
        MessageErreur.innerText = "Erreur dans l’identifiant ou le mot de passe"
        const Titre2 = document.querySelector(".form_log_in");
        Titre2.appendChild(MessageErreur);
      }
      
    }
})
