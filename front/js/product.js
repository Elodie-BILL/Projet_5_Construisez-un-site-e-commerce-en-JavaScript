


// Recupération id dans l'url
let urlKanapSinope = document.location.href; 
let urlproduct = new URL(urlKanapSinope);
let idKanap = urlproduct.searchParams.get("id");
console.log(idKanap);


//Récupération des infos produits
fetch(`http://localhost:3000/api/products/${idKanap}`)
.then(function (res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function (product){
    
    console.log(product);
    // let kanapPic = document.getElementsByClassName("item__img");
    // let displayKanapPic = `< img src="${product.imageUrl}" alt="${product.altTxt}" >`;
    // kanapPic.innerHTML = displayKanapPic;

    const kanapProduct = document.querySelector(".item__img");
    let imageUrl ="http://localhost:3000/images/kanap01.jpeg";
    kanapProduct.appendChild(imageUrl);
    kanapProduct.appendChild(name);
    kanapProduct.appendChild(description);
    kanapProduct.appendChild(price);
})
.catch(function (error) {
    // "Une erreur est survenue";
    console.log(error)
});


//Intégration information dans page produit




// const kanapSinope = async () => {
//     fetch ("http:localhost:3000/api/products")
//     .then((res) => res.json())
//     .then((promise) => {
//         console.log(promise);
//     });

// };

// console.log(kanapSinope);

// const imageUrl = async () => {
//         fetch ("http://localhost:3000/images/kanap01.jpeg")
//         .then ((res) => res.json())
//         .then((promise) => {
//             console.log(promise);            
//         });
// };


// const altTxt = async () => {
//     fetch (`http://localhost:3000/api/products/${idKanap}.altTXT`)
//     .then ((res) => res.json())
//     .then((promise) => {
//         console.log(promise);            
//     });
// };

// const sinopePic = document.getElementsByClassName('item__img');
// console.log(sinopePic);

// Affichage info

// let itemsdescription = document.getElementById(description)
// itemsdDescription.innerHTML = window.description;                                                                                                                                                                                                                    
