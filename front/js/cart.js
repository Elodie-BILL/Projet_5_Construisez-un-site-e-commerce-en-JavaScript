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
   
           
    })
   

    .catch(function (error) {
      console.log("une erreur est survenue", error);
    });

    
    
  // console.log(cartHtmlCode);  
  // console.log(displayCart);
  
});

validUserData();

dataPost();

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
      let quantity = itemQuantity.value;
 

      if( quantity <= 0  ){ 
        
        alert('La quantité doit est strictement comprise entre 1 et 100');
        quantity=1
        
      }  

      if (quantity > 100) {

        alert('La quantité doit est strictement comprise entre 1 et 100');
        quantity=100
      }  

      let cart = JSON.parse(localStorage.getItem('produit'));

      cart[indexProduct].quantity = parseInt(quantity);
      console.log(cart);
      localStorage.setItem('produit', JSON.stringify(cart))
      window.location.reload();

    }));
  }

};

// Formulaire
function validUserData() {

  const form = document.querySelector('.cart__order__form');
  console.log(form);

  // console.log(form); 
  for (input of form){
    //console.log(input);
    input.addEventListener('change', (e) =>{
      validText();
      validAddress();
      validEmail();
    })
  };
} 
  


function validText() {
  
  let letterAndSymbols = /^[a-zA-ZÀ-ÄÈ-ÏÑ-ÖÙ-Ýà-äè-öù-ÿ'-\s]+$/;
  console.log(letterAndSymbols);
  
  //Controle Prénom
  const firstNameContent = document.getElementById('firstName');
  // console.log(firstNameContent);
  const errorFName = document.getElementById('firstNameErrorMsg');
  console.log("le prénom : " + letterAndSymbols.test(firstNameContent.value));
  
  if (letterAndSymbols.test(firstNameContent.value)){
    errorFName.innerHTML = 'Valide';
  }else{
    errorFName.innerHTML= 'Invalide: Les chiffres ne sont pas acceptés';
  };

  // Controle nom de famille
  const lastNameContent = document.getElementById('lastName');
  // console.log(lastsNameContent);
  const errorLName = document.getElementById('lastNameErrorMsg');

  console.log("le nom de famille: " + letterAndSymbols.test(lastNameContent.value));

  if (letterAndSymbols.test(lastNameContent.value)){
    errorLName.innerHTML = 'Valide';
  }else{
    errorLName.innerHTML = 'Invalide: Les chiffres ne sont pas acceptés';
  }; 


  //Controle nom de la ville
  const cityContent = document.getElementById('city');
  const errorCity = document.getElementById('cityErrorMsg');

  console.log("le nom de la ville : " + letterAndSymbols.test(cityContent.value));

  if (letterAndSymbols.test(cityContent.value)){
    errorCity.innerHTML = 'Valide';
  }else{
    errorCity.innerHTML = 'Invalide: Les chiffres ne sont pas acceptés';
  }; 

}

function validAddress (){

  const address = document.getElementById('address');
  const errorAddress = document.getElementById('addressErrorMsg');

  const validTempers = /^[a-zA-Z0-9',\s]+$/;
  
  console.log("l 'adresse postale : " + validTempers.test(address.value));


  if (validTempers.test(address.value)){
    errorAddress.innerHTML = 'Valide';
  }else{
    errorAddress.innerHTML= 'Invalide: Ne pas utiliser de caractère spéciaux';
  };

};


function validEmail(){
  const email= document.getElementById('email');
  const error = document.getElementById('emailErrorMsg');
  const emailText =/^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$/;
  // console.log(error);
  console.log("l'adresse email :" + emailText.test(email.value));

 
  if (emailText.test(email.value)){
    error.innerHTML = 'Valide';
  }else{
    error.innerHTML= 'Invalide: veuillez respecter l\'instruction suivante exemple@exemple.fr';
  };
}; 



function dataPost(){
  
  let orderButton = document.getElementById('order');
  console.log(orderButton);

  orderButton.addEventListener('click',(e =>{
    console.log('le click fonctionne');

    fetch('http://localhost:3000/api/product/order' ,{
      method: 'POST',
      headers: {
        "Content-Type" : 'application/json;'
      },
      /*
      * body: 
      *
      * {
      * contact: {
      *   firstName: string,
      *   lastName: string,
      *   address: string,
      *   city: string,
      *   email: string
      * }
      * products: [string] <-- array of product _id
      * }
      * */
    })
    .then(function (response){
      if (response.ok)
      return 
      //oject contact et tableau produit et orderId
    })
    .then (console.log("ok"))

    .catch(function (error) {
      console.log("une erreur est survenue", error);
    });

  }));

};