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