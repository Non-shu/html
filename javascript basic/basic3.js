// basic3.js
/* 
두 숫자를 입력받아서 두 수의 곱을 출력.
첫 번째 값에 5를 더하고, 두 번째 3의 값을 빼서 두 수의 차를 구하시오
*/
//let anyVal = parseInt(prompt("값을 입력 하세요."));
//let anyVal2 = prompt("값을 입력 하세요.");
//anyVal += 5;//Number(any  Val) + 1;
//anyVal2 -= 3;//Number(anyVal2) - 1;
//console.log(anyVal, anyVal2);
//let result = anyVal - anyVal2;
//console.log(`${anyVal}에서 ${anyVal2}의 뺀값은 ${result} `);




let firstValue = Number(prompt("첫 번째 값을 입력 하시오:"));
let secondValue = prompt("두 번째 값을 입력 하시오:");

firstValue += 5;
secondValue -= 3;
let total = firstValue - secondValue;
console.log(`${firstValue}에서 ${secondValue}를 뺀 값은 ${total}`);
