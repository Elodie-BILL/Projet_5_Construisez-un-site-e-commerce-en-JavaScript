// Récupération du LocalStorage
let cart = JSON.parse(localStorage.getItem('produit'));
// console.log(cart);


// Récupération des informations en vu de l'affichage du prix tolal et de la quantité finale des articles
document.getElementById("totalQuantity").innerText = 0;
document.getElementById('totalPrice').innerText = 0;
let i = 0;

cart.forEach((product, index) => {

  // console.log(product._id);
  let color = product.colors;
  let quantity = product.quantity;

  // Récupération de l'ID du produit dans l'APi.
  fetch(`http://localhost:3000/api/products/${product._id}`)
    .then(function (response) {
      if (response) {
        return response.json();
      }
    })
    // Fonction chargée de placer les informations du produits en variable et les placés dans le code html par string concaténation 
    .then(function (product) {
      // console.log(product._id);

      let price = product.price;
      let name = product.name;
      let picture = product.imageUrl;
      let description = product.altTxt;
      // console.log(price, name,color);


      let displayCart = `
        <article class="cart__item" data-id="${product._id}" data-color="${color}">
          <div class="cart__item__img">
            <img src="${picture}" alt="${description}">
          </div>
          <div class="cart__item__content">
            <div class="cart__item__content__description">
              <h2>${name} </h2>
              <p>${color} </p>
              <p>${price}</p>
            </div>
            <div class="cart__item__content__settings">
              <div class="cart__item__content__settings__quantity">
                <p>Qté : </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${quantity}">
              </div>
              <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
              </div>
            </div>
          </div>
        </article>`;

      let cartHtmlCode = document.getElementById('cart__items');
      cartHtmlCode.innerHTML += displayCart;
      // console.log(displayCart);


      // Sommes des quantités et des tarifs - totaux
    
      const productSum = document.getElementById("totalQuantity");
      productSum.innerText = parseInt(productSum.textContent) + quantity;

      const sumProductPrice = document.getElementById("totalPrice");
      sumProductPrice.innerText = parseInt(sumProductPrice.textContent) + price * quantity;

      // Supression
      eventDeleteItem();
      //Modification quantité
      eventUpdateItem();


    })


    .catch(function (error) {
      console.log("une erreur est survenue", error);
    });



  // console.log(cartHtmlCode);  
  // console.log(displayCart);

});
//Controle formulaire
validUserData();

let orderButton = document.getElementById('order');
orderButton.addEventListener('click', (e) => {
  e.preventDefault();
  dataPost();
});


// fonction gestionnaire de la suppression d'article dans le panier
function eventDeleteItem() {

  //supprimer

  let deleteItems = document.getElementsByClassName('deleteItem');



  let i = 0;
  for (let deleteItem of deleteItems) {

    deleteItem.id = i;
    i++;

    deleteItem.addEventListener('click', (event) => {
      let deleteItem = event.target;

      console.log('target', event.target)
      console.log('target', event.target.id)

      //console.log(cart);
      console.log(parseInt(deleteItem.id));
      cart.splice(parseInt(deleteItem.id), 1);
      // console.log(deleteItem.id);
      // console.log(cart);


      localStorage.setItem('produit', JSON.stringify(cart))

      alert('Article supprimé ');

      window.location.reload();


    });


    
  };
};

// fonction gestionnaire de la modification des quantités d'article dans le panier
function eventUpdateItem() {

  const itemQuantityList = document.getElementsByClassName('itemQuantity');

  let index = 0;
  for (let itemQuantity of itemQuantityList) {

    itemQuantity.id = index;
    index++;

    itemQuantity.addEventListener('change', (event => {

      const itemQuantity = event.target;
      console.log(itemQuantity);
      const indexProduct = itemQuantity.id;
      let quantity = itemQuantity.value;


      if (quantity <= 0) {

        alert('La quantité doit est strictement comprise entre 1 et 100');
        quantity = 1

      }

      if (quantity > 100) {

        alert('La quantité doit est strictement comprise entre 1 et 100');
        quantity = 100
      }

      let cart = JSON.parse(localStorage.getItem('produit'));

      cart[indexProduct].quantity = parseInt(quantity);
      console.log(cart);
      localStorage.setItem('produit', JSON.stringify(cart))
      window.location.reload();

    }));
  }

};

// Controle des information entrées dans le formulaire
function validUserData() {

  const form = document.querySelector('.cart__order__form');
  console.log(form);

  // console.log(form); 
  for (input of form) {
    //console.log(input);
    input.addEventListener('change', (e) => {
      validText();
      validAddress();
      validEmail();

    })
  };

}

// Fonction des gestions des expressions régulère ( RegExp)
function validText() {

  let letterAndSymbols = /^[a-zA-ZÀ-ÄÈ-ÏÑ-ÖÙ-Ýà-äè-öù-ÿ'-\s]+$/;
  // console.log(letterAndSymbols);
  const ok = true;
  

  //Controle Prénom

  const firstNameContent = document.getElementById('firstName');
  // console.log(firstNameContent);
  const errorFName = document.getElementById('firstNameErrorMsg');
  console.log("le prénom : " + letterAndSymbols.test(firstNameContent.value));

  if (letterAndSymbols.test(firstNameContent.value)) {
    errorFName.innerHTML = 'Valide';
    console.log("le if est : " + ok);
  } else {
    errorFName.innerHTML = 'Invalide: Les chiffres ne sont pas acceptés';
    console.log("le if est : " );
  };

  // Controle nom de famille

  const lastNameContent = document.getElementById('lastName');
  // console.log(lastsNameContent);
  const errorLName = document.getElementById('lastNameErrorMsg');

  console.log("le nom de famille: " + letterAndSymbols.test(lastNameContent.value));

  if (letterAndSymbols.test(lastNameContent.value)) {
    errorLName.innerHTML = 'Valide';
    ok;
  } else {
    errorLName.innerHTML = 'Invalide: Les chiffres ne sont pas acceptés';
    
  };


  //Controle du nom de la ville

  const cityContent = document.getElementById('city');
  const errorCity = document.getElementById('cityErrorMsg');

  console.log("le nom de la ville : " + letterAndSymbols.test(cityContent.value));

  if (letterAndSymbols.test(cityContent.value)) {
    errorCity.innerHTML = 'Valide';
    return ok;
  } else {
    errorCity.innerHTML = 'Invalide: Les chiffres ne sont pas acceptés';
    
  };

}
// Adresse
function validAddress() {

  const address = document.getElementById('address');
  const errorAddress = document.getElementById('addressErrorMsg');

  const validTempers = /^[a-zA-Z0-9',\s]+$/;

  console.log("l 'adresse postale : " + validTempers.test(address.value));


  if (validTempers.test(address.value)) {
    errorAddress.innerHTML = 'Valide';
    return true;
  } else {
    errorAddress.innerHTML = 'Invalide: Ne pas utiliser de caractère spéciaux';
    return false;
  };

};

// Email
function validEmail() {
  const email = document.getElementById('email');
  const error = document.getElementById('emailErrorMsg');
  const emailText = /^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$/;
  // console.log(error);
  console.log("l'adresse email :" + emailText.test(email.value));


  if (emailText.test(email.value)) {
    error.innerHTML = 'Valide';
    return true;
  } else {
    error.innerHTML = 'Invalide: veuillez respecter l\'instruction suivante exemple@exemple.fr';
    return false;
  };
};

// Fonction gestionnaire de l'envoie du panier et du formulaire au serveur
function dataPost() {

  //Vérification  de la présence d'information valide dans le formulaire
  if (!(validText() && validAddress() && validEmail())) {
    alert('Erreur d\'envoi au serveur')
    return;
  }


  // Récupération des données du ormulaire
  let fName = document.getElementById('firstName').value;
  let lName = document.getElementById('lastName').value;
  let address = document.getElementById('address').value;
  let cityName = document.getElementById('city').value;
  let email = document.getElementById('email').value;

  let productsArray = [];

  //Récupérération LocalStorage
  let productInCart = JSON.parse(localStorage.getItem('produit'));
  // console.log(productInCart);

  //Envoie au serveur

  for (let product of productInCart) {

    let productId = product._id;
    // console.log(productId);

    productsArray.push(productId);

  }
  // console.log(productsArray);

  const options = {

    method: 'POST',
    headers: { 'Accept': 'application/json', "Content-Type": 'application/json' },
    body: JSON.stringify({
      contact: {
        firstName: fName,
        lastName: lName,
        address: address,
        city: cityName,
        email: email
      },
      products: productsArray
    })

  };
  console.log('options dataPost()', options);
  


  fetch('http://localhost:3000/api/products/order', options)

    .then(function (response) {
      if (response.ok)
        return response.json();

    })
    .then(function (response) {
      console.log(response);
      //Récupération numéro de commande
      const orderId = response.orderId;
      console.log(orderId)

      //Redirection vers page confirmation avec id Confirmation dans l'url
      return document.location = `confirmation.html?id=${orderId}`;
    })
    
    .catch(function (error) {
      console.log("une erreur est survenue", error);
    });

  console.log('finale');
};

