function getIdElement(id, flag = 0) {
    if (!flag) {
        console.log("flag is 0");
        return document.getElementById(id);
    }
    if (flag === 1) return parseFloat(document.getElementById(id));
    return parseFloat(document.getElementById(id).value);
}

let totalCost = getIdElement("total-expenses");
let balance = getIdElement("balance");
let savingAmount = getIdElement("saving-amount");
let remainingBalance = getIdElement("rem-balance");

getIdElement("calculate").addEventListener("click", function () {
    let food = getIdElement("food", 2);
    let rent = getIdElement("rent", 2);
    let clothes = getIdElement("clothes", 2);
    let income = getIdElement("income", 2);

    let totalExpenses = food + rent + clothes;

    totalCost.innerText = totalExpenses + "/=";
    balance.innerText = income - totalExpenses + "/=";
});

getIdElement("save-btn").addEventListener("click", function () {
    let savePercentage = getIdElement("save-percentage", 2);
    let income = getIdElement("income", 2);
    // let balance = getElementById('balance');

    balance = parseFloat(balance.innerText.split("/")[0]);

    let savedAmount = (savePercentage * income) / 100;
    savingAmount.innerText = savedAmount + "/=";
    remainingBalance.innerText = balance - savedAmount + "/=";
});
