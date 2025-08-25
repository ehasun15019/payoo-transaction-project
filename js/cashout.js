/* ================= Cash Out Working Start ================= */
const cashOutBtn = document.getElementById("cash_out_btn");

cashOutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const agentNum = document.getElementById("agent_number").value.trim();
  const amount = parseInt(document.getElementById("subtracted_amount").value);
  const enteredPin = document.getElementById("add-pin").value.trim();
  const savedPin = localStorage.getItem("userPin");

  // pin check
  if (enteredPin !== savedPin) {
    alert("You entered a wrong pin");
    return;
  }

  // agent number check
  if (agentNum.length !== 11 || isNaN(agentNum)) {
    alert("Enter a valid 11 digit agent number");
    return;
  }

  const availableBalanceElement = document.getElementById("available-Balance");
  let availableBalance = parseInt(availableBalanceElement.innerText);

  // amount check
  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid amount to withdraw");
    return;
  }

  // sufficient balance check
  if (amount > availableBalance) {
    alert("Insufficient balance");
    return;
  }

  // balance minus
  const newBalance = availableBalance - amount;
  availableBalanceElement.innerText = newBalance;

  // save in localStorage
  localStorage.setItem("balance", newBalance);

  alert("Cash out successful!");
});

// page load এ আগের balance load করা
window.addEventListener("load", () => {
  const availableBalanceElement = document.getElementById("available-Balance");
  const savedBalance = localStorage.getItem("balance");
  if (savedBalance) {
    availableBalanceElement.innerText = savedBalance;
  }
});
/* ================= Cash Out Working End ================= */
