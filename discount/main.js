let inputPrice = document.querySelector('#price'); 
let inputDiscount = document.querySelector('#discount');
let button = document.querySelector('.discount-apply-button');
let totalHome = document.querySelector('.total-home');
let totalHomeSpan = document.getElementById('token-generator-DTs');
let totalSavingSpan = document.getElementById('token-generator-STs');

button.addEventListener('click', discountApply)

function discountApply(){
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);
    totalHome.classList.remove('inactive');
    if(discount > 100){
        totalHomeSpan.innerHTML = "No es posible hacer un descuento por más de 100%";
        totalSavingSpan.innerHTML = "No es posible hacer un descuento por más de 100%";
    }
    else{
        let total = (price * (100 - discount))/100;
        console.log(total);
        let saving = price - total;
        saving = saving.toFixed(2)
    
        
        totalHomeSpan.innerHTML = total;
        totalSavingSpan.innerHTML = saving;
    }
}
