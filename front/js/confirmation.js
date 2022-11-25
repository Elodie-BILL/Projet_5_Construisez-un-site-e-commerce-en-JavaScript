// Récupération numérro de commande
function orderNumber(){
    const urlCart = document.location.href;
    console.log(urlCart);
    const urlConfirme = new URL(urlCart);
    const orderIdNum = urlConfirme.searchParams.get("id");
    console.log(orderIdNum);
        return orderIdNum;
};

function deleteOrderNumber(){
    const urlCart = document.location.href;
    const urlConfirme = new URL(urlCart);
    const orderIdNum = urlConfirme.searchParams.get("id");
    
    console.log(orderIdNum);
        return orderIdNum;
};


// Afficher numéro de commande 
let confirmNumber = document.getElementById("orderId");
console.log(confirmNumber);
confirmNumber.innerText = `${orderNumber()}`; 

//Suppression panier
const deleteCart = localStorage.clear('produit');
console.log(JSON.parse(localStorage.getItem('produit')));


// Supression numéro de commande
// window.location.reload();
deleteOrderNumber();

// if( closeWindow() ){ 
//     alert = ('Les informations sur cette page vont être supprimées. Etes-vous de vouloir quittez?');
//     const urlCart = document.location.href;
//     console.log(urlCart);
//     const urlConfirme = new URL(urlCart);
//     const orderIdNum = '';
//         return orderIdNum;

// }

// function closeWindow () { 
//     window.addEventListener("beforeunload", (event) =>{})
// };  




