let modale = null

const OpenModale = function (e){
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute("href"))
    target.style.display=null
    target.removeAttribute("aria-hidden")
    target.setAttribute("aria-modale", "true")
    modale = target
    modale.addEventListener("click", closeModale)
    modale.querySelector(".js-boutton_fermer").addEventListener("click", closeModale)
    modale.querySelector(".js-boutton_fermer2").addEventListener("click", closeModale)
    modale.querySelector(".stop").addEventListener("click", stopPropagation)
    modale.querySelector(".stop2").addEventListener("click", stopPropagation)
}

const closeModale = function(e){
    if(modale === null) return
    e.preventDefault()
    modale.style.display= "none"
    modale.setAttribute("aria-hidden", "true")
    modale.removeAttribute("aria-modal")
    modale.removeEventListener("click", closeModale)
    modale.querySelector(".js-boutton_fermer").removeEventListener("click", closeModale )
    modale.querySelector(".js-boutton_fermer2").removeEventListener("click", closeModale)
    modale.querySelector(".stop").removeEventListener("click", stopPropagation)
    modale.querySelector(".stop2").removeEventListener("click", stopPropagation)
    modale = null
}

const stopPropagation = function (e){
    e.stopPropagation()
}

document.querySelectorAll(".modale_js").forEach(a =>{
    a.addEventListener("click", OpenModale)
})

window.addEventListener("keydown", function (e){
    if (e.key === "Escape" || e.key === "Esc"){
        closeModale(e)
    }
})

// CHANGEMENT DE PAGE MODALE

const BLOC1 = document.getElementById("V1")
const BLOC2 = document.getElementById("V2")
const vue1 = document.getElementById("Retour")
const vue2 = document.getElementById("ajouter_photo")
console.log(BLOC2)
vue2.addEventListener("click", ()=>{
    BLOC2.classList.add('VISIBLE')
    BLOC2.classList.remove('V')
    BLOC1.classList.remove('VISIBLE')
    BLOC1.classList.add("V")
    console.log(BLOC2)
})
vue1.addEventListener("click", ()=>{
    BLOC1.classList.add('VISIBLE')
    BLOC1.classList.remove("V")
    BLOC2.classList.remove('VISIBLE')
    BLOC2.classList.add('V')
    console.log(BLOC2)   
})


