//object1.js

let obj = {}; // 객체 (인스턴스)
obj = new Object();

obj.title = "이그시 자바입니드";
obj['price'] = 30000;

console.log(obj);

let today = new Date();
console.log(today.getFullYear() + '년도');

let numAry = [10, 20, 30]; //new Array();
numAry.push(40); // push -> 배열의 마지막에 추가
numAry.unshift(5); //unshift -> 배열의 처음에 추가
numAry.splice(1,0,8); //splice -> 특정 위치에 추가.
//(세번째 ''일 시 )삭제,(두번째 조정)수정도 가능.  
 
console.log(numAry);