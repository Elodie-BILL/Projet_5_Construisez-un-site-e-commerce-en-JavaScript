// Récupération numérro de commande
function orderNumber(){
    const urlCart = document.location.href;
    console.log(urlCart);
    const urlConfirme = new URL(urlCart);
    const orderIdNum = urlConfirme.searchParams.get("id");
    console.log(orderIdNum);
        return orderIdNum;
};


// Afficher numéro de commande 
let confirmNumber = document.getElementById("orderId");
console.log(confirmNumber);
confirmNumber.innerText = `${orderNumber()}`; 


//Supprimer numéro de commande

setTimeout(function deleteOrderNumber(){
    
    if (orderNumber()){
        alert("le numéro de commande sera supprimé")
        document.location = "confirmation.html";

        let id = " supprimé "
        let confirmNumberCart = document.getElementById("orderId");
        confirmNumberCart.innerText = `${id}`;
             
    
        
    };
   
},5000 );

// supprimer le reload et information du formulaire

//Suppression panier
const deleteCart = localStorage.clear('produit');
console.log(JSON.parse(localStorage.getItem('produit')));










  




