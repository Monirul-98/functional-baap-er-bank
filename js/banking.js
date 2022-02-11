function getInput(inputId) {
  const inputValue = document.getElementById(inputId);
  const InputAmountText = inputValue.value;
  const inputAmount = parseFloat(InputAmountText);
  inputValue.value = "";
  return inputAmount;
}

document.getElementById("diposit-btn").addEventListener("click", function () {
  /* const dipositInput = document.getElementById("deposit-input");
  const newDepositAmount = dipositInput.value; */
  const newDepositAmount = getInput("deposit-input");

  const totalDeposit = document.getElementById("deposit-total");
  const previousDepositText = totalDeposit.innerText;
  const previousDeposit = parseFloat(previousDepositText);
  const totalDepositAmount = newDepositAmount + previousDeposit;
  totalDeposit.innerText = totalDepositAmount;

  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceText = balanceTotal.innerText;
  const previousBalance = parseFloat(previousBalanceText);
  const newBalance = previousBalance + newDepositAmount;
  balanceTotal.innerText = newBalance;
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  /*  const withdrawInput = document.getElementById("withdraw-input");
  const newWithdrawText = withdrawInput.value;
  const newWithdraw = parseFloat(newWithdrawText); */
  const newWithdraw = getInput("withdraw-input");

  const withdrawtotal = document.getElementById("withdraw-total");
  const previousWithdrawText = withdrawtotal.innerText;
  const previousWithdraw = parseFloat(previousWithdrawText);
  const totalWithdrawAmount = newWithdraw + previousWithdraw;
  withdrawtotal.innerText = totalWithdrawAmount;

  const totalBalance = document.getElementById("balance-total");
  const preBalanceText = totalBalance.innerText;
  const preBalance = parseFloat(preBalanceText);
  const balanceNew = preBalance - newWithdraw;
  totalBalance.innerText = balanceNew;
});
