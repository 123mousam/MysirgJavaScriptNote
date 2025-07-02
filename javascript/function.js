let x=10;
var a=20;

f2();
f1("Amit");
f1("Anubhav");
f1("Arjun");

function f1(username){
    let b=2;
    console.log(`Hello, ${username}`);
    function f2(){
        console.log("f2 function");
    }

}
/*

console.log("1");
setTimeout(function(){console.log("A");},0);
console.log("2");
console.log("3");
setTimeout(function(){console.log("B");},1000);
console.log("4");
console.log("5");
setTimeout(function(){console.log("C");},2000);
console.log("6"); */