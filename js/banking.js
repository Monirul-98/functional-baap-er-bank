function getInput(inputId) {
  const inputValue = document.getElementById(inputId);
  const InputAmountText = inputValue.value;
  const inputAmount = parseFloat(InputAmountText);
  inputValue.value = "";
  return inputAmount;
}
function addingTotal(totalInputId, amount) {
  const totalInput = document.getElementById(totalInputId);
  const previousTotalInputText = totalInput.innerText;
  const previousTotalInput = parseFloat(previousTotalInputText);
  totalInput.innerText = amount + previousTotalInput;
}
function balance() {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceText = balanceTotal.innerText;
  const previousBalance = parseFloat(previousBalanceText);
  return previousBalance;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalance = balance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalance + amount;
  } else {
    balanceTotal.innerText = previousBalance - amount;
  }
}

document.getElementById("diposit-btn").addEventListener("click", function () {
  const newDepositAmount = getInput("deposit-input");
  if (newDepositAmount > 0) {
    addingTotal("deposit-total", newDepositAmount);
    updateBalance(newDepositAmount, true);
  }
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdraw = getInput("withdraw-input");
  const balanceTotal = balance();
  if (newWithdraw > 0 && newWithdraw < balanceTotal) {
    addingTotal("withdraw-total", newWithdraw);
    updateBalance(newWithdraw, false);
  }
  if (newWithdraw > balanceTotal) {
    alert("Please withdraw amount what you have on your account!");
  }
});
