let cart = JSON.parse(localStorage.getItem('produit'));
// console.log(cart);

document.getElementById("totalQuantity").innerText = 0;
document.getElementById('totalPrice').innerText = 0;
let i =0;

cart.forEach((product, index) => {

  // console.log(product._id);
  let color = product.colors;
  let quantity = product.quantity;

  fetch(`http://localhost:3000/api/products/${product._id}`)
   .then(function(response){
      if (response){
        return response.json();
      }      
    })

    .then(function (product){
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
        const productSum = document.getElementById("totalQuantity");
        productSum.innerText= parseInt(productSum.textContent) + quantity;

        const sumProductPrice = document.getElementById("totalPrice");
        sumProductPrice.innerText= parseInt(sumProductPrice.textContent) + price * quantity;

      eventDeleteItem();
      eventUpdateItem();

      validUserData();

      dataPost();
     
   
           
    })
   

    .catch(function (error) {
      console.log("une erreur est survenue", error);
    });

    
  // console.log(cartHtmlCode);  
  // console.log(displayCart);
  
});

function eventDeleteItem() {
 
  //supprimer
  
  let deleteItems = document.getElementsByClassName('deleteItem');
  
  

  let i=0;
  for (let deleteItem of deleteItems) {

    deleteItem.id = i;
    i++;
  
    deleteItem.addEventListener('click', (event) => {
      let deleteItem = event.target;

      console.log('target', event.target)
      console.log('target', event.target.id)

      //console.log(cart);
      console.log(parseInt(deleteItem.id));
      cart.splice(parseInt(deleteItem.id),1);
      // console.log(deleteItem.id);
      // console.log(cart);
      

   localStorage.setItem('produit', JSON.stringify(cart))

      alert('Article supprimé ');
      
      window.location.reload();
    

    });
  
  };
};

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
      const quantity = itemQuantity.value;

      let cart = JSON.parse(localStorage.getItem('produit'));
      cart[indexProduct].quantity = parseInt(quantity);
      console.log(cart);
      localStorage.setItem('produit', JSON.stringify(cart))
      window.location.reload();
      if (quantity <= 0){
        let cart = JSON.parse(localStorage.getItem('produit'));
        alert('Quantité minimal: 1')
        itemQuantity.value = 1;
        cart[indexProduct].quantity = parseInt(quantity);
        console.log(itemQuantity);
        localStorage.setItem('produit', JSON.stringify(cart));
        console.log(itemQuantity);
        window.location.reload(); 
      } else if(quantity > 100 ) {
        let cart = JSON.parse(localStorage.getItem('produit'));     
        alert('Quantité maximal : 100')
        itemQuantity.value = 100;
        cart[indexProduct].quantity = parseInt(quantity);
        console.log(itemQuantity);
        localStorage.setItem('produit', JSON.stringify(cart));
        console.log(itemQuantity);
        window.location.reload(); 
        // Je veux que les quantités se modifient automatiquement dans le local storage.

        // les quantités modifiés disparaissent après le reload 
      }



    }));
  }

};

// Formulaire
function validUserData() {
  const form =  document.querySelector('.cart__order__form');
  // console.log(form); 
 for (input of form){
    //console.log(input);
    input.addEventListener('change', (e =>{
      validText();
      validAddress();
      validEmail();
      
     
    }))
  } 
};


function validText (inputText){
  let letterAndSymbols = /[a-zA-ZÀÉÈÇéèàç'-]/;

  //Prénom
  const firstNameContent = document.getElementsByClassName('firstName');
  const errorFName = document.getElementById('firstNameErrorMsg');
  console.log("le prénom : " + letterAndSymbols.test(firstNameContent).value);
  

  if (letterAndSymbols.test(inputText.value)){
    errorFName.innerHTML = 'Valide';
  }else if (letterAndSymbols.test(firstNameContent.value) === 0){
    error.innerHTML= 'Veuillez renseigner le champ manquant';
  }else{
    errorFName.innerHTML= 'Invalide'
  };

  //Nom
  const lastNameContent = document.getElementsByClassName('lastName');
  const errorLName = document.getElementById('lastNameErrorMsg');

  console.log("le nom de famille: " + letterAndSymbols.test(lastNameContent).value);

  if (letterAndSymbols.test(lastNameContent.value)){
    errorLName.innerHTML = 'Valide';
  }else if(letterAndSymbols===0) {
    errorLName.innerHTML = 'Veuillez renseigner le champ manquant';
  }else{
    errorLName.innerHTML = 'Invalide';
  }; 

  //Ville
  const cityContent = document.getElementsByClassName('city');
  const errorCity = document.getElementById('cityErrorMsg');

  console.log("le nom de la ville : " + letterAndSymbols.test(cityContent).value);

  if (letterAndSymbols.test(cityContent.value)){
    errorCity.innerHTML = 'Valide';
  }else if (letterAndSymbols.test(cityContent.value)===0){
    errorCity.innerHTML = 'Veuillez renseignez le champ manquant';
  }else{
    errorCity.innerHTML = 'Invalide';
  }; 

}

function validAddress (){

  const address = document.getElementsByClassName('address');
  const errorAddress = document.getElementById('addressErrorMsg');

  const validTempers = /[a-zA-Z0-9a-zA-ZÀÉÈÇéèàç'-]/;
  
  console.log("l 'adresse postale : " + validTempers.test(adress.value));


  if (validTempers.test(address.value)){
    errorAddress.innerHTML = 'Valide';
  }else if(validTempers.test(address.value)===0) {
    
     errorLName.innerHTML = 'Veuillez renseigner le champ manquant';
  }else{
    errorAddress.innerHTML= 'Invalide';
  };

};


function validEmail(){
  const email= document.getElementsByClassName('email');
  const error = document.getElementById('emailErrorMsg');
  // const emailText =/^[a-zA-Z0-9]+[.]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-z]{2,10}$/;
  const emailText=/^(([^<()[\]\\.,;:\s@\]+(\.[^<()[\]\\.,;:\s@\]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
 

  // console.log(error);

  console.log("l'adresse email :" + emailText.test(email.value));

 
  if (emailText.test(email.value)){
    error.innerHTML = 'Valide';
  } else if (emailText.test(email.value) === ''){
    //problème Les champs vident affiche 'valide'
    error.innerHTML= 'Veuillez renseigner l\'email';
  }else{
    error.innerHTML= 'Invalide';
  };
}; 

function dataPost(){
  let orderButton = document.getElementById('order');
  console.log(orderButton);

  orderButton.addEventListener('click',(e =>{
    
    fetch('http://localhost:3000/api/order' , {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body:JSON.stringify(cart)
      
    })
    .then(function (response){
      if (response.ok)
      return res.json();
    })
    .catch(function (error) {
      console.log("une erreur est survenue", error);
    });
  }));

};