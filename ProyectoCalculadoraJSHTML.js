let decimalCount = 0;
let operatorsCount = 0;

const displayNumber = document.getElementsByClassName("container-display")[0];
const captureNumber = document.querySelectorAll(".number");
captureNumber.forEach((item) => {
  item.addEventListener("click", (event) => {
    let operation = event.target.textContent;
    displayNumber.textContent += operation;
    operatorsCount = 0;
  });
});

const captureDot = document.querySelector(".operator-dot");
captureDot.addEventListener("click", (event) => {
  let capture = event.target.textContent;
  if (capture === ".") {
    decimalCount++;
  }
  if (capture === "." && decimalCount > 1) {
    return;
  }
  displayNumber.textContent += capture;
});

const capturDelete = document.querySelector(".delete");
capturDelete.addEventListener("click", () => {
  let erase = displayNumber.textContent;
  displayNumber.textContent = erase.slice(0, -1);
  decimalCount = 0;
  operatorsCount = 0;
});

const captureOperator = document.querySelectorAll(".operator");
captureOperator.forEach((item) => {
  //debugger;
  item.addEventListener("click", (event) => {
    let operation = event.target.textContent;
    switch (operation) {
      case "+":
        operatorsCount++;
        if (operatorsCount > 1) return;
        break;
      case "-":
        operatorsCount++;
        if (operatorsCount > 1) return;
        break;
      case "*":
        operatorsCount++;
        if (operatorsCount > 1) return;
        break;
      case "/":
        operatorsCount++;
        if (operatorsCount > 1) return;
        break;
    }
    displayNumber.textContent += operation;
    decimalCount = 0;
  });
});

const captureEqual = document.querySelector(".operator-equal");
captureEqual.addEventListener("click", () => {
  let operation = eval(displayNumber.textContent);
  displayNumber.textContent = shortDecimals(operation, 3);
  if (displayNumber.textContent === "Infinity") {
    displayNumber.textContent = "ERROR";
  }
  decimalCount = 0;
  operatorsCount = 0;
});

const captureReset = document.querySelector(".reset");
captureReset.addEventListener("click", () => {
  displayNumber.textContent = "";
  decimalCount = 0;
  operatorsCount = 0;
});

const equalReset = document.querySelector(".operator-equal");
equalReset.addEventListener("dblclick", () => {
  displayNumber.textContent = "";
  decimalCount = 0;
});

const sqrt = document.querySelector(".operator-sqrt");
sqrt.addEventListener("click", () => {
  let numberSQRT = displayNumber.textContent;
  displayNumber.textContent = shortDecimals(Math.sqrt(numberSQRT), 3);
});

const shortDecimals = (number, decimals) => {
  numeroRegexp = new RegExp("\\d\\.(\\d){" + decimals + ",}");
  if (numeroRegexp.test(number)) {
    return Number(number.toFixed(decimals));
  } else {
    return Number(number.toFixed(decimals)) === 0 ? 0 : number;
  }
};
