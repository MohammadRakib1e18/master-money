function getIdElement(id, flag = 0) {
    if (!flag) return document.getElementById(id);
    if (flag === 1) return parseFloat(document.getElementById(id));
    let value = parseFloat(document.getElementById(id).value);
    if (isNaN(value)) {
        return 0;
    }
    return value;
}

let totalCost = getIdElement("total-expenses");
let savingAmount = getIdElement("saving-amount");
let remainingBalance = getIdElement("rem-balance");
let balance = getIdElement("balance");
let allInputs = document.querySelectorAll("input");

for (let input of allInputs) {
    input.addEventListener("input", function () {
        console.log(input.value);

        if (isNaN(input.value)) {
            window.alert(
                "\nOnly 'Positive Number' is allowed\n\nPlease, Try again"
            );
            input.value = "";
        }
    });
}

getIdElement("calculate").addEventListener("click", function () {
    let food = getIdElement("food", 2);
    let rent = getIdElement("rent", 2);
    let clothes = getIdElement("clothes", 2);
    let income = getIdElement("income", 2);
    console.log(food, rent, clothes, income);

    let totalExpenses = food + rent + clothes;

    if (totalExpenses > income) {
        window.alert("Sorry! You can't spend more than your income.");
        for (let input of allInputs) {
            input.value = "";
            totalCost.innerText =  "0/=";
            balance.innerText = "0/=";
        }
        return;
    }

    totalCost.innerText = totalExpenses + "/=";
    balance.innerText = income - totalExpenses + "/=";

    if(getIdElement('save-percentage',2)) saveAmount();
});

let saveAmount = function(){
    let savePercentage = getIdElement("save-percentage", 2);
    let income = getIdElement("income", 2);
    let balance = getIdElement('balance');

    balance = parseFloat(balance.innerText.split("/")[0]);
    if (isNaN(balance)) balance = 0;
    console.log(balance);

    let savedAmount = parseFloat(((savePercentage * income)/100).toFixed(2));
    let balanceLeft = balance - savedAmount;
    if(balanceLeft<0){
        window.alert("\nSorry! You can't save more than your balance.");
        savedAmount=0;
        balanceLeft=balance; 
    }
    savingAmount.innerText = savedAmount + "/=";
    remainingBalance.innerText = balanceLeft + "/=";
}

getIdElement("save-btn").addEventListener("click", saveAmount);
