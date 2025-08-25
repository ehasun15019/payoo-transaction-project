/* ================= Tabs System Start ================= */
const add_money_tab = document.getElementById("add_money_tab");
const cashout_tab = document.getElementById("cashout_tab");
const transfer_money_tab = document.getElementById("transfer_money_tab");
const get_bonous_tab = document.getElementById("get_bonous_tab");
const pay_bill_tab = document.getElementById("pay_bill_tab");
const transaction_tab = document.getElementById("transaction_tab");

const add_money_section = document.getElementById("add_money_section");
const cash_out_section = document.getElementById("cash_out_section");

add_money_tab.addEventListener("click", function () {
  add_money_section.style.display = "block";
  cash_out_section.style.display = "none";
});

cashout_tab.addEventListener("click", function () {
  add_money_section.style.display = "none";
  cash_out_section.style.display = "block";
});

/* ================= Tabs System End ================= */

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
