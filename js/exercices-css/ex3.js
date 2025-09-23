const rectangle = document.querySelector(".rectangle")
const vert = document.querySelector(".vert")
const initial = document.querySelector(".initial")
const cacher = document.querySelector(".cacher")
const afficher = document.querySelector(".afficher")

vert.addEventListener("click", () => {
    rectangle.classList.add("vert")
})

initial.addEventListener("click", () => {
    rectangle.classList.remove("vert")
})

cacher.addEventListener("click", () => {
    rectangle.classList.add("cacher")
})

afficher.addEventListener("click", () => {
    rectangle.classList.remove("cacher")
})