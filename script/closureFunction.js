/**----------- closure -----------**/

document.getElementById("closureProblem").innerHTML = `<pre>function greet() {
  var name = 'Closure';
  function displayName() {
      return 'Success to accessing the name variable : ' + ' ' + name;
  }
  return displayName;
}
const g1 = greet();
console.log(g1());</pre>`;

function greet() {
  // variable defined outside the inner function
  var name = "Closure";
  // inner function
  function displayName() {
      // accessing name variable
      return "Success to accessing the name variable : " + " " + name;
  }
  return displayName;
}

const g1 = greet();
console.log(g1);
console.log(g1());

document.getElementById("closure").addEventListener("click", closure)

function closure() {
  document.getElementById("closureObject").innerHTML =
      "inner function display as object === " + g1;
  document.getElementById("closurePara").innerHTML = "<hr>";
  document.getElementById("closureResult").innerHTML = "Output is : " + g1();
}

/**====================================**/

function parent() {
  let names = "Mercuri";
  function child() {
      return names;
  }
  return child;
}
const result = parent();
console.log(result());
console.log(result());

/**======================================**/

function add() {
  var num = 5;
  function add1() {
      return num + num;
  }
  return add1;
}

const result1 = add();
console.log(result1());

/**----------- closure -----------**/