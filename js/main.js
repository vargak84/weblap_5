function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.showAmount");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber
    
    if ( amountNumber > 10 ) {
        alert ("Maximum 10db vásárolható");
    } else if ( amountNumber < 1 ) {
        alert ("Minimum 1db-ot kell vásárolni");
    } else {
        let amount = amountNumber * price;

    showAmount.innerHTML = amount;
    }
    
}