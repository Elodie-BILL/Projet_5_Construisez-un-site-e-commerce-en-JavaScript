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

setTimeout(()=>{

    alert(" Merci pour votre commande")
    // document.location.replace("confirmation.html");
    document.location.replace("index.html");
    
}, 10000);

// information du formulaire

//Suppression panier
const deleteCart = localStorage.clear('produit');
console.log(JSON.parse(localStorage.getItem('produit')));










  




