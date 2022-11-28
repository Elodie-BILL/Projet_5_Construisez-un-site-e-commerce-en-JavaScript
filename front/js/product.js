
// Recupération de l'id dans l'url
function getKanapId() {
    const urlKanap = document.location.href; 
    const urlProduct = new URL(urlKanap);
    const idKanap = urlProduct.searchParams.get("id");
        return idKanap;
};
// console.log(idKanap);
// console.log(urlKanapSinope);



//Récupération des information des produits depuis l'APi
fetch(`http://localhost:3000/api/products/${getKanapId()}`)
.then(function (res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function (product){
    // excécution fonction eponyme:
    displayKanap(product);
})

.catch(function (error) {
    console.log("une erreur est survenue");
});


//Fonction de gestion de l' affichage des informations liées au produit
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


}


// Gestion du LocalStorage (LS) et gestion des informations liés à l'ajout des produits
            

        //récupération bouton html
        const addToCartButton = document.getElementById('addToCart');
        console.log(addToCartButton);
        
        //Création de l'Event au clic
        addToCartButton.addEventListener('click', (event) => {
            
            // récupératin de la couleur
            const productOptions = document.getElementById('colors').value;
            // console.log(productOptions);

            //récupératin de la quantité
            const productQuantity = parseInt(document.getElementById('quantity').value);
            // console.log(productQuantity);
            
          
            if( (productQuantity <= 0 || productQuantity >100)|| productOptions == "" ){ 
                //s'il n'y a pas de quantités ou couleur sélectionné => message d'alerte
               alert('Veuillez vérifier les informations renseignées.');
                return;
            } 


            
            
            //Si LS existant =>Récupération des données et gestion.
            const id = getKanapId();
            let userDataStorage = localStorage.getItem('produit');
               

                if (userDataStorage){
                    let userDataChoose = JSON.parse(userDataStorage);
                    console.log(userDataChoose);
                    let modifyStorage = false;
                    
                

                    for (product of userDataChoose) {
                    
                        if(product._id === id && product.colors === productOptions){
                    
                            product.quantity = parseInt(product.quantity,10) + parseInt(productQuantity,10);
                            console.log(product.quantity)

                            console.log('dans if');
                            modifyStorage= true;

                           
                                
                        }
                        
                    }
                   
                    if( modifyStorage === false){ 
                        userDataChoose.push({
                            _id: id,
                            colors: productOptions,
                            quantity: productQuantity
                        }); 
                        console.log('hors for ', userDataChoose);
                        
                    }
                   
                   
                            
                    localStorage.setItem('produit', JSON.stringify(userDataChoose));

                    

                //Si LS vide => création de celui-ci
                } else {
                    
                    let userDataChoose =[{
                        _id: id,
                        colors: productOptions,
                        quantity: productQuantity
                    }];

                    console.log(userDataChoose);
                    
                    localStorage.setItem('produit', JSON.stringify(userDataChoose));
                };
                  
                alert('Article ajouté au panier')
        });




