function getInput() {
  const dipositInput = document.getElementById("deposit-input");
  const newDepositAmountText = dipositInput.value;
  const newDepositAmount = parseFloat(newDepositAmountText);
  dipositInput.value = "";
  return newDepositAmount;
}

document.getElementById("diposit-btn").addEventListener("click", function () {
  /* const dipositInput = document.getElementById("deposit-input");
  const newDepositAmount = dipositInput.value; */
  const newDepositAmount = getInput();

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
  const withdrawInput = document.getElementById("withdraw-input");
  const newWithdrawText = withdrawInput.value;
  const newWithdraw = parseFloat(newWithdrawText);

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

  withdrawInput.value = "";
});
