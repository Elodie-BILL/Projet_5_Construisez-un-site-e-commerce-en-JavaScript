


// Recupération id dans l'url
let urlKanapSinope = document.location.href; 
let urlProduct = new URL(urlKanapSinope);
let idKanap = urlProduct.searchParams.get("id");
// console.log(idKanap);
// console.log(urlKanapSinope);


//Récupération des infos produits
fetch(`http://localhost:3000/api/products/${idKanap}`)
.then(function (res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function (product){
    console.log(product);

    // excécution fonction eponyme:
   displayKanap(product)

    // LocalStorage
    saveKanapToCart(product);
    getKanapToCart(product)
    addKanapToCart(product)
    
    
})
.catch(function (error) {
    // "Une erreur est survenue";
    console.log(error)
});

//fonction gestion affichage infos produit
function displayKanap (product){

    //  Image
    let kanapPic = document.getElementsByClassName("item__img");
    let displayKanapPic = `<img src="${product.imageUrl}" alt="${product.altTxt}" />`;
    kanapPic[0].innerHTML = displayKanapPic;

    //  Titre
    let kanapTitle = document.getElementById('title');
    console.log(kanapTitle);
    kanapTitle.innerText = product.name;

    // Couleurs
   let kanapColors = document.getElementById('colors');
   kanapColors.innerHTML = '<option value="">--SVP, choisissez une couleur --</option>';
    for ( colorsOptions of product.colors){
        console.log(colorsOptions);
        kanapColors.innerHTML += `<option value="colorsOptions"> ${colorsOptions}</option> `;
    };

    // Description
    let kanapDescription = document.getElementById('description');
    console.log('kanapDescription');
    kanapDescription.innerText = product.description;

    // Prix
    let kanapPrice = document.getElementById('price');
    console.log(kanapPrice);
    kanapPrice.innerText= product.price;

    // Quantité
    let kanapQuantityChoose = document.getElementById('quantity');
    console.log(kanapQuantityChoose);
};

//Mise infos produits en LocalStorage
function saveKanapToCart (product){
    localStorage.setItem('displayKanap', JSON.stringify(displayKanap));
};

function getKanapToCart(product){
    let kanapInCart = localStorage.getItem('displayKanap');
    if (kanapInCart == null){
        return [] 
    } else { return JSON.parse(kanapInCart)};

}

function addKanapToCart(product){
    let kanapToCart = getKanapToCart();
    kanapToCart.push(product);
    saveKanapToCart(product);
}

// tableau pour réception 
let kanapTable = [localStorage.getItem("displayKanap ") ];
console.log(kanapTable)

    

   
    
              
  




