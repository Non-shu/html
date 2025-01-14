//basic1.js
/*
    변수 선언 : 이름, 연락처 주소 선언.
    console 출력.
*/
let myName = "SangYun JUNG";
let myAge = 31;
let myAddress = "동구 율하 아이유쉘 아파트";
let myPhone = "010-1231-3332";
document.write("<h1>Hello World</h1>")

let largenumber = 10000000000000000000000000000000000000000n;
console.log(largenumber);

const bloodtype = "O";
const pi = 3.14; //프로그램 변하지 않는 값으로 선언. 
//bloodtype = "A"; 

myName = "김길동";


console.log("내 이름은" + myName + "입니다.");
console.log("나이는" + myAge + "살 입니다.");
console.log(`주소는 ${myAddress} 입니다.`);
console.log(`반지름 5인 원의 넓이는 ${5 * 5 * pi} 입니다.`);

let myInfo = {
  name: "고길동",
  age:45
};

let scores = [10, 20, 30]; // 배열 
let speciallType = null;
console.log(typeof speciallType); //변수의 자료형 출력.
