let inputCoupon = document.querySelector('#input-coupon');
let valideButton = document.querySelector('.input-accept-button');

const codesOfDiscount = {
    zprah: 10,
    koche: 30,
    auron: 40,
    danmc: 10,
    progx: 25,
    byfac: 15,
    spren: 52,
}
valideButton.addEventListener('click', verifyCoupon)
function verifyCoupon(){
    if(codesOfDiscount[inputCoupon.value]){
        let price = prompt('Tienes un descuento de ' + codesOfDiscount[inputCoupon.value] + "% Escribe el precio del producto");
        let total = (price * (100 - codesOfDiscount[inputCoupon.value]))/100;
        alert("tienes que pagar: " + total + "$")
    }
    else {
        alert('No hemos encontrado tu codigo de descuento');
    }
}
