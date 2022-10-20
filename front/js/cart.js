// Gestion des articles du panier
let cart = JSON.parse(localStorage.getItem('produit'));
console.log(cart);


let displayCart = '';

for ( product of cart){
  console.log(product._id);
  


  
  
  
  let color = product.colors;
  let quantity = product.quantity;

  fetch(`http://localhost:3000/api/products/${product._id}`)
   .then(function(response){
    if (response){
      return response.json();
  
    }      
    })

    .then(function (product){

      console.log(product._id);
     
      let price = product.price;
      
      let name = product.name;
      let picture = product.imageUrl;
      let description = product.altTxt;
      console.log(price, name,color);

      displayCart = displayCart + ` <article class="cart__item" data-id="${price}" data-color="${color}">
        <div class="cart__item__img">
          <img src="${picture}" alt="${description}">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>${name} </h2>
            <p>"${color} "</p>
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
        cartHtmlCode.innerHTML= displayCart;
    })
    .catch(function (error) {
      console.log("une erreur est survenue");
    });


    let cartHtmlCode = document.getElementById('cart__items');
      // console.log(cartHtmlCode);  
    console.log(displayCart);
      
};

// Bouton supprimer
const deleteButton = document.getElementsByClassName('deleteItem')
// console.log(deleteButton);

deleteButton.addEventListener('click', (event) => {
 
 
 localStorage.removeItem();
});


//TOTAUX


 




 
 















// console.log(displayCart);

    // Je veux selectionner les informations des articles dans products et
    //  les injecter dans le code HTML en fonction de _id déjà dans le panier

    // let apiData = document.getElementsByClassName('cart__item__content__description');
    // console.log(apiData);

    // for (article of products){
    //   // console.log(products);
    //   
    //   console.log(picture);

    // }
    

    // let article = products;
    // console.log(article);