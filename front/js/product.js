
// first product : 'Kanap Sinopé'
let urlKanapSinope = '107fb5b75607497b96722bda5b504926';
let urlOnLigne = new URLSearchParams(urlKanapSinope);
console.log (urlKanapSinope);

// product's details
// picture

/*let sinopePic = document.getElementsByClassName('item__img');
let sinopeKanap = `img src="${product.imageUrl}" alt="${product.altTxt}"`;
console.log(sinopeKanap)*/

let sinopePic = document.getElementsByClassName('item__img'); 
let sinopeKanap = ' <img src="http://localhost:3000/images/kanap01.jpeg" alt="Photo d\'un canapé bleu, deux places" >';
console.log(sinopeKanap)

sinopePic.innerHTML+= sinopeKanap
    



    
           
    

    
    

