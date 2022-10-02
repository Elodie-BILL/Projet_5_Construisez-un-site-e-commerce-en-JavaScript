


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
        //Je veux envoyer les choix du client en LS au clic
        
        //Création Event au clic
        let addToCartButton = document.getElementById('addToCart');
        console.log(addToCartButton);

        addToCartButton.addEventListener('click', (event) => {
            //récupération bouton html
            let productOptions = document.getElementById('colors');
            console.log(productOptions);

            // choix client mise en variable
            // let userChoose = productOptions;
            // console.log(userChoose);

            //Mise infos produits en LocalStorage
            let userDataChoose ={
                _id: idKanap,
                name: product.name,
                price: product.price,
                description : product.description,
                colors: colorsOptions,//ERROR : affiche que la dernière couleur!!
                imageUrl: product.imageUrl,
                altTxt:product.altTxt,
                // quantity: 
            };
            console.log(userDataChoose);

            //Enregistrement données en LS: Je veux enregistré les données sélectionné par le client
                ;
                if ( localStorageData = []) {
                    localStorageData.push(userDataChoose);
                    localStorage.setItem("produit",JSON.stringify(userDataChoose));
                    
                    console.log(localStorageData);
                    
                } else {
                    for (let i=1; ;i++){

                    };
                };



        });

       
       
        

    




       
   
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
    let kanapQuantityChoose = document.getElementById('quantity');
    console.log(kanapQuantityChoose);
}
        
  
// 

    // function KanapToCart(product){
    //     let addToCart = JSON.parse(localStorage.getItem("produit"));
    //     addToCart.push(productData);
    //     kanapCart
        
       
    // };



