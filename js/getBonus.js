const get_bonus = document.getElementById("get_bonus");

get_bonus.addEventListener("click", function () {
  const CouponElement = document.getElementById("Coupon").value.trim();
  const availableBalanceElement = document.getElementById("available-Balance");
  let currentBalance = parseInt(availableBalanceElement.innerText) || 0;

  if (CouponElement === "ehasun_dev") {
    const bonusAmount = 100;

    // Balance add
    const newBalance = currentBalance + bonusAmount;
    availableBalanceElement.innerText = newBalance;

    // Save to LocalStorage
    localStorage.setItem("balance", newBalance);

    alert(`✅ Coupon applied! You received ${bonusAmount} TK`);
  } else {
    alert("❌ Invalid coupon code!");
  }

  // Clear input
  document.getElementById("Coupon").value = "";
});

// Page load এ আগের balance load করা
window.addEventListener("load", () => {
  const availableBalanceElement = document.getElementById("available-Balance");
  const savedBalance = localStorage.getItem("balance");
  if (savedBalance) {
    availableBalanceElement.innerText = savedBalance;
  }
});
