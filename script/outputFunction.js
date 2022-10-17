/**-------Output Function-------**/

function innerFunction() {
  var inner = document.getElementById("inner")
  inner.innerHTML = ".innerHTML proerty display inside the HTML HTML by using a target element";
  var innerResult = document.getElementById("innerResult");
  if (innerResult.style.display === "none") {
      innerResult.style.display = "block";
  }
}

document.getElementById("innerResult").addEventListener("click", innerSolution);

function innerSolution() {
  var innerPara = document.getElementById("inner-Result");
  if (innerPara.style.display === "none") {
      innerPara.style.display = "block";
  }
}

function writeFunction() {
  document.write(`<h1> This is document.write <br> To go back to main page Click reload button </h1> <button onclick="window.location.reload()">Reload</button>`)
}

function alertFunction() {
  alert("This is alert message");

  var alertOutput = document.getElementById("alert");
  if (alertOutput.style.display === "none") {
      alertOutput.style.display = "block";
  }
}

function consoleFunction() {
  var consoleResult = document.getElementById("console");
  consoleResult.innerHTML = "To see functionality of console.log() open developer area by pressing F12 or Right Click => Inspect";

  console.log("We success to build console function");
}

/**-------Output Function-------**/