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

      // window.location.reload();

      if (quantity <= 0){

        // let cart = JSON.parse(localStorage.getItem('produit'));

        
        alert('Quantité minimal: 1')
        
        itemQuantity.value = 1;
        
        cart[indexProduct].quantity = parseInt(quantity);
        console.log(itemQuantity);

        localStorage.setItem('produit', JSON.stringify(cart));
        console.log(itemQuantity);

        // window.location.reload(); 
      } if(quantity > 100 ) {
        // let cart = JSON.parse(localStorage.getItem('produit'));

        
        alert('Quantité maximal : 100')
        
        itemQuantity.value = 100;
         
        cart[indexProduct].quantity = parseInt(quantity);
        console.log(itemQuantity);
 
        localStorage.setItem('produit', JSON.stringify(cart));
        console.log(itemQuantity);
 
        // window.location.reload();

        // les quantités modofiés disparaissent après le reload
      }



    }));
  }

};




// Formulaire

const formFirstName = document.getElementsByClassName('firstName');
console.log(firstName);

let alpabet = / abcdefghijklmnopqrstuvwxyz /;
let symbols = /àéèç'-/;

let result = alpabet.exec(formFirstName);
console.log(result);




