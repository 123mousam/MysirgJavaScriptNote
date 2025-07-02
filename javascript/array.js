// let a=[10,20,30,40];
// console.log(a[0],a[1],a[2],a[3]);
// console.log(a.length);
// a.push(50);
// console.log(a,a.length);
// a.pop();
// console.log(a,a.length);
// let b=[35,'bhopal',true,null,NaN];
// console.log(b);

/* Ways to create an array */
// let a=[1,2,3];
// let b=[];
// b[0]=1;
// b[1]=3;
// b[2]=5;
// console.log(a,b);
// let course=new Array("C","C++","Java","Python");
// console.log(course);
// let c=a; // only reference is copied | Shallow Copy
// console.log(a,c);
// a.push(10);
// console.log(a,c);

// let d=[...a]; //Deep Copy
// console.log(a,d);
// a.push(20);
// console.log(a,d);

/* Accessing elements of array using loops */
//let a=[11,45,23,10];
// let i=0;
// while(i<a.length){
//     console.log(a[i]);
//     i++;
// }

// let i=0;
// do{
//     console.log(a[i]);
//     i++;
// }while(i<a.length);

// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }

// for(let k in a){
//     console.log(k,a[k]);
// }

// for(let v of a){
//     console.log(v);
// }

// a.forEach((value,index,a)=>{
//     console.log(index,value,a);
// });

/* Empty Slots */

// let a=[10,20,30,,50,60];
// console.log(a[3]);

// delete a[1];
// console.log(a);

/* Array Methods */

//let a=[10,4,20,3];
// console.log(a.push(12,23));
// console.log(a);
// console.log(a.pop());
//a.unshift(5);
// a.shift();

//a.splice(2,1); //remove 1 element starting from index 2
//a.splice(3,0,35,45,55); // Add 35,45 and 55 from index 3 and delete none

//a.splice(1,2,57,68,91); //Removing 2 values from index 1 and add 57,68,91
//console.log(a);

/* map,filter and reduce */

// const a=[5,3,7,2];
// const b=a.map((n)=>n*n);
// console.log(b);

// const a=[33,41,25,6,18,9,17,22];
// const b=a.filter((n)=>n%2==1);
// console.log(b);

// const expenses=[300,150,280,510];
// const total=expenses.reduce((t,value)=> t+value, 0);
// console.log(total);

let a=[10,20,30,40,30,11,22,33];
//console.log(a.indexOf(30));
//console.log(a.lastIndexOf(30));
//console.log(a.includes(20));

// let b=a.slice(1,4);
// console.log(b);
// b[0]=22;
// console.log(a);
//a.sort();
//a.reverse();
//let b=a.find((n)=>n>200);
console.log(a,b);