let cart = JSON.parse(localStorage.getItem('produit'));
console.log(cart);



fetch(`http://localhost:3000/api/products`)
  
  .then(function(response){
    if (response){
      return response.json();
     
    }      
  })

  .then(function (products){
    // console.log(products)

    for (let article of products){
      console.log(article);
      
    }
    // let data = document.getElementsByClassName('cart__item__content__description');
    // console.log(data);
        
  })

  .then((product)=>{
    let cartHtmlCode = document.getElementById('cart__items');
    // console.log(cartHtmlCode);

    let displayCart = ''; 

    for ( product of cart){
      //console.log(product);

      displayCart = displayCart + ` <article class="cart__item" data-id=${product._id} data-color="${product.colors}">
      <div class="cart__item__img">
          <img src="" alt="Photographie d'un canapé">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>Nom du produit</h2>
            <p>Vert</p>
            <p>42,00 €</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
        </article>`;

      cartHtmlCode.innerHTML= displayCart;

      // console.log(displayCart);
    
    }
  })
  
    
    .catch(function (error) {
      
      console.log("une erreur est survenue");
  })

// trouve solution pour récupérer les infos dans la liste de produits en fonctiond 
// e l'ide du produit qui est dans le panier à vhaque tour de boucle