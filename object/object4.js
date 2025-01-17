//object4.js
// 1일의 요일?, 마지막날?

let month = 2;
let date = 0;
let year = 2024;

let today = new Date();
today.setFullYear(year);
today.setMonth(month);
today.setDate(date);

//today = new Date(2024, 5, 3, 15, 30, 22);

//console.log(today, today.getDate());
let a = 'hello';
let b = 'hello';
console.log(a == b);

console.clear();

today = new Date();
let now = new Date();
console.log(today.getTime() == now.getTime());



console.log(new Date(2000));
console.log(today.valueOf()==now.valueOf());
console.log(today.valueOf());

// 2022년 05월 17일.
// today.setFullYear(2022);
// today.setMonth(4);
// console.log(today)