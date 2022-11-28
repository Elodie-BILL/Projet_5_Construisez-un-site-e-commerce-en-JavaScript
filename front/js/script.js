fetch("http://localhost:3000/api/products")
  .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    
    // Récupération de l'élèment HTML grâce à son id
    .then(function (products){
      for ( let product of products) {        
          
          let sectionItems = document.getElementById('items');
          console.log(sectionItems);
        
          let displayProduct = ` <a href="./product.html?id=${product._id}">
            <article>
              <img src="${product.imageUrl}" alt="${product.altTxt}">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription"> ${product.description}</p>
            </article>
          </a> `

          sectionItems.innerHTML+= displayProduct
        }
           
            
    })
    // Gestion des erreurs liées aux interrractions avec le serveur
    .catch(function (error) {
        // Une erreur est survenue
        console.log(error)
    })