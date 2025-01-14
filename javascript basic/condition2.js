// condition2.js
// 입력받은 숫자 =>2의 배수인지, 3의 배수인지 
// 6 => 2 와 3의 배수입니다. 
// 4 => 2의 배수입니다.
// 9 => 3의 배수입니다. 
///firstNumber == NaN
let firstNumber = prompt("숫자를 입력 하세요:");

// "0" === 0 '=== type 감별' 
if(firstNumber == 0 || isNaN(firstNumber)){
  console.log(`정상적인 값을 입력하세요:`);
}else{
if(firstNumber  % 2 == 0 && firstNumber % 3 == 0){
    console.log(`2와 3의 배수입니다.`);
}else if (firstNumber % 2 == 0 ){
  console.log(` 2의 배수입니다.`);
}else if(firstNumber % 3 == 0){
  console.log(` 3의 배수입니다.`);
}
}
