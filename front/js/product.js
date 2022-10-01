


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
    // console.log(product);

    // excécution fonction eponyme:
    displayKanap(product);

    // LocalStorage
    let productData = JSON.stringify(product);
    localStorage.setItem("produit", productData);

   


      
    
})
.catch(function (error) {
    console.log("une erreur est survenue");
});

//fonction gestion affichage infos produit
function displayKanap (product){

    //  Image
    let kanapPic = document.getElementsByClassName("item__img");
    let displayKanapPic = `<img src="${product.imageUrl}" alt="${product.altTxt}" />`;
    kanapPic[0].innerHTML = displayKanapPic;

    //  Titre
    let kanapTitle = document.getElementById('title');
    // console.log(kanapTitle);
    kanapTitle.innerText = product.name;

    // Couleurs
   let kanapColors = document.getElementById('colors');
   kanapColors.innerHTML = '<option value="">--SVP, choisissez une couleur --</option>';
    for ( colorsOptions of product.colors){
        // console.log(colorsOptions);
        kanapColors.innerHTML += `<option value="colorsOptions"> ${colorsOptions}</option> `;
    };

    // Description
    let kanapDescription = document.getElementById('description');
    // console.log('kanapDescription');
    kanapDescription.innerText = product.description;

    // Prix
    let kanapPrice = document.getElementById('price');
    // console.log(kanapPrice);
    kanapPrice.innerText= product.price;

    // Quantité
    // let kanapQuantityChoose = document.getElementById('quantity');
    // console.log(kanapQuantityChoose);
}

// Event clic bouton 
const addKanapToCart = () => {
    
    let button= document.getElementById("addToCart");
    console.log(button);
}

//Mise infos produits en LocalStorage

   
    
              
  




