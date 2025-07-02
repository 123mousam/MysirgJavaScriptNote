/*
//Example-1 | Callback | Synchronous
function fun(f){
    
    console.log("I am fun, and going to call received callback");
    f();
}

fun(f1);
function f1(){
    console.log("Hello, I am a callback")
}
*/
/*
//Example-2 | Callback | Asynchronous 
function fun(f){
    setTimeout(f,3000);
}
fun(f1);
function f1(){
    console.log("Hello, I am a callback")
}
*/
/*
//Example-3 | setInterval, clearInterval | Asynchronous 
function fun(f){
    let id=setInterval(f,1000);
    return id;
}
let id=fun(f1);
let b1=document.getElementById("b1");
b1.addEventListener('click',()=>{
    clearInterval(id);
});
function f1(){
    console.log("Hello, I am a callback")
}
*/
/*
//Example-4 | Nested Callback | synchronous

function f1(i,f){
    console.log(i);
    if(f){
        f(i+1,()=>{
            f(i+2);
        });
    }
}
f1(1,f1);
*/
/*
//Example-5 | Nested Callback | asynchronous
// Callback Hell
// Callback hell is a situation in JS where callbacks are nested within other callbacks
// Pyramid of doom
function f1(i,f){
    setTimeout(()=>{
        console.log(i);
        if(f){
            f(i+1,()=>{
                f(i+2,()=>{
                    f(i+3);
                });
            });
        }
    },2000);
    
}
f1(1,f1);
*/
// Example-6 | Promise
// Three possible states of a Promise
// Pending, Fulfilled, Rejected
// Two aspects of a Promise:
// Producer of a Promise
// Consumer of a Promise

/*
//Producer code
let p=new Promise(function(resolve,reject){
    console.log("Mein Sarkar hun");
    let x=Math.round(Math.random()*10+1);
    if(x%2==0)
        resolve("Even number "+x); //on success
    else
        reject("Error due to odd number "+x); //on error
});

//Consumer Code
// p.then(()=>{
//     console.log("Resolve ho gaya");
// });
// p.catch(()=>{
//     console.log("Error aayi hai");
// });
p.then(()=>{
    console.log("Resolve ho gaya");
},()=>{
    console.log("Error aayi hai");
});
*/

/*
//Example-7 | someAPI
//Producer Code
function someAPI(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },5000);
    });
    return p1;
}

//Consumer Code
let p=someAPI();
p.then((result)=>{
    console.log(result);
},(msg)=>{
    console.log(msg);
});
*/
/*
//Example-8 | 
function someAPI1(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 1");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },4000);
    });
    return p1;
} 
function someAPI2(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 2");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },3000);
    });
    return p1;
} 

let p1=someAPI1();
p1.then((result)=>{
    console.log("p1",result);
},(msg)=>{
    console.log("p1",msg);
});
let p2=someAPI2();
p2.then((result)=>{
    console.log("p2",result);
},(msg)=>{
    console.log("p2",msg);
});
*/
/*
//Example-9 | Promise Chain
function someAPI1(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 1");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },4000);
    });
    return p1;
} 
function someAPI2(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 2");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },3000);
    });
    return p1;
} 

let p1=someAPI1();
p1.then((result)=>{
    console.log("p1",result);
    let p2=someAPI2();
    p2.then((result)=>{
        console.log("p2",result);
    },(msg)=>{
        console.log("p2",msg);
    });
},(msg)=>{
    console.log("p1",msg);
});
*/
/*
//Example-10 | Promise Chain | Better way to write code
function someAPI1(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 1");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },4000);
    });
    return p1;
} 
function someAPI2(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 2");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },3000);
    });
    return p1;
} 

someAPI1()
    .then((result)=>{
            console.log("p1",result);
            return someAPI2();
        },(msg)=>{
            console.log("p1",msg);
    })
    .then((result)=>{
            console.log("p2",result);
        },(msg)=>{
            console.log("p2",msg);
    });

*/
/*
//Example-11 | async and await
// async keyword makes a normal function asynchronous and it always return a promise.
async function f1(){
    console.log("Hello");
}
let p1=f1();
*/
/*
// Example-12 | async and await
//await can only be used inside an async function
//The await makes the function pause the execution and wait for a resolved promise before it continues.

function someAPI1(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 1");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },4000);
    });
    return p1;
} 
function someAPI2(){
    let p1=new Promise( function(resolve,reject){
        setTimeout(()=>{
            console.log("Mein Sarkar hun 2");
            let x=Math.round(Math.random()*10+1);
            if(x%2==0)
                resolve("Even number "+x); //on success
            else
                reject("Error due to odd number "+x); //on error
        },3000);
    });
    return p1;
} 
async function f1(){
    await someAPI1().then((result)=>{
        console.log("p1",result);
    },
    (msg)=>{
        console.log(msg);
    });
    
    await someAPI2().then((result)=>{
        console.log("p2",result);
    },
    (msg)=>{
        console.log(msg);
    });
}
f1();
*/
//Example-13 | fetch

url="https://official-joke-api.appspot.com/random_joke";
const getJoke=async ()=>{
    let p=await fetch(url);
    let j=await p.json();
    let jokediv=document.getElementById("joke");
    jokediv.innerHTML=j.setup;
    let btn=document.createElement("button");
    btn.innerHTML="?";
    btn.addEventListener('click',()=>{
        let punchlinediv=document.getElementById("punchline");
        punchlinediv.innerHTML=j.punchline;
        btn.remove();
    });
    jokediv.parentElement.appendChild(btn);

};
let b1=document.getElementById("b1");
b1.addEventListener('click',()=>{
    getJoke();
    b1.style.display="none";
    document.getElementById("punchline").innerHTML="";
});
