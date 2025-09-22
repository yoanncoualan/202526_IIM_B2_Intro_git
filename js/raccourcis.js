const _filter = () => {
    const array = [
        {
          age: 18,
          prenom: "John"
        },
        {
          age: 20,
          prenom: "Jane"
        }
    ]
    
    const filteredArray = array.filter((item) => item.age > 18);

    console.log(filteredArray)
}

const _find = () => {
    const array = [
        {
          age: 1,
          prenom: "John"
        },
        {
          age: 20,
          prenom: "Jane"
        }
    ]
    
    const foundItem = array.find((item) => item.age > 18);
    
    console.log(foundItem);
}

const _spread = () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const array3 = [...array1, , ...array2];

    console.log(array3)
}

const _destructuring = () => {
    const yoann = [
        "Yoann",
        "Coualan",
        "30"
    ]

    const [prenom, nom, age] = yoann;

    console.log(`Salut ${prenom} ${nom} tu as ${age} ans`)

    const yoann1 = {
        prenom2: "Yoann",
        nom2: "Coualan",
        age2: 30
    }

    const {prenom2, nom2, age2} = yoann1;

    console.log(`Salut ${prenom2} ${nom2} tu as ${age2} ans`)
}

const test = (a = 1, b = 2) => {
    // ...
    console.log(a, b)
}
