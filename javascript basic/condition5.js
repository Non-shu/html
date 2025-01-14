// condition5.js
// 두 수: 1 ~ 100 까지 임의 값 생성.
// 큰 수에서 작은 수 뺀 후 결과값 출력. 

let Num1 = parseInt(Math.random() * 100) + 1;
let Num2 = parseInt(Math.random() * 100) + 1;
let Num3 = parseInt(Math.random() * 100) + 1;
let result= 0; 
// 두 수중에서 큰 수에서 작은 수 빼기 문제.
console.log(Num1, Num2, Num3)
if(Num1 > Num2){
  if(Num1 > Num3){
    result = Num1;
  }else {
    result = Num3;
  }
} else{
  if (Num2 > Num3) {
    result = Num2;
  } else{
    result = Num3;
  }
}
console.log(`가장 큰 수는 ${result} 입니다.`);


// let result = Num1 - Num2 >= Num3;
//  if(result< 0){
//    result = Num2 - Num1;
//  }else{
//    result = Num3 - Num1;
//  }
//  console.log(`두 수중 큰 수 에서 작은 수 뺀 값은 : ${result}`);

 // console.log(Num1, Num2);
// let result = Num1 - Num2;
// if (result < 0){
//   result = Num2 - Num1;
// }
// console.log(`큰 수에서 작은 수를 뺀 결과 값: ${result}`);