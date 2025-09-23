const open = document.querySelector("#modal-open")
const close = document.querySelector("#modal-close")
const modal = document.querySelector("#modal")

open.addEventListener("click", () => {
    modal.classList.add("active")
})

close.addEventListener("click", () => {
    modal.classList.remove("active")
})