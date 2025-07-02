// let s1='mysirg';
// let s2="Hello JavaScript";
// let s3=`Welcome to JS`;

//s1[0]='M'; //no effect
//console.log(s1,s2,s3);

// let username="Rahul";
// let age=25;

// let msg=`Hello ${username}, your age is ${age}`;
// console.log(msg);

// console.log(s1.charAt(3));
// console.log(s1.length);

// let s4=s1+" education services";
// console.log(s4);

let s1='mysirg education services';
//console.log(s1.indexOf('r',5));
// console.log(s1.includes('sir'));
// console.log(s1.startsWith('my'));
// console.log(s1.endsWith('tion',16));
//console.log(s1.substr(7,3));
//console.log(s1.substring(7,0));
console.log(s1.slice(7,-5));
let s2=s1.replace('mysirg','MySirG');
console.log(s2);
/*
startswith(searchValue,position)
endswith(searchValues,length);
slice(startIndex,endIndex)
substring(startIndex,endIndex)
substr(startIndex,length);
replace(searchValue,newValue);
replaceAll(searchValue,newValue);
*/