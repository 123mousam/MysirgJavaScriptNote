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

// let i=1;
// while (i<=5)
// {
//     console.log(i);
//     i++;
// }

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while (i<=5);

// let x=25313;
// let sum=0;
// do{
//     sum=sum+x%10;
//     x=Math.trunc(x/10);
// }while(x);
// console.log(sum);

// for(initilization;condition;flow)
// {
//     code
// }

// let sum=0;
// for(let i=1;i<=10;i++){
//     sum+=i;
// }
// console.log(sum);

// for( variable in object){

//     code
// }


// const p1={
//     name:"Santosh",
//     age:25
// };

// for(let key in p1){
//     console.log(key,p1[key]);
// }

// let a=[11,22,33,44];

// for(let key in a){
//     console.log(key,a[key]);
// }

// for(variable of iterable){
//     code
// }

// const cars = ["BMW","Audi","Hyundai","Maruti"];
// for(let car of cars){
//     console.log(car);
// }

/*
Jump Statements (Transfer control statements)
1) break
2) continue
3) return

*/

// const a=[23,45,67,89,22,11,43];
// let i=0;
// while(i<a.length){
//     console.log(i,a[i]);
//     if(a[i]%2==0)
//         break;
//     i++;
// }

// const a=[23,44,67,89,22,11,43];
// let i=0;
// while(i<a.length){
//     if(a[i]%2==0){
//         i++;
//         continue;
//     }
//     console.log(i,a[i]);
//     i++;
// }

// function f1(){
//     return "Hello";
// }

// x=f1();
// console.log(x);