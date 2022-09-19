
//récupération du produit à afficher
// first product : 'Kanap Sinopé'
let urlKanapSinope = document.location.href; 
let urlproduct = new URL(urlKanapSinope);
let idKanap = urlproduct.searchParams.get("id");
console.log(idKanap);


// * product's details
// * picture

//test 1:

/*;
console.log(sinopeKanap)*/

//test 2:
// let sinopePic = document.getElementsByClassName('item__img'); 
// let sinopeKanap = ' <img src="http://localhost:3000/images/kanap01.jpeg" alt="Photo d\'un canapé bleu, deux places" >';
// console.log(sinopeKanap)

//test 3:
fetch(`http://localhost:3000/api/products/${idKanap}`)
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function (product){
        let sinopePic = document.getElementsByClassName('item__img');
        let displaySinopePic = `<img src="${imageUrl}" alt="${altTxt}"/>`;

        sinopePic.innerHTML = displaySinopePic;
        // for ( let product of products) {
        //     // let sinopePic = document.getElementsByClassName('item__img'); 
        //     // let sinopeKanap = ' <img src="http://localhost:3000/images/kanap01.jpeg" alt="Photo d\'un canapé bleu, deux places" >';
        //     // sinopePic.innerHTML+= sinopeKanap
        // }  
        console.log(product)
    })
    .catch(function (error) {

            // Une erreur est survenue
            console.log(error)
        })   

        // On verra plus tard... :'(

        // reprise
//

//test 4:
/*fetch("http://localhost:3000/api/products")
.then(function (res) {
    if (res.ok) {
        return res.json();
    }
})
let imageUrl="http://localhost:3000/images/kanap01.jpeg"
const sinopePic = document.createElement(img);
sinopePic.src= imageUrl;*/

//test 5: 
// Je récupère les infos de l'API + je sélectionne celles dont j'ai besoin et je l'affiche sur la page
// fetch("http://localhost:3000/api/products")
// .then(function (res) {
//     if (res.ok) {
//         return res.json();
//     }
// })
// let sinopePic = document.getElementsByClassName('item__img');
// let sinopeKanap = `img src="${product.imageUrl}" alt="${product.altTxt}"`;

const idKanapSinope = window.location.search.split("?id=").join("");

console.log(idKanapSinope);

const kanapSinope = async () => {
       fetch ("http:localhost:3000/api/products/${idKanapSinope}")
        .then((res) => res.json())
        .then((promise) => {
            console.log(promise);
        });

};

console.log(kanapSinope);

// let imageUrl= 'http://localhost:3000/images/kanap01.jpeg';
// let altTxt = 'Photo d\'un canapé bleu, deux places';


const imageUrl = async () => {
        fetch ("http://localhost:3000/images/kanap01.jpeg")
        .then ((res) => res.json())
        .then((promise) => {
            console.log(promise);            
        });
};


const altTxt = async () => {
    fetch ("http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926".altTXT)
    .then ((res) => res.json())
    .then((promise) => {
        console.log(promise);            
    });
};

const sinopePic = document.getElementsByClassName('item__img');
console.log(sinopePic);



// console.log(displaySinopePic)


    


    



    
           
    

    
    

