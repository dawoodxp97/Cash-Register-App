const billAmount = document.querySelector("#bill-amount");

const checkButton = document.querySelector("#check");

const cashGiven = document.querySelector("#cash-given");

const errorMessage = document.querySelector("#error-message");

const numberOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

const rootElem = document.querySelector(":root");

checkButton.addEventListener(
  "click",
  (validateAmount = () => {
    hideMessage();
    if (billAmount.value > 0) {
      if (cashGiven.value >= billAmount.value) {
        const returnAmount = cashGiven.value - billAmount.value;
        calculateChange(returnAmount);
      } else {
        showMessage("😡 क्या आप बर्तन धोना चाहते हैं? 👊");
      }
    } else {
      showMessage("👎 Invalid Bill Amount. Please enter valid amount..!!  😲");
    }
  })
);
const hideMessage = () => {
  errorMessage.style.opacity = "0";
};
const calculateChange = (returnAmount) => {
  for (i = 0; i < availableNotes.length; i++) {
    const numOfNotes = Math.trunc(returnAmount / availableNotes[i]);
    returnAmount %= availableNotes[i];
    numberOfNotes[i].innerHTML = numOfNotes;
  }
};

const showMessage = (message) => {
  rootElem.style.setProperty("--primary-color", "#DC2626");
  setTimeout(function () {
    rootElem.style.setProperty("--primary-color", "#0fbeaa");
    errorMessage.innerHTML = "";
  }, 1100);
  errorMessage.style.opacity = "1";
  errorMessage.innerHTML = message;
};
