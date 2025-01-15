//whileloop2.js
// stop 을 입력하면 반복문이 종료되게끔
//입력한 값 중 제일 큰 값을 출력하시오.
// max, stop 
let inputValue = prompt("점수를 입력하세요:");
let run = true;
let max = 0;

// while(run) {
//   let inputValue = prompt("점수를 입력하세요:");
//   console.log(inputValue); 
//   if(inputValue == 'stop'){
//     run = false; 
// }else{
// if(max < inputValue){
//  max = inputValue;
// }
// }
// }

// console.log(inputValue);
// let stopp = true;
// for(let i = 0; i<100; i++){
//   inputValue[i] = parseInt(inputValue);
//   console.log(inputValue[i]);
//   sum += inputValue[i];
//   if(max<inputValue[i]){
//     max=inputValue[i];
//   }
// }
// console.log(`${max}`);

 while(run) {
   let inputValue = prompt("점수를 입력하세요:");
   // 입력값이 숫자인지 아닌지 구분.
   // 숫자가 아니면 => stop인지 아닌지 ㄱ분
   /// 숫자이면 => 최고점수를 구하기 
   let temp = parseInt(inputValue); 
   if(isNaN(temp)){
   if(inputValue == 'stop'){
     run = false; 
 } else{
  alert("정상적인 값을 입력하세요");
 }
 }  else { 
 if(max < parseInt(inputValue)){
  max = parseInt(inputValue);
}
}
}
 
// end of while.
console.log(`최고점수: ${max}`);