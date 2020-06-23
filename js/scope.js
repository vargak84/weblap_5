//Global scope
var globalName = "Joe";

function something() {
    var globalName = "jack";
    console.log(globalName);
}
something();

console.log(globalName);