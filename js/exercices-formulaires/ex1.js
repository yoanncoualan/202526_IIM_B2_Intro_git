const form = document.querySelector("form")
const resultat = document.querySelector("#resultat")

const couleur1 = document.querySelector("#couleur1")
const couleur2 = document.querySelector("#couleur2")
const couleur3 = document.querySelector("#couleur3")
const couleur4 = document.querySelector("#couleur4")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let result = ""

    if(couleur1.value){
    result += `Mon 1er choix est : ${couleur1.value}<br/>`
    }
    if(couleur2.value){
        result += `Mon 2nd choix est : ${couleur2.value}<br/>`
    }
    if(couleur3.value){
        result += `Mon 3rd choix est : ${couleur3.value}<br/>`
    }
    if(couleur4.value){
        result += `Mon 4e choix est : ${couleur4.value}<br/>`
    }

    resultat.innerHTML = result
});