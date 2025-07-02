/*
//Control Instructions
1) Decision Control
2) Iterative Control
3) Switch case control

Decision Control
1) if
2) if else
3) if else if
4) ?:

switch case control

Iterative Control (Loop)
1) while 
2) do while
3) for 
4) for in 
5) for of

*/

// let x=0;
// if(x>0){
//     console.log("Positive");
// }
// if(x<=0){
//     console.log("Non Positive");
// }

// let x=10;
// if(x>0){
//     console.log("Positive");
// }
// else{
//     console.log("Non Positive");
// }

// let marks=60;
// if(marks>=90){
//     console.log("Outstanding");
// }
// else if(marks>=80){
//     console.log("Excellent");
// }
// else if(marks>=70){
//     console.log("Very Good");
// }
// else if(marks>=60){
//     console.log("Good");
// }
// else if(marks>50){
//     console.log("Satisfactory");
// }
// else if(marks>=40){
//     console.log("Bach gaye");
// }
// else {
//     console.log("Padhai chhod do");
// }

//condition?Expression1:Expression2;
// let x=-25;
// console.log(x>0?"Positive":"Non Positive");

let x=true;
let y=1;
switch(x)
{
    case y>0:
        console.log("Sunday");
    case 2:
        console.log("Monday");
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
    case 7:
        console.log("Saturday");
    default:
        console.log("Invalid Value");
}


//Conversion
// let x=" 12 ";
// x=Number(x);
// console.log(typeof x,x);

// let x="25.34";
// x=parseInt(x);
// console.log(typeof x,x);

// let x=25;
// let y=String(x);
// console.log(typeof y,y);



//JavaScript date and time

// let d1=new Date();
// let d2=new Date("2025-05-10");
// let d3=new Date(2025,4);
// let d4=new Date(2025,5,6);
// let d5=new Date(2025,3,30,21);
// let d6=new Date(2025,3,30,21,25);
// let d7=new Date(2025,3,30,21,25,20);
// let d8=new Date(1000*60*60*24*365*50);


//console.log(d1.toDateString());
//console.log(d1.toTimeString());
//console.log(d1.toString());
// console.log(d1.getDate());
// console.log(d1.getDay());
// console.log(d1.getMonth());
// console.log(d1.getFullYear());
// console.log(d1.getHours(),d1.getMinutes(),d1.getSeconds());
// console.log(d1.getMilliseconds());
// d3.setDate(25);
// //d3.setDay(0); no such member function
// d3.setMonth(4);
// d3.setFullYear(2025);
// d3.setHours(10);
// d3.setMinutes(30);
// d3.setSeconds(0);

// console.log(d3.getTime());