


// Recupération id dans l'url
let urlKanapSinope = document.location.href; 
let urlProduct = new URL(urlKanapSinope);
let idKanap = urlProduct.searchParams.get("id");
// console.log(idKanap);
// console.log(urlKanapSinope);


//Récupération des infos produits
fetch(`http://localhost:3000/api/products/${idKanap}`)
.then(function (res) {
    if (res.ok) {
        return res.json();
    }
})
.then(function (product){
    console.log(product);
 
   displayKanap(product)
   
})
.catch(function (error) {
    // "Une erreur est survenue";
    console.log(error)
});

function displayKanap (product){

    let kanapPic = document.getElementsByClassName("item__img");
    let displayKanapPic = `<img src="${product.imageUrl}" alt="${product.altTxt}" />`;
    kanapPic[0].innerHTML = displayKanapPic;

    let kanapTitle = document.getElementById('title');
    console.log(kanapTitle);
    kanapTitle.innerText = product.name;

    for ( colorsOptions of product.colors){
        console.log(colorsOptions);
        let kanapColors = document.getElementById('colors'); 
        kanapColors.innerHTML = ` <option value="colorsOptions"> ${colorsOptions} </option>`;
    }   


}

