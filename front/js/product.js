


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

   let kanapColors = document.getElementById('colors');
   kanapColors.innerHTML = '<option value="">--SVP, choisissez une couleur --</option>';
    for ( colorsOptions of product.colors){
        console.log(colorsOptions);
        kanapColors.innerHTML += `<option value="colorsOptions"> ${colorsOptions}</option> `;
    };
   
    
              
  
};




// let colorsOptions = [product.colors];
// colorsOptions.forEach (element=> console.log(element));
    
    

    // for (i of product.colors){
    //     console.log(i);
    //     colorsOptions= i;

    // } 
    // for ( i of colorsOptions){
    //     console.log(i);
    //     let kanapColors = document.getElementById('colors'); 
    //     kanapColors.innerHTML = `<option value="colorsOptions"> ${i}</option> `;
        
   

    // }

  
   
        // color.product=[]
        // function optionForColor(color) {
        //  return <options value=color>color<options>
        // }
        // color.forEach(elt => KanapColor.innerHTML = optionForColor(elt))
         // function colorsOptions(color) {
        //      return `<option value="colorsOptions"> ${color}</option>`
        //     };
        // };
        // colorsOptions.forEach(colorsOptions => console.log(colorsOptions));

        // function optionsForColors(product){ 
        //     colorsOptions.forEach(kanapColors =>
        //     console.log(kanapColors));            
        // };       

         // for (colorsOptions of kanapColors){
        //     console.log(`<option value="colorsOptions"> ${colorsOptions}</option> `)
        // }
        // colorsOptions.array.forEach(kanapColors => {
        //     console.log(kanapColors)
        // });
        
        // for colorsOptions (let i =0 ; i<colorsOptions.lenght; i+=1){
        //     console.log(colorsOptions[i])
        // }