// Récupération numérro de commande
function orderNumber(){
    const urlCartPage = document.location.href;
    const urlConfirmPage = new URL(urlCartPage);
    const orderIdNum = urlConfirmPage.searchParams.get("orderId");
};



let confirmNumber = document.getElementById("orderId");
console.log(confirmNumber);
confirmNumber.innerHTML = `${orderIdNum}` ; 