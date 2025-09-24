const key = '&api_key=live_TAoYsJ2xBQzbTZ8k4YUMNDpAc6z8rQ2kcUhxwtdlzJMnAuuwnfKaKJFvI0h5LJIU'
const base_url = 'https://api.thecatapi.com/v1'

fetch(`${base_url}/images/search?limit=10${key}`)
    .then(response => response.json())
        .then(chats => {
            const resultat = document.querySelector('#resultat')
            chats.forEach(chat => {
                resultat.innerHTML += `<img src="${chat.url}" alt="Chat">`
            })
        })
    .catch(error => {
        console.error(error)
    })