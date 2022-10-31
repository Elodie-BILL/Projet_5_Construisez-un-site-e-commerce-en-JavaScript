let cart = JSON.parse(localStorage.getItem('produit'));
// console.log(cart);
document.getElementById("totalQuantity").innerText = 0;
document.getElementById('totalPrice').innerText = 0;

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


  for (let deleteItem of deleteItems) {
 

    deleteItem.addEventListener('click', (event) => {
    
      alert('ok');
      window.location.reload();

    })

    
  };
}

function eventUpdateItem() {
  
}



//Gestion suppression article 
// const deleteItem = document.getElementById('totalQuantity');
// deleteItem.closest('')
// console.log(deleteItem.closest('section'));
// const actionToClear = deleteItem.closest('section');

// const deleteItem = document.getElementsByClassName('deleteItems');
// console.log(deleteItem);
// deleteItem.forEach(() => {
//   article.addEventListener('click', (event => {
  
//     delete article;
//     localStorage.removeItem(product._id)
//   }));
// });

// Formulaire

const form = document.getElementsByClassName('cart__order__form')[0];
console.log(form.firstName);
// let a = form[1];
// console.log(a);

form.addEventListener('', function(event) {
  output.innerHTML = event.target.value; 
});