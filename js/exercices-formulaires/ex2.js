const form = document.querySelector("form")
const resultat = document.querySelector("#resultat")

const nombre1 = document.querySelector("#nombre1")
const nombre2 = document.querySelector("#nombre2")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    if(nombre1.value == "" || nombre2.value == ""){
        resultat.innerHTML = `Veuillez entrer deux nombres`
        return
    }

    if(nombre1.value > nombre2.value){
        resultat.innerHTML = `${nombre1.value} est plus grand que ${nombre2.value}`
    }
    else if(nombre1.value < nombre2.value){
        resultat.innerHTML = `${nombre1.value} est plus petit que ${nombre2.value}`
    }
    else{
        resultat.innerHTML = `${nombre1.value} est égal à ${nombre2.value}`
    }
})