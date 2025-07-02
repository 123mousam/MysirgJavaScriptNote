/*Function Declaration (named function)*/

function f1(){
    console.log("Hello");
}

/* Function expression */

const f2=function(){
    console.log("I am a function expression");
}

/* Arrow Function */

const f3= ()=> {
    console.log("f3 function");
    console.log("another line of f3 function");
};

/* Default Parameter */

function sayHi(name="Anonymous"){
    console.log("Hi, ",name);
}

/* Anonymous Function */

setTimeout(function(){
    console.log("I am anonymous");
},2000);

/* IIFE: Immediately Invoked Function Expression */

(function(){
    console.log("I am IIFE");
})();

/* arguments Object */

function f5(){
    for(let arg of arguments){
        console.log(arg);
    }
}
//f5("Bhopal","Jaipur","Patna","Indore");

/* Constructor Function */

function Person(username,age){
    
    this.username=username;
    this.age=age;
    console.log(this);
}

// const p1=new Person("Santosh",22);
// console.log(p1);

/* Generator Function */

function* counter(){
    yield 1;
    yield 2;
    yield 3;
}
const c=counter();
// console.log(c.next());
// console.log(c.next());
// console.log(c.next());
// console.log(c.next());
let obj;
obj=c.next();
while(!obj.done){
    console.log(obj.value);
    obj=c.next();
}

/* async function (2017) | We will see later */