const send_btn = document.getElementById("send_btn");

send_btn.addEventListener("click", function (e) {
  e.preventDefault();

  const userAccNum = document
    .getElementById("user_account_number")
    .value.trim();
  const amount = parseInt(document.getElementById("transfer_amount").value);
  const enteredPin = document.getElementById("transfer_pin").value.trim();
  const savedPin = localStorage.getItem("userPin");

  const availableBalanceElement = document.getElementById("available-Balance");
  let availableBalance = parseInt(availableBalanceElement.innerText);

  // PIN check
  if (enteredPin !== savedPin) {
    alert("❌ You entered a wrong pin");
    return;
  }

  // Account number check
  if (userAccNum.length !== 11 || isNaN(userAccNum)) {
    alert("❌ Enter a valid 11 digit account number");
    return;
  }

  // Amount check
  if (isNaN(amount) || amount <= 0) {
    alert("❌ Enter a valid amount");
    return;
  }

  // Sufficient balance check
  if (amount > availableBalance) {
    alert("❌ Insufficient balance");
    return;
  }

  // Deduct balance
  const newBalance = availableBalance - amount;
  availableBalanceElement.innerText = newBalance;

  // Save in LocalStorage
  localStorage.setItem("balance", newBalance);

  alert(`✅ Successfully transferred ${amount} to account ${userAccNum}`);
});
