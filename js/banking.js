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

document.getElementById("diposit-btn").addEventListener("click", function () {
  const newDepositAmount = getInput("deposit-input");

  addingTotal("deposit-total", newDepositAmount);

  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceText = balanceTotal.innerText;
  const previousBalance = parseFloat(previousBalanceText);
  const newBalance = previousBalance + newDepositAmount;
  balanceTotal.innerText = newBalance;
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdraw = getInput("withdraw-input");

  addingTotal("withdraw-total", newWithdraw);

  const totalBalance = document.getElementById("balance-total");
  const preBalanceText = totalBalance.innerText;
  const preBalance = parseFloat(preBalanceText);
  const balanceNew = preBalance - newWithdraw;
  totalBalance.innerText = balanceNew;
});
