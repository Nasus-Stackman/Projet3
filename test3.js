//Connexion
let BaliseEmail = document.getElementById("email");
let BaliseMdp = document.getElementById("motdepasse")

function Connecter(BaliseEmail,BaliseMdp){
  window.location.assign("index.html");
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
    ReportBody.querySelector(".form_log_in p").innerHTML = ""
    MessageErreur.innerText = "Erreur dans l’identifiant ou le mot de passe"
    const Titre2 = document.querySelector(".form_log_in");
    Titre2.appendChild(MessageErreur)
  }
})

