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
    document.write("<h1> This is document.write <br> To go back to main page reload the web page </h1>")
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


/**----------- onClick Event with IIFE function-----------**/

var IIFE = document.getElementById("displayIIFE");
IIFE.innerHTML = `<pre>(function () {
    document.getElementById("IIFE").innerHTML = "IIFE function Success";
    (function (a, b) {
        document.getElementById("display").innerHTML = "Result is : " + (a + b);
    })(10, 20);
  })();</pre>`;

document.getElementById("clickMe").addEventListener("click", myFunction);



function myFunction() {
    (function () {
        document.getElementById("IIFE").innerHTML = "IIFE function Success";
        (function (a, b) {
            document.getElementById("display").innerHTML = "Result is : " + (a + b);
        })(10, 20);
    })();

    console.log("Success to display IIFE function");
}

/**----------- onClick Event with IIFE function-----------**/

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

/**----------- create a new array -----------**/

arr = [2, 3, 4, 5];
let newarr = arr.map((x) => {
    return (x = x * 4);
});
console.log(newarr);

/**----------- create a new array -----------**/


/**--------------- Toggle Button -------------------**/

var paraResult = document.getElementById("tpara")
paraResult.innerHTML = `Let's create nested button
On 3rd button we have solution
`;

document.getElementById("btn-1").addEventListener("click", toggleButton);

function toggleButton() {
    console.log("button 2 succcess");
    var btn = document.getElementById("btn-2");
    if (btn.style.display === "none") {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

document.getElementById("btn-2").addEventListener("click", btnTwo)

function btnTwo() {
    console.log("button 3rd is success");
    var btn2 = document.getElementById("btn-3");
    if (btn2.style.display === "none") {
        btn2.style.display = "block";
    } else {
        btn2.style.display = "none";
    }
}

document.getElementById("btn-3").addEventListener("click", solution)

function solution() {
    var sol = document.getElementById("t-result");

    if (sol.style.display === "none") {
        sol.style.display = "block";
    } else {
        sol.style.display = "none";
    }
}

document.getElementById("t-result").addEventListener("click", toggleSolv);

function toggleSolv() {
    let tR = document.getElementById("toggleResult");

    if (tR.style.display === "none") {
        tR.style.display = "block";
    } else {
        tR.style.display = "none";
    }
}
/**--------------- Toggle Button -------------------**/


