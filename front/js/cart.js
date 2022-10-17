let cart = JSON.parse(localStorage.getItem('produit'));
console.log(cart);

// faire une requete fetch + mettre let display en dehors du fetch + remplacer les informations en string interpolation
const cartHtmlCode = document.getElementById('cart__items');
console.log(cartHtmlCode);
let displayCart = ` <article class="cart__item" data-id="${cart._id}" data-color="${cart.colors}">
  <div class="cart__item__img">
    <img src=${cart.imageUrl}>
  </div>
  <div class="cart__item__content">
    <div class="cart__item__content__description">
      <h2>${ cart.name }</h2>
      <p>${cart.colors}</p>
      <p>${cart.price}</p>
    </div>
    <div class="cart__item__content__settings">
      <div class="cart__item__content__settings__quantity">
        <p>Qté :${cart.quantity} </p>
        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
      </div>
      <div class="cart__item__content__settings__delete">
        <p class="deleteItem">Supprimer</p>
      </div>
    </div>
  </div>
</article> `;

for (cart of cart){
  fetch(`http://localhost:3000/api/products}`)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  // .then(function (cart){
    
  // })
  .catch(function (error) {
    console.log("une erreur est survenue");
  });



  // Je veux afficher chaque produit présent dans le LS
  
  displayCart
  cartHtmlCode.innerHTML= displayCart;

};









  



  





  
