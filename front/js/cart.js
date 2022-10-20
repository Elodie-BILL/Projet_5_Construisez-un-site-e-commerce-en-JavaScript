let cart = JSON.parse(localStorage.getItem('produit'));
console.log(cart);

let cartHtmlCode = document.getElementById('cart__items');
// console.log(cartHtmlCode);
  
let displayCart = '';

for ( product of cart){
  //console.log(product)  
  let productId = product._id;
  let productColor = product.colors;
  let productQuantity = product.quantity;
    
  displayCart = displayCart + ` <article class="cart__item" data-id=${productId} data-color="${productColor}">
          <div class="cart__item__img">
              <img src="" alt="Photographie d'un canapé">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__description">
                <h2> </h2>
                <p>${productColor}</p>
                <p> </p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté : </p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productQuantity}">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p class="deleteItem">Supprimer</p>
                </div>
              </div>
            </div>
            </article>`;
  cartHtmlCode.innerHTML= displayCart;
};

fetch(`http://localhost:3000/api/products`)
  .then(function(response){
      if (response){
        return response.json();
          
      }      
  })
  .then(function (products){
    console.log(products);

    products.forEach(element => console.log(element));
    let o = element[0];
    console.log(o);
   
    //  for ( let article of products){
    //     console.log(article);
    //     let code = document.getElementById('cart__items').getElementsByClassName('cart__item__content__description');
    //     console.log(code);
    //     let codeEdited = `<div class="cart__item__content__description">
    //     <h2>${article.name} </h2>
    //     <p>${productColor}</p>
    //     <p> ${article.price}</p>
    //     </div>`
    //     code.innerHTML=codeEdited;
    //   }
    

                
  
  })
  .catch(function (error) {
    console.log("une erreur est survenue");
  });
//












// console.log(displayCart);

    // Je veux selectionner les informations des articles dans products et
    //  les injecter dans le code HTML en fonction de _id déjà dans le panier

    // let apiData = document.getElementsByClassName('cart__item__content__description');
    // console.log(apiData);

    // for (article of products){
    //   // console.log(products);
    //   let price = article.price;
    //   let name = article.name;
    //   let picture = article.imageUrl;
    //   console.log(picture);

    // }
    

    // let article = products;
    // console.log(article);