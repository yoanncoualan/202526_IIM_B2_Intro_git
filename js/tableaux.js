const ex1 = () => {
    const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // let somme = 0
    // for(let i = 0; i < tableau.length; i++){
    //     somme += tableau[i]
    // }

    // let somme = 0
    // tableau.map((cellule) => {
    //     return somme + cellule
    // })

    let somme = tableau.reduce((somme, cellule) => {
        return somme + cellule
    }, 0)

    console.log(somme)
}

const ex2 = () => {
    const tableau = [8, 10, 12, 14, 20]

    tableau.forEach((cellule, numero) => {
        console.log(`La note n°${numero + 1} vaut ${cellule}`)
    })
    
}

const ex3 = () => {
    const tableau = [8, 10, 12, 14, 20]

    let cumul = 0
    for(let i = 0; i < tableau.length; i++){
        cumul += tableau[i]
        console.log(`La note n°${i + 1} vaut ${tableau[i]}`)
    }

    console.log(`La moyenne est de ${cumul / tableau.length}`)
}

ex3()