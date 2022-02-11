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

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceText = balanceTotal.innerText;
  const previousBalance = parseFloat(previousBalanceText);
  if (isAdd == true) {
    balanceTotal.innerText = previousBalance + amount;
  } else {
    balanceTotal.innerText = previousBalance - amount;
  }
}

document.getElementById("diposit-btn").addEventListener("click", function () {
  const newDepositAmount = getInput("deposit-input");
  addingTotal("deposit-total", newDepositAmount);
  updateBalance(newDepositAmount, true);
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdraw = getInput("withdraw-input");
  addingTotal("withdraw-total", newWithdraw);
  updateBalance(newWithdraw, false);
});
