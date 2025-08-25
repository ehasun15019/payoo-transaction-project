const add_money_tab = document.getElementById("add_money_tab");
const cashout_tab = document.getElementById("cashout_tab");
const transfer_money_tab = document.getElementById("transfer_money_tab");
const get_bonous_tab = document.getElementById("get_bonous_tab");
const pay_bill_tab = document.getElementById("pay_bill_tab");
const transaction_tab = document.getElementById("transaction_tab");

const add_money_section = document.getElementById("add_money_section");
const cash_out_section = document.getElementById("cash_out_section");

const transfer_money_section = document.getElementById(
  "transfer_money_section"
);

// Function to show a tab and save to localStorage
function showTab(tabName) {
  if (tabName === "add_money") {
    add_money_section.style.display = "block";
    cash_out_section.style.display = "none";
    transfer_money_section.style.display = "none";
  } else if (tabName === "cashout") {
    add_money_section.style.display = "none";
    cash_out_section.style.display = "block";
    transfer_money_section.style.display = "none";
  } else if (tabName === "transfer_money") {
    add_money_section.style.display = "none";
    cash_out_section.style.display = "none";
    transfer_money_section.style.display = "block";
  }

  localStorage.setItem("activeTab", tabName); // Save active tab
}

// Load last active tab from localStorage or default to 'add_money'
const lastTab = localStorage.getItem("activeTab") || "add_money";
showTab(lastTab);

add_money_tab.addEventListener("click", () => showTab("add_money"));
cashout_tab.addEventListener("click", () => showTab("cashout"));
transfer_money_tab.addEventListener("click", () => showTab("transfer_money"));
