
let cart = JSON.parse(localStorage.getItem('produit'));
//  LA BOUCLE DANS FETCH OU FETCH DANS LA BOUCLE
// Recupération id dans l'url
function getKanapId() {
  const urlKanap = document.location.href; 
  const urlProduct = new URL(urlKanap);
  const idKanap = urlProduct.searchParams.get("id");
    return idKanap;
};

fetch(`http://localhost:3000/api/products/${getKanapId()}`)
.then(function(response){
  if (response){
    return response.json();
  }
});


for ( productInCart of cart){



}


// faire une requete fetch + mettre let display en dehors du fetch + remplacer les informations en string interpolation

  let cartHtmlCode = document.getElementById('cart__items');
  console.log(cartHtmlCode);
  
  let displayCart = ` <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
  <div class="cart__item__img">
    <img src="../images/product01.jpg" alt="Photographie d'un canapé">
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
  </article> `
  
cartHtmlCode.innerHTML= displayCart;




  
