/* ================= Add Money Working Start ================= */
const addMoney = document.getElementById("add-money");

addMoney.addEventListener("click", function (e) {
  e.preventDefault();

  const bank = document.getElementById("bank").value;

  // Bank Account Number
  const bankAccNum = document.getElementById("bank-account-number").value;

  const amount = parseInt(document.getElementById("add-amount").value);

  // pin related working start
  const enteredPin = document.getElementById("add-pin").value.trim();
  const savedPin = localStorage.getItem("userPin");

  if (enteredPin !== savedPin) {
    alert("you are giving a wrong pin");
    return;
  }

  const availableBalanceElement = document.getElementById("available-Balance");
  const availableBalance = parseInt(availableBalanceElement.innerText);

  // checking bank account 11 digit
  if (bankAccNum.length !== 11) {
    alert("Enter valid 11 digit bank account");
    return;
  }

  const totalNewBalance = amount + availableBalance;

  if ((availableBalanceElement.innerText = totalNewBalance)) {
    alert("Money added in mai balance");
  }

  localStorage.setItem("balance", totalNewBalance);
});

// page load এ আগের balance load করা
window.addEventListener("load", () => {
  const availableBalanceElement = document.getElementById("available-Balance");
  const savedBalance = localStorage.getItem("balance");
  if (savedBalance) {
    availableBalanceElement.innerText = savedBalance;
  }
});
/* ================= Add Money Working End ================= */
