
// Recupération id dans l'url
function getKanapId() {
    const urlKanap = document.location.href; 
    const urlProduct = new URL(urlKanap);
    const idKanap = urlProduct.searchParams.get("id");
        return idKanap;
};
// console.log(idKanap);
// console.log(urlKanapSinope);



//Récupération des infos produits
fetch(`http://localhost:3000/api/products/${getKanapId()}`)
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
        
       
        //récupération bouton html
        const addToCartButton = document.getElementById('addToCart');
        console.log(addToCartButton);
        
        //Création Event au clic
        addToCartButton.addEventListener('click', (event) => {
            
            // couleur
            const productOptions = document.getElementById('colors').value;
            // console.log(productOptions);

            //quantité
            const productQuantity = document.getElementById('quantity').value;
            // console.log(productQuantity);

            // Id
            const id = getKanapId();

            let userDataStorage = localStorage.getItem('produit');
               

                if (userDataStorage){
                    let userDataChoose = JSON.parse(userDataStorage);
                    console.log(userDataStorage);
                    let modifyStorage = false;

                    for (product of userDataChoose) {
                    
                        if(product._id === id && product.colors === productOptions){
                    
                         
                            console.log('dans if');
                            modifyStorage= true;
                            // localStorage.setItem('produit',JSON.stringify(userDataChoose));

                        }
                       
                    }
                           if( modifyStorage === false){ 
                            userDataChoose.push({
                                _id: id,
                                colors: productOptions,
                                quantity: productQuantity
                            });
                            console.log('hors for ', userDataChoose);}
                            
                    localStorage.setItem('produit', JSON.stringify(userDataChoose));

                        

                    

                
                }else{
                    let userDataChoose =[{
                        _id: id,
                        colors: productOptions,
                        quantity: productQuantity
                    }];

                    //  console.log(userDataChoose);
                 localStorage.setItem('produit',JSON.stringify(userDataChoose));
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
        kanapColors.innerHTML += `<option value="${colorsOptions}"> ${colorsOptions}</option> `;
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






