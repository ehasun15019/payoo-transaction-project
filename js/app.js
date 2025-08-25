const loginSystem = document.getElementById("login-btn");

loginSystem.addEventListener("click", function (e) {
  e.preventDefault();

  const mobileNumberValue = document
    .getElementById("mobile-number")
    .value.trim();

  const pinNumberValue = document.getElementById("pin-number").value.trim();

  if (mobileNumberValue.length === 11 && pinNumberValue.length === 4) {
    // save the user-pin Number
    localStorage.setItem("userPin", pinNumberValue);
    alert(
      "saved the pin number. now you can use this pin in every transaction"
    );

    window.location.href = "./home.html";
  } else {
    alert("Mobile number must be 11 digits and PIN must be 4 digits!");
  }
});
