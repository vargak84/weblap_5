function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber

    showSumPrice(price, amountNumber)
}

function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("span.showAmount");
    if ( amountNumber > 10 ) {
        alert ("Maximum 10db vásárolható");
    } else if ( amountNumber < 1 ) {
        alert ("Minimum 1db-ot kell vásárolni");
    } else {
        let amount = amountNumber * price;

    showAmount.innerHTML = amount;
    }
}

/* Nem működik!!!
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";

let parent =document.querySelector("div.form-group:nth-chilt(1)");
parent.appendChild(helpText);
*/

//select elem kitöltése

let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra sonka"
];

let toppingSelect =document.querySelector("#topInput");
let index = 0;
while(index < toppings.length ) {
    let option =document.createElement("option");
    option.value =toppings[index];
    option.innerHTML =toppings[index];
    toppingSelect.appendChild(option);
    index++;
}