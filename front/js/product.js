
//récupération du produit à afficher
/*first product : 'Kanap Sinopé'
let urlKanapSinope = '107fb5b75607497b96722bda5b504926';
let urlOnLigne = new URLSearchParams(urlKanapSinope);
console.log (urlKanapSinope);*/


// * product's details
// * picture

//essai 1
/*let sinopePic = document.getElementsByClassName('item__img');
let sinopeKanap = `img src="${product.imageUrl}" alt="${product.altTxt}"`;
console.log(sinopeKanap)*/

//essai 2
// let sinopePic = document.getElementsByClassName('item__img'); 
// let sinopeKanap = ' <img src="http://localhost:3000/images/kanap01.jpeg" alt="Photo d\'un canapé bleu, deux places" >';
// console.log(sinopeKanap)

//essai 3
fetch("http://localhost:3000/api/products")
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function (products){
        for ( let product of products) {
            let sinopePic = document.getElementsByClassName('item__img'); 
            let sinopeKanap = ' <img src="http://localhost:3000/images/kanap01.jpeg" alt="Photo d\'un canapé bleu, deux places" >';
            sinopePic.innerHTML+= sinopeKanap
        }  
        
    })
    .catch(function (error) {

            // Une erreur est survenue
            console.log(error)
        })    

        // On verra plus tard... :'(

    


    



    
           
    

    
    

