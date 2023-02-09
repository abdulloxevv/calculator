const screen = document.getElementById("screen-input");
const store = document.getElementById("store");
const temp = { number: 0, operation: null };

function handleClick(element) {
  if (
    screen.value == "0" ||
    ["+", "-", "*", "/"].some((o) => o === screen.value)
  ) {
    screen.value = "";
  }
  screen.value += element.textContent;
}

function handleClear() {
  screen.value = "0";
  temp.number = 0;
  store.textContent = 0;
  temp.operation = null;
}

function handleDelete() {
  if (["+", "-", "*", "/"].some((o) => o === screen.value)) {
    screen.value = temp.number;
    temp.operation = null;
    return;
  }
  screen.value = screen.value.slice(0, screen.value.length - 1);
  if (screen.value.length == 0) {
    screen.value = 0;
  }
}

function handleDot() {
  if (screen.value.includes(".")) {
    return;
  }
  screen.value += ".";
}

function handlePercent() {
  screen.value = Number(screen.value) / 100;
}

function handleOperation(ops) {
  if (!["+", "-", "*", "/"].some((o) => o === screen.value)) {
    store.textContent = handleEqual();
    temp.number = Number(screen.value);
  }
  temp.operation = ops;
  screen.value = ops;
}

function handleEqual() {
  let anw = 0;
  switch (temp.operation) {
    case "+":
      anw = screen.value = temp.number + Number(screen.value);
      break;
    case "-":
      anw = screen.value = temp.number - Number(screen.value);
      break;
    case "*":
      anw = screen.value = temp.number * Number(screen.value);
      break;
    case "/":
      anw = screen.value = temp.number / Number(screen.value);
      break;
    default:
      break;
  }
  store.textContent = 0;
  temp.number = 0;
  temp.operation = null;
  return anw;
}
