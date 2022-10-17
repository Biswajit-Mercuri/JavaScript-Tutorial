try{
    var a=10;
    function f(){
        document.getElementById("letFunction").innerHTML = a;
    }
    f();
    document.getElementById("varFunction").innerHTML = a;
    
}catch(err){
    document.getElementById("constFunction").innerHTML = err.message;

}