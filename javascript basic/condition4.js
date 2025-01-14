// condition4.js

const obj = {
  name:"고길동", // 속성 : (객체)값 
  age: 20,       // 속성 : (객체)값 
  showname: function(){   // 메소드, 
    console.log(obj.name);
 }
}

obj.showname();

// 1 ~ 10 사이의 임의 수 출력.
console.log(); //(parseInt(Math.ramdom() * 10)) + 1; 
let num1 = parseInt(Math.random() * 10) + 1;
let num2 = parseInt(Math.random() * 10) + 1;

let sumEven = 10; // 짝수의 값은 sumEven에 합하기.
let sumOdd = 20;  // 홀수의 값은 sumOdd에 합하기.

// sumEven, sumOdd 출력.

// truthy (10 , "aaa", true) vs falsy (0, "", null, undefined)

if(num1 % 2){
  sumOdd += num1;
 }else{
  sumEven += num1;
}
console.log(num1, num2);

if(num2 % 2){
  sumOdd += num2;
}else{
  sumEven += num2;
}

//Math.random() =  0 <= x < 1 값의 출력. ( 0이상 1미만 )