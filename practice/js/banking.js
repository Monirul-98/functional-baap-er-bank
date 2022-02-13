function getInput(inputId) {
  const getInput = document.getElementById(inputId);
  const inputValueText = getInput.value;
  const inputValue = parseFloat(inputValueText);
  getInput.value = "";
  return inputValue;
}
function totalAmount(totalId, value) {
  const total = document.getElementById(totalId);
  const previousTotalText = total.innerText;
  const previousTotal = parseFloat(previousTotalText);
  total.innerText = previousTotal + value;
}
function totalBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceText = balanceTotal.innerText;
  const previousBalance = parseFloat(previousBalanceText);
  return previousBalance;
}
function updateBalance(value, add) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalance = totalBalance();
  if (add == true) {
    balanceTotal.innerText = previousBalance + value;
  } else {
    balanceTotal.innerText = previousBalance - value;
  }
}

document.getElementById("diposit-btn").addEventListener("click", function () {
  const depositValue = getInput("deposit-input");

  if (depositValue > 0) {
    totalAmount("deposit-total", depositValue);
    updateBalance(depositValue, true);
  }
});
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawValue = getInput("withdraw-input");

  const balance = totalBalance();
  if (withdrawValue > 0 && withdrawValue < balance) {
    totalAmount("withdraw-total", withdrawValue);
    updateBalance(withdrawValue, false);
  }
  if (withdrawValue > balance) {
    alert("Please withdraw amount what you have in the account.");
  }
});
