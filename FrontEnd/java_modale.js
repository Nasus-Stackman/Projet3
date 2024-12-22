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
    modale.querySelector(".stop").addEventListener("click", stopPropagation)
}

const closeModale = function(e){
    if(modale === null) return
    e.preventDefault()
    modale.style.display= "none"
    modale.setAttribute("aria-hidden", "true")
    modale.removeAttribute("aria-modal")
    modale.removeEventListener("click", closeModale)
    modale.querySelector(".js-boutton_fermer").removeEventListener("click", closeModale )
    modale.querySelector(".stop").removeEventListener("click", stopPropagation)
    modale = null
}

const stopPropagation = function (e){
    e.stopPropagation()
}

document.querySelectorAll(".modale_js").forEach(a =>{
    a.addEventListener("click", OpenModale)
})

window.addEventListener("keyboard", function (e){
    if (e.key === "Escape" || e.key === "Esc"){
        closeModale(e)
    }
})