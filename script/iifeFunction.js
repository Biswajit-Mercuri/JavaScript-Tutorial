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